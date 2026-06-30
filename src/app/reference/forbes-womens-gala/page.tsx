import type { Metadata } from "next";
import {
  getCaseStudyForbesSchema,
  getCaseStudyForbesBreadcrumbSchema,
} from "@/lib/schema";
import {
  ForbesCaseStudy,
  type CaseStudyContent,
} from "@/components/sections/case-study/ForbesCaseStudy";

const IMG = "/images/case-study/forbes-womens-gala";

export const metadata: Metadata = {
  title:
    "Forbes Women's Gala v Břevnovském klášteře | Případová studie – brevnovevents.cz",
  description:
    "Jak jsme pro Forbes Women's Gala 2026 rozehráli celý areál Břevnovského kláštera: 183 hostek, pět prostor, jeden večer, jeden tým pro catering i servis. Případová studie eventu v náročném památkovém prostoru.",
  openGraph: {
    title: "Forbes Women's Gala v Břevnovském klášteře | Případová studie",
    description:
      "183 nejvlivnějších žen Česka, pět prostor klášterního areálu a jeden bezchybný večer. Catering, servis i dramaturgie v režii IN CATERING.",
    url: "https://brevnovevents.cz/reference/forbes-womens-gala",
    siteName: "brevnovevents.cz",
    locale: "cs_CZ",
    type: "article",
    images: [
      {
        url: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
        width: 1600,
        height: 1067,
        alt: "Forbes Women's Gala 2026 – slavnostní večeře na nádvoří Břevnovského kláštera",
      },
    ],
  },
  alternates: {
    canonical: "https://brevnovevents.cz/reference/forbes-womens-gala",
    languages: {
      cs: "https://brevnovevents.cz/reference/forbes-womens-gala",
      en: "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
      "x-default": "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
    },
  },
};

