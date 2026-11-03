/**
 * SENTIS Realty Core v2.0 - Multi-Theme & Multi-Topology Interactive Controller
 * - 100% 厳格準拠: 顧客手書き赤字フィードバック (BRW3CEFA529E05C_000414.pdf 全20頁・288項目) ＆ 要件定義書 v2.0
 * - 20モジュールから7大実務ロール (R01〜R07) への統合 (06 物件仕入れ「現在なし」・17 コンプライアンス「いらない」は除外)
 * - 3+1 主体色彩方案: 色彩A (navy 皇室深海藍金) / 色彩B (washi 越前白金和紙) / 色彩C (walnut 京都焙茶胡桃) / forest (深森緑)
 * - 4 大空間トポロジー: 拓扑D (左70%総台帳+右30%四段抽斗) / 拓扑C (上下分屏+02-9車両・02-8重説時間軸) / 拓扑B (三欄協同作業台) / paper (A4公文帳票)
 */
(function () {
  const THEME_STORAGE_KEY = 'SENTIS_CRM_THEME';
  const ROLE_STORAGE_KEY = 'SENTIS_CRM_ROLE';
  const TOPO_STORAGE_KEY = 'SENTIS_CRM_TOPO';
  const VALID_THEMES = ['navy', 'washi', 'walnut', 'forest'];

  const ROLE_PROFILES = {
    R01: {
      stamp: '阿部',
      name: '阿部 翔平',
      rank: '代表取締役',
      role: '01 経営決裁・超権限割引/経費・税務/公印承認 (R01)',
      badge: '【R01 経営者・代表取締役】01(No.1〜8, 11〜17) 最終決裁・公印承認モード（01-9,10 融資は担当/部長へ委譲済）'
    },
    R02: {
      stamp: '店長',
      name: '佐藤 統括',
      rank: '店長・部長',
      role: '02 反響配分・未成約督促・歩合確定・01-9/10融資部長確認 (R02)',
      badge: '【R02 店長・営業責任者】02(No.1〜3,5〜6,10〜12,14〜16) 案件配分・01-9/10 銀行融資部長確認モード（02-4,7,8,9,13は営業へ委譲済）'
    },
    R03: {
      stamp: '営業',
      name: '小林 総合',
      rank: '総合営業',
      role: '03内見/定期挨拶・04売買・05賃貸・09掲載・19海外・20士業一貫 (R03)',
      badge: '【R03 総合営業担当】売買04＋賃貸05＋掲載09＋海外19＋士業20＋02-4/7担当自主Checklist＋02-9車両予約＋03-17定期挨拶 一貫モード'
    },
    R04: {
      stamp: '能勢',
      name: '能勢 秀樹',
      rank: '専任宅建士',
      role: '07専門確認・07-13契約書作成・08-1〜5調査整理・重説記名押印 (R04)',
      badge: '【R04 宅地建物取引士】07(1〜12+新規13契約書作成)＋08(1〜5調査・草案作成) 法定重説・契約書作成専管モード（08-6草案回付は廃止）'
    },
    R05: {
      stamp: '賃貸',
      name: '高橋 管理',
      rank: '賃貸管理',
      role: '10受託管理(18除外)・11修繕手配・13オーナー月次精算/預り金 (R05)',
      badge: '【R05 賃貸管理・修繕担当】10受託管理(No.1〜17,19)＋11修繕手配(全10項)＋13オーナー月次収支精算・敷金預り金管理モード'
    },
    R06: {
      stamp: '経理',
      name: '田中 経理',
      rank: '経理・税務',
      role: '12収入経費/歩合計算・13精算送金・14税理士窓口/インボイス (R06)',
      badge: '【R06 経理・税務担当】12収支・歩合精算・電帳法保存＋13オーナー送金連携＋14税理士窓口・インボイス・非居住者源泉徴収モード'
    },
    R07: {
      stamp: '総務',
      name: '山本 総務',
      rank: '人事・総務',
      role: '15人事労務・16総務/公印/鍵/車両台帳・18システム権限管理 (R07)',
      badge: '【R07 人事・総務・システム管理】15採用労務給与＋16総務・公印(16-8)・鍵(16-10)・車両(16-11)＋18アカウント権限・監査モード'
    }
  };

  // トポロジーB 左欄ツリー連動データ（全20頁・288項目の実データマッピング）
  const TOPO_B_TREE_DATA = {
    'cat-01-02': {
      paneId: 'mod-consult',
      title: '01 経営者決裁 ＆ 02 店長督促・01-9/10 融資双軌確認',
      note: '【顧客赤字反映】01-9,10（銀行融資・借入確認）は「担当自分確認 / また部長確認」へ下放。02-4(見積)・02-7(契約書類)・02-8(重説日程)・02-9(車両)・02-13(決済延期)は営業担当へ委譲済。',
      rows: [
        { code: '01-1〜8, 11〜17', role: 'R01 代表取締役', mode: '超権限割引・大口経費・採用内定・税金納付・16-8公印承認', status: '決裁稼働中', tag: 'v2-tag-sale' },
        { code: '01-9, 10 (下放)', role: 'R03 営業 / R02 部長', mode: '銀行融資申請・借入条件確認（担当自分確認／また部長確認）', status: '双軌確認済', tag: 'v2-tag-overseas' },
        { code: '02-1〜3, 14〜15', role: 'R02 店長・責任者', mode: '新規反響配分・引継・未返信アラート督促・未成約週次レビュー', status: '自動監視中', tag: 'v2-tag-lease' },
        { code: '02-5, 6, 10〜12', role: 'R02 店長・責任者', mode: '権限内割引/経費承認・物件公開審査・歩合配分確定・苦情引継', status: '審査完了', tag: 'v2-tag-sale' }
      ]
    },
    'cat-03': {
      paneId: 'mod-consult',
      title: '03 営業：顧客対応・内見・02-9車両予約・03-17定期あいさつ',
      note: '【顧客赤字反映】02-9「車両：時間表作って、みんな予約制で」及び 第5頁手書き追加「03-17 定期的お客様あいさつする」を完全統合。',
      rows: [
        { code: '03-1〜6 / 02-4', role: 'R03 総合営業担当', mode: '反響受付・条件整理・候補提案・諸費用見積（02-4 担当自分確認）', status: '14件 進行中', tag: 'v2-tag-sale' },
        { code: '03-7〜14 / 02-9', role: 'R03 総合営業担当', mode: '内見調整・02-9 案内車両タイムテーブル予約・鍵貸出/戸締り返却', status: '社用車3台稼働', tag: 'v2-tag-lease' },
        { code: '03-15, 16', role: 'R03 総合営業担当', mode: '案件進捗・対応履歴更新・引渡後初期入居/引渡状況確認', status: '履歴同期済', tag: 'v2-tag-sale' },
        { code: '03-17 (赤字追加)', role: 'R03 総合営業担当', mode: '【新規】定期的お客様あいさつする（引渡1ヶ月/半年/1周年/季節挨拶）', status: 'リマインド稼働', tag: 'v2-tag-overseas' }
      ]
    },
    'cat-04-05': {
      paneId: 'mod-contract',
      title: '04 売買営業(全20項) ＆ 05 賃貸営業(全16項) 総合一貫管理',
      note: '【顧客赤字反映】第4頁「③と④おなじ営業担当のこと」・第5頁「实际中，营业租赁和买卖都做」・02-7「会社チェックリストを作って、担者自分で確認」・02-8「担者から直接宅建確認」。',
      rows: [
        { code: '04-1〜8 (売買)', role: 'R03 総合営業担当', mode: '売却査定・媒介契約・購入申込書(買付)受領・価格/引渡条件合意記録', status: '売買8件進行', tag: 'v2-tag-sale' },
        { code: '04-9〜14 / 02-7,8', role: 'R03 総合営業担当', mode: 'ローン審査支援・02-7契約書類担当自主Checklist・02-8宅建士へ重説直約', status: 'Checklist 100%', tag: 'v2-tag-overseas' },
        { code: '04-15〜20 / 02-13', role: 'R03 総合営業担当', mode: '決済準備・02-13決済日変更の担当自主調整・残金引渡・08-13成約保管', status: '今月3件決済', tag: 'v2-tag-sale' },
        { code: '05-1〜16 (賃貸)', role: 'R03 総合営業担当', mode: '募集条件確認・入居申込・保証審査・05-7初期費用明細・傷確認・鍵引渡', status: '賃貸6件進行', tag: 'v2-tag-lease' }
      ]
    },
    'cat-07-08': {
      paneId: 'mod-property',
      title: '07 宅建士専門確認・07-13契約書作成 ＆ 08-1〜5調査整理 (08-6/14廃止)',
      note: '【顧客赤字反映】第9頁手書き追加「07-13 契約書作成」・第10頁「宅建士：⊗ 1 2 3 4 5 6（No.6草案回付とNo.14抜取点検は×抹消）」。宅建士が調査整理から契約書・重説作成まで一気通貫で実施。',
      rows: [
        { code: '08-1〜4 / 07-1,2', role: 'R04 宅地建物取引士', mode: '必要/不足書類一覧作成・登記/図面/管理会社/役所調査結果の整理・表記照合', status: '調査データ完備', tag: 'v2-tag-sale' },
        { code: '07-13(追加) / 08-5', role: 'R04 宅地建物取引士', mode: '【宅建士専管】売買/賃貸契約書・重要事項説明書の直接起案作成（08-6回付不要）', status: '宅建士作成完', tag: 'v2-tag-overseas' },
        { code: '07-3, 4, 9, 10', role: 'R04 宅地建物取引士', mode: '重説と調査資料の一致検証・契約書と重説の無矛盾クロスチェック・変更再確認', status: '矛盾ゼロ確認済', tag: 'v2-tag-sale' },
        { code: '07-5, 6, 7, 8', role: 'R04 宅地建物取引士', mode: '取引士証提示・対面/IT重説実施・【二重チェック】35条/37条記名押印・交付', status: '公印検認済', tag: 'v2-tag-lease' }
      ]
    },
    'cat-09-19-20': {
      paneId: 'mod-consult',
      title: '09 物件掲載・REINS・中英広告 ＆ 19 海外顧客(4〜7廃止) ＆ 20 外部士業連携',
      note: '【顧客赤字反映】09・19・20はいずれも「営業担当」へ統合。19のNo.4〜7（海外公証専門家委託・時差リマインド・送金追跡の独立工程）は赤×により簡素化除外。',
      rows: [
        { code: '09-1〜9, 11〜14', role: 'R03 総合営業担当', mode: '物件DB登録・間取図/写真・日本語/中国語広告作成・REINS登録・動画公開', status: 'REINS同期済', tag: 'v2-tag-sale' },
        { code: '19-1〜3, 8〜10', role: 'R03 総合営業担当', mode: '物件資料/費用明細翻訳・通訳手配・原語/翻訳氏名照合・税理士伝達・委任手続', status: '中英日3言語対応', tag: 'v2-tag-overseas' },
        { code: '20-1, 2 (法務税務)', role: 'R03 総合営業担当', mode: '司法書士（所有権移転/抵当権登記）・税理士（非居住者源泉徴収判断）進捗確認', status: '士業連携中', tag: 'v2-tag-lease' },
        { code: '20-3〜7 (専門調査)', role: 'R03 総合営業担当', mode: '社労士・弁護士・土地家屋調査士(測量)・建築士・火災保険募集人への依頼追跡', status: '手配完了', tag: 'v2-tag-sale' }
      ]
    },
    'cat-10-11-13': {
      paneId: 'mod-closing',
      title: '10 賃貸受託管理(18除外) ＆ 11 修繕手配 ＆ 13 オーナー月次精算・預り金',
      note: '【顧客赤字反映】11は「10 賃貸管理の担当」へ統合、13は「賃貸管理の人」が担当。10-18（定期管理報告書送付）は未チェックのため強制タスクから除外。',
      rows: [
        { code: '10-1〜4 / 13-1〜4', role: 'R05 賃貸管理担当', mode: '管理引継・賃料請求予定一覧・入金消込・不明入金照会・督促・保証会社代位申請', status: '消込率 99.4%', tag: 'v2-tag-lease' },
        { code: '10-5〜11 / 11-1〜10', role: 'R05 賃貸管理担当', mode: '修繕受付・現地確認・相見積比較・オーナー承認(10-7/11-6)・発注・完了検収写真', status: '修繕2件進行', tag: 'v2-tag-overseas' },
        { code: '10-12〜17, 19', role: 'R05 賃貸管理担当', mode: '更新意向確認・解約退去立会・損傷確認・原状回復精算・空室清掃/再募集', status: '退去立会1件', tag: 'v2-tag-sale' },
        { code: '13-5〜12 (精算)', role: 'R05 賃貸管理＋R06 経理', mode: 'オーナー月次収支精算書(13-6)作成・送金・敷金/預り金台帳残高照合(13-10)', status: '当月精算完了', tag: 'v2-tag-sale' }
      ]
    },
    'cat-12-14': {
      paneId: 'mod-closing',
      title: '12 経理（収入・経費・歩合・月次・電帳法）＆ 14 税理士窓口・インボイス',
      note: '【顧客赤字反映】第14頁「12, 13, 14. おなじ人やる」。仲介手数料請求・入金消込・社員歩合計算・インボイス点検・非居住者源泉徴収を一元管理。',
      rows: [
        { code: '12-1〜4 (売上入金)', role: 'R06 経理・税務担当', mode: '仲介手数料請求書発行・入金消込・領収書発行・期日超過案件の営業督促依頼', status: '入金消込済', tag: 'v2-tag-sale' },
        { code: '12-5〜11 (支払歩合)', role: 'R06 経理・税務担当', mode: '取引先請求照合・経費精算審査・共同仲介配分・成約社員歩合(インセンティブ)算定', status: '歩合算定済', tag: 'v2-tag-lease' },
        { code: '12-12〜18 (月次決算)', role: 'R06 経理・税務担当', mode: '仕訳計上・銀行口座照合・月次損益締め・翌月資金繰り表・電子帳簿保存法アーカイブ', status: '電帳法準拠', tag: 'v2-tag-sale' },
        { code: '14-1〜10 (税務連携)', role: 'R06 経理・税務担当', mode: '月次証憑税理士共有・インボイス登録番号確認(14-3)・非居住者源泉徴収(14-4)・納税', status: '税理士共有済', tag: 'v2-tag-overseas' }
      ]
    },
    'cat-15-16-18': {
      paneId: 'mod-ledger',
      title: '15 人事労務 ＆ 16 総務(公印・鍵・車両) ＆ 18 システム管理・権限監査',
      note: '【顧客赤字反映】第17頁「人事 15と16. 同し人やる」・第20頁「18 システム管理 → 人事」。06(物件仕入れ：現在なし)と17(コンプライアンス専任：いらない)はシステムから完全除外。',
      rows: [
        { code: '15-1〜20 (人事労務)', role: 'R07 人事・総務・システム', mode: '採用面接・内定・雇用契約・社保手続・勤怠有給・給与歩合集計・退職引継', status: '労務稼働中', tag: 'v2-tag-sale' },
        { code: '16-1〜7, 12〜15', role: 'R07 人事・総務・システム', mode: '来客受電対応・郵便物・契約書原本発送追跡(16-4)・会議室予約・備品発注', status: '総務平常稼働', tag: 'v2-tag-lease' },
        { code: '16-8, 9, 10, 11', role: 'R07 人事・総務・システム', mode: '会社公印押印履歴(16-8)・証明書・物件鍵/カード台帳(16-10)・社用車整備保険(16-11)', status: '台帳厳格管理', tag: 'v2-tag-overseas' },
        { code: '18-1〜13 (システム)', role: 'R07 人事・総務・システム', mode: 'アカウント発行・RBAC権限付与・退職時即時停止(18-4)・バックアップ・監査ログ', status: '監査異常なし', tag: 'v2-tag-sale' }
      ]
    }
  };

  function buildV2WorkbenchHTML() {
    return `
      <!-- v2.0 頂部精工控制中枢 (7大角色 + 4大拓扑 + 3+1主体色彩) -->
      <div class="v2-horology-command-bar" id="v2CommandBar">
        <div class="v2-bar-section">
          <span class="v2-bar-label">執務役職 (7ロール):</span>
          <select class="v2-role-select" id="v2RoleSelect" aria-label="執務ロール切替">
            <option value="R01">R01 経営者・代表取締役 (01決裁・公印承認)</option>
            <option value="R02">R02 店長・営業責任者 (02配分・01-9/10融資部長確認)</option>
            <option value="R03">R03 総合営業担当 (03内見/挨拶・04売買・05賃貸・09・19・20)</option>
            <option value="R04">R04 宅地建物取引士 (07専門確認・07-13契約書作成・08-1〜5)</option>
            <option value="R05">R05 賃貸管理・修繕担当 (10受託管理・11修繕・13オーナー精算)</option>
            <option value="R06">R06 経理・税務担当 (12収支/歩合・13送金・14税理士窓口)</option>
            <option value="R07">R07 人事・総務・システム管理 (15人事・16鍵/車両/公印・18権限)</option>
          </select>
        </div>

        <div class="v2-bar-section">
          <span class="v2-bar-label">画面拓扑 (4レイアウト):</span>
          <div class="v2-pill-group" id="v2TopoGroup">
            <button type="button" class="v2-switch-btn" data-topo="D">拓扑D: 総台帳・四段抽斗</button>
            <button type="button" class="v2-switch-btn" data-topo="C">拓扑C: 02-9車両予約表・02-8重説軸</button>
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

        <div id="v2RolePermissionBanner" style="width:100%; font-size:11px; padding:4px 10px; border-radius:3px; background:rgba(0,0,0,0.22); border-left:3px solid var(--v2-gold); color:var(--v2-text-sub);">
          【R03 総合営業担当】売買04＋賃貸05＋掲載09＋海外19＋士業20＋02-4/7担当自主Checklist＋02-9車両予約＋03-17定期挨拶 一貫モード
        </div>
      </div>

      <!-- ====================================================================
           【拓扑 D】左 70% 超宽全案总台账 + 右 30% 多标签精密抽屉 (Wide Master Register + Folio Drawers)
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-D">
        <div class="v2-topo-d-grid">
          <!-- 左側 70%：03/04売買・05賃貸・09掲載・19海外・10/11/13受託管理 統合主台帳 -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <div>
                <div class="v2-frame-title">SENTIS 総合営業（04売買・05賃貸・09掲載・19海外・20士業）＆ 10賃貸管理 統合主台帳 (Topology D · 70%)</div>
                <div style="font-size:11px; color:var(--v2-text-sub); margin-top:2px;">
                  ※ 顧客赤字フィードバック反映：③と④同一営業・賃貸と売買兼任・02-4/7担当自主確認Checklist・01-9/10銀行融資(担当/部長双軌確認)・07-13宅建士契約書作成
                </div>
              </div>
              <span class="v2-frame-badge">全20頁・288項目準拠</span>
            </div>

            <div class="v2-washi-sheet">
              <div class="v2-master-table-wrap">
                <table class="v2-master-table">
                  <thead>
                    <tr>
                      <th>案件番号</th>
                      <th>業務区分</th>
                      <th>物件所在地・顧客氏名 (19-3表記照合)</th>
                      <th>取引価格 / 賃料</th>
                      <th>02-4/7 担当自主確認 ＆ 09 REINS</th>
                      <th>01-9/10・04-9 融資 (担当/部長)</th>
                      <th>07-13 契約書・02-8 重説直約</th>
                      <th>公印・状態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ST-26-101</strong></td>
                      <td><span class="v2-tag-pill v2-tag-sale">04 売買仲介</span></td>
                      <td>千代田区神田錦町 1棟ビル<br><span style="font-size:10.5px; color:#666;">買主: 鈴木HD様 (担当: 小林)</span></td>
                      <td><strong>[売買価格Tier-S・脱敏済]</strong></td>
                      <td>09-6 REINS登録済<br><span style="color:#1e6b45; font-weight:700;">✓ 02-4/7 担当Checklist済</span></td>
                      <td>SMBC 事業融資枠 (01-9/10)<br><span style="color:#1e6b45; font-weight:700;">担当確認済 ＋ 部長確認済</span></td>
                      <td>07-13 宅建士作成完 (能勢)<br>02-8 直約: 11/06 14:00重説</td>
                      <td><span class="v2-mini-hanko">能勢<br>検印</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-102</strong></td>
                      <td><span class="v2-tag-pill v2-tag-lease">05 賃貸仲介</span></td>
                      <td>港区六本木3丁目 レジデンス<br><span style="font-size:10.5px; color:#666;">借主: 渡辺 健太 様 (担当: 小林)</span></td>
                      <td><strong>[月額賃料Tier-A・脱敏済]</strong></td>
                      <td>05-7 初期費用明細済<br><span style="color:#1e6b45; font-weight:700;">✓ 02-4 担当自分確認済</span></td>
                      <td>05-4 保証会社承認済<br><span style="color:#1e6b45; font-weight:700;">05-12 鍵引渡前条件充足</span></td>
                      <td>07-13 賃貸契約・重説作成済<br>02-9 車両1号 13:00案内予約</td>
                      <td><span class="v2-mini-hanko">営業<br>確認</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-103</strong></td>
                      <td><span class="v2-tag-pill v2-tag-overseas">04/19 海外売買</span></td>
                      <td>中央区銀座6丁目 商業区分<br><span style="font-size:10.5px; color:#666;">買主: 陳様 (19-3 原語/漢字照合済)</span></td>
                      <td><strong>[売買価格Tier-SS・脱敏済]</strong></td>
                      <td>09-4 中国語広告・19-1翻訳済<br><span style="color:#1e6b45; font-weight:700;">✓ 02-7 必要書類担当確認済</span></td>
                      <td>19-8/14-4 非居住者税務確認<br><span style="color:#b45309; font-weight:700;">担当確認済 / 部長確認待</span></td>
                      <td>07-8 IT重説 (Zoom) 直約済<br>20-1/2 司法書士・税理士連携</td>
                      <td><span class="v2-mini-hanko">阿部<br>決裁</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-104</strong></td>
                      <td><span class="v2-tag-pill v2-tag-sale">04 売買仲介</span></td>
                      <td>板橋区中丸町 中古一戸建<br><span style="font-size:10.5px; color:#666;">買主: 鈴木 隆一 様 (担当: 小林)</span></td>
                      <td><strong>[売買価格Tier-A・脱敏済]</strong></td>
                      <td>09-2 間取図・02-4見積済<br><span style="color:#1e6b45; font-weight:700;">✓ 02-13 決済日程担当調整済</span></td>
                      <td>みずほ銀行 本審査 (04-9)<br><span style="color:#1e6b45; font-weight:700;">担当確認済 ＋ 部長確認済</span></td>
                      <td>07-7 法定記名押印・交付完<br>03-17 引渡後定期挨拶登録済</td>
                      <td><span class="v2-mini-hanko">能勢<br>職印</span></td>
                    </tr>
                    <tr>
                      <td><strong>ST-26-105</strong></td>
                      <td><span class="v2-tag-pill v2-tag-lease">10/11/13 受託管理</span></td>
                      <td>練馬区豊玉北 1棟マンション<br><span style="font-size:10.5px; color:#666;">オーナー: 佐藤資産管理様 (全18戸)</span></td>
                      <td><strong>[管理総賃料Tier-M・脱敏済]</strong></td>
                      <td>13-2 家賃入金消込完<br><span style="color:#1e6b45; font-weight:700;">✓ 11-8 302号室修繕検収済</span></td>
                      <td>13-6 月次収支精算書作成<br><span style="color:#1e6b45; font-weight:700;">R05賃貸管理＋R06経理確認</span></td>
                      <td>10-12 更新契約2件・13-8敷金照合<br><span style="font-size:10px; color:#666;">(※10-18定期報告書は省略)</span></td>
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
              <span class="v2-frame-title">顧客赤字6大専項 精密抽斗 (30% Folio)</span>
              <span class="v2-frame-badge">REQ-SP-01〜06</span>
            </div>

            <div class="v2-folio-tabs">
              <button type="button" class="v2-folio-tab-btn active" data-folio="folio-1">壱: 02-4/7 自主確認</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-2">弐: 02-9 車両予約表</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-3">参: 07-13 宅建契約書</button>
              <button type="button" class="v2-folio-tab-btn" data-folio="folio-4">肆: 03-17 定期挨拶</button>
            </div>

            <!-- 抽斗 壱：担当自主確認チェックリスト (REQ-SP-01: 02-4 & 02-7) -->
            <div class="v2-folio-pane active" id="folio-1">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-01】02-4 見積書 ＆ 02-7 契約必要書類「担当者自分確認」Checklist
              </div>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>02-4 見積書・05-7 初期費用明細確認</strong>：「× 担者自分確認」反映—仲介手数料・登記・保証料・火災保険の算定を営業担当自身が点検済</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>02-7 契約必要書類Checklist確認</strong>：「これ会社チェックリストを作って、担者自分で確認ほうがいい」反映—登記・本人確認・印鑑証明完備</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>02-13 決済・引渡日変更の自主調整</strong>：「× 営業自分」反映—スケジュール変更時は営業担当が直接各所へ連絡・確定</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>01-9, 10 銀行融資・借入条件双軌確認</strong>：「担当自分確認 / また部長確認」反映—担当営業確認および部長承認の双軌ステータス記録</span>
              </label>
            </div>

            <!-- 抽斗 弐：案内車両予約時間表 (REQ-SP-02: 02-9 & 16-11) -->
            <div class="v2-folio-pane" id="folio-2">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-02】02-9 案内車両 予約時間表（「時間表作って、みんな予約制で」）
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🚗 社用車 1号 (Alphard · 16-11車両台帳連動)</strong>
                <span style="color:#1e6b45; font-weight:700;">09:00-13:00 予約済：小林 (03-7 神田錦町ビル内見)</span>
                <span style="color:#1d4ed8; font-weight:700;">13:00-17:00 予約済：佐藤 (03-7 六本木レジデンス案内)</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🚙 社用車 2号 (Lexus LS500h · 16-11車両台帳連動)</strong>
                <span style="color:#1e6b45; font-weight:700;">13:00-15:00 予約済：小林 (04-17 板橋戸建 引渡前確認)</span>
                <span style="color:#666;">15:00-20:00 空車（全員セルフ予約可能・店長調整不要）</span>
              </div>
              <button type="button" class="v2-switch-btn active" onclick="window.switchSentisTopology('C')" style="width:100%; margin-top:4px; justify-content:center;">
                ➔ 拓扑C（09:00-20:00 車両＆重説予約タイムテーブル）へ切替
              </button>
            </div>

            <!-- 抽斗 参：宅建士 重説・契約書作成スタジオ (REQ-SP-03: 02-8 & REQ-SP-04: 07-13, 08-1〜5) -->
            <div class="v2-folio-pane" id="folio-3">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-03/04】07-13 宅建士「契約書・重説作成」＆ 02-8「直接重説日程確認」
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>📜 07-13 契約書作成 ＆ 08-1〜5 調査整理・草案作成（宅建士専管）</strong>
                <span>対象：ST-26-101 神田錦町ビル（専任宅建士：能勢 秀樹）</span>
                <span style="color:#b82c2c; font-weight:700;">状態：08-1不足書類なし・07-3/4 契約書と重説の無矛盾検証済（08-6草案回付は廃止）</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>🤝 02-8 営業担当 ⇄ 宅建士 重説日時ダイレクト予約</strong>
                <span>「担者から直接宅建確認ほうがいい」反映：11/06 14:00 対面重説（小林 ⇄ 能勢 直接確定）</span>
              </div>
            </div>

            <!-- 抽斗 肆：03-17 定期顧客あいさつCRM & 12/13/14 経理税務 (REQ-SP-05) -->
            <div class="v2-folio-pane" id="folio-4">
              <div style="font-size:11.5px; color:var(--v2-gold); font-weight:700;">
                【REQ-SP-05】03-17「定期的お客様あいさつする」CRM ＆ 12/13/14 経理税務
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>💌 03-17 定期顧客あいさつサイクル（営業担当リマインダー）</strong>
                <span>・高橋 誠一 様（引渡1周年）：年賀状・お中元/お歳暮・近隣相場ご挨拶</span>
                <span>・陳 様（引渡半年）：19-10 国内管理連絡・14-4 税理士源泉徴収フォロー</span>
              </div>
              <div class="v2-check-row" style="flex-direction:column;">
                <strong>💴 12/13/14 経理・オーナー精算・税理士窓口連携</strong>
                <span>・12-10 成約歩合計算完 / 12-18 電帳法保存完 / 14-3 インボイス適格請求書確認済</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           【拓扑 C】上下双层分屏 + 底部全宽 09:00-20:00 案内車両予約時間表(02-9) & 宅建重説直約軸(02-8)
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-C">
        <!-- 上層：3列 Bento 業務カード -->
        <div class="v2-topo-c-upper">
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">I. 03 内見手配・鍵貸出(03-8/10)・車両予約(02-9)</span>
              <span class="v2-frame-badge">R03 総合営業</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・10:00 神田錦町ビル</strong>：03-7 内見・16-10 鍵貸出記録済（担当：小林 / 社用車1号）</div>
              <div><strong>・13:00 板橋中丸町戸建</strong>：04-17 引渡前現地確認・03-10 戸締り返却（担当：小林 / 社用車2号）</div>
              <div><strong>・13:00 六本木レジデンス</strong>：05-13 入居時傷確認・05-14 鍵引渡（担当：佐藤 / 社用車1号）</div>
            </div>
          </div>

          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">II. 01-9,10 銀行融資・借入「担当/部長双軌確認」</span>
              <span class="v2-frame-badge">REQ-SP-06</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・SMBC 融資 (神田錦町・融資枠Tier-S)</strong>：<span style="color:#1e6b45; font-weight:700;">[担当自分確認: 済] [部長確認: 済]</span></div>
              <div><strong>・みずほ本審査 (板橋戸建・融資枠Tier-A)</strong>：<span style="color:#1e6b45; font-weight:700;">[担当自分確認: 済] [部長確認: 済]</span></div>
              <div><strong>・非居住者決済 (銀座商業・融資枠Tier-SS)</strong>：<span style="color:#b45309; font-weight:700;">[担当自分確認: 済] [部長確認: 本日決裁]</span></div>
            </div>
          </div>

          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">III. 03-17「定期的お客様あいさつする」予定表</span>
              <span class="v2-frame-badge">REQ-SP-05</span>
            </div>
            <div class="v2-washi-sheet" style="font-size:12px; line-height:1.65;">
              <div><strong>・引渡1ヶ月挨拶 (03-16/17)</strong>：世田谷区 佐々木様（入居後状況お伺い・近況ヒアリング）</div>
              <div><strong>・引渡1周年挨拶 (03-17)</strong>：港区 高橋様（1周年ご挨拶・資産価値レポート送付）</div>
              <div><strong>・季節定期挨拶 (03-17)</strong>：既契約VIP顧客 48名（年賀状・暑中見舞い・お中元/お歳暮）</div>
            </div>
          </div>
        </div>

        <!-- 下層：全幅 09:00〜20:00 案内車両予約時間表(02-9) ＆ 宅建重説直接スケジュール軸(02-8) -->
        <div class="v2-horology-frame">
          <div class="v2-frame-header">
            <div>
              <span class="v2-frame-title">02-9 案内車両 予約時間表 ＆ 02-8 宅建士 重要事項説明ダイレクト予約軸 (Topology C · 09:00 - 20:00)</span>
              <div style="font-size:11px; color:var(--v2-text-sub); margin-top:2px;">
                ※ 顧客赤字原典：「02-9 車両：時間表作って、みんな予約制で」「02-8 重説日時：これは担者から直接宅建確認ほうがいい」— 空き枠クリックで即時予約
              </div>
            </div>
            <span class="v2-frame-badge">REQ-SP-02 / 03</span>
          </div>

          <div class="v2-washi-sheet">
            <div class="v2-master-table-wrap">
              <table class="v2-chronometer-table">
                <thead>
                  <tr>
                    <th style="width:185px;">車両(16-11) / 宅建士(07)</th>
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
                    <td><strong>🚗 社用車 1号 (Alphard)</strong><br><span style="font-size:10px; color:#666;">品川300 あ 18-01 (16-11管理)</span></td>
                    <td><div class="v2-slot-booked">予約済: 小林 (03-7 神田案内)</div></td>
                    <td><div class="v2-slot-booked">予約済: 小林 (08-2 現地調査)</div></td>
                    <td><div class="v2-slot-booked">予約済: 佐藤 (03-7 六本木内見)</div></td>
                    <td><div class="v2-slot-booked">予約済: 佐藤 (05-13 入居確認)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車1号')">＋ 空車・セルフ予約</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車1号')">＋ 空車・セルフ予約</td>
                  </tr>
                  <tr>
                    <td><strong>🚙 社用車 2号 (LS500h)</strong><br><span style="font-size:10px; color:#666;">品川300 さ 24-08 (16-11管理)</span></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・セルフ予約</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・セルフ予約</td>
                    <td><div class="v2-slot-booked">予約済: 小林 (04-17 板橋確認)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・セルフ予約</td>
                    <td><div class="v2-slot-booked">予約済: 阿部 (19-2 海外顧客送迎)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車2号')">＋ 空車・セルフ予約</td>
                  </tr>
                  <tr>
                    <td><strong>🚐 社用車 3号 (Crown)</strong><br><span style="font-size:10px; color:#666;">品川300 た 09-12 (16-11管理)</span></td>
                    <td><div class="v2-slot-booked">予約済: 高橋 (10-11 管理巡回)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・セルフ予約</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・セルフ予約</td>
                    <td><div class="v2-slot-booked">予約済: 高橋 (10-14 退去立会)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・セルフ予約</td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '社用車3号')">＋ 空車・セルフ予約</td>
                  </tr>
                  <tr>
                    <td><strong>📜 専任宅建士: 能勢 秀樹</strong><br><span style="font-size:10px; color:#b82c2c;">02-8 営業⇄宅建士 直接重説予約</span></td>
                    <td><div class="v2-slot-jusetsu">08-1〜4 登記・役所調査整理</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '02-8 宅建重説直約')">＋ 02-8 重説を直接予約</td>
                    <td><div class="v2-slot-jusetsu">07-5 対面重説: 神田 (小林直約)</div></td>
                    <td><div class="v2-slot-jusetsu">07-13 契約書作成・07-7 記名押印</div></td>
                    <td><div class="v2-slot-jusetsu">07-8 IT重説: 陳様 (小林直約)</div></td>
                    <td class="v2-slot-free" onclick="window.bookSentisSlot(this, '02-8 宅建重説直約')">＋ 02-8 重説を直接予約</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================================================================
           【拓扑 B】三欄精密時計台帳ワークベンチ (左250px 7子系統ツリー + 中1fr 動的台帳 + 右360px 07-13宅建士スタジオ)
           ==================================================================== -->
      <section class="v2-topology-stage" id="v2-stage-B">
        <div class="v2-topo-b-grid">
          <!-- 左欄：顧客フィードバック反映・7大業務サブシステム（06現在なし・17いらない除外済） -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">全288項目 業務区分ツリー</span>
              <span class="v2-frame-badge">06/17除外済</span>
            </div>
            <ul class="v2-stage-tree-list" id="v2TopoBTreeList">
              <li class="v2-stage-tree-item active" data-tree-key="cat-04-05" onclick="window.switchDossierFromTree('cat-04-05', this)">
                <span>04 売買 ＆ 05 賃貸一貫 (02-7自査)</span><span>R03</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-03" onclick="window.switchDossierFromTree('cat-03', this)">
                <span>03 内見・02-9車両・03-17定期挨拶</span><span>R03</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-07-08" onclick="window.switchDossierFromTree('cat-07-08', this)">
                <span>07 宅建士・07-13契約作成・08調査</span><span>R04</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-09-19-20" onclick="window.switchDossierFromTree('cat-09-19-20', this)">
                <span>09 REINS広告・19 海外・20 士業</span><span>R03</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-10-11-13" onclick="window.switchDossierFromTree('cat-10-11-13', this)">
                <span>10 賃貸管理・11 修繕・13 精算</span><span>R05</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-12-14" onclick="window.switchDossierFromTree('cat-12-14', this)">
                <span>12 経理収支・歩合 ＆ 14 税理士</span><span>R06</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-15-16-18" onclick="window.switchDossierFromTree('cat-15-16-18', this)">
                <span>15 人事・16 総務鍵車両・18 権限</span><span>R07</span>
              </li>
              <li class="v2-stage-tree-item" data-tree-key="cat-01-02" onclick="window.switchDossierFromTree('cat-01-02', this)">
                <span>01 経営決裁・02 店長・融資双軌</span><span>R01/02</span>
              </li>
            </ul>
            <div style="margin-top:8px; padding:6px 8px; border-radius:3px; background:rgba(200,50,50,0.12); border:1px solid rgba(200,50,50,0.3); font-size:10.5px; color:var(--v2-text-sub);">
              ❌ <strong>顧客赤字により除外済 (Out-of-Scope)</strong>：<br>
              ・<code>06 物件仕入れ</code>（「現在なし」）<br>
              ・<code>17 コンプライアンス専任</code>（「いらない」）<br>
              ・<code>08-6 草案回付 / 08-14 / 10-18 / 19-4〜7</code>
            </div>
          </div>

          <!-- 中欄：左欄ツリー選択に応じてリアルタイム切替される動的ワークベンチ -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title" id="v2TopoBCenterTitle">04 売買営業(全20項) ＆ 05 賃貸営業(全16項) 総合一貫管理</span>
              <span class="v2-frame-badge">Topology B · 動的連動</span>
            </div>
            <div class="v2-washi-sheet" style="display:flex; flex-direction:column; gap:10px;">
              <div id="v2TopoBCenterDesc" style="padding:8px 10px; background:var(--v2-card-inlay-alt); border-left:3px solid #1e6b45; font-size:12px;">
                【顧客赤字反映】第4頁「③と④おなじ営業担当のこと」・第5頁「实际中，营业租赁和买卖都做」・02-7「会社チェックリストを作って、担者自分で確認」・02-8「担者から直接宅建確認」。
              </div>

              <div class="v2-master-table-wrap">
                <table class="v2-master-table" style="min-width:500px;">
                  <thead>
                    <tr>
                      <th>原表番号・区分</th>
                      <th>執行ロール</th>
                      <th>顧客赤字フィードバック反映仕様・実務内容</th>
                      <th>ステータス</th>
                    </tr>
                  </thead>
                  <tbody id="v2TopoBCenterBody">
                    <!-- 初期描画は cat-04-05 -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 右欄：専任宅建士 08-1〜5調査整理・07-13契約書作成・07-7記名押印 一体スタジオ -->
          <div class="v2-horology-frame">
            <div class="v2-frame-header">
              <span class="v2-frame-title">07-13 宅建士 契約書・重説スタジオ</span>
              <span class="v2-frame-badge">R04 宅建士専管</span>
            </div>
            <div class="v2-washi-sheet" style="display:flex; flex-direction:column; gap:8px; font-size:12px;">
              <div style="font-weight:700; color:#b82c2c;">
                📜 08-1〜4 調査整理 ➔ 07-13 契約書・重説作成 ➔ 07-7 記名押印
              </div>
              <div style="font-size:11.5px; color:#444; line-height:1.5;">
                ※ 顧客赤字指示：「07-13 契約書作成（手書き追加）」「08-1〜5は宅建士へ統合（08-6草案回付は×抹消）」「02-8 重説日時は担当から直接宅建確認」
              </div>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>08-1〜4 必要/不足書類一覧・登記/役所/管理調査整理</strong>：当事者氏名・住所・法人名表記一致(08-3) 確認完了</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>07-13 契約書作成 ＆ 08-5 重説草案入力</strong>：宅建士 能勢 秀樹 が直接作成（08-6 アシスタント回付フロー廃止）</span>
              </label>
              <label class="v2-check-row">
                <input type="checkbox" checked>
                <span><strong>07-3, 4 重説と調査資料・契約書間の無矛盾点検</strong>：相違ゼロ確認済・07-7 法定記名押印・交付準備完了</span>
              </label>
              <button type="button" class="v2-switch-btn active" id="v2TakkenSealBtn" onclick="window.switchSentisTopology('paper')" style="width:100%; margin-top:4px; justify-content:center;">
                ➔ A4公文帳票ビューで 07-7 記名押印を実行
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderTopoBCenter(treeKey) {
    const data = TOPO_B_TREE_DATA[treeKey] || TOPO_B_TREE_DATA['cat-04-05'];
    const titleEl = document.getElementById('v2TopoBCenterTitle');
    const descEl = document.getElementById('v2TopoBCenterDesc');
    const bodyEl = document.getElementById('v2TopoBCenterBody');

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.note;
    if (bodyEl) {
      bodyEl.innerHTML = data.rows.map(r => `
        <tr>
          <td><strong>${r.code}</strong></td>
          <td>${r.role}</td>
          <td>${r.mode}</td>
          <td><span class="v2-tag-pill ${r.tag}">${r.status}</span></td>
        </tr>
      `).join('');
    }
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

    const bannerEl = document.getElementById('v2RolePermissionBanner');
    if (bannerEl) {
      bannerEl.textContent = prof.badge;
    }

    const takkenBtn = document.getElementById('v2TakkenSealBtn');
    if (takkenBtn) {
      if (roleCode === 'R04' || roleCode === 'R01') {
        takkenBtn.textContent = '➔ 【宅建士/代表権限】A4公文帳票で 07-7 記名押印を実行';
      } else {
        takkenBtn.textContent = '➔ A4公文帳票を閲覧（07-13起案・07-7押印は R04宅建士 専管）';
      }
    }
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

  window.switchDossierFromTree = function (treeKey, itemEl) {
    document.querySelectorAll('.v2-stage-tree-item').forEach(li => li.classList.remove('active'));
    if (itemEl) itemEl.classList.add('active');
    renderTopoBCenter(treeKey);
    const data = TOPO_B_TREE_DATA[treeKey];
    if (data && data.paneId && typeof window.switchModule === 'function') {
      window.switchModule(data.paneId);
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    const workbench = document.querySelector('.office-body-workbench');
    const paperSheet = document.querySelector('.dossier-paper-sheet');
    if (workbench && paperSheet && !document.getElementById('v2CommandBar')) {
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.maxWidth = '100%';
      container.style.minWidth = '0';
      container.style.boxSizing = 'border-box';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.gap = '12px';
      container.innerHTML = buildV2WorkbenchHTML();
      workbench.insertBefore(container, paperSheet);
    }

    renderTopoBCenter('cat-04-05');

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
