/**
 * [L1 Portal] Sentis Flowchart — 泳道流程图 SVG 渲染器（零依赖、纯静态）
 * 数据源：assets/js/flows-data.js (window.SENTIS_FLOWS)
 * 布局：泳道为纵列（角色/外部方），业务步骤自上而下；决策菱形、起止胶囊、实线/虚线连线。
 */
(function (global) {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var CFG = {
    laneW: 220, nodeW: 168, headH: 38, padX: 10, padTop: 10, gap: 34,
    font: 12, lineH: 16, padY: 11, minH: 44, decisionH: 60
  };
  var KIND = {
    r01: { head: '#b91c1c', fill: '#fef2f2', stroke: '#fca5a5' },
    r02: { head: '#b45309', fill: '#fffbeb', stroke: '#fcd34d' },
    r03: { head: '#1d4ed8', fill: '#eff6ff', stroke: '#93c5fd' },
    r04: { head: '#7e22ce', fill: '#faf5ff', stroke: '#d8b4fe' },
    r05: { head: '#0f766e', fill: '#f0fdfa', stroke: '#5eead4' },
    r06: { head: '#047857', fill: '#ecfdf5', stroke: '#6ee7b7' },
    r07: { head: '#334155', fill: '#f1f5f9', stroke: '#cbd5e1' },
    ext: { head: '#64748b', fill: '#f8fafc', stroke: '#cbd5e1' },
    ovs: { head: '#c2410c', fill: '#fff7ed', stroke: '#fdba74' }
  };

  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(e);
    return e;
  }

  function isWide(ch) {
    var c = ch.charCodeAt(0);
    return c > 0x2E80 || (c >= 0xFF00 && c <= 0xFFEF) || c === 0x2192 || c === 0x25C7;
  }
  function charW(ch) { return isWide(ch) ? CFG.font : CFG.font * 0.62; }
  function textWidth(s) {
    var w = 0;
    for (var i = 0; i < s.length; i++) w += charW(s[i]);
    return w;
  }
  function tokens(seg) {
    var out = [], cur = '';
    for (var i = 0; i < seg.length; i++) {
      var ch = seg[i];
      if (isWide(ch) || ch === ' ' || ch === '\u00B7') {
        if (cur) { out.push(cur); cur = ''; }
        out.push(ch);
      } else {
        cur += ch;
      }
    }
    if (cur) out.push(cur);
    return out;
  }
  /** 每个 \n 段独立折行；ASCII 单词（如 Checklist）不拆开 */
  function wrap(text, maxW) {
    var out = [];
    String(text).split('\n').forEach(function (seg) {
      var line = '', w = 0;
      tokens(seg).forEach(function (tk) {
        var tw = textWidth(tk);
        var closing = '）)」』，。、；：？！>'.indexOf(tk) >= 0;
        if (tk === ' ' && !line) return;
        if (w + tw > maxW && line && !closing) {
          out.push(line.replace(/\s+$/, ''));
          line = ''; w = 0;
          if (tk === ' ') return;
        }
        line += tk; w += tw;
      });
      out.push(line.replace(/\s+$/, ''));
    });
    return out;
  }

  function render(spec) {
    var lanes = spec.lanes;
    var laneIndex = {};
    lanes.forEach(function (l, i) { laneIndex[l.id] = i; });

    var nodes = {};
    var maxRow = 0;
    spec.nodes.forEach(function (n) {
      var innerW = CFG.nodeW - (n.type === 'decision' ? 64 : n.type === 'start' || n.type === 'end' ? 30 : 20);
      var lines = wrap(n.text, innerW);
      var h = Math.max(n.type === 'decision' ? CFG.decisionH : CFG.minH, lines.length * CFG.lineH + CFG.padY * 2);
      if (n.type === 'decision') h = Math.max(h, lines.length * CFG.lineH + 36);
      nodes[n.id] = { spec: n, lines: lines, h: h, lane: laneIndex[n.lane], row: n.row };
      if (n.row > maxRow) maxRow = n.row;
    });

    var rowH = [];
    for (var r = 0; r <= maxRow; r++) rowH[r] = 0;
    Object.keys(nodes).forEach(function (k) { var n = nodes[k]; if (n.h > rowH[n.row]) rowH[n.row] = n.h; });
    var rowTop = [], y = CFG.headH + CFG.padTop + CFG.gap / 2;
    for (r = 0; r <= maxRow; r++) { rowTop[r] = y; y += rowH[r] + CFG.gap; }
    var totalH = y - CFG.gap / 2 + 10;
    var totalW = lanes.length * CFG.laneW + CFG.padX * 2;

    var svg = el('svg', { xmlns: NS, viewBox: '0 0 ' + totalW + ' ' + totalH, width: totalW, height: totalH, role: 'img', 'aria-label': spec.title || '業務フロー図', class: 'flow-svg' });
    var defs = el('defs', null, svg);
    ['solid', 'dash'].forEach(function (t) {
      var m = el('marker', { id: 'arr-' + t + '-' + (spec._uid || 0), viewBox: '0 0 10 10', refX: '9', refY: '5', markerWidth: '7', markerHeight: '7', orient: 'auto-start-reverse' }, defs);
      el('path', { d: 'M0,0 L10,5 L0,10 z', fill: t === 'solid' ? '#334155' : '#94a3b8' }, m);
    });

    // 泳道背景与表头
    lanes.forEach(function (l, i) {
      var k = KIND[l.kind] || KIND.ext;
      var x = CFG.padX + i * CFG.laneW;
      el('rect', { x: x, y: CFG.headH, width: CFG.laneW, height: totalH - CFG.headH, fill: i % 2 ? '#f8fafc' : '#ffffff', stroke: '#e2e8f0' }, svg);
      el('rect', { x: x, y: 0, width: CFG.laneW, height: CFG.headH, fill: k.head }, svg);
      var t = el('text', { x: x + CFG.laneW / 2, y: CFG.headH / 2 + 4.5, 'text-anchor': 'middle', fill: '#ffffff', 'font-size': 13, 'font-weight': 700 }, svg);
      t.textContent = l.label;
    });

    function laneCx(i) { return CFG.padX + i * CFG.laneW + CFG.laneW / 2; }
    Object.keys(nodes).forEach(function (k) {
      var n = nodes[k];
      n.cx = laneCx(n.lane);
      n.top = rowTop[n.row] + (rowH[n.row] - n.h) / 2;
      n.bottom = n.top + n.h;
      n.cy = rowTop[n.row] + rowH[n.row] / 2;
      n.left = n.cx - CFG.nodeW / 2;
      n.right = n.cx + CFG.nodeW / 2;
    });

    // 连线（先画，节点覆盖其上）
    var edgeLayer = el('g', { fill: 'none' }, svg);
    var labelLayer = el('g', null, svg);
    spec.edges.forEach(function (e) {
      var A = nodes[e.from], B = nodes[e.to];
      if (!A || !B) return;
      var dashed = !!e.dashed;
      var d, lx, ly;
      if (A.row === B.row) {
        var ltr = A.lane < B.lane;
        var x1 = ltr ? A.right : A.left, x2 = ltr ? B.left : B.right;
        d = 'M' + x1 + ' ' + A.cy + ' H' + x2;
        lx = (x1 + x2) / 2; ly = A.cy - 6;
      } else if (A.lane === B.lane && B.row > A.row) {
        d = 'M' + A.cx + ' ' + A.bottom + ' V' + B.top;
        lx = A.cx + 4; ly = (A.bottom + B.top) / 2;
      } else if (B.row > A.row) {
        var gapY = e.turn === 'B' ? rowTop[B.row] - CFG.gap / 2 : rowTop[A.row] + rowH[A.row] + CFG.gap / 2;
        d = 'M' + A.cx + ' ' + A.bottom + ' V' + gapY + ' H' + B.cx + ' V' + B.top;
        lx = (A.cx + B.cx) / 2; ly = gapY - 5;
      } else {
        var bx = Math.max(A.right, B.right) + 10;
        d = 'M' + A.right + ' ' + A.cy + ' H' + bx + ' V' + B.cy + ' H' + B.right;
        lx = bx - 4; ly = (A.cy + B.cy) / 2;
      }
      el('path', {
        d: d, stroke: dashed ? '#94a3b8' : '#334155', 'stroke-width': 1.5,
        'stroke-dasharray': dashed ? '5 4' : 'none',
        'marker-end': 'url(#arr-' + (dashed ? 'dash' : 'solid') + '-' + (spec._uid || 0) + ')'
      }, edgeLayer);
      if (e.label) {
        var w = textWidth(e.label) + 10;
        el('rect', { x: lx - w / 2, y: ly - 11, width: w, height: 16, rx: 3, fill: '#ffffff', 'fill-opacity': 0.92 }, labelLayer);
        var lt = el('text', { x: lx, y: ly + 1, 'text-anchor': 'middle', 'font-size': 12, fill: '#475569', 'font-weight': 600 }, labelLayer);
        lt.textContent = e.label;
      }
    });

    // 节点
    var laneKind = function (n) { return KIND[lanes[n.lane].kind] || KIND.ext; };
    Object.keys(nodes).forEach(function (k) {
      var n = nodes[k], kd = laneKind(n), type = n.spec.type || 'process';
      var g = el('g', { class: 'flow-node flow-' + type }, svg);
      if (type === 'decision') {
        el('polygon', { points: [n.cx + ',' + n.top, n.right + ',' + n.cy, n.cx + ',' + n.bottom, n.left + ',' + n.cy].join(' '), fill: '#fff7ed', stroke: '#f59e0b', 'stroke-width': 1.6 }, g);
      } else if (type === 'start' || type === 'end') {
        el('rect', { x: n.left, y: n.top, width: CFG.nodeW, height: n.h, rx: n.h / 2, fill: type === 'start' ? '#dcfce7' : '#e0e7ff', stroke: type === 'start' ? '#22c55e' : '#6366f1', 'stroke-width': 1.6 }, g);
      } else {
        el('rect', { x: n.left, y: n.top, width: CFG.nodeW, height: n.h, rx: 8, fill: kd.fill, stroke: kd.stroke, 'stroke-width': 1.4 }, g);
      }
      var t = el('text', { x: n.cx, 'text-anchor': 'middle', 'font-size': CFG.font, fill: '#0f172a' }, g);
      var startY = n.cy - (n.lines.length * CFG.lineH) / 2 + CFG.lineH - 4;
      n.lines.forEach(function (ln, i) {
        var ts = el('tspan', { x: n.cx, y: startY + i * CFG.lineH }, t);
        ts.textContent = ln;
      });
    });
    return svg;
  }

  var uid = 0;
  function hydrate(root) {
    var data = global.SENTIS_FLOWS;
    if (!data || !root) return;
    root.querySelectorAll('.flowchart[data-flow]').forEach(function (host) {
      var spec = data.flows[host.getAttribute('data-flow')];
      if (!spec || host.getAttribute('data-ready')) return;
      spec._uid = ++uid;
      var wrapEl = document.createElement('div');
      wrapEl.className = 'flow-wrap';
      wrapEl.setAttribute('tabindex', '0');
      wrapEl.appendChild(render(spec));
      host.innerHTML = '';
      var hint = document.createElement('div');
      hint.className = 'flow-hint';
      hint.textContent = '图例：绿=起点 · 紫=终点 · ◇=判断 · 虚线=支撑/旁路　（可左右滑动查看全图）';
      host.appendChild(hint);
      host.appendChild(wrapEl);
      host.setAttribute('data-ready', '1');
    });
  }

  global.SentisFlowchart = { render: render, hydrate: hydrate };
})(window);
