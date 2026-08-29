import { workDetails, type WorkDetailData } from 'app/development/data'
import type { Locale } from './i18n'

/**
 * Japanese copy lives separately from the source portfolio data so Japanese
 * wording and media can evolve without changing the English case study.
 * Add `heroImage` or `heroVideo` here later when localized assets are ready.
 */
type JapaneseWorkCopy = Partial<Pick<WorkDetailData, 'title' | 'subtitle' | 'heroImage' | 'heroVideo' | 'meta' | 'tags' | 'metricPrefix' | 'metricValue' | 'metricSuffix'>> & {
  overview?: Partial<WorkDetailData['overview']>
  details?: Partial<WorkDetailData['details']>
  features?: WorkDetailData['features']
}

const japaneseWorkCopy: Record<string, JapaneseWorkCopy> = {
  'robotics-b2b-commerce': {
    title: 'ロボティクス・ドローン向けB2B Eコマースとブランディング',
    subtitle: 'Norsatのロボティクス・ドローン事業拡大に向け、新しいShopify Plusストアのブランド、UI/UX、フロントエンド実装をリード',
    meta: 'Norsat International — 2ヶ月',
    overview: {
      background: 'Norsat Internationalは衛星通信製品に加え、ロボティクスとドローン分野へ事業を拡大していました。農業分野の官公庁・法人顧客に向けた、新しいブランドとデジタル体験が必要でした。',
      challenge: '既存の衛星通信事業と新部門を差別化しながら、高度に専門的なB2B市場で信頼を築くことが課題でした。',
      solution: 'ブランド戦略、UI/UXデザイン、LiquidとJavaScriptによるShopifyフロントエンド開発をリードしました。複雑な商品探索を支える情報設計とデータ構造を整え、拡張可能なプラットフォームを構築しました。',
    },
    details: {
      period: '2026年 — 継続中',
      role: 'ブランディング、UI/UXリード、フロントエンド開発者、PDM',
      roleDescription: 'ブランドアイデンティティ、ユーザー体験、Shopify Plusのフロントエンド開発をリード。B2Bデザインシステムの構築、Windchill・Business Centralと連携するShopifyメタフィールド設計、MVPの優先順位に関する部門横断の協働を担当しています。',
      outcome: '公開から最初の1か月でユニークユーザー546人に到達し、B2B企業向けに製品を出荷しました。',
      team: '部門横断チーム',
      teamDetails: 'プロダクトオーナーおよび事業関係者と、MVPの優先順位とプラットフォーム戦略を協働で検討',
    },
    features: [
      { media: [{ type: 'image', src: '/images/work/aerobot-brand-guidelines.webp', alt: 'Aerobot Intelligence ブランドガイドライン' }], title: 'ブランディング', description: '革新性と未来志向の自律型ソリューションを伝えながら、DJIなど主要技術パートナーとの公式連携や熟練エンジニアによる専門トレーニングを通じた信頼性も表現する必要がありました。\n\nメインカラーには彩度を抑えたグリーンを採用しました。多くのロボティクス・ドローン企業が用いる黒ではなく、B2B、特に官公庁顧客に求められる信頼感を保ちつつ、クリーンで革新的な印象をつくりました。低視力のユーザーにも配慮してアクセシビリティを検証しています。\n\nデザインシステムのコンポーネントを構築・同期し、開発チームとグラフィックデザイナーがプロダクトやマーケティング素材に一貫して適用できるようにしました。' },
      { media: [{ type: 'image', src: '/images/work/strategy-1-robot.webp', alt: '戦略基盤とリサーチ' }], title: '戦略', description: '初期のブランド戦略フェーズで競合分析を行い、プロダクトオーナー、CEO、開発チームへのインタビューと既存サイト・競合の調査を実施しました。\n\nその結果、空と地上の両方を扱えること、40年の実績を持つNorsatの安定性とDJIの公式販売代理店としての専門性、そして単なる製品販売ではなくロボティクスで顧客の課題解決を支援するソリューション企業であることを、3つの強みとして定義しました。' },
      { media: [{ type: 'image', src: '/images/work/ux-navigation-1-robot.webp', alt: '商品カタログとメガメニュー' }, { type: 'image', src: '/images/work/ux-navigation-2-robot.webp', alt: 'モバイルナビゲーションとフィルター' }, { type: 'image', src: '/images/work/ux-navigation-3-robot.webp', alt: 'アクセサリー互換性確認' }], title: 'カスタム機能開発によるUXナビゲーション', description: 'カテゴリと商品モデルのための独自の商品階層を設計し、コレクションページ、商品ページの互換アクセサリー、およびアクセサリーフィルターに実装しました。\n\n例えば「ドローン → DJI製品 → DJI製品ライン」のように、標準のShopify Plusでは実現できない階層を構築。情報設計をShopifyメタフィールドへ落とし込み、フロントエンドを実装するとともに、データ入力・同期のワークフローをプロダクトチームと整備しました。商品を見つけやすくし、ECの成長を支援しています。' },
      { media: [], title: 'カスタムShopify UIコンポーネントとデザインシステム', description: 'コンテンツ制作の効率とブランドの一貫性を高めるため、カラーテーマや商品カードを含むカスタムShopify UIコンポーネントを開発しました。\n\n2種類の配色とカードバリエーションにより、デザインの専門知識がなくてもShopifyエディタ上で新しいコンテンツを作成できます。コンポーネントは反復的な開発作業を減らし、最新のテーマ構造にも準拠しています。' },
      { media: [{ type: 'image', src: '/images/work/information-architecture-1.webp', alt: '情報アーキテクチャマップ' }], title: '情報アーキテクチャ', description: '収益に直接つながる製品・サービスコンテンツを優先しました。初期案ではトレーニングとレンタルを1ページにまとめる予定でしたが、競合調査から、サービス、レンタル、トレーニングを分けたほうが探しやすいと判断しました。\n\nケーススタディ、ニュース、ソリューション、業界別ページは初回リリースでは優先度を下げ、ホームページから主要なセクションへ分かりやすく誘導する構成にしました。' },
    ],
  },
  'sauna-booking-application': {
    title: 'サウナ予約アプリケーション',
    subtitle: 'スムーズな予約体験とリワードで、継続利用を促進',
    meta: 'Moncho-KG — 1か月',
    overview: {
      background: 'スムーズな予約フローと、再予約を促すゲーム性のあるリワードを備えた、モバイルファーストのサウナ予約アプリをデザインしました。',
      challenge: '電話予約や手作業での決済による負担を減らし、デバイスを問わずリワードプログラムを見つけやすくする必要がありました。',
      solution: '分かりやすい予約フロー、ログイン・予約変更のサポート、ホーム画面で目立つリワード体験に注力し、各画面サイズに対応しました。',
    },
    details: { period: '1人月', role: 'UX/UIデザイナー、UXリサーチャー', roleDescription: '予約フロー、リワードの配置、レスポンシブデザインの方針をリードし、予約時の負担を減らして継続利用を促す体験を設計しました。', outcome: '改善されたユーザーフローについてクライアントから好意的な評価を得て、フリーランスプラットフォームでは品質、コミュニケーション、協働で5点満点の評価を受けました。', team: '2名', teamDetails: 'エンジニア1名、プロダクトデザイナー（私）' },
    metricPrefix: '品質、コミュニケーション、協働で', metricValue: '5/5', metricSuffix: 'の評価を獲得',
  },
  'occupational-health-consultation-tool': {
    title: '産業保健面談ツール',
    subtitle: '多忙な産業保健医師の面談業務を再設計し、操作の負担を減らして使いやすさと効率性を改善',
    meta: 'mediPhone — 1か月',
    heroVideo: '/videos/work/occupational_health_consultation_tool_jp.mp4',
    overview: {
      background: '産業保健面談ツールは、産業保健医師が従業員との面談や人事との連携に使うmedimentの主要機能でした。しかし、15分という短い面談中に複数ページを行き来する必要があり、不満の声がありました。',
      challenge: 'ユーザーインタビューから、過度な画面遷移が面談の流れを妨げていることが分かりました。必要な患者情報を一画面で確認しながらメモできる、業務中心の体験が必要でした。',
      solution: '認知的負担を減らし、面談を効率化しました。改善はユーザーから好評で、約ARR 4%に相当する新規MRRの増加にも貢献しました。',
    },
    details: { period: '1人月', role: 'UX/UIデザイナー、UXリサーチャー', roleDescription: '産業保健の専門職と社内関係者に合わせ、ユーザーリサーチ、インタラクション設計、面談ワークフローのUI再設計をリードしました。', outcome: '主要タスクを1画面に集約して面談業務を簡素化。産業医から好意的なフィードバックを得て、新規契約とARR 4%増加に貢献しました。', team: '4名', teamDetails: 'エンジニア2名、プロジェクトオーナー1名、プロダクトデザイナー（私）' },
    features: [
      { media: [{ type: 'video', src: '/videos/work/occupational_health_consultation_tool_jp.mp4' }], title: '1画面で完結する面談ワークフロー', description: '書類の確認、面談メモ、報告書作成を一か所に集約。専門職が複数画面を行き来せずに面談を完了できるようにしました。' },
      { media: [{ type: 'image', src: '/images/work/occupational_health_employee_data.webp' }], title: '健康データパネル', description: '面談中にメモを書きながら、従業員の現在と過去の健康状態をひと目で確認できる専用エリアを設けました。' },
      { media: [{ type: 'image', src: '/images/work/occupational_health_consultation_reports.webp' }], title: '面談記録と意見書', description: '面談記録と意見書を同じワークスペースで扱えるレイアウトにし、面談後に他の専門職や労務担当者が結果を確認しやすくしました。' },
    ],
    metricValue: '4%', metricSuffix: 'ARR増加',
  },
  'workplace-stress-program-analysis': { title: '職場ストレスチェック分析ツール', subtitle: '分析の分かりやすさを改善し、クライアントの解約を防ぐために職場ストレス分析ツールをリデザイン', meta: 'mediPhone — 2か月', heroVideo: '/videos/work/workplace_stress_jp.mp4', metricPrefix: '解約を防止した', metricValue: '主要クライアント3社', overview: { background: '職場ストレスチェック分析ツールでは人事担当者がグループ単位のストレスを分析できましたが、使いにくさから主要クライアント3社が解約を検討していました。', challenge: '専門家や関係者へのユーザーリサーチとインタビューを通じて、3つの改善点を特定。分析情報を明確にし、画面を見やすくし、レポート作成の流れを改善しました。', solution: '更新後のUI/UXはクライアントの懸念を解消し、プロダクトへの信頼を高め、3社すべての継続利用につながりました。' } },
  'health-e-learning': { title: '従業員向け健康Eラーニング機能', subtitle: '手間なく効果的な従業員の健康教育を可能にし、アップセル成長を支えるEラーニング機能を設計・リリース', meta: 'mediPhone — 2か月', metricValue: '2倍', metricSuffix: '機能への関心が向上', overview: { background: 'プロダクトには、既に健康に支障が出ている従業員の1対1のサポートだけに頼らず、企業が全ての従業員に健康に関する知識を届けられる拡張可能な方法が必要でした。', challenge: '従業員と労務管理担当者の双方に分かりやすいよう、情報構造、コース参加フロー、機能の理解を助けるビジュアルを含む親しみやすいEラーニング体験を設計しました。', solution: 'この機能は労務管理担当者が手間なく従業員全員に健康に関する教育を支援できると同時に、プロダクトのアップセル機能として売り上げに貢献しました。' } },
  'mind-spark-academy': { title: 'Mind Spark Academy プリスクールサイト', subtitle: '複雑な教育理念を明確なブランドへ変換し、カナダのプレスクールサイトをゼロから立ち上げ', meta: 'Mind Spark Academy — 1週間', metricPrefix: '1週間で', metricValue: '10件の登録', metricSuffix: 'を獲得', overview: { background: '新しいプレスクールには、最初の入園児童を集める必要がありました。脳科学、アジア文化の価値観、グローバルな学びを組み合わせた創業者のビジョンは魅力的でしたが、明確に伝えるのが困難でした。', challenge: 'ブランド戦略からデザイン、開発まで一貫してリード。社長との話し合いを通じてビジョンを4つの柱に整理し、明確な価値提案と直感的なサイト構造へ落とし込みました。', solution: '公開から1週間で最初の説明会に10件の登録を獲得。強い市場ニーズを確認し、早期の顧客獲得につながりました。' } },
  'mattress-comparison': { title: 'カナダのマットレス比較サイト', subtitle: 'マットレスの比較をシンプルにし、製品品質を分かりやすく伝えることでEC売上を向上', meta: 'Plasmabed — 3週間', metricPrefix: 'わずか', metricValue: '3週間', metricSuffix: 'でMVPを設計・開発', overview: { background: 'Plasmabedはオーガニック流入と売上を増やしつつ、競合との違いを明確にする必要がありました。顧客は製品の違いや品質を理解しづらく、購入判断をためらっていました。', challenge: 'ユーザーリサーチと関係者インタビューから、主要な製品属性をより明快に比較できることが必要だと特定。違いを直感的に理解できるマットレス比較サイトのMVPを設計・開発しました。', solution: '要件を迅速にすり合わせ、関係者と密に協働することで、3週間でMVPを提供。市場投入を早め、製品の分かりやすさとEC売上の向上に貢献しました。' }, details: { period: '2025年12月 — 2026年1月', role: 'リードフルスタック開発者、UXデザイナー', roleDescription: 'データベース設計、ワイヤーフレーム、実装、公開までエンドツーエンドの開発をリードしました。', outcome: '3週間でMVPを公開し、主要ECサイトへのページビューを増加。SEOに配慮したカテゴリ別比較ページを構築し、関係者の目標とユーザー体験に沿ってスコープを整えました。', team: '3名', teamDetails: 'リード開発者（私）、CTO、オーナー' }, features: [{ media: [{ type: 'image', src: '/images/work/product_category.webp' }], title: '商品カテゴリのランキングロジック', description: '顧客レビューと管理画面から提供されたデータを使い、各カテゴリで上位商品を表示するランキングロジックを構築しました。' }, { media: [{ type: 'image', src: '/images/work/product_comparison.webp' }], title: '商品比較ページ', description: 'Railsの多対多関連を使った比較テーブルを実装。横並びの比較と、数値IDではなくスラッグURLを用いたSEO最適化ページを実現しました。' }] },
  'meeting-scheduling-app': { title: '医師・従業員向け面談予約機能', subtitle: '詳細な要件整理と協働により、2か月の期限内で産業保健スタッフと健康課題を持つ従業員のニーズを満たす面談予約機能を実装', overview: { background: 'クライアントはGoogle Calendarを利用していましたが、健康管理システムと連携できず、セキュリティ上の懸念もありました。', challenge: '2か月という期限内に、リアルタイムの空き状況確認とスムーズな予約を実現する、安全で統合された予約システムを提供することでした。', solution: 'データベースを設計し、Django REST FrameworkでRESTful APIを構築。ページを再読み込みせずに即時予約できるVue.jsフロントエンドを実装しました。' }, details: { period: '2人月', role: 'フルスタックエンジニア', roleDescription: 'POとUI/UXデザイナーと協働し、バックエンドアーキテクチャとAPI設計を担当。Vue.jsで予約UIを構築しました。', outcome: '2か月以内に安全で一元化された予約機能を提供。ページ再読み込みなしの即時予約を実現し、使いやすさについてクライアントから好意的なフィードバックを得ました。', team: '3名', teamDetails: 'UI/UXデザイナー、PO、フルスタックエンジニア（私）' }, features: [{ media: [{ type: 'image', src: '/images/work/real_time_availability.webp' }], title: 'リアルタイムの空き状況', description: 'ユーザーは空き時間をリアルタイムで確認し、ページを再読み込みせず即時に予約できます。Django REST APIとVue.jsにより、シームレスで反応のよい予約体験を実現しました。' }, { media: [{ type: 'image', src: '/images/work/scheduling_system.webp' }], title: '柔軟なスケジューリングシステム', description: '人事チームは、単発の面談と繰り返し予定（日・週・月単位）の両方に対応した、カスタマイズ可能な面談スケジュールを作成できます。直感的なUIにより、日程調整の複雑さと管理負担を減らします。' }] },
  'beazu-growth-ops': { title: 'Beazu 卸売ECの成長・保守運用', subtitle: 'ジュエリー卸売ストアのSEO、UX、サイト安定性を改善', overview: { background: '主要なジュエリー商品が検索結果で十分に上位表示されず、ECサイトには成長を支えるためのバグ修正とUX改善も必要でした。', challenge: '安定した本番ストアを維持し、重大なバグと機能要望に対応しながら、オーガニック流入と売上を増やすことでした。', solution: 'SEOとUX改善をリードし、重要なPHPバグの修正を優先。WordPressテーマをカスタマイズしてナビゲーションと商品発見性を向上させました。' }, details: { period: '2025年9月 — 2025年11月', role: 'フルスタックエンジニア', roleDescription: 'オーナーとマーケティング担当者と協働し、SEO・UX改善とサイト保守を担当しました。', outcome: 'オーガニック流入を1.3倍、売上を1.5倍に増加。10件以上の重要バグを修正して日常運用を安定化し、モバイルナビゲーションとカテゴリCTAを改善、商品を見つけやすくするWordPressテーマのカスタマイズを提供しました。', team: '3名', teamDetails: 'フルスタックエンジニア（私）、オーナー、マーケティング担当者' }, features: [{ media: [{ type: 'image', src: '/images/work/beazu_seo_categories.webp' }], title: 'SEO最適化されたカテゴリページ', description: '最適化したメタタグ、構造化データ、キーワードを含むコンテンツを備えたジュエリーカテゴリページを開発し、オーガニック検索流入とSEO順位の向上につなげました。' }, { media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=1200&h=700&fit=crop' }], title: '本番環境の安定化と機能開発', description: '重要なPHPの問題を修正しながら、関係者から要望のあった機能を実装することで、バグ解消と機能提供を両立しました。' }, { media: [{ type: 'image', src: '/images/work/beazu_flatsome_before.webp' }, { type: 'image', src: '/images/work/beazu_flatsome_after.webp' }], title: 'Flatsomeテーマの改善', description: '戦略的なCTAボタン、カテゴリへのクイックリンクを備えたモバイルナビゲーション、CSSとUX Builderを用いた保守しやすい更新により、コンバージョンとUXを高めました。' }, { media: [{ type: 'image', src: '/images/work/beazu_growth_ops.webp' }], title: '卸売向けBlocksyテーマ最適化', description: 'カスタムの商品バリエーションUIと直接「カートに追加」ボタンを導入。卸売顧客が複数の商品を効率よく購入できるようにし、カート放棄を減らしました。' }] },
  'enterprise-design-system': { title: 'エンタープライズ向けデザインシステム', subtitle: 'Figma、Vue.js、Storybookをつなぎ、ワークフローとチーム協働を効率化する機能的なデザインシステムへコンポーネントライブラリを進化', meta: 'mediPhone — 2024', overview: { background: 'アーリーステージのSaaSスタートアップで、プロダクトチームはデザインシステムの構築に取り組みました。フロントエンドエンジニアはStorybookでコンポーネントライブラリを作りましたが、Figmaのコンポーネントとは分断され、再利用の判断が難しく、重複したUIが残っていました。', challenge: 'プロダクトの成長とともに、コンポーネントライブラリだけでは不十分になりました。UIの不整合、冗長なコンポーネント、反復作業での過度な意思決定が発生し、個別要素を超えて柔軟なパターンを中心にチームの考え方をそろえる必要がありました。', solution: 'プロダクトデザイナーとソフトウェアエンジニアの両方の立場で、FigmaとVue.js／Storybookを接続。標準のレイアウト・ワークフローパターンを整備し、単なるコンポーネント作成から、拡張可能なパターン再利用へチームの意識を移し、重複作業を大きく減らしました。' } },
}

export function getLocalizedWork(slug: string, locale: Locale): WorkDetailData | undefined {
  const work = workDetails.find((item) => item.slug === slug)
  if (!work || locale === 'en') return work

  const copy = japaneseWorkCopy[slug]
  if (!copy) return work

  const { overview, details, features, ...restCopy } = copy

  return {
    ...work,
    ...restCopy,
    overview: { ...work.overview, ...overview },
    details: { ...work.details, ...details },
    features: features ?? work.features,
  }
}

export function getLocalizedWorks(locale: Locale) {
  return workDetails.map((work) => getLocalizedWork(work.slug, locale) ?? work)
}

const japaneseTags: Record<string, string> = {
  Branding: 'ブランディング',
  'E-commerce': 'EC',
  'UX/UI Design': 'UI/UXデザイン',
  'Information Architecture': '情報アーキテクチャ',
  'Mobile App': 'モバイルアプリ',
  'User Research': 'ユーザーリサーチ',
  Redesign: 'リデザイン',
  'Design Leadership': 'デザインリーダーシップ',
  'Feature Design': '機能設計',
  'Health Tech': 'ヘルステック',
  Growth: 'グロース',
  Education: '教育',
  'Brand Strategy': 'ブランド戦略',
  'Web Design': 'ウェブデザイン',
  'Zero to One': 'ゼロイチ',
  'Web Design & Development': 'ウェブデザイン・開発',
  'Design System': 'デザインシステム',
}

export function localizeTag(tag: string, locale: Locale) {
  return locale === 'ja' ? (japaneseTags[tag] ?? tag) : tag
}
