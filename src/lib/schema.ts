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
