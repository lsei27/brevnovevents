import type { Locale } from "./i18n";

const BASE = "https://brevnovevents.cz";

export function getEventVenueSchema(locale: Locale = "cs") {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: isEn
      ? "Brevnov Monastery — Event Venues Prague"
      : "Břevnovský klášter — Eventové prostory",
    description: isEn
      ? "Historic event venues in Prague for conferences, gala dinners, and corporate events. Capacity 20–1,100 guests."
      : "Historické eventové prostory v Praze pro konference, gala večery a firemní akce. Kapacita 20–1 100 hostů.",
    url: isEn ? `${BASE}/en` : BASE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Markétská 1/28",
      addressLocality: "Praha 6 — Břevnov",
      postalCode: "169 00",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0833,
      longitude: 14.3667,
    },
    telephone: "+420602346729",
    maximumAttendeeCapacity: 1100,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: isEn ? "Free parking" : "Parkování zdarma",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: isEn ? "Catering" : "Catering",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: isEn ? "AV equipment" : "AV technika",
        value: true,
      },
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IN CATERING s.r.o.",
    description: "Provozovatel eventových prostor v Břevnovském klášteře.",
    url: BASE,
    telephone: "+420602346729",
    email: "brevnov@incatering.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Markétská 1/28",
      addressLocality: "Praha 6 — Břevnov",
      postalCode: "169 00",
      addressCountry: "CZ",
    },
  };
}

export function getVideoObjectSchema(locale: Locale = "cs") {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: isEn
      ? "Virtual Tour of Brevnov Monastery"
      : "Virtuální prohlídka Břevnovského kláštera",
    description: isEn
      ? "Video tour of event venues at Brevnov Monastery in Prague — Theresian Hall, Sala Terrena, courtyard, and gardens."
      : "Video prohlídka eventových prostor Břevnovského kláštera v Praze — Tereziánský sál, Sala Terrena, nádvoří a zahrady.",
    thumbnailUrl: "https://i.ytimg.com/vi/ESMihQlQ5LI/maxresdefault.jpg",
    uploadDate: "2024-01-01",
    contentUrl: "https://www.youtube.com/watch?v=ESMihQlQ5LI",
    embedUrl: "https://www.youtube.com/embed/ESMihQlQ5LI",
  };
}

export function getBreadcrumbSchema(locale: Locale = "cs") {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Domů",
        item: isEn ? `${BASE}/en` : BASE,
      },
    ],
  };
}