const content: CaseStudyContent = {
  eyebrow: "Případová studie",
  title: "Forbes Women's Gala v Břevnovském klášteře",
  subtitle:
    "183 nejvlivnějších žen Česka, pět prostor klášterního areálu a jeden bezchybný večer.",
  heroImage: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
  heroAlt:
    "Forbes Women's Gala 2026 – slavnostní večeře na nádvoří Břevnovského kláštera pro 183 hostek",
  meta: [
    { label: "Klient", value: "Forbes Česko" },
    { label: "Lokace", value: "Břevnovský klášter, Praha" },
    { label: "Datum", value: "17. 6. 2026" },
    { label: "Hosté", value: "183" },
    { label: "Dress code", value: "Garden Party Chic" },
    { label: "Partneři", value: "IN CATERING, Marvels Events" },
  ],
  intro: {
    heading: "Náročné prostory jako výzva, ne překážka",
    paragraphs: [
      "Břevnovský klášter patří mezi prostory, na které si v eventové branži netroufne každý.",
      "Žádné výtahy. Složitá logistika. Technická omezení. Aktivní klášter v provozu, historie od roku 993 a přísná památková ochrana. Tohle všechno jsou důvody, proč takový prostor klade na organizaci mnohem vyšší nároky.",
      "A přesně tady je rozdíl mezi dodavatelem a partnerem.",
      "Náročný prostor totiž není problém, který je potřeba snášet. Je to komodita, ze které vzniká atmosféra, jakou moderní eventové centrum nikdy nenabídne: barokní kulisy a genius loci, který hosté cítí od prvního kroku. Cena za tu neopakovatelnou atmosféru se jmenuje pečlivé plánování.",
      "Plánování do posledního detailu.",
    ],
  },
  context: {
    heading: "Kontext",
    paragraphs: [
      "V červnu jsme na Břevnově přivítali ty nejnáročnější hosty. Forbes Women's Gala je slavnostní setkání žen z žebříčku Nejvlivnějších žen Česka, který Forbes Česko sestavuje už patnáct let.",
      "Navzdory názvu nešlo o klasický gala večer se zasedacím pořádkem, ale o méně formální cocktail.",
      "Odpoledne plné doprovodného programu, workshopů, zajímavých přednášek, networkingu a večerní afterparty. Sešlo se 183 hostů z řad nejvlivnějších žen země.",
    ],
  },
  solution: {
    heading: "Řešení",
    items: [
      {
        lead: "Příprava začala týdny dopředu.",
        text:
          "První schůzky a obhlídky prostoru probíhaly už týdny před akcí, a to nejen s Forbes Česko, ale i s organizátory jednotlivých workshopů, kteří svůj program připravovali v Tereziánském sále. Díky tomu jsme měli každou zónu, trasu servisu i návaznost techniky vyřešenou s předstihem. Samotný prostor jsme pak chystali den před akcí. Tenhle jeden den navíc je důvod, proč hosté v den akce neviděli žádné improvizace.",
      },
      {
        lead: "Variabilita prostoru jako hlavní devíza.",
        text:
          "Síla Břevnova je v tom, že není jen jedním sálem, ale celým areálem propojených scén, a přesně to jsme v dramaturgii využili. Prostor před prelaturou posloužil jako welcome moment, kde hosty přivítala atmosféra místa dřív, než vůbec vešli dovnitř. Odpolední workshopy běžely paralelně v prvním patře a v Tereziánu, takže si každá hostka mohla poskládat vlastní program. Komentovaná ochutnávka se odehrála přímo v břevnovském klášterním pivovaru, nejstarším v Čechách, který stejně jako klášter sahá až do roku 993 a dnes vaří v barokních Dientzenhofferových stájích. Vrcholem večera pak byla večeře na nádvoří pod širým nebem, kterou uzavřela afterparty s networkingem.",
      },
      {
        lead: "Dramaturgie napříč celým areálem.",
        text:
          "Program běžel od 15:30 do noci a každý přechod mezi částmi večera měl svůj scénář. Jeden prostor se proměňoval ve workshopovou zónu, druhý v koktejlovou scénu, nádvoří ve večerní sál pod hvězdami. Tahle proměnlivost je to, co moderní eventové centrum nikdy nenabídne.",
      },
      {
        lead: "Logistika bez výtahů a bez kompromisu.",
        text:
          "Tam, kde technologie chybí, nastupuje plán. Trasy zavážení, časování výdeje cateringu i rozmístění servisních týmů jsme navrhli tak, aby památkově chráněné prostory zůstaly nedotčené a hosté nepoznali, kolik koordinace stojí za plynulým chodem večera.",
      },
      {
        lead: "Souhra partnerů.",
        text:
          "Bezchybný večer je týmový výkon. Produkce Marvels Events, Forbes Česko a IN CATERING pracovali na jednom harmonogramu, kde každý znal svou roli na místě i přesný scénář.",
      },
    ],
  },
  result: {
    heading: "Výsledek",
    bullets: [
      "Event pro 183 nejnáročnějších hostů proběhl v plné šíři programu, od workshopů přes koktejl až po afterparty, bez výpadku v servisu.",
      "Akce silně rezonovala na LinkedInu a přinesla viditelný dosah mezi hosty z žebříčku nejvlivnějších žen Česka.",
      "Náročný památkový prostor se stal hlavní devizou akce, ne jejím limitem.",
    ],
  },
  forManagers: {
    heading: "Pro eventové manažery",
    paragraphs: [
      "Výjimečná lokace neznamená vyšší riziko, pokud máte vedle sebe partnera, který náročnost prostoru řeší za vás. Břevnovský klášter je důkaz, že právě prostory s nejtěžší logistikou dávají eventu to, co se nedá zařídit dodatečně: jedinečnou atmosféru a příběh.",
    ],
  },
  gallery: {
    heading: "Galerie z akce",
    slides: [
      {
        image: `${IMG}/uvitaci-floral-brana-forbes-womens-gala-brevnov.webp`,
        alt: "Květinová uvítací brána Forbes Women's Gala 2026 v Břevnovském klášteře",
        title: "Květinová brána",
        capacity: "Příchod",
        description: "Uvítací instalace Forbes Women's Gala na vstupu do areálu.",
      },
      {
        image: `${IMG}/prichod-prelatura-forbes-vlajky-brevnov.webp`,
        alt: "Forbes vlajky a prelatura Břevnovského kláštera při příchodu hostů",
        title: "Příchod k prelatuře",
        capacity: "Před prelaturou",
        description: "Forbes vlajky vítaly hosty před hlavní budovou kláštera.",
      },
      {
        image: `${IMG}/welcome-bazilika-prelatura-brevnov.webp`,
        alt: "Welcome u prelatury Břevnovského kláštera s věží baziliky svaté Markéty",
        title: "Welcome moment",
        capacity: "Před prelaturou",
        description: "Hosty přivítala atmosféra místa pod věží baziliky.",
      },
      {
        image: `${IMG}/priprava-nadvori-brevnov.webp`,
        alt: "Příprava nádvoří Břevnovského kláštera den před akcí",
        title: "Příprava den předem",
        capacity: "Nádvoří",
        description: "Prostor jsme chystali den před akcí, bez improvizací v den D.",
      },
      {
        image: `${IMG}/workshop-tereziansky-sal-brevnov.webp`,
        alt: "Workshop v Tereziánském sále Břevnovského kláštera pod barokními freskami",
        title: "Workshopy v Tereziánském sále",
        capacity: "Tereziánský sál",
        description: "Paralelní program pod barokními freskami.",
      },
      {
        image: `${IMG}/workshopy-networking-barokni-sal-brevnov.webp`,
        alt: "Workshopy a networking v barokním sále Břevnovského kláštera",
        title: "Program a networking",
        capacity: "1. patro",
        description: "Každá hostka si poskládala vlastní odpoledne.",
      },
      {
        image: `${IMG}/podium-forbes-womens-gala-nadvori-brevnov.webp`,
        alt: "Pódium Forbes Women's Gala na nádvoří Břevnovského kláštera",
        title: "Pódium na nádvoří",
        capacity: "Nádvoří",
        description: "Scéna Forbes Women's Gala připravená na přednášky.",
      },
      {
        image: `${IMG}/catering-jednohubky-detail-in-catering-brevnov.webp`,
        alt: "Detail jednohubek a finger food cateringu IN CATERING",
        title: "Gastronomie do detailu",
        capacity: "Catering IN CATERING",
        description: "Jednohubky a finger food laděné k atmosféře místa.",
      },
      {
        image: `${IMG}/cateringova-stanice-starters-brevnov.webp`,
        alt: "Cateringová stanice na nádvoří Břevnovského kláštera",
        title: "Cateringová stanice",
        capacity: "Nádvoří",
        description: "Servis jako součást scénografie večera.",
      },
      {
        image: `${IMG}/kuchari-servis-nadvori-brevnov.webp`,
        alt: "Kuchaři a servisní tým IN CATERING na nádvoří Břevnovského kláštera",
        title: "Servisní tým v akci",
        capacity: "Nádvoří",
        description: "Plynulý výdej bez kompromisu i bez výtahů.",
      },
      {
        image: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
        alt: "Slavnostní večeře na nádvoří Břevnovského kláštera při Forbes Women's Gala",
        title: "Večeře pod širým nebem",
        capacity: "Nádvoří",
        description: "Vrchol večera: slavnostní večeře na nádvoří.",
      },
      {
        image: `${IMG}/networking-nadvori-forbes-womens-gala-brevnov.webp`,
        alt: "Networking na nádvoří Břevnovského kláštera při Forbes Women's Gala",
        title: "Networking",
        capacity: "Nádvoří",
        description: "183 nejvlivnějších žen Česka na jednom místě.",
      },
      {
        image: `${IMG}/afterparty-nadvori-shora-brevnov.webp`,
        alt: "Afterparty na nádvoří Břevnovského kláštera při Forbes Women's Gala",
        title: "Afterparty",
        capacity: "Nádvoří",
        description: "Večer uzavřela afterparty s networkingem.",
      },
    ],
  },
  cta: {
    heading: "Naplánujte svůj příští event v jedinečném prostoru Břevnovského kláštera.",
    textBefore: "Napište nám na ",
    email: "brevnov@incatering.cz",
    textAfter: " a společně navrhneme koncept na míru.",
    button: "Nezávazná nabídka",
    href: "/firemni-eventy#kontakt",
  },
};

export default function ForbesCaseStudyPage() {
  const schemas = [
    getCaseStudyForbesSchema("cs"),
    getCaseStudyForbesBreadcrumbSchema("cs"),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(schema)}
        </script>
      ))}
      <ForbesCaseStudy content={content} />
    </>
  );
}
