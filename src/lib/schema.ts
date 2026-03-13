export function getEventVenueSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Břevnovský klášter — Eventové prostory",
    description:
      "Historické eventové prostory v Praze pro konference, gala večery a firemní akce. Kapacita 20–1 100 hostů.",
    url: "https://brevnovevents.cz",
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
        name: "Parkování zdarma",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Catering",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "AV technika",
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
    url: "https://brevnovevents.cz",
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

export function getVideoObjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Virtuální prohlídka Břevnovského kláštera",
    description:
      "Video prohlídka eventových prostor Břevnovského kláštera v Praze — Tereziánský sál, Sala Terrena, nádvoří a zahrady.",
    thumbnailUrl:
      "https://i.ytimg.com/vi/ESMihQlQ5LI/maxresdefault.jpg",
    uploadDate: "2024-01-01",
    contentUrl: "https://www.youtube.com/watch?v=ESMihQlQ5LI",
    embedUrl: "https://www.youtube.com/embed/ESMihQlQ5LI",
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://brevnovevents.cz",
      },
    ],
  };
}

export function getFiremniEventyFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jaká je maximální kapacita Břevnovského kláštera pro akce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Až 1 100 osob při využití všech podlaží a nádvoří. Tereziánský sál pojme 180 osob v divadelním sezení, přízemí dalších 300, nádvoří dalších 300. Kombinací prostor zvládneme i akce nad 800 účastníků – viz Speedchain International 2024.",
        },
      },
      {
        "@type": "Question",
        name: "Můžeme si přivést vlastního dodavatele cateringu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Catering zajišťuje výhradně IN CATERING – provozovatel klášterních prostor. Díky tomu máte jeden tým, který prostor zná a garantuje bezchybnou logistiku. Nemusíte koordinovat dva dodavatele.",
        },
      },
      {
        "@type": "Question",
        name: "Kolik stojí pronájem prostor v Břevnovském klášteře?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Přízemí od 15 000 Kč/den, Tereziánský sál 65 000 Kč/den, celé 1. patro 90 000 Kč/den. Kompletní ceník najdete výše. Nabídku na míru včetně cateringu připravíme do 24 hodin – nezávazně.",
        },
      },
      {
        "@type": "Question",
        name: "Je v Břevnovském klášteře parkování?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ano. 60 míst zdarma přímo v areálu kláštera. Pro větší akce zajistíme organizaci parkování a navigaci hostů.",
        },
      },
      {
        "@type": "Question",
        name: "Je prostor bezbariérový?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Přízemí (Sala Terrena, salonky) je přístupné bez schodů. 1. patro (Tereziánský sál) vyžaduje schody – informujte nás předem o požadavcích na přístupnost a najdeme řešení.",
        },
      },
      {
        "@type": "Question",
        name: "Jak dlouho dopředu je třeba rezervovat prostory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pro velké akce (300+ osob) doporučujeme 3–6 měsíců. Pro menší akce často stačí 4–6 týdnů. Podzim a prosinec se plní rychle – čím dříve, tím lépe.",
        },
      },
      {
        "@type": "Question",
        name: "Do kolika hodin může akce probíhat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standardní provoz do 24:00. Prodloužení do 02:00 je možné za příplatek (10 000 Kč/hod., max. 2 hodiny).",
        },
      },
      {
        "@type": "Question",
        name: "Zajišťujete AV techniku pro konference?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ano, od ověřených dodavatelů. Základní ozvučení od 6 000 Kč/sál. Kompletní AV řešení (LED stěny, streaming, konferenční mikrofony) kalkulujeme dle potřeb vaší akce.",
        },
      },
      {
        "@type": "Question",
        name: "Lze si prostory prohlédnout předem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prohlídky děláme po domluvě, ideálně v pracovní dny. Pro event agentury nabízíme familiarizační prohlídku zdarma. Virtuální prohlídku najdete na brevnovevents.cz.",
        },
      },
      {
        "@type": "Question",
        name: "Plánujeme akci pro 20–50 lidí. Má smysl klášter zvažovat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ano. Jednotlivé salonky (Zlatý, Modrý, Pompejský, Brandlův) pojmou 20–50 osob a hodí se pro workshopy, board meetingy nebo komorní prezentace. Kontaktujte nás – domluvíme řešení na míru.",
        },
      },
    ],
  };
}

export function getSvatbaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Konají se v Břevnovském klášteře svatební obřady?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "V prostoru Vojtěška v klášterní zahradě se konají civilní svatební obřady. Církevní obřady v bazilice sv. Markéty je třeba domluvit přímo s klášterem.",
        },
      },
      {
        "@type": "Question",
        name: "Můžeme si přivést vlastního cateringu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Catering zajišťuje výhradně IN CATERING. Díky tomu máme plnou kontrolu nad kvalitou a logistikou – a vy jeden kontakt místo dvou.",
        },
      },
      {
        "@type": "Question",
        name: "Kolik lidí se vejde na svatbu v klášteře?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banketní hostina v Tereziánském sále: 120 osob. V Sala Terreně: 70 osob. Kombinací prostor zvládneme svatby až pro 200 hostů.",
        },
      },
      {
        "@type": "Question",
        name: "Je parkování problém?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ne. 60 míst zdarma přímo v areálu.",
        },
      },
      {
        "@type": "Question",
        name: "Do kolika hodin může svatba trvat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standardně do půlnoci. Prodloužení do 02:00 je možné za příplatek.",
        },
      },
      {
        "@type": "Question",
        name: "Jak dlouho dopředu rezervovat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Doporučujeme 6–12 měsíců, zejména pro léto a září. Menší zimní svatby lze domluvit i na kratší dobu.",
        },
      },
    ],
  };
}

export function getFiremniBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://brevnovevents.cz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Firemní eventy",
        item: "https://brevnovevents.cz/firemni-eventy",
      },
    ],
  };
}

export function getSvatbaBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://brevnovevents.cz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Svatba v klášteře",
        item: "https://brevnovevents.cz/svatba-v-klastere",
      },
    ],
  };
}
