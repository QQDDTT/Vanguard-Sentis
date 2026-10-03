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
          <li><strong>代表取締役：</strong>阿部 翔平（防衛省 航空自衛隊 作戦情報隊 第二収集隊 歴任、株式会社リノベスト 法人営業責任者として大規模取引・優良物件仲介を多数成約）。</li>
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
          </tbody>
        </table>
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
  }
};
