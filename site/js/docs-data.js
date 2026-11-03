/**
 * Vanguard Platform · Deliverables Data Store
 * Case: sentis-crm-system (株式会社センティス)
 * 
 * 包含官方交付文档 01~04 及 CI/VI 品牌资产包全量结构化内容
 */

const documentStore = {
  doc01: {
    id: "DEL-03",
    code: "DEL-03",
    category: "SPECIFICATION / DOC",
    title: "01. プロジェクト概要及び業務課題定義書",
    subtitle: "事業背景・5大競争優位性・高人効モデル及びシステム基本理念",
    badgeClass: "badge-doc",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">DEL-03 ｜ 策定仕様書</div>
          <h1>01. プロジェクト概要及び業務課題定義書</h1>
          <p class="doc-lead-desc">
            株式会社センティス（SENTIS）の創業計画書、及び国内不動産売買仲介（実需・投資）を主軸とした次世代基幹システムの基本設計理念。
          </p>
          <div class="doc-meta-table">
            <div><strong>案件标识：</strong><code>sentis-crm-system</code></div>
            <div><strong>所属分類：</strong>製品企画・業務アーキテクチャ</div>
            <div><strong>策定担当：</strong>Vanguard 策定評議会</div>
            <div><strong>状態：</strong>詳細設計査閲段階 (Design Review v0.9)</div>
          </div>
        </div>

        <h2>1. 商業背景と株式会社センティス（SENTIS）のポジショニング</h2>
        <p>株式会社 SENTIS は令和8年（2026年）5月に設立された、日本国内優良不動産売買仲介（実需・投資・住宅ローン実務）を主軸とし、海外投資家向け越境コンサルティングにも対応する精鋭不動産プロフェッショナルファームです。</p>
        <ul>
          <li><strong>代表取締役：</strong>阿部 翔平（大手不動産流通企業 法人営業責任者として大規模取引・優良物件仲介を多数成約、専任宅地建物取引士資格保有）。</li>
          <li><strong>所在地：</strong>東京都千代田区神田須田町 2-3-12 12KANDA 705。</li>
          <li><strong>事業領域：</strong>宅地建物取引業（国内売買仲介）、資産運用サポート、海外投資家向け不動産コンサルティング。</li>
          <li><strong>ブランドスローガン：</strong>「不動産提案に確かな指針を。」（羅針盤とS字シンボル）。</li>
        </ul>

        <h2>2. 5大コア競争優位性と中期事業展開ロードマップ</h2>
        <table>
          <thead>
            <tr>
              <th>事業期別</th>
              <th>組織体制</th>
              <th>業務品質目標</th>
              <th>主要戦略重点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>第 1 期</strong></td>
              <td><strong>2 名体制</strong></td>
              <td>成約プロセス標準化の徹底推進</td>
              <td>小紅書集客基盤の確立、成約SOPの定着、ミスゼロ管理</td>
            </tr>
            <tr>
              <td><strong>第 2 期</strong></td>
              <td><strong>3 名体制</strong></td>
              <td>顧客満足度・再成約率 向上</td>
              <td>優良投資物件仲介網の拡大、法人紹介制度運用、売買台帳高度化</td>
            </tr>
            <tr>
              <td><strong>第 3 期</strong></td>
              <td><strong>5 名体制</strong></td>
              <td>海外アライアンス網 確立</td>
              <td>多言語対応強化、組織的規模拡大、高額越境決済パイプライン自立化</td>
            </tr>
          </tbody>
        </table>

        <h2>3. 内部管理システム Sentis Realty Core への要請</h2>
        <p>少人数精鋭体制において高品質な取引を着実に完遂するためには、手作業のリマインドや紙束捜索を根絶し、以下の4本柱を担保する中枢が必要です：</p>
        <ol>
          <li><strong>リードから決済までの全工程可視化：</strong>事前審査（ローン事前確認）から買付申込、契約、金消、残金決済までの厳格なフェーズ管理。</li>
          <li><strong>手戻りゼロの動的チェックリスト：</strong>物件属性・売主属性に応じた必要書類（重説部数、法定公文書、管理会社引渡届）の自動判定。</li>
          <li><strong>明確なシステム境界と責任分離：</strong>内部業務の確実な遂行支援に特化し、金融機関審査や法務局登記、専任宅建士の法的判断を尊重する安全設計。</li>
          <li><strong>純静的・ゼロサーバー運用：</strong>サーバー保守費や障害リスクを排除し、Vanguard 標準に準拠した即時立ち上げと高セキュリティを実現。</li>
        </ol>
      </div>
    `
  },

  doc02: {
    id: "DEL-04",
    code: "DEL-04",
    category: "SOP / WORKFLOW",
    title: "02. 不動産売買標準業務フロー設計書",
    subtitle: "物件調査・重説・契約から司法書士決済・所有権移転までの全7段階標準実務SOP及び二重分岐処理基準",
    badgeClass: "badge-workflow",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">DEL-04 ｜ 業務SOP</div>
          <h1>02. 不動産売買標準業務フロー設計書</h1>
          <p class="doc-lead-desc">
            《売買契約の流れ》《売買契約流れ ローン利用》《宅地建物取引業法》及び反社・AML審査実務を前提とした標準実務SOP設計（査閲案）。
          </p>
          <div class="doc-meta-table">
            <div><strong>案件标识：</strong><code>sentis-crm-system</code></div>
            <div><strong>管理区分：</strong>標準業務手順書（SOP）</div>
            <div><strong>適用法令：</strong>宅建業法35条・37条・49条実務対応</div>
            <div><strong>状態：</strong>詳細設計査閲段階 (Design Review v0.9)</div>
          </div>
        </div>

        <h2>1. 全体7段階エンドツーエンド実務フロー (E2E Transaction Lifecycle)</h2>
        <p>国内不動産売買仲介（実需・投資用）を主軸とし、宅地建物取引業法第35条・37条及び金融機関・司法書士実務に即した手戻りゼロの全7段階SOP：</p>
        <ul>
          <li><strong>フェーズ 1（反響相談・資金計画・買付申込）：</strong>ポータル反響受付、資金計画策定、提携金融機関ローン事前審査（仮承認取得必須）、買付証明書（購入申込書）受領・売主受諾確認。</li>
          <li><strong>フェーズ 2（物件・権利・公的規制の徹底調査）：</strong>法務局登記簿（全部事項証明書）・公図・地積測量図精査、役所調査（都市計画・道路種別・上下水道・ガス埋設管照合）、マンション管理規約・修繕履歴調査。</li>
          <li><strong>フェーズ 3（重要事項説明書作成・第35条重説実施）：</strong>専任宅建士による重説ドラフト作成・点検、水防法ハザードマップ確認、宅建士証提示による対面またはIT重説の実施、専任宅建士記名押印。</li>
          <li><strong>フェーズ 4（売買契約締結・手付金授受）：</strong>宅建業法第37条書面審査、売買契約締結、手付金受領・領収証交付、住宅ローン特約期日（解除期限）及び残金決済期日の確定。</li>
          <li><strong>フェーズ 5（資金決済準備・金融機関 金消契約）：</strong>住宅ローン本審査申請（海外買主はAML送金手配）、新住所住民票（マイナンバー無記載厳守）・印鑑証明書回収、金融機関窓口での金銭消費貸借契約締結。</li>
          <li><strong>フェーズ 6（司法書士照合・残金決済実行）：</strong>司法書士による移転登記・抹消登記関係書類原本精査、三者精算明細書（売主・買主・諸費用）照合、融資実行・残代金着金確認、領収証交付。</li>
          <li><strong>フェーズ 7（所有権移転登記申請・鍵引渡・法定帳簿備置）：</strong>法務局への登記申請、固定資産税評価証明書原本引渡、実物鍵引渡・引渡確認証締結、宅建業法第49条法定帳簿の調印・法定備置。</li>
        </ul>

        <h2>2. 顧客属性別（国内在住 vs 海外非居住）確認対照表</h2>
        <table>
          <thead>
            <tr>
              <th>確認項目</th>
              <th>ルートA：国内在住買主（ローン利用）</th>
              <th>ルートB：海外非居住買主（海外全額送金）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>身元確認書類</strong></td>
              <td>在留カード、特別永住者証明書、運転免許証、健康保険証</td>
              <td>旅券（パスポート原本＋カラー写し、有効期限6ヶ月以上）</td>
            </tr>
            <tr>
              <td><strong>住所・印鑑証明</strong></td>
              <td>新住所住民票（<strong>マイナンバー無記載厳守</strong>）、印鑑証明書</td>
              <td>現地公証役場の公証書・署名声明書（日本語訳文添付）［書式確認中］</td>
            </tr>
            <tr>
              <td><strong>事前資金確認</strong></td>
              <td>国内提携銀行住宅ローン事前審査承認書</td>
              <td>海外口座残高証明書（英文または日文訳付）＋送金可能枠確認</td>
            </tr>
            <tr>
              <td><strong>資金決済手段</strong></td>
              <td>都市銀行/信託銀行住宅ローン融資実行（融資利用特約期日管理）</td>
              <td>海外銀行からの外貨電信送金（外国送金計算書保管、AML着金猶予2~4週）</td>
            </tr>
            <tr>
              <td><strong>重要事項説明</strong></td>
              <td>対面またはIT重説（宅建士証提示・録画保全）</td>
              <td>IT重説（通訳介在・書面事前航空便郵送・事前受領書確認必須）</td>
            </tr>
            <tr>
              <td><strong>源泉徴収・税務</strong></td>
              <td>原則買主側源泉不要（居住者要件）</td>
              <td>非居住者売却時の源泉所得税（10.21%）控除要否を税理士確認</td>
            </tr>
          </tbody>
        </table>

        <h2>3. 決算日逆算マイルストーン管理（リバースタイムライン）</h2>
        <div class="doc-code-preview">
[D-14日] 新築一戸建て・リフォーム完工現場の立会内覧（買主・売主・仲介同席）
[D-10日] 管理会社へ区分所有者変更届・管理費口座振替用紙の郵送手配依頼【強提醒】
[D-07日] 司法書士へ登記費用見積書・抹消登記書類の確認催促、買主実印確認
[D-02日] 銀行送信用三方支払明細書の提出及び融資実行依頼最終確認
[D-01日] 銀行ブース予約確認、着金電信確認書のスタンバイ
[D-当日] 銀行ブースにて着金確認、領収書交付、鍵および評価証明書原本引渡
        </div>

        <h2>4. 国際取引・越境資金決済におけるコンプライアンス管理規程（犯収法・外為法・AML/eKYC）</h2>
        <p>海外非居住買主が介在する取引においては、日本金融規制および外為法令の厳格遵守が必須であり、以下の法定手順を業務SOPに組み込みます：</p>
        <table>
          <thead>
            <tr>
              <th>法令・規制枠組み</th>
              <th>義務要件・法定手続</th>
              <th>実務アクション・システム統制</th>
              <th>保存・履行期限</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>犯罪収益移転防止法<br>（特定事業者義務）</strong></td>
              <td>厳格な本人特定事項確認（KYC/eKYC）、法人実質的支配者（25%超）の特定</td>
              <td>パスポート原本高精細PDF照合、公証人宣誓書（アポスティーユ付）徴収、取引目的の書面確認</td>
              <td>取引終了日より<strong>法定7年間保存</strong></td>
            </tr>
            <tr>
              <td><strong>外為法 第55条の3<br>（対内直接投資等）</strong></td>
              <td>非居住者による本邦不動産取得の事後報告義務（投資用・賃貸用・法人取得等）</td>
              <td>日本銀行経由・財務大臣宛て「本邦にある不動産の取得に関する報告書」提出要否判定（居住自用除外の該当性審査）</td>
              <td>取得日より<strong>20日以内</strong>に提出</td>
            </tr>
            <tr>
              <td><strong>国際制裁・PEPs審査<br>（OFAC・外務省告示）</strong></td>
              <td>テロ資金凍結対象者・外国重要公職者（PEPs）の取引前スクリーニング</td>
              <td>制裁リストデータベース照合、外国PEPs該当時の資産形成経緯および資金出所特別確認（EDD）</td>
              <td>契約締結前の必須チェック</td>
            </tr>
            <tr>
              <td><strong>銀行受款AML審査<br>（マネロン防止）</strong></td>
              <td>送金人名義と買主名義の完全一致（第三者送金排除）、資金清算バッファ確保</td>
              <td>海外電信送金（SWIFT MT103）事前確認、国内受款銀行における外為照合猶予として決済期日に30日以上のバッファ設定</td>
              <td>契約書決済条項への織り込み</td>
            </tr>
            <tr>
              <td><strong>非居住者源泉所得税<br>（所得税法212条）</strong></td>
              <td>非居住者売主からの購入時における10.21%源泉徴収および税務署納付義務</td>
              <td>買主（源泉徴収義務者）への控除指導、税理士連携による納付書の事前作成と控除後代金決済</td>
              <td>支払月の<strong>翌月10日</strong>まで</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  doc03: {
    id: "DEL-05",
    code: "DEL-05",
    category: "ARCHITECTURE / DOC",
    title: "03. 次世代システム要件定義及びアーキテクチャ設計書",
    subtitle: "5大基幹モジュール・動的Checklist判定エンジン・システム境界マトリクス及び技術基盤",
    badgeClass: "badge-doc",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">DEL-05 ｜ アーキテクチャ</div>
          <h1>03. 次世代システム要件定義及びアーキテクチャ設計書</h1>
          <p class="doc-lead-desc">
            Sentis Realty Core の5大基幹モジュール定義、物件・売主・買主属性に応じた動的スマートChecklist判定エンジン、及びシステム管轄境界の設計仕様。
          </p>
          <div class="doc-meta-table">
            <div><strong>システム呼称：</strong>Sentis Realty Core</div>
            <div><strong>稼働モデル：</strong>Vanilla Web (Zero-Build)</div>
            <div><strong>配信方式：</strong>GitHub Pages ＋ 独自ドメイン (CNAME)</div>
            <div><strong>状態：</strong>詳細設計査閲段階 (Design Review v0.9)</div>
          </div>
        </div>

        <h2>1. システム範囲と能力境界マトリクス (Scope & Boundary Matrix)</h2>
        <p>工程の確実な落地とコンプライアンス遵守のため、システムの責任範囲と外部専門家の管轄を明確に定義：</p>
        <table>
          <thead>
            <tr>
              <th>対象領域</th>
              <th>システムカバー範囲 (In-Scope · 内部管轄)</th>
              <th>外部協調・対象外範囲 (Out-of-Scope · 外部機関連携)</th>
              <th>境界連携メカニズム</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>顧客・案件台帳</strong></td>
              <td>案件作成、属性分類、意向進捗追跡、重要フラグ管理</td>
              <td>外部SNS（小紅書/微信/WhatsApp）直接API直結</td>
              <td>担当者が反響要約及び面談記録を手動入力</td>
            </tr>
            <tr>
              <td><strong>住宅ローン</strong></td>
              <td>事前審査・本審査ステータス追跡、特約解除期日倒排アラート</td>
              <td>都市銀行内部与信スコアリング・信用照会直結</td>
              <td>銀行からの承認書受領ステータスを画面に反映</td>
            </tr>
            <tr>
              <td><strong>権利・重説</strong></td>
              <td>動的Checklist、重説必要部数計算、法令要点備忘チェック</td>
              <td>法務局登記情報自動スクレイピング、官公庁直結申請</td>
              <td>専任宅建士が原本登記事項証明書を精査し結果を入力</td>
            </tr>
            <tr>
              <td><strong>契約・決済</strong></td>
              <td>印紙税額階梯計算、三方精算明細書テンプレート出力</td>
              <td>不可撤回の法的拘束力を持つ電子署名・法的保証責任</td>
              <td>専任宅建士による記名押印及び対面/IT重説の実施</td>
            </tr>
            <tr>
              <td><strong>AI補佐官</strong></td>
              <td>重説35条点検アシスト、水防法注意喚起、用語ガイダンス</td>
              <td>全自動法務責任免責判定、無人契約ドラフト自動締結</td>
              <td>内部担当者の執務補助に限定、専任宅建士が最終確認</td>
            </tr>
          </tbody>
        </table>

        <h2>2. 主要5大コアモジュール仕様</h2>
        <ul>
          <li><strong>商談・反響受付台帳 (Consult Hub)：</strong>ポータル・小紅書リードの即時登録、買主属性（国内ローン/海外全額）ルーティング。</li>
          <li><strong>物件台帳・登記原簿 (Property Ledger)：</strong>法務局ATBB登記情報連携、持分・私道負担・建蔽率・容積率管理。</li>
          <li><strong>売買契約・重説審査 (Contract & Legal)：</strong>第35条重要事項説明書ドラフト、ハザードマップ水防法条項検証、専任宅建士押印管理。</li>
          <li><strong>住宅ローン金融連携 (Mortgage Monitor)：</strong>事前/本審査進捗ステータス追跡、融資利用特約期日（D-Day）アラート。</li>
          <li><strong>残金決済・引渡清算 (Settlement Workbench)：</strong>三方清算計算書作成、領収証受領書式及び法定帳票照合。</li>
        </ul>

        <h2>3. 動的スマートChecklist判定ルール</h2>
        <table>
          <thead>
            <tr>
              <th>判定ルール</th>
              <th>条件フラグ</th>
              <th>自動展開される必須タスク</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ルール 1: 物件種別</strong></td>
              <td>一戸建て（新築/中古）</td>
              <td>完工立ち会い検査日確定、境界標確認、私道通行承諾書点検</td>
            </tr>
            <tr>
              <td></td>
              <td>区分所有マンション</td>
              <td>管理規約確認、重要事項調査報告書、修繕積立金・管理費振替用紙</td>
            </tr>
            <tr>
              <td><strong>ルール 2: 売主属性</strong></td>
              <td>法人売主（宅建業者等）</td>
              <td>重説・契約書 各3部、インボイス登録番号、手付金保全措置確認</td>
            </tr>
            <tr>
              <td></td>
              <td>個人売主</td>
              <td>重説・契約書 各4部、印鑑証明書（原本照合）、本人確認面談</td>
            </tr>
            <tr>
              <td><strong>ルール 3: 買主居住地</strong></td>
              <td>海外非居住富裕層</td>
              <td>パスポート認証、公証役場宣誓書、AML海外送金着金確認票</td>
            </tr>
        <h2>4. 核心データモデル設計 (Entity-Relationship Data Model)</h2>
        <p>不動産取引ライフサイクル及び宅建業法第49条法定帳簿の追溯要件に基づき、7大コアエンティティを設計：</p>
        <table>
          <thead>
            <tr>
              <th>エンティティ名</th>
              <th>主キー (PK) / 外部キー (FK)</th>
              <th>主要属性・格納項目</th>
              <th>マスキング・個人情報保護 (APPI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>LEAD_CONSULT<br>（顧客・反響台帳）</strong></td>
              <td>PK: lead_id</td>
              <td>氏名、国籍、居住区分（国内/海外）、反響経路（小紅書/ポータル）、KYC状態</td>
              <td>氏名・電話番号・メールアドレス表示時に中間伏せ字</td>
            </tr>
            <tr>
              <td><strong>PROPERTY_MASTER<br>（物件・権利台帳）</strong></td>
              <td>PK: property_id</td>
              <td>物件種別（区分/戸建/土地）、公法制限、管理費・修繕積立金、水防法該当フラグ</td>
              <td>検証用ダミー地番を採用（東京都板橋区本町等）</td>
            </tr>
            <tr>
              <td><strong>CONTRACT_TX<br>（売買契約・重説台帳）</strong></td>
              <td>PK: contract_id<br>FK: lead_id, property_id</td>
              <td>売買代金、手付金額、仲介手数料、重説実施日、融資特約期日、引渡決済日</td>
              <td>専任宅建士・担当者以外に対する代金閲覧制限</td>
            </tr>
            <tr>
              <td><strong>MORTGAGE_CASE<br>（住宅融資台帳）</strong></td>
              <td>PK: mortgage_id<br>FK: contract_id</td>
              <td>金融機関コード、事前審査結果、本審査結果、金消契約日、融資実行予定日</td>
              <td>金融機関審査番号・口座情報の暗号化保持</td>
            </tr>
            <tr>
              <td><strong>SETTLEMENT_RECORD<br>（残金決済清算台帳）</strong></td>
              <td>PK: settlement_id<br>FK: contract_id</td>
              <td>残代金、固都税精算金、司法書士登記報酬、三方支払明細書PDF保管ハッシュ</td>
              <td>銀行送信用確定PDFの改ざん防止ハッシュ付与</td>
            </tr>
            <tr>
              <td><strong>STATUTORY_LEDGER_49<br>（宅建業法第49条法定帳簿）</strong></td>
              <td>PK: ledger_id<br>FK: contract_id</td>
              <td>帳簿調印日時、専任宅建士電子印鑑ハッシュ、法定ロック日時、保存失効日</td>
              <td>調印後完全読取専用（Immutable WORM）、<strong>7年間保存</strong></td>
            </tr>
            <tr>
              <td><strong>EKYC_AML_AUDIT<br>（犯収法・反社監査ログ）</strong></td>
              <td>PK: audit_id<br>FK: lead_id</td>
              <td>パスポート公証書ハッシュ、制裁リスト照合結果、SWIFT着金電文番号、実質支配者情報</td>
              <td>犯収法特定事業者記録として暗号化、監査役のみ全権照合</td>
            </tr>
          </tbody>
        </table>

        <h2>5. RBAC 4級ロール権限マトリクス (Role-Based Access Control)</h2>
        <table>
          <thead>
            <tr>
              <th>業務機能モジュール / 台帳権限</th>
              <th>R1: 専任宅建士</th>
              <th>R2: 仲介営業担当</th>
              <th>R3: 外部司法書士</th>
              <th>R4: 内部監査役</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>顧客反響・案件作成</td>
              <td>閲覧・監理</td>
              <td><strong>全権（作成・更新）</strong></td>
              <td>アクセス権なし</td>
              <td>閲覧・監査</td>
            </tr>
            <tr>
              <td>第35条重要事項説明書 審査</td>
              <td><strong>最終承認・記名押印</strong></td>
              <td>原案作成・情報収集</td>
              <td>権利・登記部分の閲覧</td>
              <td>合規点検</td>
            </tr>
            <tr>
              <td>第37条契約書・特約審査</td>
              <td><strong>最終承認・記名押印</strong></td>
              <td>起草・特約協議</td>
              <td>決済・引渡条項の閲覧</td>
              <td>合規点検</td>
            </tr>
            <tr>
              <td>住宅ローン審査進捗管理</td>
              <td>期日承認</td>
              <td>ステータス更新</td>
              <td>閲覧（抵当権設定用）</td>
              <td>リスク監視</td>
            </tr>
            <tr>
              <td>三方清算支払明細書</td>
              <td>最終承認</td>
              <td>作成・提出</td>
              <td><strong>登記税・報酬額入力</strong></td>
              <td>財務精算確認</td>
            </tr>
            <tr>
              <td>残金決済・引渡立会</td>
              <td>立会確認</td>
              <td>現場進行・領収証交付</td>
              <td><strong>登記申請原本受領</strong></td>
              <td>完了監査</td>
            </tr>
            <tr>
              <td>宅建業法第49条法定帳簿</td>
              <td><strong>調印・帳簿ロック</strong></td>
              <td>閲覧のみ</td>
              <td>アクセス権なし</td>
              <td><strong>7年保存監査</strong></td>
            </tr>
            <tr>
              <td>犯収法 eKYC / AML監査</td>
              <td>最終確認</td>
              <td>証憑収集・提出</td>
              <td>印鑑証明照合</td>
              <td><strong>反社・制裁スクリーニング</strong></td>
            </tr>
          </tbody>
        </table>

        <h2>6. 技術基盤と稼働アーキテクチャの階層分離規約</h2>
        <div class="doc-code-preview">
【フェーズ A: 現行成果物 · Zero Server Runtime Prototype (Design Review v0.9)】
・アーキテクチャ: 純粋 Vanilla Web (HTML5 / CSS3 / ES6)
・稼働層: ブラウザ内ローカルメモリ + SessionStorage / LocalStorage + SameSite=Lax Cookie
・目的: 業務動線の高保真ウォークスルー、動的Checklist判定ロジック検証、費用試算UI即時検証
・ホスティング: GitHub Pages 静的配信 + 独自ドメイン (CNAME)、常駐バックエンド維持費ゼロ
・性質明記: 【UI/UX 概念実証プロトタイプ（Interactive Prototype）】であり、商用本番バックエンドではありません。

【フェーズ B: 本番実装目標 · Target Production Architecture (将来実装規約)】
・フロントエンド: Vanguard Design Tokens 準拠のレスポンシブ業務コンソール
・API/ビジネスロジック: ステートレス RESTful API マイクロサービス、SOP ワークフロー状態機
・データストア: PostgreSQL (RLS 行レベルセキュリティ) + S3 (WORM 追記不能保全)
・法規連携: 専任宅建士デジタル証明書連携、不動産流通標準データ (ATBB/REINS) ゲートウェイ
・監査追跡: 不変性監査ログパイプライン（法定 7 年保管保証）
        </div>

        <h2>7. 個人情報保護（APPI）及び架空シミュレーションデータ方針</h2>
        <p><strong>【合成ダミーデータの使用】</strong><br>
        本システムプロトタイプ及び付属するすべての仕様書に記載されている物件情報（例：東京都板橋区本町マンション等）、当事者氏名（例：能勢 秀樹等）、連絡先、取引金額は、業務要件及び画面動線の検証を目的として編纂された<strong>架空の合成データ（Synthetic Simulation Data）</strong>です。</p>
        <p>本静的成果物は実在の顧客個人情報（PII）や実際の機密取引データを一切保持・送信しておらず、情報漏洩及びソーシャルエンジニアリング攻撃のリスクを構造的に排除しています。</p>
      </div>
    `
  },

  doc04: {
    id: "DEL-06",
    code: "DEL-06",
    category: "ROADMAP / DOC",
    title: "04. 導入展開計画及びプロジェクト推進日程表",
    subtitle: "8週間4段階展開ロードマップ・受入検査基準・研修規程及び緊急切戻し対策",
    badgeClass: "badge-doc",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">DEL-06 ｜ ロードマップ</div>
          <h1>04. 導入展開計画及びプロジェクト推進日程表</h1>
          <p class="doc-lead-desc">
            フェーズ1（基盤仕様確定）からフェーズ4（本番受渡・運用開始）までの8週間マイルストーン展開及び品質保証規程。
          </p>
          <div class="doc-meta-table">
            <div><strong>展開期間：</strong>2026年10月 〜 2026年12月（計8週間・予定）</div>
            <div><strong>査閲責任者：</strong>株式会社センティス 代表取締役 阿部 翔平</div>
            <div><strong>策定総括：</strong>Vanguard 策定評議会</div>
            <div><strong>状態：</strong>詳細設計査閲段階 (Design Review v0.9)</div>
          </div>
        </div>

        <h2>1. 4段階フェーズ別日程表</h2>
        <table>
          <thead>
            <tr>
              <th>フェーズ</th>
              <th>期間</th>
              <th>主要タスク</th>
              <th>受入成果物</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>P1: 基盤仕様確定</strong></td>
              <td>Week 1〜2</td>
              <td>創業計画書照合、SOPフロー文書化、VIロゴ全規格作成、事前審査プロセス確立</td>
              <td>要件定義書 4篇、ブランドロゴキット (DEL-03〜07)</td>
            </tr>
            <tr>
              <td><strong>P2: プロトタイプ構築</strong></td>
              <td>Week 3〜4</td>
              <td>6大台帳画面様板設計、AI補佐官スライドドロワー実装、朱肉押印UI開発</td>
              <td>統合執務画面プロトタイプ (DEL-01, DEL-02)</td>
            </tr>
            <tr>
              <td><strong>P3: 内部試運用</strong></td>
              <td>Week 5〜6</td>
              <td>模擬案件（板橋区物件C等）による実務ウォークスルーテスト、操作性評価</td>
              <td>受入テスト検収書、修正パッチ</td>
            </tr>
            <tr>
              <td><strong>P4: 本稼働・受渡</strong></td>
              <td>Week 7〜8</td>
              <td>GitHub Pages本番ドメイン運用、業務マニュアル整備、運用引き継ぎ</td>
              <td>成果物総覧ポータル正式受渡・運用開始</td>
            </tr>
          </tbody>
        </table>

        <h2>2. 品質保証と切戻し（ロールバック）規程</h2>
        <p>本システムは完全静的ファイル（HTML5 / Vanilla CSS / Vanilla JS）で構成されているため、Gitリビジョン管理により任意のコミット時点へ秒単位でロールバック可能です。外部依存データベースの破損リスクは原理的にゼロとなっています。</p>
        
        <h2>3. 検討中・将来課題協議事項 (Pending Discussions)</h2>
        <ul>
          <li><strong>海外送金AML審査期間：</strong>受取金融機関の海外資金着金チェック猶予期間（通常2〜4週間）の標準設定値確定。</li>
          <li><strong>非居住者源泉税取扱：</strong>非居住者売却時における源泉所得税（10.21%）の買主納付手配SOPと顧問税理士との連携スキーム確立。</li>
        </ul>
      </div>
    `
  },

  docAssets: {
    id: "DEL-07",
    code: "DEL-07",
    category: "ASSET KIT / VI",
    title: "SENTIS 品牌公式 CI/VI 資産パッケージ",
    subtitle: "羅針盤シンボル・公式カラーパレット・全解像度透過PNG及びFavicon素材一覧",
    badgeClass: "badge-assets",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">DEL-07 ｜ ブランド資産</div>
          <h1>SENTIS 品牌公式 CI/VI 資産パッケージ</h1>
          <p class="doc-lead-desc">
            株式会社センティス（SENTIS REALTY CO., LTD.）の企業アイデンティティを構成する公式アセット群です。全ファイル透過PNG・高精細ICOにて配備済です。
          </p>
          <div class="doc-meta-table">
            <div><strong>案件标识：</strong><code>sentis-crm-system</code></div>
            <div><strong>コーポレートカラー：</strong>森林深緑 (#184332) ｜ 公文書墨黒 (#1a1e24)</div>
            <div><strong>シンボル意匠：</strong>羅針盤（Compass）と S字曲線</div>
            <div><strong>配備形式：</strong>透過PNG / Windows ICO / Apple Touch Icon</div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:20px; padding:20px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; margin:24px 0;">
          <img src="./assets/logo/sentis-emblem-512.png" style="width:84px; height:84px; object-fit:contain;" alt="SENTIS 512" />
          <div>
            <div style="font-weight:800; font-size:18px; color:#090d16;">羅針盤エンブレム (The Compass & S-Curve)</div>
            <div style="font-size:13px; color:#64748b; margin-top:4px;">
              確かな航路を指し示す羅針盤針と、SENTISの頭文字「S」を滑らかに融合させた独自意匠。
            </div>
          </div>
        </div>

        <h2>公式アセット一覧・直接プレビュー</h2>
        <table>
          <thead>
            <tr>
              <th>プレビュー</th>
              <th>ファイル名</th>
              <th>規格・寸法</th>
              <th>推奨適用画面・用途</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/sentis-emblem-512.png" style="width:40px; height:40px; object-fit:contain;" alt="512" /></td>
              <td><strong>sentis-emblem-512.png</strong></td>
              <td>512×512 (PNG透過)</td>
              <td>公式公文書、高解像度印刷、Retina大画面看板</td>
              <td><a href="./assets/logo/sentis-emblem-512.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/sentis-emblem-256.png" style="width:32px; height:32px; object-fit:contain;" alt="256" /></td>
              <td><strong>sentis-emblem-256.png</strong></td>
              <td>256×256 (PNG透過)</td>
              <td>システムアバウト画面、中型バナー、案内状</td>
              <td><a href="./assets/logo/sentis-emblem-256.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/apple-touch-icon.png" style="width:32px; height:32px; object-fit:contain;" alt="apple" /></td>
              <td><strong>apple-touch-icon.png</strong></td>
              <td>180×180 (PNG)</td>
              <td>iOS / iPad / Android ホーム画面ブックマーク</td>
              <td><a href="./assets/logo/apple-touch-icon.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/sentis-emblem-64.png" style="width:28px; height:28px; object-fit:contain;" alt="64" /></td>
              <td><strong>sentis-emblem-64.png</strong></td>
              <td>64×64 (PNG透過)</td>
              <td>業務画面上部ヘッダー、サイドバーロゴ</td>
              <td><a href="./assets/logo/sentis-emblem-64.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/sentis-emblem-32.png" style="width:24px; height:24px; object-fit:contain;" alt="32" /></td>
              <td><strong>sentis-emblem-32.png</strong></td>
              <td>32×32 (PNG透過)</td>
              <td>ドロワー標題、コンパクトアイコン</td>
              <td><a href="./assets/logo/sentis-emblem-32.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/favicon.ico" style="width:24px; height:24px; object-fit:contain;" alt="favicon" /></td>
              <td><strong>favicon.ico</strong></td>
              <td>32×32 (Windows ICO)</td>
              <td>ブラウザタブ標準ファビコン</td>
              <td><a href="./assets/logo/favicon.ico" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
            <tr>
              <td style="text-align:center;"><img src="./assets/logo/sentis-logo-full-800w.png" style="max-width:60px; max-height:28px; object-fit:contain;" alt="800w" /></td>
              <td><strong>sentis-logo-full-800w.png</strong></td>
              <td>800×312 (PNG透過)</td>
              <td>正式レターヘッド、契約書表紙見出し</td>
              <td><a href="./assets/logo/sentis-logo-full-800w.png" target="_blank" rel="noopener noreferrer" class="btn-table-asset">開く ↗</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  doc05: {
    id: "DEL-08",
    title: "05. 株式会社 SENTIS 综合业务管理系统要件定义书（基于客户手写反馈精校版 v2.0）",
    content: `
      <div class="doc-content">
        <div class="doc-header-block">
          <div class="doc-badge-pill">CLIENT FEEDBACK &amp; REQUIREMENTS DEFINITION / SPEC-05 (v2.0)</div>
          <h1>株式会社 SENTIS 综合业务管理系统要件定义书（基于客户手写反馈精校版）</h1>
          <p class="doc-lead-desc">
            基于客户在 20 页《业务角色与具体业务清单》（<code>BRW3CEFA529E05C_000414.pdf</code>，共 286 项印刷条目 + 2 项客户手写新增条目 = <strong>288 项业务活动</strong>）上的红色手写批注全面重构。
            完整涵盖：四大核心设计转向、原 20 个细分模块向 7 大实操角色收敛（RBAC）、客户手写批注驱动的六大核心专项要件（<code>REQ-SP-01</code>~<code>06</code>）、七大业务子系统全量映射矩阵（4.1~4.7）、明确排除与裁剪清单（Out-of-Scope）、10 大核心业务实体 ER 架构及 4 大画面拓扑 × 3+1 主体色彩视觉规范。
          </p>
          <div class="doc-meta-table">
            <div><strong>文档版本：</strong>v2.0（基于客户手写批注原件 <code>BRW3CEFA529E05C_000414.pdf</code> 全面重构）</div>
            <div><strong>编制日期：</strong>2026-11-03</div>
            <div><strong>基准原件：</strong>全 20 页 · 286 项印刷 + 2 项手写新增 = 288 项业务活动</div>
            <div><strong>架构收敛：</strong>20 个模块收敛为 7 大实操角色（R01~R07）｜裁撤 06/17 冗余模块</div>
          </div>
        </div>

        <h2>一、 核心发现与需求重构总览（Executive Summary）</h2>
        <p>
          通过对客户在 20 页《业务角色与具体业务清单》（共 286 项印刷条目 + 2 项客户手写新增条目 = <strong>288 项业务活动</strong>）上的红色手写反馈进行逐字分析，我们识别出客户真实业务运作模式与传统大型不动产公司科层制之间存在 <strong>四大根本性差异</strong>。本要件定义书以此作为系统设计的最高准则：
        </p>

        <h3>1.1 四大核心设计转向（From As-Is Preset → To-Be Reality）</h3>
        <ol>
          <li>
            <strong>业务范围重构：从“单一买卖仲介”扩展为“买卖 + 租赁 + 受托管理 + 经由人事”全能一体机</strong><br>
            • 客户在第 5 页用中文明确批注：<strong style="color:#b91c1c;">「实际中，营业租赁和买卖都做」</strong>，并在第 4 页批注 <strong style="color:#b91c1c;">「③と④おなじ営業担当のこと」</strong>。<br>
            • 同时客户完整勾选保留了 <strong>10 租赁受托管理、11 修缮手配、12~14 财务经由与业主精算、15~16 人事劳务与总务、18 系统管理</strong>。系统必须支撑买卖、租赁、受托物业管理及内部经营后台的全链路协同。
          </li>
          <li>
            <strong>组织架构重构：从“20 个细分岗位”扁平化收敛为“7 大实操角色（一人多岗兼任）”</strong><br>
            • 客户在 <code>08</code>、<code>09</code>、<code>11</code>、<code>14</code>、<code>16</code>、<code>18</code>、<code>20</code> 共 7 页的标题上直接画大 <code>×</code>，并在旁边指定并入既有角色；对 <code>06（物件仕入れ）</code> 标注 <strong style="color:#b91c1c;">「現在なし」</strong>，对 <code>17（コンプライアンス・苦情専任）</code> 标注 <strong style="color:#b91c1c;">「いなない（いらない）」</strong>。<br>
            • 系统不得设置繁琐的跨部门流转审批墙，必须支持<strong>灵活的角色兼任（Multi-Role Binding）</strong>与高度内聚的工作台。
          </li>
          <li>
            <strong>管控模式重构：从“店长/代表事无巨细审批”转向“公司级 Checklist 赋能 + 一线担当自查 + 资源自助预约”</strong><br>
            • 客户将原本属于店长的报价单审核（02-4）、签约材料核查（02-7）、重说排期（02-8）、看房车辆调度（02-9）、决算延期联络（02-13）全部打 <code>×</code> / <code>⊗</code> 下放，并明确提出：<strong style="color:#b91c1c;">「これ会社チェックリストを作って、担者自分で確認ほうがいい」</strong>、<strong style="color:#b91c1c;">「（車両）時間表作って、みんな予約制で」</strong>、<strong style="color:#b91c1c;">「担者から直接宅建確認ほうがいい」</strong>。<br>
            • 系统的核心价值在于提供<strong>防错自查工具（Checklist）与共享排期日历（车辆/宅建士）</strong>，而非增加审批层级。
          </li>
          <li>
            <strong>合规流程重构：砍掉冗余的形式主义审查，聚焦核心法定动作</strong><br>
            • 客户用大红 <code>×</code> 划掉了 <code>17 コンプライアンス</code> 的第 5~10 项（繁琐的可疑交易内部层报与成约抽检补件）、<code>19 海外顧客対応</code> 的第 4~7 项（将海外公证专家确认、时差提醒、跨境汇款追查作为独立模块的繁琐流程），以及 <code>08</code> 的第 6 项（因宅建士自己做合同而无需内部回付草案）和第 14 项（抽检补凭证），且未勾选 <code>10</code> 的第 18 项（定期管理报告书）。
          </li>
        </ol>

        <h2>二、 组织角色归并与 RBAC 权限架构定义（Role Consolidation）</h2>
        <h3>2.1 原 20 个业务模块向 7 大系统角色收敛拓扑</h3>
        <pre class="doc-code-preview">【原定 20 个细分岗位模块】 ───────────────────────────► 【重构后 7 大系统角色组 (RBAC)】
01 経営者・代表取締役 (1~8, 11~17 保留) ─────────────────► R01 経営者・代表取締役（超限额决裁 / 财务税款终审 / 用印审批）
02 店長・営業責任者 (1~3, 5~6, 10~12, 14~16) + 01(9,10) ─► R02 店長・営業責任者（线索分配 / 客诉接管 / 提成分佣 / 团队督办）
03 営業(1~16+新增17) + 04 売買(1~20) + 05 賃貸(1~16)
  + 08(8~13,15) + 09(1~14) + 19(1~3,8~10) + 20(1~7)
  + 02下放(4,7,8,9,13) + 01下放(9,10) ───────────────────► R03 総合営業担当 [核心全能岗]（内见+买卖+租赁+上架推广+海外+专家+定期问候）
07 宅建士(1~12+新增13契約書作成) + 08(1~5 調査整理) ────► R04 宅地建物取引士（权利调查整理 + 契约书/重说作成 + 法定重说记名）
10 賃貸管理(1~17,19) + 11 修繕(1~10) + 13 精算(1~12) ───► R05 賃貸管理・修繕担当（受托租赁管理 + 修缮工程手配 + 业主月度精算）
12 経理(1~18) + 13(1~12 財務連動) + 14 税理士窓口(1~10) ─► R06 経理・税務担当（公司收支结算 + 預り金对账 + 税理士窗口）
15 人事労務(1~20) + 16 総務(1~15) + 18 システム管理(1~13)► R07 人事・総務・システム管理（人事劳务薪酬 + 总务印章钥匙车辆 + 账号权限）
❌ 06 物件仕入れ（「現在なし」） / ❌ 17 コンプライアンス（「いらない」） ──► 裁撤模块 (Out-of-Scope)</pre>

        <h3>2.2 七大系统角色权责与兼任规约</h3>
        <table>
          <thead>
            <tr>
              <th>角色代码</th>
              <th>角色名称</th>
              <th>涵盖原清单模块与条目</th>
              <th>典型兼任配置与权限特征</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>R01</strong></td>
              <td><strong>経営者・代表取締役</strong></td>
              <td><code>01</code>（No.1~8, 11~17）</td>
              <td>最高决裁权（超权限手续费折扣、大额采购/广告/工程、人事录用与调薪、税款与月度资金排期、公章特定用印）。</td>
            </tr>
            <tr>
              <td><strong>R02</strong></td>
              <td><strong>店長・営業責任者</strong></td>
              <td><code>02</code>（No.1~3, 5~6, 10~12, 14~16）+ <code>01</code>（No.9~10 部长确认）</td>
              <td>业务管理权（分配新线索、超时未回督办、权限内折扣/报销审批、房源上架审核、分佣核定、升级客诉处理、未成约/失注复盘）。小团队期可由代表（R01）或核心骨干兼任。</td>
            </tr>
            <tr>
              <td><strong>R03</strong></td>
              <td><strong>総合営業担当</strong></td>
              <td><code>03</code>（1~16+<strong>新增17</strong>）+ <code>04</code>（1~20）+ <code>05</code>（1~16）+ <code>08</code>（8~13, 15）+ <code>09</code>（1~14）+ <code>19</code>（1~3, 8~10）+ <code>20</code>（1~7）+ <code>02</code>下放项（4, 7, 8, 9, 13）+ <code>01</code>下放项（9, 10）</td>
              <td><strong>系统最核心高频使用角色</strong>。一人贯通：多渠道获客 → 内见带看（含公车预约）→ 买卖仲介全流程 → 租赁仲介全流程 → 房源中日文上架与视频推广 → 海外客户翻译与委任协调 → 外部专家（司法书士/税理士等）跟进 → 签约与决算交割归档 → 老客户定期问候。</td>
            </tr>
            <tr>
              <td><strong>R04</strong></td>
              <td><strong>宅地建物取引士</strong></td>
              <td><code>07</code>（1~12+<strong>新增13</strong>）+ <code>08</code>（1~5）</td>
              <td><strong>法定专业确权与合同制作角色</strong>。负责列出案件必要/不足书类清单、获取登记与调查资料、核对当事人表记、整理管理公司/行政调查结果、<strong>直接起草作成《契约书》与《重要事项说明书》</strong>、执行线下/线上重说并记名押印。可由具备宅建士资格的代表或营业兼任。</td>
            </tr>
            <tr>
              <td><strong>R05</strong></td>
              <td><strong>賃貸管理・修繕担当</strong></td>
              <td><code>10</code>（1~17, 19）+ <code>11</code>（1~10）+ <code>13</code>（1~12）</td>
              <td><strong>受托物业管理与工程精算角色</strong>。负责受托房源台账、催租与保证公司代位申请、日常报修与巡检、退房立会与原状回复精算、空房翻新招租、修缮比价/下单/验收、以及业主月度收支精算与押金（預り金）管理。</td>
            </tr>
            <tr>
              <td><strong>R06</strong></td>
              <td><strong>経理・税務担当</strong></td>
              <td><code>12</code>（1~18）+ <code>13</code>（1~12 协同）+ <code>14</code>（1~10）</td>
              <td><strong>公司财务与税务窗口角色</strong>。负责仲介费请求书与领收书开具、入金核销、供应商付款与员工报销、员工提成核算、银行对账与月结、电子凭证合规保存、业主精算资金划付、以及对接税理士（月度凭证、Invoice 适格请求书、非居住者源泉征收、年末调整、纳税）。</td>
            </tr>
            <tr>
              <td><strong>R07</strong></td>
              <td><strong>人事・総務・システム管理</strong></td>
              <td><code>15</code>（1~20）+ <code>16</code>（1~15）+ <code>18</code>（1~13）</td>
              <td><strong>内部运营与安全底座角色</strong>。负责招聘入离职、考勤休假与薪资汇总、前台接待与快递合同寄送、公章用印登记、房源钥匙与门禁卡台账、公车维护保养、以及系统账号创建、权限分配、文件恢复、备份监控与安全审计日志。</td>
            </tr>
          </tbody>
        </table>

        <h2>三、 客户手写批注驱动的“六大核心专项要件”（Key Custom Requirements）</h2>
        <p>
          以下 6 项功能是客户在阅读标准业务清单后，用红笔直接批注或新增的<strong>痛点级改造诉求</strong>，已在系统交互与数据结构中作为一等公民（First-Class Features）实现：
        </p>

        <blockquote>
          <strong>3.1 【REQ-SP-01】报价单与签约必要书类“担当自查 Checklist”引擎</strong><br>
          • <strong>客户原话依据</strong>：<code>02-No.4</code>（报价单核对）：🔴 <strong>「× 担者自分確認」</strong>；<code>02-No.7</code>（签约必要书类确认与补齐）：🔴 <strong>「これ会社チェックリストを作って、担者自分で確認ほうがいい」</strong> / <strong>「⊗ まず担者自分確認」</strong>。<br>
          • <strong>系统功能设计</strong>：(1) 取消“必须提交店长审批才能推进”的阻塞式工作流；(2) 内置公司级标准买卖/租赁签约自查 Checklist 模板库；(3) 营业担当（R03）逐项勾选「担当者確認済」后即可直接推进，自动记录自查时间戳与确认人。
        </blockquote>

        <blockquote>
          <strong>3.2 【REQ-SP-02】看房公车共享时间表与全员自助预约系统（車両予約タイムテーブル）</strong><br>
          • <strong>客户原话依据</strong>：<code>02-No.9</code>（同一时段多场内见时的调配）：客户划掉「<del>担当者</del>」与「<del>鍵</del>」，用红圈重点圈出 <strong>「車両」</strong>，并手写：🔴 <strong>「時間表作って、みんな予約制で」</strong>。<br>
          • <strong>系统功能设计</strong>：在系统首页与内见安排模块内置可视化的「車両予約時間表」（联动 <code>16-No.11</code> 车辆台账），营业担当（R03）在安排客户内见（<code>03-No.7</code>）时直接点选时段一键自助预约车辆，冲突时段自动锁定防撞车。
        </blockquote>

        <blockquote>
          <strong>3.3 【REQ-SP-03】营业担当与宅建士“重要事项说明（重说）直连排期”</strong><br>
          • <strong>客户原话依据</strong>：<code>02-No.8</code>（与负责重说的宅建士确定实施日期时间）：🔴 <strong>「これは担者から直接宅建確認ほうがいい」</strong>。<br>
          • <strong>系统功能设计</strong>：系统展示宅建士（R04）的空闲日程看板；无论是买卖签约重说（<code>04-No.11</code>）还是租赁签约重说（<code>05-No.10</code>），均由营业担当（R03）直接发起重说时间确认（线下到店或线上 IT 重说），不经过店长中转。
        </blockquote>

        <blockquote>
          <strong>3.4 【REQ-SP-04】宅建士“调查整理 + 契约书/重说作成”一体化工作台</strong><br>
          • <strong>客户原话依据</strong>：<code>07-No.13</code>（客户手写新增）：🔴 <strong>「13 契約書作成」</strong>；<code>08</code> 顶部批注：🔴 <strong>「宅建士：⊗ 1 2 3 4 5 6」</strong>，且将 <code>08-No.6</code>（将做好的草案回付给营业、宅建士等确认者）直接打 <strong><code>×</code></strong> 划除。<br>
          • <strong>系统功能设计</strong>：由<strong>宅建士（R04）直接包揽从资料清点到合同编制的全过程</strong>——自动生成必要/不足书类一览（<code>08-1</code>）、归集登记与役所/管理公司调查结果（<code>08-2, 4</code>）、核验当事人姓名/住址/法人名表记一致性（<code>08-3</code>）、直接起草作成《契约书》与《重要事项说明书》（<code>07-13</code>, <code>08-5</code>）并执行无矛盾核验（<code>07-3, 4</code>），取消多余的“草案回付审批流”（<code>08-6</code>）。
        </blockquote>

        <blockquote>
          <strong>3.5 【REQ-SP-05】成约与既有客户“定期问候（定期挨拶）”CRM 循环提醒</strong><br>
          • <strong>客户原话依据</strong>：<code>03-No.17</code>（客户手写新增）：🔴 <strong>「17 定期的お客様あいさつする」</strong>。<br>
          • <strong>系统功能设计</strong>：除了交房后的首次状况确认（<code>03-No.16</code>），为每位成约客户及重点客户配置「定期挨拶サイクル」（交房 1 个月、半年、1 年周年庆、お中元/暑中見舞い/お歳暮/年賀状节令问候、租约到期前问候），到期自动在营业担当（R03）工作台唤醒任务。
        </blockquote>

        <blockquote>
          <strong>3.6 【REQ-SP-06】公司融资申请与借款手续的“担当/部长双轨确认”</strong><br>
          • <strong>客户原话依据</strong>：<code>01-No.9 &amp; 10</code>（银行融资申请确认、借款金额/期间/合同确认与手续办理）：客户用红色大括号 <code>}</code> 括起并打 <code>×</code>，旁批 🔴 <strong>「担当自分確認 / また部長確認」</strong>，箭头 <code>↙</code> 指向第 10 项。<br>
          • <strong>系统功能设计</strong>：涉及融资申请与借款手续时，系统不强制锁死在代表取缔役（R01）一人名下，支持由具体经办担当自查确认或由部长/责任者（R02）双轨确认推进。
        </blockquote>

        <h2>四、 七大业务子系统功能要件定义（全量映射矩阵）</h2>

        <h3>4.1 子系统一：经营决裁与店长督办中心（Executive &amp; Manager Console）</h3>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-01-01</strong></td>
              <td><strong>超权限商务与财务决裁</strong></td>
              <td><code>01-1, 2, 3, 15</code></td>
              <td>• <strong>手续费超限折扣审批</strong>（<code>01-1</code>）：当折扣超出店长权限时，提交代表审批并记录批准金额。<br>• <strong>客户退款/赔偿决裁</strong>（<code>01-2</code>）：核对收款人、金额、事由后一键批复。<br>• <strong>超限额费用决裁</strong>（<code>01-3</code>）：针对超部门限额的广告费、工程费、设备采购费进行决裁。<br>• <strong>超现场权限疑难案件决裁</strong>（<code>01-15</code>）：决定继续推进、追加调查或中止受任，并强制记录决策理由。</td>
              <td>システム作業</td>
              <td>R01 代表</td>
            </tr>
            <tr>
              <td><strong>REQ-01-02</strong></td>
              <td><strong>人事与薪酬总控决裁</strong></td>
              <td><code>01-4, 5, 6</code></td>
              <td>• 审批招聘名额与薪资条件申请（<code>01-4</code>）；<br>• 确认拟录用者最终待遇并批准发送内定通知（<code>01-5</code>）；<br>• 决裁员工加薪、奖金、特别提成申请（<code>01-6</code>）。</td>
              <td>システム作業</td>
              <td>R01 代表</td>
            </tr>
            <tr>
              <td><strong>REQ-01-03</strong></td>
              <td><strong>经营损益、资金与税务决裁</strong></td>
              <td><code>01-11, 12, 13</code><br><code>01-9, 10(下放)</code></td>
              <td>• <strong>月度损益审阅与质询</strong>（<code>01-11</code>）：查看月结损益表，对不明费用一键向经办人发起说明要求。<br>• <strong>次月资金缺口与支付排期确定</strong>（<code>01-12</code>）：查看次月入出金预测表，锁定具体支付日程。<br>• <strong>税金缴纳审批</strong>（<code>01-13</code>）：核对预计纳税额与支付申请并批准缴纳。<br>• <strong>银行融资与借款确认</strong>（<code>01-9, 10</code>）：支持由经办担当自己确认或部长确认（<code>担当自分確認 / また部長確認</code>）。</td>
              <td>対人＋システム</td>
              <td>R01 代表<br>R02 部长<br>R03 担当</td>
            </tr>
            <tr>
              <td><strong>REQ-01-04</strong></td>
              <td><strong>公司重大契约、公章与法务签署</strong></td>
              <td><code>01-7, 8, 14, 16, 17</code></td>
              <td>• 店铺租约/续约/解约签署登记（<code>01-7</code>）、代表级业务合作协议签署登记（<code>01-8</code>）、股东会/董事会文件签署登记（<code>01-17</code>）；<br>• <strong>重大客诉指派与赔偿案确认</strong>（<code>01-14</code>）：指定专门负责人并确认回复内容与赔偿方案；<br>• <strong>特定文件公司公章使用审批</strong>（<code>01-16</code>）：核查使用目的并批准用印（联动 <code>16-8</code> 用印台账）。</td>
              <td>対人＋システム</td>
              <td>R01 代表</td>
            </tr>
            <tr>
              <td><strong>REQ-02-01</strong></td>
              <td><strong>线索派单、交接与超时督办</strong></td>
              <td><code>02-1, 2, 3</code><br><code>02-14, 15</code></td>
              <td>• <strong>新客咨询派单</strong>（<code>02-1</code>）：将新进客户咨询指派给对应营业担当。<br>• <strong>离职/休假员工案件交接</strong>（<code>02-2</code>）：批量将休假或离职人员的在办案件转移给继任者。<br>• <strong>超时未回复督办预警</strong>（<code>02-3</code>）：自动高亮超过规定时间未回复的咨询，向担当发送回复指令并确认完成。<br>• <strong>未成约周度复盘与失注管理</strong>（<code>02-14, 15</code>）：按周查看未成约案件并指定下一步动作与负责人；核查失注原因，决定关单归档或重新指派跟进。</td>
              <td>対人＋システム</td>
              <td>R02 店长</td>
            </tr>
            <tr>
              <td><strong>REQ-02-02</strong></td>
              <td><strong>店长权限内审批、上架审核与分佣核定</strong></td>
              <td><code>02-5, 6, 10, 11, 12, 16</code></td>
              <td>• 权限范围内折扣、退款、经费报销决裁（<code>02-5</code>）；<br>• 房源上架资料审核，要求修正错误或批准发布（<code>02-6</code>）；<br>• 协调营业担当之间的客户归属与提成归属争议并记录结果（<code>02-10</code>）；<br>• 确认成约案件内部提成与合作中介分佣比例（<code>02-11</code>）；<br>• 接手升级客诉并与客户协商、记录处理结果（<code>02-12</code>）；<br>• 安排新员工看房同行、合同作成练习与业务培训（<code>02-16</code>）。</td>
              <td>対人＋システム</td>
              <td>R02 店长</td>
            </tr>
          </tbody>
        </table>

        <h3>4.2 子系统二：综合营业工作台（Sales &amp; CRM Workspace）</h3>
        <p>
          <strong>设计核心</strong>：对应客户批注 <strong>「③と④おなじ営業担当のこと」</strong>、<strong>「实际中，营业租赁和买卖都做」</strong>、以及并入的 <code>08后半</code>、<code>09</code>、<code>19保留</code>、<code>20</code>。为营业担当提供一站式全链路工作台。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-03-01</strong></td>
              <td><strong>多渠道客户接待、建档与房源推荐</strong></td>
              <td><code>03-1, 2, 3, 4, 5, 6</code><br><code>09-10</code></td>
              <td>• 登记并回复来自电话、邮件、网站、聊天工具及门户网站（<code>09-10</code>）的客户咨询（<code>03-1</code>）；<br>• 新客建档、自动查重并补全联络方式（<code>03-2</code>）；<br>• 结构化记录客户预算、意向区域、面积、用途、期望时间（<code>03-3</code>）；<br>• 生成并发送符合条件的候选房源一览（<code>03-4</code>）；<br>• 向物元（房源负责公司）确认出售/招租状态及可否看房（<code>03-5</code>）；<br>• 向客户说明房价、诸费用（报价单由担当通过 Checklist 自查，<code>02-4</code>）及主要使用限制（<code>03-6</code>）。</td>
              <td>対人＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-03-02</strong></td>
              <td><strong>内见带看管理、车辆自助预约与钥匙闭环</strong></td>
              <td><code>03-7~14</code><br><code>02-9(車両)</code></td>
              <td>• 协调客户与业主/管理公司的看房时间（<code>03-7</code>），针对无法到场客户安排线上看房（<code>03-14</code>）；<br>• <strong>【专项】看房车辆自助预约</strong>（<code>02-9</code>）：在「車両予約時間表」中按预约制登记用车时段；<br>• 登记看房钥匙借出领用人与预计归还时间（<code>03-8</code>），看房后确认锁门、关窗、关灯并登记归还钥匙（<code>03-10</code>）；<br>• 记录带看现场客户提出的问题与感想（<code>03-9</code>），将未确认问题向物元照会（<code>03-11</code>），将确认结果回复客户并归档依据资料（<code>03-12</code>）；<br>• 看房后跟进确认申购/承租意向及下次联系时间（<code>03-13</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-03-03</strong></td>
              <td><strong>案件进度追踪、售后回访与定期问候（CRM）</strong></td>
              <td><code>03-15, 16</code><br><strong><code>03-17(新增)</code></strong></td>
              <td>• 实时更新案件进度、对应履历与下一步待办任务（<code>03-15</code>）；<br>• 成约客户交房后确认入住/交割状况（<code>03-16</code>）；<br>• <strong>【专项新增】定期向客户问候（<code>03-17 定期的お客様あいさつする</code>）</strong>：设置周期性客情问候提醒，维护长期客户关系。</td>
              <td>対人＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-04-01</strong></td>
              <td><strong>买卖营业：卖方受托与买方申购合意</strong></td>
              <td><code>04-1~8</code></td>
              <td>• <strong>卖方侧</strong>：受理出售咨询并预约拜访业主（<code>04-1</code>）；收取登记、图纸、设备、物件状况资料（<code>04-2</code>）；收集周边竞品与成约案例制作定价提案书（<code>04-3</code>）；说明媒介类型/费用/服务并办理媒介契约签署（<code>04-4</code>）；定期向业主汇报咨询、内见与申购状况（<code>04-5</code>）。<br>• <strong>买方与合意侧</strong>：接收《購入申込書》并确认期望价格、支付条件、交房条件（<code>04-6</code>）；在买卖双方间传达条件与答复（<code>04-7</code>）；在系统中锁定已达成合意的价格、设备、维修、交房条件（<code>04-8</code>）。</td>
              <td>対人＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-04-02</strong></td>
              <td><strong>买卖营业：房贷审查、签约筹备与手付金管理</strong></td>
              <td><code>04-9~14</code><br><code>02-7, 8(下放)</code><br><code>08-8, 9, 10</code></td>
              <td>• <strong>房贷支援</strong>：协助准备贷款事前审查与本审查资料并提交金融机构（<code>04-9</code>），跟进银行追加资料要求并通知客户（<code>04-10</code>），监控融资利用特约等契约期限并提前提醒客户（<code>04-14</code>）。<br>• <strong>【专项】签约必要材料担当自查与重说直约</strong>：使用公司 Checklist 由担当自己核查签约必要材料并安排补齐缺失文件（<code>02-7</code>）；由担当直接联系宅建士确认重说实施时间（<code>02-8</code>），并与卖方、买方、宅建士确认签约时间、地点及携带材料（<code>04-11</code>）。<br>• <strong>签约执行</strong>：签约前向客户发送诸费用明细、必要材料与支付案内（<code>04-12</code>, <code>08-8</code>）；准备纸质合同或发起电子签名流程（<code>08-9</code>）；确认各方签署、缔结完成及文件送达状态（<code>08-10</code>）；核实手付金到账并取得经由或收款人确认（<code>04-13</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-04-03</strong></td>
              <td><strong>买卖营业：决算交割、尾款精算与档案归档</strong></td>
              <td><code>04-15~20</code><br><code>02-13(下放)</code><br><code>08-11, 12, 13, 15</code></td>
              <td>• <strong>决算筹备</strong>：与银行、司法书士、卖主、买主确认决算时间与必要文件（<code>04-15</code>）；<strong>若发生决算延期，由营业担当自己确定新日程并通知各方（<code>02-13</code>）</strong>；汇总决算精算所需的管理费、租金等金额（<code>04-16</code>）；向司法书士与银行发送获准共享的资料（<code>08-12</code>）；安排交房前现场确认并记录未完成的腾退或维修（<code>04-17</code>）；备齐决算当日全套文件（<code>08-11</code>）。<br>• <strong>决算当日与收尾</strong>：决算当日确认款项支付、钥匙、文件、引渡确认书的交割（<code>04-18</code>）；向客户发送仲介手续费请求书并跟进未入金部分（<code>04-19</code>）；将成约后的合同、交房、精算资料移交保管（<code>04-20</code>），按规范命名分类归档（<code>08-13</code>）；在核实权限后调阅提供历史契约书（<code>08-15</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-05-01</strong></td>
              <td><strong>租赁营业：招租确认、入居申请与审查跟进</strong></td>
              <td><code>05-1~7, 16</code></td>
              <td>• 向管理公司确认租金、共益费、押金（敷金）、礼金等募集条件（<code>05-1</code>）及宠物、使用目的等客户特殊条件可否入住（<code>05-2</code>）；<br>• 接收《入居申込書》并核对必填项与附件（<code>05-3</code>），提交给业主、管理公司、保证公司（<code>05-4</code>）；<br>• 通知申请人补充审查追加资料（<code>05-5</code>），传达审查结果，若未通过则推荐备选房源（<code>05-6</code>）；<br>• 制作初期费用明细并向客户说明（<code>05-7</code>，担当自查）；<br>• 受理申请取消（退订），协调退款与房源募集状态恢复（<code>05-16</code>）。</td>
              <td>対人＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-05-02</strong></td>
              <td><strong>租赁营业：租约签署、交钥匙与入住交接</strong></td>
              <td><code>05-8~15</code></td>
              <td>• 确认契约开始日、实际入住日、领钥匙时间（<code>05-8</code>）；协调保证与保险手续并移交有资质机构（<code>05-9</code>）；<br>• 安排租赁契约签署并直接对接宅建士安排重要事项说明（<code>05-10</code>, <code>02-8</code>）；<br>• 催办未提交的签名、附件及未付款项并记录完成状态（<code>05-11</code>）；<br>• 交钥匙前在系统中核验契约与付款条件是否全部满足（<code>05-12</code>）；<br>• 入住时与客户共同记录房屋既有伤痕与设备故障（<code>05-13</code>），交付钥匙、垃圾丢弃规则、设备说明及紧急联络方式（<code>05-14</code>）；<br>• 将住户信息与未决事项移交租赁管理担当（<code>05-15</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-09-01</strong></td>
              <td><strong>房源上架、中日双语广告、REINS 与视频营销</strong></td>
              <td><code>09-1~9</code><br><code>09-11~14</code></td>
              <td>• 新房源录入内部系统（<code>09-1</code>）；制作或更新户型图与房源介绍资料（<code>09-2</code>）；调整房源照片、确认使用许可并上传（<code>09-3</code>）；<br>• <strong>制作日文或中文房源广告并提请确认</strong>（<code>09-4</code>），将获批房源发布至指定媒体（<code>09-5</code>）；<br>• <strong>按规定执行 REINS 登录与交易状况更新</strong>（<code>09-6</code>）；将业主批准的新价格同步至所有上架媒体（<code>09-7</code>）；<br>• 核查长期未更新房源的可交易状态（<code>09-8</code>），及时下架已成约、撤回或结束募集的房源（<code>09-9</code>）；<br>• <strong>制作并发布房源视频与区域介绍内容</strong>（<code>09-11</code>）；汇总单周广告费与有效咨询数上报（<code>09-12</code>）；关停获批停投的广告（<code>09-13</code>）；回复线上评价或将客诉转交责任人（<code>09-14</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-19-01</strong></td>
              <td><strong>海外客户对应与多语言翻译/委任协调</strong></td>
              <td><code>19-1, 2, 3, 8, 9, 10</code><br><em>(4~7已划除)</em></td>
              <td>• 翻译房源介绍、邮件、费用明细以协助海外客户理解（<code>19-1</code>）；安排看房、签约、说明所需的口译（<code>19-2</code>）；<br>• 核对客户姓名的原语表记、翻译表记与文件表记一致性（<code>19-3</code>）；<br>• 将非居住者的税务问题向税理士确认并转达客户（<code>19-8</code>）；<br>• 协调客户无法来日/到店时的委任手续与文件寄送（<code>19-9</code>）；<br>• 安排海外业主的日本国内联络人及受托管理交接（<code>19-10</code>）。</td>
              <td>対人＋システム</td>
              <td>R03 营业</td>
            </tr>
            <tr>
              <td><strong>REQ-20-01</strong></td>
              <td><strong>外部专家委托与进度协同台账</strong></td>
              <td><code>20-1~7</code></td>
              <td>营业担当在案件下挂接并跟进 7 类外部专家任务进度：<br>1. <strong>司法書士</strong>（<code>20-1</code>）：登记必要书类确认、所有权移转/抵当权设定与抹消等登记手续；<br>2. <strong>税理士</strong>（<code>20-2</code>）：税务处理确认、申报书作成、税务代理、非居住者支付源泉征收判断；<br>3. <strong>社会保険労務士</strong>（<code>20-3</code>）：劳动/社会保险手续、薪资与就业规则、劳务手续支援；<br>4. <strong>弁護士</strong>（<code>20-4</code>）：个别契约纠纷法律咨询、授权范围内交涉、债权回收、诉讼代理；<br>5. <strong>土地家屋調査士・測量関係者</strong>（<code>20-5</code>）：委托范围内调查、测量、登记关联业务；<br>6. <strong>建築士・調査資格者</strong>（<code>20-6</code>）：建筑状况、建筑限制、专业技术调查；<br>7. <strong>保険会社・募集人</strong>（<code>20-7</code>）：保险说明、投保、更新、理赔协调。</td>
              <td>対人＋現地＋システム</td>
              <td>R03 营业</td>
            </tr>
          </tbody>
        </table>

        <h3>4.3 子系统三：宅建士专业审查与契约编制中心（Takken Legal &amp; Contract Studio）</h3>
        <p>
          <strong>设计核心</strong>：对应客户在 <code>07</code> 新增的 <strong>「13 契約書作成」</strong> 及在 <code>08</code> 顶部批注的 <strong>「宅建士：⊗ 1 2 3 4 5 6」</strong>。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-07-01</strong></td>
              <td><strong>法务调查资料获取与表记核对</strong></td>
              <td><code>08-1, 2, 3, 4</code><br><code>07-1, 2</code></td>
              <td>• 生成签约案件的必要书类一览与不足书类一览（<code>08-1</code>）；<br>• 通过合法途径获取登记情报、图纸及其他调查资料并上传归集（<code>08-2</code>）；<br>• 核对客户姓名、住址、法人名与各文件表记是否完全一致（<code>08-3</code>）；<br>• 整理从业主、管理公司、行政机关取得的调查结果（<code>08-4</code>）；<br>• 确认案件权利关系、限制、调查资料是否足以支撑法定说明（<code>07-1</code>），对未确认的法令限制或物件状况发起追加调查委托（<code>07-2</code>）。</td>
              <td>対人＋システム</td>
              <td>R04 宅建士</td>
            </tr>
            <tr>
              <td><strong>REQ-07-02</strong></td>
              <td><strong>契约书与重要事项说明书作成及交叉校验</strong></td>
              <td><strong><code>07-13(新增)</code></strong><br><code>08-5</code><br><code>07-3, 4, 9, 10</code></td>
              <td>• <strong>【专项新增】契约书与重说作成（<code>07-13 契約書作成</code> &amp; <code>08-5</code>）</strong>：将已确认的交易条件输入契约书、重要事项说明书及附件草案；<br>• <strong>一致性防错核验</strong>：核查重要事项说明书与调查资料内容是否一致（<code>07-3</code>），核查契约书、重要事项说明书、附件之间是否存在矛盾（<code>07-4</code>）；<br>• 签约前若价格、权利关系、物件状况发生变动，触发内容再确认（<code>07-9</code>），并确认要求修正的契约书或重说已正确修正（<code>07-10</code>）。</td>
              <td>システム作業</td>
              <td>R04 宅建士</td>
            </tr>
            <tr>
              <td><strong>REQ-07-03</strong></td>
              <td><strong>法定重要事项说明执行（线下/IT重说）与记名交付</strong></td>
              <td><code>07-5, 6, 7, 8, 11, 12</code></td>
              <td>• 出示宅地建物取引士证，依法执行重要事项说明（<code>07-5</code>）；若采用线上说明（IT重说），先核验实施条件并按法定步骤执行（<code>07-8</code>）；<br>• 回答客户关于说明事项的提问，并记录追加确认事项（<code>07-6</code>）；<br>• <strong>【重点双勾项】履行重要事项说明书及契约关系法定书面的记名、押印与交付手续</strong>（<code>07-7</code>）；<br>• 针对所负责业务的客诉提交说明与当时记录（<code>07-11</code>）；管理自身取引士证更新与法定讲习手续提醒（<code>07-12</code>）。</td>
              <td>対人＋システム</td>
              <td>R04 宅建士</td>
            </tr>
          </tbody>
        </table>

        <h3>4.4 子系统四：租赁受托管理与修缮工程中心（Property Management &amp; Maintenance Hub）</h3>
        <p>
          <strong>设计核心</strong>：整合 <code>10 賃貸管理担当</code>（除第 18 项外全部保留）、<code>11 修繕手配</code>（整页并入 <code>10</code>）、以及 <code>13 オーナー精算・預り金</code>（批注由 <code>賃貸管理の人</code> 负责）。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-10-01</strong></td>
              <td><strong>受托房源建档、租金催收与保证代位申请</strong></td>
              <td><code>10-1, 2, 3, 4</code><br><code>13-1, 2, 3, 4</code></td>
              <td>• 接收楼栋或住户的管理交接资料并核查缺失项（<code>10-1</code>）；<br>• 在系统中登记租赁契约、租金、押金、住户及业主收款账户（<code>10-2</code>）；<br>• 生成月度租金请求予定一览（<code>13-1</code>），将到账租金与住户、租约、对象月份匹配核销（<code>13-2</code>），核查汇款人不明的入账内容（<code>13-3</code>），生成当期滞纳一览（<code>13-4</code>）；<br>• 联系未付租金住户确认原因与预计支付日（<code>10-3</code>），并依约向保证公司提交滞纳代位申请（<code>10-4</code>）。</td>
              <td>対人＋システム</td>
              <td>R05 租赁管理</td>
            </tr>
            <tr>
              <td><strong>REQ-10-02</strong></td>
              <td><strong>日常报修受理、修缮工程手配与现场巡检</strong></td>
              <td><code>10-5~11</code><br><code>11-1~10</code></td>
              <td>• <strong>报修与苦情受理</strong>：受理住户报修并确认位置、故障、照片、可入室时间（<code>10-5</code>）；判断紧急度并安排维修或上报（<code>10-6</code>）；处理噪音、垃圾、公区苦情并记录结果（<code>10-10</code>）；执行现场巡检并上传照片与待处理部位（<code>10-11</code>）。<br>• <strong>修缮工程全流程（原 <code>11</code> 并入）</strong>：现场确认故障并提交照片与应对方案（<code>11-1</code>）；向维修商获取报价单（<code>11-2</code>）；比对同一工程报价项目与金额并请示审批（<code>11-3</code>）；超过授权额的维修费向业主请示批准（<code>10-7</code>），追加工程亦须确认业主批准后再安排（<code>11-6</code>）；向获批施工方下单（<code>11-4</code>）；协调维修商与住户上门时间、钥匙交接并取得入室许可（<code>10-8</code>, <code>11-5</code>）；跟进施工进度并通报延期（<code>11-7</code>）；完工后向住户确认解决状况（<code>10-9</code>），现场验收工程并保存照片与确认记录（<code>11-8</code>）；将请求书、报价单、审批记录、验收结果移交经由（<code>11-9</code>）；保修期内故障联系返修（<code>11-10</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R05 租赁管理</td>
            </tr>
            <tr>
              <td><strong>REQ-10-03</strong></td>
              <td><strong>续租、解约退房立会、原状回复与空房招租</strong></td>
              <td><code>10-12~17, 19</code></td>
              <td>• 联系即将到期的租约住户，确认续租或退租意向（<code>10-12</code>）；<br>• 接收解约通知，协调退房日与退房立会（现场交接）时间（<code>10-13</code>）；<br>• 退房时现场确认并记录损伤、钥匙、设备状态（<code>10-14</code>）；<br>• 协调原状回复报价与费用分担比例并请示批准（<code>10-15</code>）；<br>• 将退房精算所需的租金、押金、费用信息移交经由（<code>10-16</code>）；<br>• 安排空置房保洁、翻新修缮与重新招租（<code>10-17</code>）；<br>• 管理委托终止时，办理资金明细、钥匙、租约、未完维修案件的交接（<code>10-19</code>）。<br>• <em>(注：<code>10-18</code> 向业主发送管理报告书未勾选，不作为默认必做项)</em>。</td>
              <td>対人＋現地＋システム</td>
              <td>R05 租赁管理</td>
            </tr>
            <tr>
              <td><strong>REQ-13-01</strong></td>
              <td><strong>业主月度收支精算与押金（預り金）台账管理</strong></td>
              <td><code>13-5~12</code></td>
              <td>• 核对每位业主的管理费与已批准扣除的维修等费用（<code>13-5</code>）；<br>• 自动生成每位业主的《月次収支精算書》（<code>13-6</code>）；<br>• 复核收款账户与金额后执行获批汇款（<code>13-7</code>）；<br>• 记录押金（敷金）及其他代管金（預り金）的收受额与余额（<code>13-8</code>），根据确定的退房精算退还押金（<code>13-9</code>）；<br>• 核对代管金银行余额与分户台账余额（<code>13-10</code>），排查差额原因并提交处理记录（<code>13-11</code>）；<br>• 管理委托终止时执行资金交接并取得确认（<code>13-12</code>）。</td>
              <td>対人＋システム</td>
              <td>R05 租赁管理<br>R06 经由协同</td>
            </tr>
          </tbody>
        </table>

        <h3>4.5 子系统五：财务经由、佣金提成与税务中心（Accounting, Commission &amp; Tax Center）</h3>
        <p>
          <strong>设计核心</strong>：对应客户批注 <strong>「12, 13, 14. おなじ人やる」</strong>，将公司日常账务、提成精算与税理士协同整合。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-12-01</strong></td>
              <td><strong>仲介手续费开票、入金核销与逾期催收</strong></td>
              <td><code>12-1, 2, 3, 4</code></td>
              <td>• 根据已确定的成约内容，自动开具仲介手续费请求书（<code>12-1</code>）；<br>• 核对客户入金并与对应案件关联核销（<code>12-2</code>）；<br>• 针对已确认的入金开具领收书（自动提示印纸税额）（<code>12-3</code>）；<br>• 针对超过支付期限的仲介手续费，向营业担当发送催收委托（<code>12-4</code>）。</td>
              <td>システム作業</td>
              <td>R06 经由</td>
            </tr>
            <tr>
              <td><strong>REQ-12-02</strong></td>
              <td><strong>应付账款、员工报销、分佣与提成核算</strong></td>
              <td><code>12-5~11</code></td>
              <td>• 将供应商请求书与合同、审批、交付/作业记录进行三单匹配核对（<code>12-5</code>）；<br>• 审核员工经费报销，退回凭证不足的申请（<code>12-6</code>）；<br>• 执行已批准的付款并保存支付凭证（<code>12-7</code>）；核对收款人与账户后执行已批准的客户退款（<code>12-8</code>）；<br>• 核对并精算合作中介（共同仲介先）的手续费分配与介绍费（<code>12-9</code>）；<br>• 计算成约案件的员工提成（歩合）并提请上级确认（<code>12-10</code>），若发生解约或退款则联动修正提成额（<code>12-11</code>）。</td>
              <td>システム作業</td>
              <td>R06 经由</td>
            </tr>
            <tr>
              <td><strong>REQ-12-03</strong></td>
              <td><strong>会计记账、银企对账、月结与电子凭证合规保存</strong></td>
              <td><code>12-12~18</code></td>
              <td>• 将收入、支出、预收款计入适当的会计科目（<code>12-12</code>）；<br>• 核对银行明细与账簿，处理未达/未匹配账项（<code>12-13</code>）；<br>• 盘点库存现金，记录差额并提请确认（<code>12-14</code>）；<br>• 登记购入设备并提交折旧所需资料（<code>12-15</code>）；<br>• 执行月度结账，输出损益、余额、未精算项目一览（<code>12-16</code>）；<br>• 编制次月入出金予定表，标示预计出现资金缺口的时期（<code>12-17</code>）；<br>• <strong>按法定方法（电子账簿保存法）归档保存电子请求书、领收书及相关凭证</strong>（<code>12-18</code>）。</td>
              <td>現地＋システム</td>
              <td>R06 经由</td>
            </tr>
            <tr>
              <td><strong>REQ-14-01</strong></td>
              <td><strong>税理士窗口、Invoice 核验、源泉征收与纳税管理</strong></td>
              <td><code>14-1~10</code></td>
              <td>• 按月将凭证、银行明细、交易明细打包移交税理士（<code>14-1</code>），回答税理士关于交易用途与税区分の问询（<code>14-2</code>）；<br>• <strong>核验适格请求书（Invoice 制度）的法定必要事项</strong>（<code>14-3</code>）；<br>• <strong>收集向非居住者等支付的相关资料，并向税理士确认源泉征收处理方式</strong>（<code>14-4</code>）；<br>• 根据确认的税额创建支付申请（<code>14-5</code>），获批完税后保存纳税证明（<code>14-6</code>）；<br>• 收集年末调整所需资料并通知员工补交缺失文件（<code>14-7</code>），整理法定调书提交所需的明细移交授权担当（<code>14-8</code>）；<br>• 收到税务署等通知时登记期限并转交担当（<code>14-9</code>），备齐税务核查要求的原始凭证（<code>14-10</code>）。</td>
              <td>対人＋システム</td>
              <td>R06 经由</td>
            </tr>
          </tbody>
        </table>

        <h3>4.6 子系统六：人事劳务与总务行政中心（HR, Labor &amp; General Affairs Hub）</h3>
        <p>
          <strong>设计核心</strong>：对应客户批注 <strong>「人事 15と16. 同し人やる」</strong>，将人事劳务与日常总务、用印、钥匙、车辆台账合二为一。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-15-01</strong></td>
              <td><strong>招聘录用、入职办理、社保与培训管理</strong></td>
              <td><code>15-1~9, 16</code></td>
              <td>• 按获批条件发布招聘（<code>15-1</code>），确认应聘简历并预约面试（<code>15-2</code>），汇总面试评价请示录用批准（<code>15-3</code>）；<br>• 向获批录用者发送内定通知与入职材料清单（<code>15-4</code>），准备《労働条件通知書》与《雇用契約書》（<code>15-5</code>）；<br>• 收集入职资料并分发给薪资、保险、账号各负责人（<code>15-6</code>），将社保/劳保资料移交担当或社劳士（<code>15-7</code>）；<br>• 安排新员工培训并记录参训情况（<code>15-8</code>），请上级对试用期进行评估（<code>15-9</code>）；<br>• 安排资格培训、健康体检及其他必要事项（<code>15-16</code>）。</td>
              <td>対人＋システム</td>
              <td>R07 人事总务</td>
            </tr>
            <tr>
              <td><strong>REQ-15-02</strong></td>
              <td><strong>考勤休假、薪资核算发放、职务变更与离职闭环</strong></td>
              <td><code>15-10~15</code><br><code>15-17~20</code></td>
              <td>• 核查漏打卡、外出、加班记录（<code>15-10</code>），处理休假申请并更新剩余年假天数（<code>15-11</code>）；<br>• 汇总当月实际工时、加班、津贴、提成数据（<code>15-12</code>），确认薪资计算结果并请示批准（<code>15-13</code>）；<br>• 将已批准的薪资转账一览移交经由，并向员工发放工资明细（<code>15-14</code>）；<br>• 根据审批结果更新员工职务、薪资、合同条件（<code>15-15</code>）；<br>• 受理职场咨询与投诉并按权限转交（<code>15-17</code>）；<br>• 受理离职申请，确认最后出勤日与交接计划（<code>15-18</code>），确认离职证明、退保手续、薪资精算、资料归还全部完成（<code>15-19</code>），并委托系统管理员按离职时点停用账号（<code>15-20</code>）。</td>
              <td>対人＋システム</td>
              <td>R07 人事总务</td>
            </tr>
            <tr>
              <td><strong>REQ-16-01</strong></td>
              <td><strong>来客电话接待、快递合同寄送与办公室日常总务</strong></td>
              <td><code>16-1~7</code><br><code>16-12~15</code></td>
              <td>• 接待到店客户并通知担当（<code>16-1</code>）；接听未直通营业的电话，记录事由并转交（<code>16-2</code>）；<br>• 收取邮政信件与快递，登记后交予收件担当（<code>16-3</code>）；<strong>寄送契约书原本，并记录快递追踪单号与签收状态</strong>（<code>16-4</code>）；<br>• 预约会议室或签约室并准备资料（<code>16-5</code>）；按获批申请采购办公用品与设备（<code>16-6</code>），记录设备的发放、借出、归还与维修（<code>16-7</code>）；<br>• 联系维修商处理办公室网络、电力、给排水及设备故障（<code>16-12</code>）；执行开店/闭店安全点检（<code>16-13</code>）；提醒即将到期的办公室租约或服务合同（<code>16-14</code>）；发布已批准的内部通知并收集阅读回执（<code>16-15</code>）。</td>
              <td>対人＋現地＋システム</td>
              <td>R07 人事总务</td>
            </tr>
            <tr>
              <td><strong>REQ-16-02</strong></td>
              <td><strong>公司公章用印台账、证明书、房源钥匙与公车管理</strong></td>
              <td><code>16-8, 9, 10, 11</code></td>
              <td>• <strong>公章用印履历管理</strong>（<code>16-8</code>）：严格按照获批的用印申请（联动 <code>01-16</code>）盖章，并留存使用履历；<br>• <strong>公司证明书类管理</strong>（<code>16-9</code>）：处理公司证明书类（印鉴证明、藤本等）的开具、借出与归还；<br>• <strong>房源钥匙与门禁卡台账</strong>（<code>16-10</code>）：统一记录所有房源钥匙及大楼门禁卡的交接、归还与遗失情况；<br>• <strong>公车维护管理</strong>（<code>16-11</code>）：管理公司车辆的使用规则、定期整备保养与车险更新（联动 <code>02-9</code> 车辆预约时间表）。</td>
              <td>対人＋現地＋システム</td>
              <td>R07 人事总务</td>
            </tr>
          </tbody>
        </table>

        <h3>4.7 子系统七：系统管理、文档权限与安全审计中心（System Admin &amp; Security Center）</h3>
        <p>
          <strong>设计核心</strong>：对应客户在 <code>18</code> 批注的 <strong>「人事」</strong>，由人事兼任系统管理员，维护账号生命周期、文件权限与数据安全。
        </p>
        <table>
          <thead>
            <tr>
              <th>要件编号</th>
              <th>功能模块</th>
              <th>对应原表编号</th>
              <th>具体功能要件描述（系统行为与交互）</th>
              <th>实施属性</th>
              <th>执行角色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>REQ-18-01</strong></td>
              <td><strong>账号生命周期与细粒度访问权限控制（RBAC）</strong></td>
              <td><code>18-1, 2, 3, 4, 5</code></td>
              <td>• 为获批入职的员工创建账号并配置角色（<code>18-1</code>）；<br>• 根据获批申请增删业务权限（<code>18-2</code>）；<br>• 员工调岗时变更其对客户与案件的访问范围（<code>18-3</code>）；<br>• <strong>员工离职时一键注销其账号、登录会话（Session）及外部分享链接</strong>（<code>18-4</code>）；<br>• 为客户档案设置适当的访问权限范围（<code>18-5</code>）。</td>
              <td>システム作業</td>
              <td>R07 人事兼系统管理</td>
            </tr>
            <tr>
              <td><strong>REQ-18-02</strong></td>
              <td><strong>文件纠错恢复、备份监控、数据导出与安全应急</strong></td>
              <td><code>18-6~13</code></td>
              <td>• 修正挂错客户或房源的附件资料（<code>18-6</code>）；恢复误删文件并留存处理记录（<code>18-7</code>）；<br>• 排查登录失败、上传失败及系统故障（<code>18-8</code>）；检查自动备份结果并处理失败任务（<code>18-9</code>）；<br>• 执行获批的数据导出，强制记录领用人与导出目的（<code>18-10</code>）；<br>• <strong>异常行为监控</strong>：监测异常大量下载或异常登录并向责任人报告（<code>18-11</code>）；<br>• <strong>到期文书销毁</strong>：针对保管期限到期的文书确认是否需要保全，并执行获批的销毁操作（<code>18-12</code>）；<br>• <strong>泄露应急响应</strong>：收到误发送或信息泄露报告时，立即限制相关访问并保全审计日志（<code>18-13</code>）。</td>
              <td>現地＋システム</td>
              <td>R07 人事兼系统管理</td>
            </tr>
          </tbody>
        </table>

        <h2>五、 明确排除范围与流程裁剪清单（Out-of-Scope &amp; Pruned Items）</h2>
        <p>
          为严格贯彻客户“极简、务实、高人效”的反馈指示，以下被客户明确标注删除或否决的模块与流程，<strong>严禁在系统中设计为强制流程或冗余菜单</strong>：
        </p>
        <table>
          <thead>
            <tr>
              <th>原表位置</th>
              <th>原定业务内容</th>
              <th>客户红笔标记</th>
              <th>系统处置规范（Out-of-Scope 策略）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><code>06 物件仕入れ・オーナー担当</code>（全 11 项）</strong></td>
              <td>潜在业主开发预约、委托权限确认、底价记录、新房源拍摄、委托合同签署与更新、调价/修缮提案等</td>
              <td>🔴 <strong>「現在なし」</strong></td>
              <td><strong>整块裁撤</strong>：系统暂不设立独立的“房源收购/业主开发（仕入れ）”模块与角色。</td>
            </tr>
            <tr>
              <td><strong><code>17 コンプライアンス・苦情対応担当</code>（全 14 项）</strong></td>
              <td>牌照更新、专任宅建士变更、广告合规抽查、反洗钱实质支配者点检、可疑交易上报（No.6~7）、成约文件抽检补齐（No.8）、客诉专门台账（No.9~10）等</td>
              <td>🔴 <strong>「いなない（いらない）」</strong><br>+ <strong>No.5~10 画大 <code>×</code></strong></td>
              <td><strong>整块裁撤独立岗位</strong>：不设独立合规专员岗与繁琐的内部抽检/可疑交易申报工作流（注：重大客诉已由 <code>01-14</code> 代表和 <code>02-12</code> 店长覆盖）。</td>
            </tr>
            <tr>
              <td><strong><code>08 契約事務</code> No.6</strong></td>
              <td>将做好的合同草案回付给营业、宅建士及其他确认者</td>
              <td>🔴 编号打 <strong><code>×</code></strong></td>
              <td><strong>流程删除</strong>：因契约书与重说直接由宅建士本人作成（<code>07-13</code> &amp; <code>08-1~5</code>），无需系统内部再走“助理回付宅建士审批”的冗余流转。</td>
            </tr>
            <tr>
              <td><strong><code>08 契約事務</code> No.14</strong></td>
              <td>补齐抽查点检中发现缺失的凭证</td>
              <td>🔴 编号打 <strong><code>×</code></strong></td>
              <td><strong>流程删除</strong>：与 <code>17-No.8</code> 抽检流程一并取消，依靠签约前 Checklist（<code>02-7</code>）一次做对。</td>
            </tr>
            <tr>
              <td><strong><code>10 賃貸管理</code> No.18</strong></td>
              <td>向业主发送定期管理报告书并回答个别提问</td>
              <td>⚪ <strong>未打 <code>✓</code></strong>（全页唯一留白）</td>
              <td><strong>不作为强制定期任务</strong>：仅保留月度收支精算书（<code>13-6</code>），不强制要求系统按月生成长篇《管理报告书》。</td>
            </tr>
            <tr>
              <td><strong><code>19 海外顧客対応</code> No.4~7</strong></td>
              <td>海外客户本人/住址/委任资料催收（No.4）、海外发行文件专家合规鉴定委托（No.5）、时差预约提醒（No.6）、跨境汇款到账与银行追加资料追查（No.7）</td>
              <td>🔴 <strong>No.4~7 画大 <code>×</code></strong></td>
              <td><strong>流程裁剪</strong>：不在海外客户模块下单独设立上述 4 项繁琐的子流程卡点，仅保留翻译（1~3）、税务转达（8）、委任寄送（9）与国内交接（10）。</td>
            </tr>
          </tbody>
        </table>

        <h2>六、 核心数据架构与实体关系模型（ER 10 大核心实体）</h2>
        <pre class="doc-code-preview">CLIENT_CRM (客户主表: 原语/日文/拼音表记 19-3, 国内外标识)
  ├──► DEAL_CASE (买卖04 / 租赁05 交易案件: 担当自查Checklist状态 02-4/7, 重说直约时间 02-8, 决算交割日 02-13)
  │      ├──► TAKKEN_DOC_PACK (07-13 宅建士契约与重说文档包: 不足书类 08-1, 调查整理 08-2/4, 无矛盾核验 07-3/4, 记名押印 07-7)
  │      ├──► VEHICLE_BOOKING (02-9 看房公车预约: 关联车辆 16-11, 预约营业担当, 用车起止时间段冲突锁)
  │      └──► EXPERT_TASK (20-1~7 外部专家协同: 司法书士 / 税理士 / 社劳士 / 律师 / 测量 / 建筑士 / 保险)
  └──► GREETING_REMINDER (03-17 定期お客様あいさつ提醒: 计划问候日, 渠道, 问候记录)

PROPERTY_ASSET (房源主表 09-1: 中日双语标题 09-4, REINS状态 09-6, 钥匙台账编号 16-10, 视频与媒体状态 09-5/11)
  └──► PM_CONTRACT (10-2 受托租赁管理合同: 业主收款账户, 月租金, 敷金/預り金余额 13-8)
         ├──► REPAIR_WORK_ORDER (10-5 / 11-1 修缮工单: 维修报价 11-2/3, 超限额业主批准 10-7/11-6, 完工验收照片 11-8)
         └──► OWNER_SETTLEMENT (13-6 业主月度精算单: 实收租金 13-2, 管理费与维修扣除 13-5, 业主实付送金额 13-7)

STAFF_USER (18-1 员工账号: 兼任角色组 R01~R07, 在职/休假/离职一键注销状态 18-4)
  └──► ADMIN_LOG_ASSET (15/16/18 总务与安全台账: 公章用印 16-8 / 钥匙借还 16-10 / 数据导出 18-10 / 泄露应急 18-13)</pre>

        <h2>七、 非功能性要件与合规基线（Non-Functional Requirements）</h2>
        <ol>
          <li>
            <strong>多语言与跨文化支持（Multi-Language Ready）</strong>：系统界面以标准日文/中文双语友好呈现；房源推广模块（<code>09-4</code>）原生支持<strong>日文与中文双语房源文案存储与模板输出</strong>；客户档案（<code>19-3</code>）支持<strong>原语（中文汉字）、日文假名、英文/拼音</strong>三套姓名表记并列存储与比对。
          </li>
          <li>
            <strong>日本法规合规性内嵌（Statutory Compliance）</strong>：<br>
            • <strong>宅建业法合规</strong>：内置重说与契约书无矛盾点检锁（<code>07-3, 4</code>）、IT重说实施条件确认（<code>07-8</code>）及法定记名押印状态追踪（<code>07-7</code>）。<br>
            • <strong>电子账簿保存法与适格请求书（Invoice 制度）</strong>：财务模块支持适格请求书登録番号与必要事项核验（<code>14-3</code>），所有电子请求书、领收书及关联凭证支持按法定检索要件（交易日期、金额、交易对手）归档保存（<code>12-18</code>）。<br>
            • <strong>非居住者源泉征收协同</strong>：针对向海外非居住者支付款项的场景，内置资料收集清单与税理士源泉征收确认状态标记（<code>14-4</code>, <code>19-8</code>, <code>20-2</code>）。
          </li>
          <li>
            <strong>极简交互与高人效响应（High-Efficiency UX）</strong>：<br>
            • 遵循客户“一人多岗”的实际工作习惯，同一账号登录后可无缝切换或聚合查看所兼任角色（如 <code>営業 + 宅建士</code> 或 <code>人事 + 総務 + システム管理</code>）的待办事项。<br>
            • 移动端（手机/平板）现场友好：针对标记有 <code>現地・実作業</code> 的业务（如内见钥匙借还 <code>03-8, 10</code>、入住伤痕拍照 <code>05-13</code>、现场巡检 <code>10-11</code>、退房立会 <code>10-14</code>、修缮验收拍照 <code>11-8</code>），支持在手机浏览器端直接操作。
          </li>
        </ol>

        <h2>八、 精工雕琢罗盘（Horology Guilloché）× 4大画面拓扑 × 3+1主体色彩落地导览</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:18px; margin:20px 0;">
          <div style="border:1px solid #cbd5e1; border-radius:8px; overflow:hidden; background:#fff;">
            <img src="./assets/office/v2_topo_a_navy.jpg" alt="Topology A Navy" style="width:100%; height:220px; object-fit:cover; display:block;" />
            <div style="padding:12px 14px;">
              <strong style="font-size:13.5px; color:#090d16;">【拓扑 A × 色彩 A：皇室深海藍金】全社经营罗盘指挥舱</strong>
              <p style="font-size:12px; color:#475569; margin:4px 0 8px 0;">中央玑镂罗盘与 4 大业务翼舱，全览 288 项业务与 7 大角色进度。</p>
              <a href="./crm-home.html" target="_blank" rel="noopener noreferrer" class="btn-table-asset">打开拓扑 A (crm-home.html) ↗</a>
            </div>
          </div>
          <div style="border:1px solid #cbd5e1; border-radius:8px; overflow:hidden; background:#fff;">
            <img src="./assets/office/v2_topo_d_washi.jpg" alt="Topology D Washi" style="width:100%; height:220px; object-fit:cover; display:block;" />
            <div style="padding:12px 14px;">
              <strong style="font-size:13.5px; color:#090d16;">【拓扑 D × 色彩 B：越前白金和紙】左 70% 总台账 + 右 30% 四段抽屉</strong>
              <p style="font-size:12px; color:#475569; margin:4px 0 8px 0;">日间亮色和纸护眼模式，主台账 + 宅建士重说/双轨融资/租赁受托/海外客户抽屉。</p>
              <a href="./prototype-crm.html?topo=D&amp;theme=washi" target="_blank" rel="noopener noreferrer" class="btn-table-asset">打开拓扑 D ↗</a>
            </div>
          </div>
          <div style="border:1px solid #cbd5e1; border-radius:8px; overflow:hidden; background:#fff;">
            <img src="./assets/office/v2_topo_c_walnut.jpg" alt="Topology C Walnut" style="width:100%; height:220px; object-fit:cover; display:block;" />
            <div style="padding:12px 14px;">
              <strong style="font-size:13.5px; color:#090d16;">【拓扑 C × 色彩 C：京都焙茶胡桃】看房车辆预约时间表 &amp; 重说直连日程轴</strong>
              <p style="font-size:12px; color:#475569; margin:4px 0 8px 0;">专为客户红笔批注「車両時間表作って、みんな予約制で」与「直接宅建確認」打造。</p>
              <a href="./prototype-crm.html?topo=C&amp;theme=walnut" target="_blank" rel="noopener noreferrer" class="btn-table-asset">打开拓扑 C ↗</a>
            </div>
          </div>
          <div style="border:1px solid #cbd5e1; border-radius:8px; overflow:hidden; background:#fff;">
            <img src="./assets/office/v2_topo_b_tri.jpg" alt="Topology B Tri-Column" style="width:100%; height:220px; object-fit:cover; display:block;" />
            <div style="padding:12px 14px;">
              <strong style="font-size:13.5px; color:#090d16;">【拓扑 B × 三栏精密钟表工作台】担当自查 Checklist &amp; 宅建士契约书作成</strong>
              <p style="font-size:12px; color:#475569; margin:4px 0 8px 0;">左栏分类索引、中栏担当自查与调查核对、右栏 07-13 宅建士契约书与重说作成对照。</p>
              <a href="./prototype-crm.html?topo=B&amp;theme=navy" target="_blank" rel="noopener noreferrer" class="btn-table-asset">打开拓扑 B ↗</a>
            </div>
          </div>
        </div>
      </div>
    `
  }
};
