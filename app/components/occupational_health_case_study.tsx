import type { ReactNode } from 'react';
import type { Locale } from 'app/lib/i18n';
import CaseStudyClosing from './case_study_closing';

const prototypeUrl = 'https://www.figma.com/proto/JTrDQDVRcwUruuS0XIyBZ0/interview-prototype?page-id=0%3A1&node-id=1-1448&viewport=518%2C495%2C0.03&t=6yrmXVy5LZuuIVhF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1448';
const bodyClass = 'space-y-4 text-base leading-[1.8] md:text-lg';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mx-auto w-full max-w-[1040px] space-y-10 px-6 py-12 md:px-10 md:py-16">
    <h2 className="text-center text-[1.75rem] font-bold text-[#006a68]">{title}</h2>
    {children}
  </section>;
}

function Topic({ title, children }: { title: string; children: ReactNode }) {
  return <div className="space-y-5">
    <h3 className="text-xl font-bold text-[#161d1c]">{title}</h3>
    <div className={bodyClass}>{children}</div>
  </div>;
}

function Figure({ name, alt }: { name: string; alt: string }) {
  return <figure className="overflow-hidden rounded-xl bg-[#f9f9f9]">
    <img src={`/images/work/occupational-health/${name}.webp`} alt={alt} loading="lazy" className="mx-auto h-auto w-full" />
  </figure>;
}