export function getFiremniEventyFAQSchema(locale: Locale = "cs") {
  const isEn = locale === "en";

  const faqsCs = [
    { q: "Jaká je maximální kapacita Břevnovského kláštera pro akce?", a: "Až 1 100 osob při využití všech podlaží a nádvoří. Tereziánský sál pojme 180 osob v divadelním sezení, přízemí dalších 300, nádvoří dalších 300. Kombinací prostor zvládneme i akce nad 800 účastníků – viz Speedchain International 2024." },
    { q: "Můžeme si přivést vlastního dodavatele cateringu?", a: "Catering zajišťuje výhradně IN CATERING – provozovatel klášterních prostor. Díky tomu máte jeden tým, který prostor zná a garantuje bezchybnou logistiku. Nemusíte koordinovat dva dodavatele." },
    { q: "Kolik stojí pronájem prostor v Břevnovském klášteře?", a: "Přízemí od 15 000 Kč/den, Tereziánský sál 65 000 Kč/den, celé 1. patro 90 000 Kč/den. Kompletní ceník najdete výše. Nabídku na míru včetně cateringu připravíme do 24 hodin – nezávazně." },
    { q: "Je v Břevnovském klášteře parkování?", a: "Ano. 60 míst zdarma přímo v areálu kláštera. Pro větší akce zajistíme organizaci parkování a navigaci hostů." },
    { q: "Je prostor bezbariérový?", a: "Přízemí (Sala Terrena, salonky) je přístupné bez schodů. 1. patro (Tereziánský sál) vyžaduje schody – informujte nás předem o požadavcích na přístupnost a najdeme řešení." },
    { q: "Jak dlouho dopředu je třeba rezervovat prostory?", a: "Pro velké akce (300+ osob) doporučujeme 3–6 měsíců. Pro menší akce často stačí 4–6 týdnů. Podzim a prosinec se plní rychle – čím dříve, tím lépe." },
    { q: "Do kolika hodin může akce probíhat?", a: "Standardní provoz do 24:00. Prodloužení do 02:00 je možné za příplatek (10 000 Kč/hod., max. 2 hodiny)." },
    { q: "Zajišťujete AV techniku pro konference?", a: "Ano, od ověřených dodavatelů. Základní ozvučení od 6 000 Kč/sál. Kompletní AV řešení (LED stěny, streaming, konferenční mikrofony) kalkulujeme dle potřeb vaší akce." },
    { q: "Lze si prostory prohlédnout předem?", a: "Prohlídky děláme po domluvě, ideálně v pracovní dny. Pro event agentury nabízíme familiarizační prohlídku zdarma. Virtuální prohlídku najdete na brevnovevents.cz." },
    { q: "Plánujeme akci pro 20–50 lidí. Má smysl klášter zvažovat?", a: "Ano. Jednotlivé salonky (Zlatý, Modrý, Pompejský, Brandlův) pojmou 20–50 osob a hodí se pro workshopy, board meetingy nebo komorní prezentace. Kontaktujte nás – domluvíme řešení na míru." },
  ];

  const faqsEn = [
    { q: "What is the maximum capacity of Brevnov Monastery for events?", a: "Up to 1,100 guests using all floors and the courtyard. The Theresian Hall seats 180 theatre-style, the ground floor holds 300 more, and the courtyard another 300. We have hosted events for 800+ attendees — see Speedchain International 2024." },
    { q: "Can we bring our own caterer?", a: "Catering is provided exclusively by IN CATERING, the venue operator. This means one team that knows the space inside out and guarantees seamless logistics. No need to coordinate multiple vendors." },
    { q: "How much does it cost to hire event venues at Brevnov Monastery?", a: "Ground floor from CZK 15,000/day, Theresian Hall CZK 65,000/day, entire first floor CZK 90,000/day. See the full price list above. We prepare a tailored quote including catering within 24 hours — no obligation." },
    { q: "Is there parking at Brevnov Monastery?", a: "Yes. 60 spaces free of charge right outside the monastery grounds. For larger events we arrange parking management and guest navigation." },
    { q: "Is the venue wheelchair accessible?", a: "The ground floor (Sala Terrena, lounges) is step-free. The first floor (Theresian Hall) requires stairs — let us know about accessibility requirements in advance and we will find a solution." },
    { q: "How far in advance should we book?", a: "For large events (300+ guests) we recommend 3–6 months. Smaller events can often be arranged within 4–6 weeks. Autumn and December fill up fast — the sooner the better." },
    { q: "What time can events run until?", a: "Standard operation until midnight. Extension to 2:00 AM is possible for a surcharge (CZK 10,000/hour, max 2 hours)." },
    { q: "Do you provide AV equipment for conferences?", a: "Yes, from trusted suppliers. Basic sound from CZK 6,000/hall. Full AV solutions (LED walls, live streaming, conference microphones) are quoted based on your event needs." },
    { q: "Can we view the venue beforehand?", a: "Site visits are arranged by appointment, ideally on weekdays. We offer complimentary familiarisation tours for event agencies. A virtual tour is available at brevnovevents.cz." },
    { q: "We're planning an event for 20–50 people. Is the monastery suitable?", a: "Absolutely. Individual lounges (Golden, Blue, Pompeian, Brandl) accommodate 20–50 guests and are ideal for workshops, board meetings, and intimate presentations. Get in touch — we will tailor a solution." },
  ];

  const faqs = isEn ? faqsEn : faqsCs;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getSvatbaFAQSchema(locale: Locale = "cs") {
  const isEn = locale === "en";

  const faqsCs = [
    { q: "Konají se v Břevnovském klášteře svatební obřady?", a: "V prostoru Vojtěška v klášterní zahradě se konají civilní svatební obřady. Církevní obřady v bazilice sv. Markéty je třeba domluvit přímo s klášterem." },
    { q: "Můžeme si přivést vlastního cateringu?", a: "Catering zajišťuje výhradně IN CATERING. Díky tomu máme plnou kontrolu nad kvalitou a logistikou – a vy jeden kontakt místo dvou." },
    { q: "Kolik lidí se vejde na svatbu v klášteře?", a: "Banketní hostina v Tereziánském sále: 120 osob. V Sala Terreně: 70 osob. Kombinací prostor zvládneme svatby až pro 200 hostů." },
    { q: "Je parkování problém?", a: "Ne. 60 míst zdarma přímo v areálu." },
    { q: "Do kolika hodin může svatba trvat?", a: "Standardně do půlnoci. Prodloužení do 02:00 je možné za příplatek." },
    { q: "Jak dlouho dopředu rezervovat?", a: "Doporučujeme 6–12 měsíců, zejména pro léto a září. Menší zimní svatby lze domluvit i na kratší dobu." },
  ];

  const faqsEn = [
    { q: "Are wedding ceremonies held at Brevnov Monastery?", a: "Civil ceremonies take place at the Vojtěška garden pavilion. Church ceremonies in the Basilica of St. Margaret must be arranged directly with the monastery." },
    { q: "Can we bring our own caterer?", a: "Catering is provided exclusively by IN CATERING. This gives us full control over quality and logistics — and you a single point of contact." },
    { q: "How many guests can a monastery wedding accommodate?", a: "Banquet reception in the Theresian Hall: 120 guests. In Sala Terrena: 70 guests. By combining spaces, we can host weddings for up to 200 guests." },
    { q: "Is parking an issue?", a: "Not at all. 60 free parking spaces right on the monastery grounds." },
    { q: "What time can the wedding run until?", a: "Standard operation until midnight. Extension to 2:00 AM is available for a surcharge." },
    { q: "How far in advance should we book?", a: "We recommend 6–12 months, especially for summer and September. Smaller winter weddings can often be arranged on shorter notice." },
  ];

  const faqs = isEn ? faqsEn : faqsCs;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getFiremniBreadcrumbSchema(locale: Locale = "cs") {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Domů",
        item: isEn ? `${BASE}/en` : BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Corporate Events" : "Firemní eventy",
        item: isEn ? `${BASE}/en/corporate-events` : `${BASE}/firemni-eventy`,
      },
    ],
  };
}

export function getSvatbaBreadcrumbSchema(locale: Locale = "cs") {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Domů",
        item: isEn ? `${BASE}/en` : BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Wedding Venue" : "Svatba v klášteře",
        item: isEn ? `${BASE}/en/wedding-venue` : `${BASE}/svatba-v-klastere`,
      },
    ],
  };
}
