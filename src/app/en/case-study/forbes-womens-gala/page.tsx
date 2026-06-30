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
    "Forbes Women's Gala at Brevnov Monastery | Case study – brevnovevents.cz",
  description:
    "How we ran the entire Brevnov Monastery estate for the Forbes Women's Gala 2026: 183 guests, five venues, one evening, one catering and service team. A case study of an event in a demanding heritage venue.",
  openGraph: {
    title: "Forbes Women's Gala at Brevnov Monastery | Case study",
    description:
      "183 of the most influential women in Czechia, five spaces of the monastery estate and one flawless evening. Catering, service and dramaturgy run by IN CATERING.",
    url: "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
    siteName: "brevnovevents.cz",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
        width: 1600,
        height: 1067,
        alt: "Forbes Women's Gala 2026 – open-air gala dinner in the courtyard of Brevnov Monastery",
      },
    ],
  },
  alternates: {
    canonical: "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
    languages: {
      cs: "https://brevnovevents.cz/reference/forbes-womens-gala",
      en: "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
      "x-default": "https://brevnovevents.cz/en/case-study/forbes-womens-gala",
    },
  },
};

const content: CaseStudyContent = {
  eyebrow: "Case study",
  title: "Forbes Women's Gala at Brevnov Monastery",
  subtitle:
    "183 of the most influential women in Czechia, five spaces of the monastery estate and one flawless evening.",
  heroImage: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
  heroAlt:
    "Forbes Women's Gala 2026 – open-air gala dinner in the courtyard of Brevnov Monastery for 183 guests",
  meta: [
    { label: "Client", value: "Forbes Czechia" },
    { label: "Location", value: "Brevnov Monastery, Prague" },
    { label: "Date", value: "17 June 2026" },
    { label: "Guests", value: "183" },
    { label: "Dress code", value: "Garden Party Chic" },
    { label: "Partners", value: "IN CATERING, Marvels Events" },
  ],
  intro: {
    heading: "A demanding venue as a challenge, not an obstacle",
    paragraphs: [
      "Brevnov Monastery is one of those venues not every player in the events industry dares to take on.",
      "No lifts. Complex logistics. Technical constraints. A working monastery in daily operation, history dating back to 993 AD and strict heritage protection. All of this is why such a venue places far higher demands on organisation.",
      "And this is exactly where the difference between a supplier and a partner shows.",
      "A demanding venue is not a problem to be endured. It is an asset that creates an atmosphere no modern event centre could ever offer: baroque surroundings and a genius loci that guests feel from the very first step. The price for that unrepeatable atmosphere is called meticulous planning.",
      "Planning down to the last detail.",
    ],
  },
  context: {
    heading: "Context",
    paragraphs: [
      "In June we welcomed the most demanding of guests to Brevnov. Forbes Women's Gala is a celebratory gathering of the women from the Most Influential Women in Czechia ranking, which Forbes Czechia has compiled for fifteen years.",
      "Despite the name, this was not a classic gala dinner with a seating plan, but a more informal cocktail event.",
      "An afternoon full of side programme, workshops, inspiring talks, networking and an evening afterparty. 183 guests from among the country's most influential women came together.",
    ],
  },
  solution: {
    heading: "Solution",
    items: [
      {
        lead: "Preparation began weeks in advance.",
        text:
          "The first meetings and site visits took place weeks before the event, not only with Forbes Czechia but also with the organisers of the individual workshops who were preparing their programme in the Theresian Hall. As a result, we had every zone, every service route and the sequencing of the technology resolved well in advance. We then set up the venue itself the day before. That one extra day is the reason guests saw no improvisation on the day.",
      },
      {
        lead: "The versatility of the venue as the main asset.",
        text:
          "Brevnov's strength lies in the fact that it is not just a single hall, but an entire estate of interconnected scenes, and that is exactly what we built the dramaturgy around. The space in front of the prelature served as a welcome moment, where the atmosphere of the place greeted guests before they even stepped inside. The afternoon workshops ran in parallel on the first floor and in the Theresian Hall, so every guest could compose her own programme. The guided tasting took place directly in the Brevnov monastery brewery, the oldest in Bohemia, which, like the monastery itself, dates back to 993 AD and today brews in the baroque Dientzenhofer stables. The highlight of the evening was an open-air dinner in the courtyard, closed by an afterparty with networking.",
      },
      {
        lead: "Dramaturgy across the entire estate.",
        text:
          "The programme ran from 3:30 PM into the night, and every transition between parts of the evening had its own script. One space turned into a workshop zone, another into a cocktail scene, the courtyard into an evening hall under the stars. This variability is exactly what a modern event centre can never offer.",
      },
      {
        lead: "Logistics with no lifts and no compromise.",
        text:
          "Where technology is missing, a plan steps in. We designed the delivery routes, catering service timing and the placement of service teams so that the heritage-protected spaces remained untouched and guests never sensed how much coordination lay behind the seamless flow of the evening.",
      },
      {
        lead: "Partners in sync.",
        text:
          "A flawless evening is a team effort. Marvels Events production, Forbes Czechia and IN CATERING worked to a single schedule in which everyone knew their role on site and the exact script.",
      },
    ],
  },
  result: {
    heading: "Result",
    bullets: [
      "The event for 183 of the most demanding guests ran across the full breadth of the programme, from workshops through cocktails to the afterparty, with no gap in service.",
      "The event resonated strongly on LinkedIn and reached a visible audience among the guests from the ranking of the most influential women in Czechia.",
      "The demanding heritage venue became the event's main asset, not its limitation.",
    ],
  },
  forManagers: {
    heading: "For event managers",
    paragraphs: [
      "An exceptional location does not mean higher risk, provided you have a partner beside you who handles the demands of the venue for you. Brevnov Monastery is proof that it is precisely the spaces with the toughest logistics that give an event what cannot be arranged after the fact: a unique atmosphere and a story.",
    ],
  },
  gallery: {
    heading: "Event gallery",
    slides: [
      {
        image: `${IMG}/uvitaci-floral-brana-forbes-womens-gala-brevnov.webp`,
        alt: "Forbes Women's Gala 2026 floral welcome arch at Brevnov Monastery",
        title: "Floral welcome arch",
        capacity: "Arrival",
        description: "The Forbes Women's Gala welcome installation at the entrance to the estate.",
      },
      {
        image: `${IMG}/prichod-prelatura-forbes-vlajky-brevnov.webp`,
        alt: "Forbes flags and the prelature of Brevnov Monastery as guests arrive",
        title: "Arrival at the prelature",
        capacity: "By the prelature",
        description: "Forbes flags welcomed guests in front of the main monastery building.",
      },
      {
        image: `${IMG}/welcome-bazilika-prelatura-brevnov.webp`,
        alt: "Welcome by the prelature of Brevnov Monastery with the tower of the Basilica of St Margaret",
        title: "Welcome moment",
        capacity: "By the prelature",
        description: "The atmosphere of the place welcomed guests beneath the basilica tower.",
      },
      {
        image: `${IMG}/priprava-nadvori-brevnov.webp`,
        alt: "Setting up the Brevnov Monastery courtyard the day before the event",
        title: "Setup the day before",
        capacity: "Courtyard",
        description: "We prepared the venue the day before, with no improvisation on the day.",
      },
      {
        image: `${IMG}/workshop-tereziansky-sal-brevnov.webp`,
        alt: "Workshop in the Theresian Hall of Brevnov Monastery beneath baroque frescoes",
        title: "Workshops in the Theresian Hall",
        capacity: "Theresian Hall",
        description: "Parallel programme beneath baroque frescoes.",
      },
      {
        image: `${IMG}/workshopy-networking-barokni-sal-brevnov.webp`,
        alt: "Workshops and networking in a baroque hall of Brevnov Monastery",
        title: "Programme and networking",
        capacity: "First floor",
        description: "Every guest composed her own afternoon.",
      },
      {
        image: `${IMG}/podium-forbes-womens-gala-nadvori-brevnov.webp`,
        alt: "Forbes Women's Gala stage in the courtyard of Brevnov Monastery",
        title: "Stage in the courtyard",
        capacity: "Courtyard",
        description: "The Forbes Women's Gala stage set for the talks.",
      },
      {
        image: `${IMG}/catering-jednohubky-detail-in-catering-brevnov.webp`,
        alt: "Close-up of canapés and finger food by IN CATERING",
        title: "Gastronomy in detail",
        capacity: "Catering by IN CATERING",
        description: "Canapés and finger food tuned to the atmosphere of the place.",
      },
      {
        image: `${IMG}/cateringova-stanice-starters-brevnov.webp`,
        alt: "Catering station in the courtyard of Brevnov Monastery",
        title: "Catering station",
        capacity: "Courtyard",
        description: "Service as part of the evening's scenography.",
      },
      {
        image: `${IMG}/kuchari-servis-nadvori-brevnov.webp`,
        alt: "Chefs and the IN CATERING service team in the courtyard of Brevnov Monastery",
        title: "The service team in action",
        capacity: "Courtyard",
        description: "Seamless service with no compromise and no lifts.",
      },
      {
        image: `${IMG}/nadvori-vecere-shora-forbes-womens-gala-brevnov.webp`,
        alt: "Open-air gala dinner in the courtyard of Brevnov Monastery at Forbes Women's Gala",
        title: "Open-air dinner",
        capacity: "Courtyard",
        description: "The highlight of the evening: a gala dinner in the courtyard.",
      },
      {
        image: `${IMG}/networking-nadvori-forbes-womens-gala-brevnov.webp`,
        alt: "Networking in the courtyard of Brevnov Monastery at Forbes Women's Gala",
        title: "Networking",
        capacity: "Courtyard",
        description: "183 of the most influential women in Czechia in one place.",
      },
      {
        image: `${IMG}/afterparty-nadvori-shora-brevnov.webp`,
        alt: "Afterparty in the courtyard of Brevnov Monastery at Forbes Women's Gala",
        title: "Afterparty",
        capacity: "Courtyard",
        description: "The evening closed with an afterparty and networking.",
      },
    ],
  },
  cta: {
    heading: "Plan an event in the unique setting of Brevnov Monastery?",
    textBefore: "Write to us at ",
    email: "brevnov@incatering.cz",
    textAfter: " and we'll design a tailor-made concept together.",
    button: "Request a quote",
    href: "/en/corporate-events#contact",
  },
};

export default function ForbesCaseStudyPageEN() {
  const schemas = [
    getCaseStudyForbesSchema("en"),
    getCaseStudyForbesBreadcrumbSchema("en"),
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
