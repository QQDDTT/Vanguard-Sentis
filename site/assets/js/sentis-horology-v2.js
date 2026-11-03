/**
 * SENTIS Realty Core v2.0 - Multi-Theme & Multi-Topology Interactive Controller
 * - 3+1 主体色彩方案: 色彩A (navy 皇室深海藍金) / 色彩B (washi 越前白金和紙) / 色彩C (walnut 京都焙茶胡桃) / forest (深森緑)
 * - 4 大空间拓扑视图: 拓扑D (左70%総台帳+右30%多段抽斗) / 拓扑C (上下分屏+車両・重説時間表) / 拓扑B (三欄協同作業台) / paper (A4公文帳票)
 */
(function () {
  const THEME_STORAGE_KEY = 'SENTIS_CRM_THEME';
  const ROLE_STORAGE_KEY = 'SENTIS_CRM_ROLE';
  const TOPO_STORAGE_KEY = 'SENTIS_CRM_TOPO';
  const VALID_THEMES = ['navy', 'washi', 'walnut', 'forest'];

  const ROLE_PROFILES = {
    R01: { stamp: '阿部', name: '阿部 翔平', rank: '代表取締役', role: '全社経営統括・最終印章決済 (R01)' },
    R02: { stamp: '店長', name: '佐藤 統括', rank: '店長・部長', role: '営業査定・銀行融資部長承認 (R02)' },
    R03: { stamp: '営業', name: '小林 総合', rank: '総合営業', role: '売買・賃貸・REINS・海外一貫 (R03)' },
    R04: { stamp: '能勢', name: '能勢 秀樹', rank: '専任宅建士', role: '調査・重説・契約書作成専管 (R04)' },
    R05: { stamp: '賃貸', name: '高橋 管理', rank: '賃貸管理', role: '家賃入金・更新・修繕原状回復 (R05)' },
    R06: { stamp: '経理', name: '田中 経理', rank: '経理・税務', role: '決済入金・領収書・税理士連携 (R06)' },
    R07: { stamp: '総務', name: '山本 総務', rank: '人事・総務', role: '採用労務・案内車両・システム権限 (R07)' }
  };

  function buildV2WorkbenchHTML() {
    return `
      <!-- v2.0 頂部精工控制中枢 (7大角色 + 4大拓扑 + 3+1主体色彩) -->
      <div class="v2-horology-command-bar" id="v2CommandBar">
        <div class="v2-bar-section">
          <span class="v2-bar-label">執務役職 (7ロール):</span>
          <select class="v2-role-select" id="v2RoleSelect" aria-label="執務ロール切替">
            <option value="R01">R01 代表取締役 (全権統括・印章)</option>
            <option value="R02">R02 店長・営業責任者 (査定・融資部長確認)</option>
            <option value="R03">R03 総合営業担当 (売買/賃貸/REINS/海外一貫)</option>
            <option value="R04">R04 宅地建物取引士 (調査/重説/13契約書作成)</option>
            <option value="R05">R05 賃貸管理・修繕担当 (10管理/11修繕)</option>
            <option value="R06">R06 経理・税務担当 (12決済入金/14税理士連携)</option>
            <option value="R07">R07 人事・総務・システム管理 (15人事/16車両・権限)</option>
          </select>
        </div>

        <div class="v2-bar-section">
          <span class="v2-bar-label">画面レイアウト (4大拓扑):</span>
          <div class="v2-pill-group" id="v2TopoGroup">
            <button type="button" class="v2-switch-btn" data-topo="D">拓扑D: 総台帳・多段抽斗</button>
            <button type="button" class="v2-switch-btn" data-topo="C">拓扑C: 案内車両予約表・重説軸</button>
            <button type="button" class="v2-switch-btn" data-topo="B">拓扑B: 営業・宅建三欄作業台</button>
            <button type="button" class="v2-switch-btn" data-topo="paper">A4公文帳票ビュー</button>
            <a href="./crm-home.html" class="v2-switch-btn" style="text-decoration:none;">拓扑A: 羅針盤中枢</a>
          </div>
        </div>

        <div class="v2-bar-section">
          <span class="v2-bar-label">主体色彩 (ABC保持):</span>
          <div class="v2-pill-group" id="v2ThemeGroup">
            <button type="button" class="v2-switch-btn" data-theme-choice="navy">色彩A: 深海藍金</button>
            <button type="button" class="v2-switch-btn" data-theme-choice="washi">色彩B: 越前和紙</button>
            <button type="button" class="v2-switch-btn" data-theme-choice="walnut">色彩C: 京都胡桃</button>
            <button type="button" class="v2-switch-btn" data-theme-choice="forest">深森緑</button>
          </div>
        </div>
      </div>

      <!-- ====================================================================
           【拓扑 D】左 70% 超宽全案总台账 + 右 30% 多标签精密抽屉 (Wide Master Register + Folio Drawers)
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-D">
        <div class="v2-topo-d-grid">
          <!-- 左側 70%：売買・賃貸・REINS・海外・銀行融資双軌確認 統合主台帳 -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <div>
                <div class="v2-frame-title">SENTIS 総合不動産取引・賃貸・海外案件 統合主台帳 (Topology D · 70% Wide Register)</div>
                <div style="font-size:11px; color:var(--v2-text-sub); margin-top:2px;">
                  ※ 営業担当が売買・賃貸・REINS図面・海外案件・外部士業手配を一貫管理し、自主確認チェック＆銀行融資双軌確認をリアルタイム反映
                </div>
              </div>
              <span class="v2-frame-badge">288項目 v2.0 準拠</span>
            </div>

            <div class="v2-washi-sheet">
              <div class="v2-master-table-wrap">
                <table class="v2-master-table">
                  <thead>
                    <tr>
                      <th>案件番号</th>
                      <th>区分</th>
                      <th>物件所在地・名称</th>
                      <th>取引価格 / 賃料</th>
                      <th>REINS・マイソク</th>
                      <th>09 銀行融資 (担当/部長双軌)</th>
                      <th>08/13 重説・契約書</th>
                      <th>担当・公印</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ST-26-101</strong></td>
                      <td><span class="v2-tag-pill v2-tag-sale">売買仲介</span></td>
                      <td>千代田区神田錦町 1棟ビル<br><span style="font-size:10.5px; color:#666;">買主: 鈴木ホールディングス様</span></td>
                      <td><strong>¥165,000,000</strong></td>
                      <td>専任媒介 / REINS済<br><span style="color:#1e6b45; font-weight:700;">✓ 担当図面確認済</span></td>
                      <td>SMBC 1.4億円<br><span style="color:#1e6b45; font-weight:700;">担当確認済 ＋ 部長承認済</span></td>
                      <td>宅建士作成完 (能勢)<br>11/06 14:00 対面重説</td>
                      <td><span class="v2-mini-hanko">能勢<br>検印</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-102</strong></td>
                      <td><span class="v2-tag-pill v2-tag-lease">賃貸仲介</span></td>
                      <td>港区六本木3丁目 プレミアムレジデンス<br><span style="font-size:10.5px; color:#666;">借主: 渡辺 健太 様 (法人契約)</span></td>
                      <td><strong>¥480,000 / 月</strong></td>
                      <td>ポータル出稿中<br><span style="color:#1e6b45; font-weight:700;">✓ 初期費用自主点検済</span></td>
                      <td>保証会社審査承認<br><span style="color:#1e6b45; font-weight:700;">担当自主確認済</span></td>
                      <td>宅建士 賃貸重説作成済<br>社用車1号 13:00 案内</td>
                      <td><span class="v2-mini-hanko">営業<br>確認</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-103</strong></td>
                      <td><span class="v2-tag-pill v2-tag-overseas">海外投資</span></td>
                      <td>中央区銀座6丁目 商業フロア区分<br><span style="font-size:10.5px; color:#666;">買主: 香港 陳様 (非居住者送金)</span></td>
                      <td><strong>¥285,000,000</strong></td>
                      <td>英語/中国語資料済<br><span style="color:#1e6b45; font-weight:700;">✓ 担当翻訳・法令点検</span></td>
                      <td>外為法事前届出・送金<br><span style="color:#b45309; font-weight:700;">担当確認済 / 部長決裁待</span></td>
                      <td>IT重説 (Zoom) 予約済<br>司法書士・税理士連携済</td>
                      <td><span class="v2-mini-hanko">阿部<br>決裁</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-104</strong></td>
                      <td><span class="v2-tag-pill v2-tag-sale">売買仲介</span></td>
                      <td>板橋区中丸町 中古一戸建<br><span style="font-size:10.5px; color:#666;">買主: 鈴木 隆一 様</span></td>
                      <td><strong>¥52,000,000</strong></td>
                      <td>一般媒介 / 図面済<br><span style="color:#1e6b45; font-weight:700;">✓ 諸費用自主確認済</span></td>
                      <td>みずほ銀行 本審査中<br><span style="color:#1e6b45; font-weight:700;">担当確認済 ＋ 部長承認済</span></td>
                      <td>35条・37条書面 作成完<br>11/10 残金決済予定</td>
                      <td><span class="v2-mini-hanko">能勢<br>職印</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-105</strong></td>
                      <td><span class="v2-tag-pill v2-tag-lease">賃貸管理</span></td>
                      <td>練馬区豊玉北 1棟収益マンション<br><span style="font-size:10.5px; color:#666;">オーナー: 佐藤資産管理様 (全18戸)</span></td>
                      <td><strong>¥1,920,000 / 月</strong></td>
                      <td>10 賃貸管理・送金<br><span style="color:#1e6b45; font-weight:700;">✓ 家賃消込・302号修繕</span></td>
                      <td>オーナー送金明細作成<br><span style="color:#1e6b45; font-weight:700;">賃貸管理＋経理確認済</span></td>
                      <td>更新契約書 2件発送済<br>原状回復見積 承認済</td>
                      <td><span class="v2-mini-hanko">管理<br>之印</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 右側 30%：多段精密抽斗 (Tabbed Horological Folio Drawers) -->
          <div class="v2-horology-frame v2-folio-drawer-box">
            <div class="v2-frame-header">
              <span class="v2-frame-title">精密業務抽斗 (30% Folio Drawers)</span>
              <span class="v2-frame-badge">4段切替</span>
            </div>

            <div class="v2-folio-tabs">
              <button type="button" class="v2-folio-tab-btn active" data-folio="folio-1">壱: 自主確認チェック</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-2">弐: 案内車両予約表</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-3">参: 宅建重説スタジオ</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-4">肆: 定期挨拶・経理</button>
            </div>

            <!-- 抽斗 壱：担当自主確認チェックリスト (REQ-SP-01) -->
            <div class="v2-folio-pane active" id="folio-1">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-01】会社標準 担当自主確認チェックリスト
              </div>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>初期費用・諸費用概算書 (02-5)</strong>：仲介手数料・登記費用・火災保険・保証会社料率の算定誤りなし（担当自主確認済）</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>契約必要書類チェック (06-6)</strong>：本人確認書類・印鑑証明書・収入証明・申込書記入漏れなし（担当自主確認済）</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>REINS・マイソク図面表示点検 (05-2)</strong>：面積・築年月・接道・取引態様の広告表示規約適合（担当自主確認済）</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox">
                <span><strong>銀行融資条件・特約期日二重点検 (09-2)</strong>：担当営業確認完了後、部長承認へ回付する</span>
              </label>
            </div>

            <!-- 抽斗 弐：案内車両予約時間表 (REQ-SP-02) -->
            <div class="v2-folio-pane" id="folio-2">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-02】本日案内車両 予約ステータス (全員予約制)
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🚗 社用車 1号 (Alphard Executive · 品川300 あ 18-01)</strong>
                <span style="color:#1e6b45; font-weight:700;">10:00-12:30 予約済：小林 (神田錦町ビル現地案内)</span>
                <span style="color:#1d4ed8; font-weight:700;">14:00-16:30 予約済：佐藤 (六本木レジデンス内覧)</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🚙 社用車 2号 (Lexus LS500h · 品川300 さ 24-08)</strong>
                <span style="color:#1e6b45; font-weight:700;">13:00-15:30 予約済：小林 (板橋区戸建 現地立会)</span>
                <span style="color:#666;">16:00-19:00 空車（クリックで即時予約可能）</span>
              </div>
              <button type="button" class="v2-switch-btn active" onclick="window.switchSentisTopology('C')" style="width:100%; margin-top:4px;">
                ➔ 拓扑C（全幅時間軸 09:00-20:00 予約表）を開く
              </button>
            </div>

            <!-- 抽斗 参：宅建士 重説・契約書作成スタジオ (REQ-SP-03 & 04) -->
            <div class="v2-folio-pane" id="folio-3">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-03/04】宅建士 重説・13契約書作成 ＆ 直接日程確認
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>📜 35条 重要事項説明書・37条 契約書一体作成</strong>
                <span>対象：ST-26-101 千代田区神田錦町ビル（専任宅建士：能勢 秀樹）</span>
                <span style="color:#b82c2c; font-weight:700;">ステータス：07役所/法務局調査18項目 転記完了・職印押印待</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🤝 営業担当 ⇄ 宅建士 直接重説日程調整</strong>
                <span>11/06 (金) 14:00〜15:30 第1応接室（担当：小林 ⇄ 宅建士：能勢 直接合意済）</span>
              </div>
            </div>

            <!-- 抽斗 肆：17 定期顧客あいさつCRM & 経理連携 (REQ-SP-05) -->
            <div class="v2-folio-pane" id="folio-4">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-05】17 定期的お客様あいさつリマインダー ＆ 経理精算
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>💌 定期顧客あいさつ通知（引渡後フォロー）</strong>
                <span>・高橋 誠一 様（引渡1周年）：季節挨拶状＆資産価値レポート送付日</span>
                <span>・香港 陳 様（引渡3ヶ月）：確定申告・納税管理人フォロー連絡</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>💴 12/14 経理・税理士連携ステータス</strong>
                <span>・当月仲介手数料 入金消込：11件完了 / 税理士月次試算表 共有済</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           【拓扑 C】上下双层分屏 + 底部全宽 09:00-20:00 案内車両予約時間表 & 宅建重説日程軸
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-C">
        <!-- 上層：3列 Bento 業務カード -->
        <div class="v2-topo-c-upper">
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">I. 本日内覧・案内手配 (03 内見・案内)</span>
              <span class="v2-frame-badge">営業一貫担当</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・10:00 神田錦町1棟ビル</strong>：売主立会・インフラ現況確認（担当：小林 / 社用車1号）</div>
              <div><strong>・13:00 板橋区中丸町戸建</strong>：買主鈴木様 最終内覧・境界確認（担当：小林 / 社用車2号）</div>
              <div><strong>・14:00 六本木3丁目レジデンス</strong>：法人借主様 現地案内・採寸（担当：佐藤 / 社用車1号）</div>
            </div>
          </div>

          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">II. 銀行融資 担当/部長双軌確認 (09 ローン)</span>
              <span class="v2-frame-badge">REQ-SP-06</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・三井住友銀行 (神田錦町 1.4億)</strong>：<span style="color:#1e6b45; font-weight:700;">[担当確認: 済] [部長確認: 承認済]</span></div>
              <div><strong>・みずほ銀行 (板橋戸建 4,800万)</strong>：<span style="color:#1e6b45; font-weight:700;">[担当確認: 済] [部長確認: 承認済]</span></div>
              <div><strong>・外為送金審査 (銀座商業 2.85億)</strong>：<span style="color:#b45309; font-weight:700;">[担当確認: 済] [部長確認: 本日17時決裁]</span></div>
            </div>
          </div>

          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">III. 17 定期顧客あいさつ CRM スケジュール</span>
              <span class="v2-frame-badge">REQ-SP-05</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・引渡1ヶ月挨拶</strong>：世田谷区 佐々木様（住み心地・瑕疵有無お伺い電話）</div>
              <div><strong>・引渡1周年挨拶</strong>：港区 高橋様（固定資産税・近隣成約相場レポート送付）</div>
              <div><strong>・お中元/お歳暮・年賀状リスト</strong>：VIP顧客 48名 担当営業確認完了</div>
            </div>
          </div>
        </div>

        <!-- 下層：全幅 09:00〜20:00 案内車両予約時間表 ＆ 宅建重説直接スケジュール軸 -->
        <div class="v2-horology-frame">
          <div class="v2-frame-header">
            <div>
              <span class="v2-frame-title">案内車両 予約時間表 ＆ 宅建士 重要事項説明タイムライン (Topology C · 09:00 - 20:00 Chronometer Dock)</span>
              <div style="font-size:11px; color:var(--v2-text-sub); margin-top:2px;">
                ※ 顧客赤字フィードバック反映：「車両：時間表作って、みんな予約制で」「重説日程：担当者から直接宅建士と確認」— 空き枠クリックで即時予約可能
              </div>
            </div>
            <span class="v2-frame-badge">REQ-SP-02 / 03</span>
          </div>

          <div class="v2-washi-sheet">
            <div class="v2-master-table-wrap">
              <table class="v2-chronometer-table">
                <thead>
                  <tr>
                    <th style="width:180px;">リソース / 車両・宅建士枠</th>
                    <th>09:00 - 11:00</th>
                    <th>11:00 - 13:00</th>
                    <th>13:00 - 15:00</th>
                    <th>15:00 - 17:00</th>
                    <th>17:00 - 19:00</th>
                    <th>19:00 - 20:00</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>🚗 社用車 1号 (Alphard)</strong><br><span style="font-size:10px; color:#666;">品川300 あ 18-01</span></td>
                    <td><div class="v2-slot-booked">予約済: 小林 (神田錦町案内)</div></td>
                    <td><div class="v2-slot-booked">予約済: 小林 (神田現地調査)</div></td>
                    <td><div class="v2-slot-booked">予約済: 佐藤 (六本木内覧)</div></td>
                    <td><div class="v2-slot-booked">予約済: 佐藤 (港区物件案内)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車1号')">＋ 空車・予約する</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車1号')">＋ 空車・予約する</td>
                  </tr>
                  <tr>
                    <td><strong>🚙 社用車 2号 (LS500h)</strong><br><span style="font-size:10px; color:#666;">品川300 さ 24-08</span></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・予約する</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・予約する</td>
                    <td><div class="v2-slot-booked">予約済: 小林 (板橋戸建内覧)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・予約する</td>
                    <td><div class="v2-slot-booked">予約済: 阿部 (銀座VIP送迎)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・予約する</td>
                  </tr>
                  <tr>
                    <td><strong>🚐 社用車 3号 (Crown)</strong><br><span style="font-size:10px; color:#666;">品川300 た 09-12</span></td>
                    <td><div class="v2-slot-booked">予約済: 高橋 (練馬管理巡回)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・予約する</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・予約する</td>
                    <td><div class="v2-slot-booked">予約済: 高橋 (退去立会・修繕)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・予約する</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・予約する</td>
                  </tr>
                  <tr>
                    <td><strong>📜 専任宅建士: 能勢 秀樹</strong><br><span style="font-size:10px; color:#b82c2c;">営業⇄宅建士 直接重説予約</span></td>
                    <td><div class="v2-slot-jusetsu">07 法務局・役所調査精査</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '宅建重説(能勢)')">＋ 重説日程を直接予約</td>
                    <td><div class="v2-slot-jusetsu">対面重説: 神田錦町 (担当:小林)</div></td>
                    <td><div class="v2-slot-jusetsu">13 売買契約書作成・職印検認</div></td>
                    <td><div class="v2-slot-jusetsu">IT重説: 香港陳様 (担当:小林)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '宅建重説(能勢)')">＋ 重説日程を直接予約</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           【拓扑 B】三欄精密時計台帳ワークベンチ (左18% 18工程ツリー + 中52% 営業一貫台帳 + 右30% 宅建士スタジオ)
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-B">
        <div class="v2-topo-b-grid">
          <!-- 左欄：18業務カテゴリ・288項目ナビゲーションツリー -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">全18工程 (288項目)</span>
              <span class="v2-frame-badge">RBAC連動</span>
            </div>
            <ul class="v2-stage-tree-list">
              <li class="v2-stage-tree-item active" onclick="window.switchDossierFromTree('mod-consult', this)"><span>01-03 反響・接客・案内・査定</span><span>営業</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-consult', this)"><span>04-05 媒介契約・REINS・図面</span><span>営業</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-consult', this)"><span>06 申込・初期費用自主チェック</span><span>営業</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-property', this)"><span>07 物件調査・法規調査 (18項目)</span><span>宅建士</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-contract', this)"><span>08/13 重説・契約書作成・締結</span><span>宅建士</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-mortgage', this)"><span>09 銀行融資 (担当＋部長確認)</span><span>営業/部長</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-closing', this)"><span>10-11 賃貸管理・退去・修繕</span><span>賃貸管理</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-closing', this)"><span>12/14 決済引渡・経理・税理士</span><span>経理</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-ledger', this)"><span>15-16 人事労務・総務・車両</span><span>人事総務</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-ledger', this)"><span>17 定期顧客あいさつ・海外案件</span><span>営業</span></li>
              <li class="v2-stage-tree-item" onclick="window.switchDossierFromTree('mod-ledger', this)"><span>18 外部士業連携・システム権限</span><span>営業/総務</span></li>
            </ul>
          </div>

          <!-- 中欄：総合営業担当 一貫パイプライン ＆ 自主確認チェックシート -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">総合営業ワークベンチ (売買・賃貸・REINS・海外・士業連携 一貫管理)</span>
              <span class="v2-frame-badge">Topology B · Center</span>
            </div>
            <div class="v2-washi-sheet" style="display:flex; flex-direction:column; gap:10px;">
              <div style="padding:8px 10px; background:var(--v2-card-inlay-alt); border-left:3px solid #1e6b45; font-size:12px;">
                <strong>【顧客フィードバック反映：総合営業の一貫担当体制】</strong><br>
                実際の実務では営業担当が「売買仲介・賃貸仲介・REINS登録・マイソク図面作成・海外顧客対応・司法書士/測量士手配」を一貫して担当し、会社標準チェックリストで自主確認を実施します。
              </div>

              <div class="v2-master-table-wrap">
                <table class="v2-master-table" style="min-width:520px;">
                  <thead>
                    <tr>
                      <th>業務領域</th>
                      <th>担当ロール</th>
                      <th>自主確認 / 承認方式</th>
                      <th>現在ステータス</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>01-05 反響・内覧・REINS・マイソク</strong></td>
                      <td>R03 総合営業担当</td>
                      <td>会社チェックリストで担当自主確認</td>
                      <td><span class="v2-tag-pill v2-tag-sale">14件 進行中</span></td>
                    </tr>
                    <tr>
                      <td><strong>06 買付/入居申込・初期費用見積</strong></td>
                      <td>R03 総合営業担当</td>
                      <td>見積・契約必要書類 担当自主点検</td>
                      <td><span class="v2-tag-pill v2-tag-sale">点検率 100%</span></td>
                    </tr>
                    <tr>
                      <td><strong>09 住宅ローン・事業融資審査</strong></td>
                      <td>R03 営業 ＋ R02 部長</td>
                      <td>担当自主確認 または 部長承認</td>
                      <td><span class="v2-tag-pill v2-tag-overseas">双軌確認稼働</span></td>
                    </tr>
                    <tr>
                      <td><strong>17 定期顧客あいさつ・18 士業手配</strong></td>
                      <td>R03 総合営業担当</td>
                      <td>定期挨拶リマインダー・司法書士連携</td>
                      <td><span class="v2-tag-pill v2-tag-lease">自動通知ON</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 右欄：専任宅建士 07調査・08重説・13契約書作成 一体スタジオ -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">宅建士 重説・13契約書スタジオ</span>
              <span class="v2-frame-badge">R04 宅建士専管</span>
            </div>
            <div class="v2-washi-sheet" style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
              <div style="font-weight:700; color:#b82c2c;">
                📜 07 物件調査 (18項目) ➔ 08 重説 ➔ 13 契約書作成
              </div>
              <div style="font-size:11.5px; color:#444; line-height:1.5;">
                ※ 顧客赤字指示：「07は全て宅建士」「13契約書作成は宅建士が担当」「08-3重説日程は担当者から直接宅建士と確認」
              </div>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>07-1〜18 登記・都市計画・インフラ・ハザード調査</strong>：法務局＆役所調査データ 18項目 入力完了</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>08-1/2 重要事項説明書 (35条) ドラフト＆社内チェック</strong>：宅建士 能勢 秀樹 作成・検認済</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>13-1/2/3 売買契約書・賃貸契約書・特約条項作成</strong>：宅建士による条項作成・印紙税額確認済</span>
              </label>
              <button type="button" class="v2-switch-btn active" onclick="window.switchSentisTopology('paper')" style="width:100%; margin-top:4px;">
                ➔ A4公文帳票ビューで重説・契約書に捺印する
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function applyTheme(theme) {
    if (theme === 'dark') theme = 'navy';
    if (theme === 'light') theme = 'washi';
    if (!VALID_THEMES.includes(theme)) theme = 'navy';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme-choice') === theme);
    });
  }

  function applyRole(roleCode) {
    if (!ROLE_PROFILES[roleCode]) roleCode = 'R03';
    localStorage.setItem(ROLE_STORAGE_KEY, roleCode);
    const prof = ROLE_PROFILES[roleCode];

    const sel = document.getElementById('v2RoleSelect');
    if (sel && sel.value !== roleCode) sel.value = roleCode;

    const avatarEl = document.querySelector('.user-stamp-avatar');
    const nameEl = document.querySelector('.user-name');
    const rankEl = document.querySelector('.user-rank');
    const roleEl = document.querySelector('.user-role');
    if (avatarEl) avatarEl.textContent = prof.stamp;
    if (nameEl) nameEl.textContent = prof.name;
    if (rankEl) rankEl.textContent = prof.rank;
    if (roleEl) roleEl.textContent = prof.role;
  }

  function switchTopology(topoCode) {
    if (!['D', 'C', 'B', 'paper'].includes(topoCode)) topoCode = 'D';
    localStorage.setItem(TOPO_STORAGE_KEY, topoCode);

    document.querySelectorAll('#v2TopoGroup .v2-switch-btn[data-topo]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-topo') === topoCode);
    });

    const stageD = document.getElementById('v2-stage-D');
    const stageC = document.getElementById('v2-stage-C');
    const stageB = document.getElementById('v2-stage-B');
    const paperSheet = document.querySelector('.dossier-paper-sheet');

    if (stageD) stageD.classList.toggle('active', topoCode === 'D');
    if (stageC) stageC.classList.toggle('active', topoCode === 'C');
    if (stageB) stageB.classList.toggle('active', topoCode === 'B');
    if (paperSheet) {
      paperSheet.style.display = (topoCode === 'paper') ? 'block' : 'none';
    }
  }

  window.switchSentisTopology = switchTopology;

  window.bookSentisSlot = function (cellEl, resourceName) {
    if (!cellEl || cellEl.querySelector('.v2-slot-booked')) return;
    const roleCode = localStorage.getItem(ROLE_STORAGE_KEY) || 'R03';
    const prof = ROLE_PROFILES[roleCode] || ROLE_PROFILES.R03;
    cellEl.innerHTML = `<div class="v2-slot-booked">予約済: ${prof.name} (${resourceName})</div>`;
    cellEl.classList.remove('v2-slot-free');
  };

  window.switchDossierFromTree = function (targetPaneId, itemEl) {
    document.querySelectorAll('.v2-stage-tree-item').forEach(li => li.classList.remove('active'));
    if (itemEl) itemEl.classList.add('active');
    if (typeof window.switchModule === 'function') {
      window.switchModule(targetPaneId);
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    const workbench = document.querySelector('.office-body-workbench');
    const paperSheet = document.querySelector('.dossier-paper-sheet');
    if (workbench && paperSheet && !document.getElementById('v2CommandBar')) {
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.gap = '14px';
      container.innerHTML = buildV2WorkbenchHTML();
      workbench.insertBefore(container, paperSheet);
    }

    // 绑定拓扑切换按钮
    document.querySelectorAll('#v2TopoGroup .v2-switch-btn[data-topo]').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTopology(btn.getAttribute('data-topo'));
      });
    });

    // 绑定主体色彩切换按钮
    document.querySelectorAll('#v2ThemeGroup .v2-switch-btn[data-theme-choice]').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTheme(btn.getAttribute('data-theme-choice'));
      });
    });

    // 绑定右侧抽屉标签切换 (Topology D)
    document.querySelectorAll('.v2-folio-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-folio');
        document.querySelectorAll('.v2-folio-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.v2-folio-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const pane = document.getElementById(targetId);
        if (pane) pane.classList.add('active');
      });
    });

    // 绑定7大角色切换
    const roleSelect = document.getElementById('v2RoleSelect');
    if (roleSelect) {
      roleSelect.addEventListener('change', () => {
        applyRole(roleSelect.value);
      });
    }

    // 覆盖顶栏原本的双模按钮为4色彩循环切换
    const headerThemeBtn = document.getElementById('btnThemeToggle');
    if (headerThemeBtn) {
      headerThemeBtn.onclick = function (e) {
        e.preventDefault();
        let current = document.documentElement.getAttribute('data-theme') || 'navy';
        if (!VALID_THEMES.includes(current)) current = 'navy';
        const next = VALID_THEMES[(VALID_THEMES.indexOf(current) + 1) % VALID_THEMES.length];
        applyTheme(next);
      };
    }

    // 初始化状态（支持 URL ?topo=D/C/B/paper & ?theme=navy/washi/walnut/forest）
    const params = new URLSearchParams(window.location.search);
    const initTheme = params.get('theme') || localStorage.getItem(THEME_STORAGE_KEY) || 'navy';
    const initRole = params.get('role') || localStorage.getItem(ROLE_STORAGE_KEY) || 'R03';
    const initTopo = params.get('topo') || localStorage.getItem(TOPO_STORAGE_KEY) || 'D';

    applyTheme(initTheme);
    applyRole(initRole);
    switchTopology(initTopo);
  });
})();