export default function OccupationalHealthCaseStudy({ locale = 'en' }: { locale?: Locale }) {
  const t = (en: string, ja: string) => locale === 'ja' ? ja : en;
  const title = t('Occupational Health Consultation Tool', '産業保健面談ツール');
  const overview = [
    [t('Timeline', '期間'), t('1 person-month', '1人月')],
    [t('Role', '担当'), t('UX/UI Design, UX Research', 'UX/UIデザイン、UXリサーチ')],
    [t('Tool', 'ツール'), 'Figma'],
    [t('Company', '会社'), 'mediPhone, inc.'],
    [t('Team', 'チーム'), t('2 engineers, 1 project owner, Product Designer (myself)', 'エンジニア2名、プロジェクトオーナー1名、プロダクトデザイナー（私）')],
    [t('Impact', '成果'), t('The redesigned feature contributed to new contracts, resulting in a 4% increase in ARR.', '機能のリデザインが新規契約につながり、ARRの4%増加に貢献しました。')],
  ];
  const competitors = [
    { name: 'Carely', feature: t('A health management system for HR, occupational health professionals, and public health nurses, bringing interviews, notes, and health information together on one screen.', '人事、産業保健スタッフ、保健師向けの健康管理システム。面談、メモ、健康情報を1画面で管理できます。'), strength: t('Integrated features improve workflow efficiency.', '機能の集約により業務効率が向上します。'), weakness: t('Opinion letters cannot be created while reviewing interview records.', '面談記録を確認しながら意見書を作成できません。') },
    { name: 'Henry', feature: t('A smartphone-like interface for managing patient data with a clean, easy-to-understand layout.', 'スマートフォンのような操作性と、分かりやすく整理された患者情報の管理画面。'), strength: t('Simple, clean design avoids overcrowded screens.', 'シンプルなデザインで、画面の情報過多を防ぎます。'), weakness: t('Some functions may require more detailed guidance.', '機能によっては、より詳しい操作ガイドが必要です。') },
    { name: 'CLINICS', feature: t('A cloud-based electronic medical record system for appointments, diagnosis, and billing.', '予約、診療、会計を扱うクラウド型電子カルテシステム。'), strength: t('A seamless experience across administrative and medical tasks.', '事務業務と診療業務を一連の流れで進められます。'), weakness: t('The number of features can create a steep learning curve.', '機能が多く、使い方を覚える負担があります。') },
  ];

  return <main lang={locale} className="w-full bg-white text-[#333333]">
    <section className="mx-auto w-full max-w-[1440px] px-6 pb-6 pt-12 md:px-10 md:pt-16">
      <h1 className="mx-auto max-w-[980px] text-center text-[2rem] font-bold leading-[1.4] md:text-[2.5rem]">{title}</h1>
      <img src="/images/work/occupational_health_consultation_tool.webp" alt={title} className="mt-10 h-auto w-full bg-[#f4dfbc]" />
    </section>

    <Section title={t('Project Overview', 'プロジェクト概要')}>
      <p className="border-b border-[#f0eeee] pb-8 text-lg leading-[1.8]">{t('The occupational health consultation tool allowed professionals to consult employees, but its usability was poor due to the need to switch between three screens. After user research and iteration, I redesigned the interface into a single screen, streamlining the process. This improvement led to positive user feedback, higher satisfaction, and new clients.', '産業保健スタッフが従業員と面談するためのツールは、3つの画面を行き来する必要があり、使いづらさが課題でした。ユーザーリサーチと改善を重ね、1画面で業務を進められるUIに再設計。ユーザーからの好意的な評価、満足度向上、新規顧客の獲得につながりました。')}</p>
      <dl className="grid gap-6 md:grid-cols-2">{overview.map(([label, value]) => <div key={label} className="space-y-2"><dt className="text-lg font-bold">{label}</dt><dd className="text-base leading-7">{value}</dd></div>)}</dl>
      <p className="text-sm leading-6 text-[#666666]">{t('This project was originally created in Japanese for a Japanese audience. The text has been translated into English for this portfolio.', 'このプロジェクトは日本のユーザー向けに日本語で制作されました。図版には英語ポートフォリオ向けに翻訳した内容が含まれます。')}</p>
    </Section>

    <Section title={t('The Situation', '背景と課題')}>
      <Topic title={t('The Product', 'プロダクト')}><p>{t('In Japan, employees with health issues are required to consult with occupational health professionals. mediment offers an Occupational Health Consultation Tool to streamline interactions between professionals and employees, and to report employees’ health conditions to HR managers.', '日本では、健康上の問題を抱える従業員が産業保健スタッフと面談します。medimentの産業保健面談ツールは、専門職と従業員の面談を円滑にし、従業員の健康状態を人事・労務担当者へ報告するための機能です。')}</p></Topic>
      <Figure name="product" alt={t('mediment occupational health consultation feature', 'medimentの産業保健面談機能')} />
      <Topic title={t('Problem', '課題')}><p>{t('Busy users had to switch between three separate pages, making it difficult to take notes while reviewing documents during consultations. The interface needed to let users view documents and take notes seamlessly.', '多忙なユーザーは3つの別々のページを行き来しなければならず、面談中に書類を確認しながらメモを取るのが困難でした。書類の閲覧とメモの作成をスムーズに行えるUIが必要でした。')}</p></Topic>
      <Figure name="problem" alt={t('Previous workflow spread across three screens', '改善前の3画面に分かれた業務フロー')} />
      <Topic title={t('Goal', '目標')}><p>{t('Allow occupational health professionals to smoothly take consultation notes while viewing the necessary documents during consultations.', '産業保健スタッフが必要な書類を確認しながら、面談メモをスムーズに作成できるようにすること。')}</p></Topic>
      <Topic title={t('Constraints', '設計上の制約')}><p>{t('All consultation tasks needed to be completed in one place. I referenced familiar electronic medical record interfaces used by physicians so users could understand the layout and work efficiently.', '面談に関するすべてのタスクを一か所で完結できるようにする必要がありました。医師が日頃使う電子カルテを参考に、慣れ親しんだレイアウトで効率よく作業できるようにしました。')}</p></Topic>
      <Topic title={t('Solution', '解決策')}><p>{t('I designed a workspace where occupational health professionals can take consultation notes while viewing all necessary documents in one place.', '必要な書類を一か所で確認しながら面談メモを作成できるワークスペースを設計しました。')}</p></Topic>
      <Figure name="solution" alt={t('Proposed single-screen consultation workspace', '提案した1画面で完結する面談ワークスペース')} />
      <Topic title={t('Design Process', 'デザインプロセス')}><p>{t('After consulting with the designers, I followed a process based on design thinking.', 'デザイナー同士で相談し、デザイン思考に基づくプロセスで進めました。')}</p></Topic>
      <Figure name="process" alt={t('Design thinking process', 'デザイン思考のプロセス')} />
    </Section>

    <Section title={t('Research', 'リサーチ')}>
      <Topic title={t('User Interviews', 'ユーザーインタビュー')}>
        <p>{t('I interviewed people involved in occupational health tasks to understand how they conduct consultations and identify issues with the existing features.', '産業保健業務に関わる方々にインタビューを行い、面談の進め方と既存機能の課題を把握しました。')}</p>
        <p>{t('I then organized their statements and thoughts into an empathy map.', 'インタビュー後、発言や考えをエンパシーマップに整理しました。')}</p>
      </Topic>
      <Figure name="empathy-map" alt={t('Empathy map from occupational health user interviews', '産業保健スタッフへのインタビューを整理したエンパシーマップ')} />
      <Topic title={t('Competitive Audit', '競合調査')}><p>{t('I investigated other occupational health consultation tools, as well as hospital consultation services. Although hospital tools were not direct competitors, their interfaces offered useful insights into familiar workflows for health professionals.', '他社の産業保健面談機能の使いやすさを調査しました。また、直接の競合ではない病院の診療サービスも調べ、医療従事者が使い慣れた業務フローとUIからヒントを得ました。')}</p></Topic>
      <div className="overflow-x-auto rounded-xl border border-[#dce8e4]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-7 md:text-base">
          <caption className="sr-only">{t('Competitive audit conducted during the project', 'プロジェクト当時に実施した競合比較')}</caption>
          <thead className="bg-[#eff7f3] text-[#005f5d]"><tr>{[t('Service', 'サービス'), t('Feature', '機能'), t('Strengths', '強み'), t('Weaknesses', '弱み')].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
          <tbody>{competitors.map(item => <tr key={item.name} className="border-t border-[#dce8e4]"><th scope="row" className="p-4 align-top">{item.name}</th>{[item.feature, item.strength, item.weakness].map(value => <td key={value} className="p-4 align-top">{value}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <Topic title={t('User Journey Map', 'ユーザージャーニーマップ')}><p>{t('I mapped the tasks, emotions, and opportunities for improvement as users interact with the consultation feature.', '面談機能を利用する際のタスク、感情、改善の機会をユーザージャーニーマップに整理しました。')}</p></Topic>
      <Figure name="journey-map" alt={t('Consultation user journey map', '面談業務のユーザージャーニーマップ')} />
    </Section>

    <Section title={t('Ideation', 'アイデア検討')}>
      <div className={bodyClass}>
        <p>{t('Using the interviews, empathy maps, and journey maps, I organized user challenges and goals and explored several rough layouts that allow note-taking while reviewing documents.', 'インタビュー、エンパシーマップ、ジャーニーマップから課題と目標を整理し、必要な書類を見ながら面談メモを取れる画面のラフ案を複数検討しました。')}</p>
        <p>{t('I checked the direction with occupational health professionals. They preferred a layout similar to electronic medical records used in hospitals because it was familiar to them.', '産業保健スタッフにデザインの方向性を確認しました。病院の電子カルテに似たレイアウトのほうが使い慣れているという意見を得ました。')}</p>
      </div>
      <Figure name="ideation" alt={t('Rough design patterns explored during ideation', 'アイデア検討時に作成した複数のラフ案')} />
    </Section>

    <Section title={t('Design', 'デザイン')}>
      <Topic title={t('Digital Wireframes', 'デジタルワイヤーフレーム')}><p>{t('I created wireframes including screen transitions and reviewed the overall concept with the project manager.', '画面遷移を含むワイヤーフレームを作成し、プロジェクトマネージャーと全体のコンセプトを確認しました。')}</p></Topic>
      <Figure name="wireframes" alt={t('Digital wireframes and screen transitions', 'デジタルワイヤーフレームと画面遷移')} />
      <Topic title={t('Hi-Fidelity Designs', '高精度のデザイン')}><p>{t('I developed the high-fidelity designs from the digital wireframes.', 'デジタルワイヤーフレームをもとに、高精度のUIデザインを作成しました。')}</p></Topic>
      <Topic title={t('View Employee Data, Create Notes, and Reports on a Single Screen', '従業員情報・面談記録・報告書を1画面に集約')}><p>{t('The layout helps busy occupational health professionals conduct consultations efficiently.', '多忙な産業保健スタッフが効率よく面談できるレイアウトにしました。')}</p></Topic>
      <Figure name="single-screen" alt={t('Employee data, notes, and reports in one screen', '従業員情報、面談記録、報告書をまとめた画面')} />
      <video className="h-auto w-full rounded-xl bg-[#f4dfbc]" src={locale === 'ja' ? '/videos/work/occupational_health_consultation_tool_jp.mp4' : '/videos/work/occupational_health_consultation_tool.mp4'} poster="/images/work/occupational_health_consultation_tool.webp" controls playsInline preload="none" aria-label={t('Consultation workflow demonstration', '面談ワークフローのデモ動画')} />
      <Topic title={t('Close Health Data Tab', '健康データタブを閉じる')}><p>{t('Closing the health data tab lets professionals focus on consultation records and opinion letters.', '健康データタブを閉じることで、面談記録や意見書の作成に集中できます。')}</p></Topic>
      <Figure name="close-health-data" alt={t('Workspace with the health data tab closed', '健康データタブを閉じたワークスペース')} />
      <Topic title={t('Health Data Tab', '健康データタブ')}><p>{t('Professionals can view an employee’s current and past health status at a glance.', '従業員の現在と過去の健康状態をひと目で確認できます。')}</p></Topic>
      <Figure name="health-data" alt={t('Current and historical employee health data', '従業員の現在と過去の健康データ')} />
      <Topic title={t('Consultation Notes', '面談記録')}><p>{t('Consultation notes can be reviewed by other occupational health professionals and labor managers.', '他の産業保健スタッフや労務担当者が確認できる面談記録を作成します。')}</p></Topic>
      <Figure name="notes" alt={t('Consultation notes interface', '面談記録の作成画面')} />
      <Topic title={t('Consultation Report Form & Opinion Report', '面談報告書・意見書')}><p>{t('If an opinion report is required after the consultation, it can be completed here and reviewed by other professionals and labor managers.', '面談の結果、意見書が必要な場合はこの画面で記入します。他の産業保健スタッフや労務担当者も確認できます。')}</p></Topic>
      <Figure name="reports" alt={t('Consultation report and opinion report form', '面談報告書と意見書のフォーム')} />
      <Topic title={t('Hi-Fidelity Prototype', '高精度のプロトタイプ')}>
        <p>{t('I created a high-fidelity prototype based on the digital wireframes.', 'デジタルワイヤーフレームをもとに、高精度のプロトタイプを作成しました。')}</p>
        <a href={prototypeUrl} target="_blank" rel="noopener noreferrer" className="text-[#005f5d] underline underline-offset-4">{t('Prototype Link', 'プロトタイプを見る')} ↗</a>
      </Topic>
    </Section>

    <Section title={t('Going Forward', '成果と今後の改善')}>
      <h3 className="text-xl font-bold">{t('Takeaways', '振り返り')}</h3>
      <Topic title={t('Impact', '成果')}><ul className="list-disc space-y-3 pl-6">
        <li>{t('Occupational health doctors reported that the feature was easier to use and allowed for quicker consultations.', '産業医から、面談機能が使いやすくなり、より短時間で面談を行えるようになったという評価を得ました。')}</li>
        <li>{t('After release, the feature contributed to new contracts, resulting in a 4% increase in ARR.', 'リリース後、新規契約につながり、ARRの4%増加に貢献しました。')}</li>
      </ul></Topic>
      <Topic title={t('What I Learned', '学んだこと')}><ul className="list-disc space-y-3 pl-6">
        <li>{t('Fitting all the information compactly and clearly on one screen was challenging.', 'すべての情報を1画面にコンパクトかつ分かりやすく配置することの難しさを学びました。')}</li>
        <li>{t('Working with occupational health professionals and incorporating their reviews helped refine the design.', '産業保健スタッフと協働し、繰り返しレビューを反映することでデザインを磨くことができました。')}</li>
      </ul></Topic>
      <Topic title={t('Next Steps', '次のステップ')}><p>{t('Although recording consultations became easier, users still found report creation somewhat inconvenient. The next step is to improve this part of the experience.', '面談記録は作成しやすくなりましたが、面談報告書の作成にはまだ使いづらさがあるという指摘がありました。次の改善対象は、この報告書作成の体験です。')}</p></Topic>
    </Section>
    <CaseStudyClosing locale={locale} />
  </main>;
}
