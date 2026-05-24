import { getLatestMediumArticles } from "../lib/medium";

export const metadata = {
  title: "About",
  description:
    "About Kayo Fujii, recommendations from collaborators, and recent writing on Medium.",
};

const recommendations = [
  {
    name: "Fuyuko Ikeguchi",
    role: "UX Designer mediPhone, Inc.",
    image: "/images/recommendation-fuyuko.webp",
    quote:
      "I had the pleasure of working with Kayo at mediPhone, Inc. As a UI designer with a web engineering background, she consistently delivered designs that met our project requirements. Her ability to quickly grasp complex customer needs and rapidly understand domain knowledge was a standout quality. She effectively translated this understanding into user interfaces. Her reliability and dedication make her a valuable asset to any team.",
  },
  {
    name: "Yusuke Tabata",
    role: "CTO mediPhone, Inc.",
    image: "/images/recommendation-yusuke.webp",
    quote:
      "I was really fortunate to work with Kayo-san to build our new SaaS product. She always did great work both as a backend engineer and UX designer. In both roles, she has been trying hard to understand every aspect of the product like users’ requirements and expectations, how team mates build the product, how software framework works and so on.",
  },
];

const staticOutputImages: Record<string, string> = {
  "Engineer-friendly UX/UI": "/images/output-engineer-friendly-ux-ui.webp",
  "How We Built a “Functional” Design System in an Early-Stage Product Team":
    "/images/output-functional-design-system.webp",
  "Create Rapid Professional UI for Web Development":
    "/images/output-subframe.webp",
};

function resolveOutputImage(title: string, fallbackImage: string | null) {
  return staticOutputImages[title] ?? fallbackImage;
}

function normalizeOutputTitle(title: string) {
  if (title === "Create Rapid Professional UI for Web Development") {
    return "Create Rapid, Refined UI with Strong Brand Value Using Subframe Without Design Knowledge";
  }

  return title;
}

export default async function AboutPage() {
  const articles = await getLatestMediumArticles(3);

  return (
    <main className="w-full bg-white text-[#161d1c]">
      <section className="w-full bg-white px-6 py-14 md:px-12 md:py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1200px] rounded-[28px] bg-[#f9f9f9] p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-[80px]">
            <div className="overflow-hidden rounded-[16px]">
              <img
                src="/images/about-kayo.webp"
                alt="Portrait of Kayo Fujii"
                className="h-[350px] w-full object-cover"
              />
            </div>
            <div className="flex max-w-[760px] flex-col gap-8">
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[39.2px] text-[#333333]">
                About me
              </h1>
              <div className="space-y-6 text-[18px] leading-[25.2px] text-[#333333]">
                <p>
                  Hi, I&apos;m Kayo, a Vancouver-based Product Designer with 5
                  years of experience.
                </p>
                <p>
                  I helped a SaaS startup reach break-even and increased
                  eCommerce sales by 1.5x in 3 months by improving user flows
                  and aligning design with business goals.
                </p>
                <p>
                  I specialize in turning user insights into scalable,
                  data-informed products by balancing user needs, business
                  goals, and technical feasibility.
                </p>
                <p>
                  I&apos;m currently looking for a role where I can build
                  impactful products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f9f9f9] px-6 py-14 md:px-12 md:py-20 lg:px-[120px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="space-y-2">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[39.2px] text-[#2d2d2d]">
              Recommendations
            </h2>
            <p className="text-[20px] leading-[28px] text-[#3f4948]">
              I have received the following recommendations from my former
              colleagues and supervisors.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {recommendations.map((recommendation) => (
              <article
                key={recommendation.name}
                className="rounded-[16px] bg-white p-5 shadow-[0px_1px_5px_3px_rgba(63,88,87,0.03)]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <div className="shrink-0">
                    <img
                      src={recommendation.image}
                      alt={recommendation.name}
                      className="h-14 w-14 rounded-[28px] object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[6.89px]">
                    <div>
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-bold leading-[25.2px] text-[#0e0e2c]">
                        {recommendation.name}
                      </h3>
                      <p className="text-[16px] leading-[22.4px] text-[rgba(40,40,40,0.8)]">
                        {recommendation.role}
                      </p>
                    </div>
                    <p className="text-[16px] leading-[22.4px] text-[#161d1c]">
                      {recommendation.quote}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-14 md:px-12 md:py-20 lg:px-[120px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[39.2px] text-[#2d2d2d]">
            Outputs
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {articles.map((article, index) => {
              const image = resolveOutputImage(article.title, article.image);
              const title = normalizeOutputTitle(article.title);

              return (
                <a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`overflow-hidden rounded-[16px] bg-white shadow-[0px_1px_5px_3px_rgba(63,88,87,0.03)] transition-transform hover:-translate-y-1 ${
                    index === 2 ? "md:col-span-1" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-t-[16px]">
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="h-auto w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[580/386] items-center justify-center bg-[#f1f5f5] text-[2rem] font-bold text-[#005f5d]">
                        K
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-bold leading-[25.2px] text-[#0e0e2c]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[16px] leading-[22.4px] text-[rgba(40,40,40,0.8)]">
                      medium
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
