/**
 * [L1 Portal] Sentis Slide Deck
 * 将 documentStore 的长文 HTML 按 h2 / h3 切分为幻灯片，固定画幅内翻页（Y 轴零延展）。
 * 操作：← → Home End、底部上一页/下一页/跳页下拉、触摸左右滑动。
 */
(function (global) {
  'use strict';

  var NOTE = '※掲載データは個人情報保護法（APPI）に配慮した検証用架空シミュレーション（脱敏）データです。';
  var LONG_SECTION_CHARS = 1800;

  function textOf(node) {
    return (node.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function make(tag, cls, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function clip(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  /** 将文档 HTML 拆成 [{title, kind, nodes}] */
  function splitSlides(html) {
    var host = document.createElement('div');
    host.innerHTML = html;
    var root = host.querySelector('.doc-content') || host;
    var nodes = Array.prototype.filter.call(root.childNodes, function (n) {
      return !(n.nodeType === 3 && !n.textContent.trim()) && n.nodeType !== 8;
    });

    var sections = [];
    var cur = { title: '表紙', kind: 'title', nodes: [] };
    nodes.forEach(function (n) {
      if (n.nodeType === 1 && n.tagName === 'H2') {
        sections.push(cur);
        cur = { title: textOf(n), kind: 'section', nodes: [n] };
      } else {
        cur.nodes.push(n);
      }
    });
    sections.push(cur);

    var slides = [];
    sections.forEach(function (sec) {
      if (sec.nodes.length === 0) return;
      var h3Count = sec.nodes.filter(function (n) { return n.nodeType === 1 && n.tagName === 'H3'; }).length;
      var total = sec.nodes.reduce(function (a, n) { return a + (n.textContent || '').length; }, 0);
      var hasFlow = sec.nodes.some(function (n) { return n.nodeType === 1 && (n.classList.contains('flowchart') || n.querySelector('.flowchart')); });
      if (sec.kind === 'section' && h3Count >= 2 && (total > LONG_SECTION_CHARS || hasFlow)) {
        var parent = sec.title;
        var group = { title: parent, kind: 'section', nodes: [] };
        var groups = [group];
        sec.nodes.forEach(function (n) {
          if (n.nodeType === 1 && n.tagName === 'H3') {
            group = { title: textOf(n), kind: 'sub', eyebrow: parent, nodes: [n] };
            groups.push(group);
          } else {
            group.nodes.push(n);
          }
        });
        groups.forEach(function (g, gi) {
          // 仅有 h2 标题、无正文的章节首页会形成空白幻灯片：并入下一页（h2 已作为 eyebrow 显示）
          var onlyHeading = gi === 0 && groups.length > 1 && g.nodes.every(function (n) {
            return n.nodeType === 1 && n.tagName === 'H2';
          });
          if (!onlyHeading) slides.push(g);
        });
      } else {
        slides.push(sec);
      }
    });

    if (slides.length && slides[0].kind === 'title') {
      var note = document.createElement('p');
      note.className = 'sd-note';
      note.textContent = NOTE;
      slides[0].nodes.push(note);
    }
    return slides;
  }

  function mount(container, html, opts) {
    opts = opts || {};
    var slides = splitSlides(html);
    var count = slides.length;
    container.innerHTML = '';

    var deck = make('div', 'sd-deck', { tabindex: '0', role: 'region', 'aria-roledescription': 'スライド', 'aria-label': 'ドキュメントスライド' });
    var progress = make('div', 'sd-progress', { 'aria-hidden': 'true' });
    var bar = make('i');
    progress.appendChild(bar);
    var stage = make('div', 'sd-stage');
    var slideEls = [];

    slides.forEach(function (s, i) {
      var hasFlowNode = s.nodes.some(function (n) { return n.nodeType === 1 && (n.classList.contains('flowchart') || n.querySelector('.flowchart')); });
      var sl = make('section', 'sd-slide' + (s.kind === 'title' ? ' is-title' : '') + (hasFlowNode ? ' has-flow' : ''), { 'aria-label': pad2(i + 1) + ' / ' + pad2(count) + ' ' + s.title });
      var inner = make('div', 'sd-slide-inner doc-content');
      var col = make('div', 'sd-col');
      if (s.eyebrow) {
        var eb = make('div', 'sd-eyebrow');
        eb.textContent = s.eyebrow;
        col.appendChild(eb);
      }
      s.nodes.forEach(function (n) { col.appendChild(n); });
      inner.appendChild(col);
      sl.appendChild(inner);
      stage.appendChild(sl);
      slideEls.push(sl);
    });

    var controls = make('div', 'sd-bar');
    var btnPrev = make('button', 'sd-btn', { type: 'button', 'aria-label': '前のスライド', title: '前のスライド (←)' });
    btnPrev.innerHTML = '<span class="sd-symbol">‹</span><span class="sd-text">前へ</span>';
    var btnNext = make('button', 'sd-btn', { type: 'button', 'aria-label': '次のスライド', title: '次のスライド (→)' });
    btnNext.innerHTML = '<span class="sd-symbol">›</span><span class="sd-text">次へ</span>';
    var jump = make('select', 'sd-jump', { 'aria-label': 'スライドへ移動', name: 'slide-jump' });
    slides.forEach(function (s, i) {
      var o = document.createElement('option');
      o.value = String(i);
      o.textContent = pad2(i + 1) + '  ' + clip(s.eyebrow ? s.eyebrow.replace(/^\s*/, '') + ' › ' + s.title : s.title, 48);
      jump.appendChild(o);
    });
    var counter = make('span', 'sd-counter', { 'aria-live': 'polite' });
    var dots = make('div', 'sd-dots', { 'aria-hidden': 'true' });
    var dotEls = slides.map(function () { var d = document.createElement('i'); dots.appendChild(d); return d; });

    controls.appendChild(btnPrev);
    controls.appendChild(jump);
    controls.appendChild(dots);
    controls.appendChild(counter);
    controls.appendChild(btnNext);

    deck.appendChild(progress);
    deck.appendChild(stage);
    deck.appendChild(controls);
    container.appendChild(deck);
    if (global.SentisFlowchart) global.SentisFlowchart.hydrate(deck);

    var index = -1;

    function go(i, fromUser) {
      i = Math.max(0, Math.min(count - 1, i));
      if (i === index) return;
      index = i;
      slideEls.forEach(function (el, k) {
        el.classList.toggle('is-active', k === i);
        el.classList.toggle('is-before', k < i);
        el.classList.toggle('is-after', k > i);
        if (k === i) {
          el.removeAttribute('aria-hidden');
          Array.prototype.forEach.call(el.querySelectorAll('img[data-src]'), function (img) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
          });
        } else {
          el.setAttribute('aria-hidden', 'true');
        }
      });
      var inner = slideEls[i].querySelector('.sd-slide-inner');
      if (inner) inner.scrollTop = 0;
      deck.style.setProperty('--sd-p', String((i + 1) / count));
      bar.parentNode.style.setProperty('--sd-p', String((i + 1) / count));
      counter.textContent = pad2(i + 1) + ' / ' + pad2(count);
      jump.value = String(i);
      btnPrev.disabled = i === 0;
      btnNext.disabled = i === count - 1;
      dotEls.forEach(function (d, k) { d.classList.toggle('is-on', k === i); });
      if (opts.useHash && fromUser !== false) {
        try { history.replaceState(null, '', '#' + (i + 1)); } catch (e) { /* file:// 容错 */ }
      }
    }

    btnPrev.addEventListener('click', function () { go(index - 1); });
    btnNext.addEventListener('click', function () { go(index + 1); });
    jump.addEventListener('change', function () { go(parseInt(jump.value, 10) || 0); deck.focus(); });

    function onKey(e) {
      if (!deck.isConnected || deck.offsetParent === null) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
      if (e.key === 'ArrowRight') { go(index + 1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { go(index - 1); e.preventDefault(); }
      else if (e.key === 'Home') { go(0); e.preventDefault(); }
      else if (e.key === 'End') { go(count - 1); e.preventDefault(); }
    }
    document.addEventListener('keydown', onKey);

    var sx = 0, sy = 0, tracking = false;
    stage.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1 || e.target.closest('table, pre, .v2-master-table-wrap, .flow-wrap')) { tracking = false; return; }
      tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      var t = e.changedTouches[0];
      var dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 56 && Math.abs(dy) < 60) { go(dx < 0 ? index + 1 : index - 1); }
    }, { passive: true });

    var start = 0;
    if (opts.useHash) {
      var m = /^#(\d+)$/.exec(location.hash || '');
      if (m) start = parseInt(m[1], 10) - 1;
    }
    go(start, false);

    return {
      go: function (i) { go(i); },
      count: count,
      destroy: function () { document.removeEventListener('keydown', onKey); container.innerHTML = ''; container.classList.remove('is-deck'); }
    };
  }

  global.SentisSlideDeck = { mount: mount, splitSlides: splitSlides };
})(window);
