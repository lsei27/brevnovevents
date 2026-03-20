import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  skipLink: "Skip to content",

  header: {
    nav: [
      { label: "Venues", href: "/#venues" },
      { label: "Corporate Events", href: "/en/corporate-events" },
      { label: "Weddings", href: "/en/wedding-venue" },
      { label: "Contact", href: "/#contact" },
    ],
    cta: "Schedule a tour",
    ctaHref: "#contact",
    logoAlt: "Brevnov Monastery \u2013 logo",
    operatedBy: "operated by",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    nav: [
      { label: "Venues", href: "/#venues" },
      { label: "Corporate Events", href: "/en/corporate-events" },
      { label: "Weddings", href: "/en/wedding-venue" },
      { label: "Contact", href: "/#contact" },
    ],
    operatedBy: "Operated by",
    navigation: "Navigation",
    contact: "Contact",
    copyright: "IN CATERING s.r.o. All rights reserved.",
    privacy: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
  },

  /* ─── Homepage ─── */

  hero: {
    title: "Host your event in\u00a0Prague\u2019s finest baroque venue",
    subtitle:
      "Spaces for 20 to 1\u00a0100 guests. Catering, AV and parking \u2013 all under one roof.",
    cta: "Schedule a tour",
    ctaSecondary: "Technical rider",
    imageAlt: "Aerial view of Brevnov Monastery, Prague",
  },

  usp: {
    title: "Why top companies and agencies choose Brevnov Monastery",
    cta: "Explore venues",
    cards: [
      {
        title: "Unmatched capacity",
        text: "Up to 1,100 guests \u2013 more than Lobkowicz Palace (350), Martinick\u00fd Palace (200) or the Minorite Monastery (250). From an intimate lounge for 20 to the entire complex.",
      },
      {
        title: "Everything under one roof",
        text: "Two floors, a courtyard and gardens operate independently. Run parallel programmes, networking and a gala dinner in one venue \u2013 no transfers required.",
      },
      {
        title: "Logistics that work",
        text: "60 free parking spaces right at the venue. Public transport to the door. Airport 15 minutes by car. You won\u2019t find this in central Prague.",
      },
      {
        title: "One team for venue and catering",
        text: "IN CATERING operates the monastery and provides all gastronomy. One contact, one schedule, one invoice. No multi-vendor coordination.",
      },
    ],
  },

  spaces: {
    title: "Prague event venues for every format \u2013 from boardroom to congress",
    ctaPrimary: "All venues",
    ctaSecondary: "Technical rider",
    items: [
      {
        image: "/images/prostory/tereziansky-sal-konference.webp",
        alt: "Theresian Hall \u2013 conference hall for 180 guests at Brevnov Monastery, Prague",
        title: "Theresian Hall",
        capacity: "180 theatre / 100 banquet",
        description:
          "Baroque hall with frescoes. The flagship space for conferences and gala dinners.",
      },
      {
        image: "/images/prostory/sala-terrena-raut.webp",
        alt: "Sala Terrena \u2013 event space for receptions and presentations, capacity 110",
        title: "Sala Terrena",
        capacity: "110 reception / 70 banquet",
        description:
          "Ground-floor space with direct garden access. Ideal for receptions, presentations and smaller conferences.",
      },
      {
        image: "/images/prostory/nadvori-klaster.webp",
        alt: "Courtyard at Brevnov Monastery Prague \u2013 outdoor venue for 300 guests",
        title: "Courtyard & Gardens",
        capacity: "300 guests",
        description:
          "Outdoor space for welcome drinks, cocktail receptions and summer events in Prague.",
      },
      {
        image: "/images/prostory/salonek-prizemi.webp",
        alt: "Ground-floor lounge at Brevnov Monastery \u2013 workshops and meetings for 20\u201350 guests",
        title: "Lounges",
        capacity: "20\u201350 guests",
        description:
          "Golden, Blue, Pompeian, Brandl \u2013 workshops, board meetings, breakout sessions.",
      },
      {
        image: "/images/prostory/brevnovsky-klaster-exterier.webp",
        alt: "Brevnov Monastery Prague \u2013 exterior view of the historic complex",
        title: "Exterior",
        capacity: "",
        description:
          "A historic complex with a striking atmosphere for guest arrivals.",
      },
      {
        image: "/images/prostory/benediktinska-vinarna.webp",
        alt: "Benedictine Wine Cellar \u2013 intimate venue for afterparties and tastings in Prague",
        title: "Benedictine Wine Cellar",
        capacity: "80 guests",
        description:
          "An intimate space for afterparties, wine tastings and informal gatherings in an authentic monastic setting.",
      },
      {
        image: "/images/prostory/brevnovsky-klaster-pohled-shora.webp",
        alt: "Brevnov Monastery Prague \u2013 aerial view of the full complex",
        title: "Aerial view",
        capacity: "",
        description:
          "Bird\u2019s-eye view of the entire monastery complex with courtyard and gardens.",
      },
    ],
  },

  videoTour: {
    title: "Take a virtual tour of the monastery",
    videoTitle: "Virtual tour of Brevnov Monastery, Prague",
  },

  pricing: {
    title: "Corporate event pricing at Brevnov Monastery, Prague",
    subtitle:
      "Indicative prices. Every event is quoted individually.",
    from: "from",
    currency: "CZK",
    priceNote: "indicative price for 100 guests",
    price200Label: "200 guests from",
    featured: "Most popular",
    ctaPrimary: "Get a custom quote",
    ctaSecondary: "Full price list",
    ctaSecondaryHref: "/en/corporate-events#pricing",
    footer:
      "Prices excl. VAT. Smaller events from 20 guests quoted individually.",
    packages: [
      {
        name: "Conference \u00b7 1st floor",
        venue: "State rooms",
        persons: "100 guests",
        includes:
          "Hall, AV equipment, 2\u00d7 coffee break + lunch",
        price: "210\u00a0000",
        price200: "310\u00a0000",
        featured: false,
        cta: "Request a quote",
      },
      {
        name: "Gala dinner \u00b7 1st floor",
        venue: "State rooms",
        persons: "100 guests",
        includes:
          "Hall + lounges, welcome drink, 3-course menu, beverages",
        price: "265\u00a0000",
        price200: "440\u00a0000",
        featured: true,
        cta: "Request a quote",
      },
      {
        name: "Corporate party \u00b7 1st floor",
        venue: "State rooms",
        persons: "100 guests",
        includes:
          "Hall, welcome drink, buffet dinner, beverages",
        price: "235\u00a0000",
        price200: "380\u00a0000",
        featured: false,
        cta: "Request a quote",
      },
      {
        name: "Conference \u00b7 ground floor",
        venue: "Monastic rooms",
        persons: "100 guests",
        includes:
          "Sala Terrena + lounges, AV equipment, 2\u00d7 coffee break + lunch",
        price: "175\u00a0000",
        price200: "275\u00a0000",
        featured: false,
        cta: "Request a quote",
      },
      {
        name: "Corporate party \u00b7 ground floor",
        venue: "Monastic rooms",
        persons: "100 guests",
        includes:
          "Sala Terrena, welcome drink, buffet dinner, beverages",
        price: "200\u00a0000",
        price200: "345\u00a0000",
        featured: false,
        cta: "Request a quote",
      },
    ],
    prev: "Previous",
    next: "Next",
    goTo: "Go to package",
  },

  socialProof: {
    cta: "Plan a similar event",
    prev: "Previous reference",
    next: "Next reference",
    goTo: "Reference",
    references: [
      {
        title:
          "800 attendees, one venue, one team \u2013 Speedchain 2024",
        image: "/images/reference/speedchain-brevnov.webp",
        alt: "Speedchain 2024 \u2013 international conference for 800 attendees at Brevnov Monastery, Prague",
        description:
          "Speedchain International 2024 \u2013 a major logistics conference. Full-day programme with parallel sessions, receptions, VIP lounge and gala dinner. Hall flipped from conference to banquet in 60 minutes.",
        stats: [
          { number: "800", label: "attendees" },
          { number: "2", label: "parallel sessions" },
          { number: "60 min", label: "hall changeover" },
          { number: "1", label: "team for everything" },
        ],
      },
      {
        title:
          "Gala dinner for 120 guests \u2013 Evropa 2 in the Theresian Hall",
        image: "/images/reference/gala-evropa-2.webp",
        alt: "Evropa 2 gala dinner \u2013 120-guest evening in the Theresian Hall, Brevnov Monastery Prague",
        description:
          "Gala dinner for the Active Radio group (Evropa 2, Frekvence 1, Bonton Radio). Nature-inspired d\u00e9cor, a ceremonial menu in the Theresian Hall with afterparty in Sala Terrena and the Benedictine Wine Cellar.",
        stats: [
          { number: "120", label: "guests" },
          { number: "2", label: "evening venues" },
          { number: "1", label: "full-service catering" },
          { number: "1", label: "themed d\u00e9cor" },
        ],
      },
      {
        title:
          "Dakar obsession \u2013 Dakar Rally winner at Brevnov Monastery",
        image: "/images/reference/dakar-brevnov.webp",
        alt: "Dakar trucks on the courtyard of Brevnov Monastery with Martin Mac\u00edk Jr.",
        description:
          "The \u201cPosedl\u00ed Dakarem\u201d tour with Dakar Rally winner Martin Mac\u00edk Jr. The monastery courtyard became a striking backdrop where eight-tonne rally trucks met baroque architecture. The contrast of motorsport and history created an unforgettable experience.",
        stats: [
          { number: "2", label: "Dakar trucks" },
          { number: "1", label: "Dakar winner" },
          { number: "8", label: "tonnes \u2013 Prometeon truck" },
          { number: "1", label: "unique backdrop" },
        ],
      },
    ],
  },

  howItWorks: {
    title: "From enquiry to flawless execution",
    steps: [
      {
        number: "1",
        title: "Enquiry & venue tour",
        text: "We respond within 24 hours. We\u2019ll walk you through the monastery and show how the spaces work in practice. No obligation.",
      },
      {
        number: "2",
        title: "Custom proposal",
        text: "A transparent quote covering venue hire, catering and AV. No hidden fees.",
      },
      {
        number: "3",
        title: "Planning & production",
        text: "We fine-tune the schedule, layouts, menu and AV. You focus on the programme \u2013 we handle the rest.",
      },
      {
        number: "4",
        title: "Event day",
        text: "Our team is on site from setup to teardown.",
      },
    ],
  },

  weddingGateway: {
    title: "Weddings at Brevnov Monastery",
    text: "Baroque halls, monastery gardens and bespoke catering for 30 to 200 guests. Ceremony in the garden, reception in a frescoed hall, afterparty in the wine cellar \u2013 all within one estate.",
    features: [
      "Outdoor ceremony in the monastery garden",
      "Reception dinner in the Theresian Hall (120 guests banquet)",
      "Accommodation at Hotel Adalbert, right on the grounds",
      "Free parking for 60 cars",
    ],
    ctaPrimary: "More about weddings",
    ctaPrimaryHref: "/en/wedding-venue",
    ctaSecondary: "Schedule a tour",
    imageAlt:
      "Wedding at Brevnov Monastery Prague \u2013 outdoor ceremony in the monastery garden",
  },

  location: {
    title: "How to find us \u2013 Prague 6, B\u0159evnov",
    address: "Brevnov Monastery",
    mapTitle: "Brevnov Monastery on the map",
    note: "The monastery grounds are set in greenery, away from the city bustle. Guests appreciate the tranquillity and easy accessibility.",
    transport: [
      {
        label: "Public transport",
        value: "Tram 22, 25 \u2013 B\u0159evnovsk\u00fd kl\u00e1\u0161ter stop",
      },
      { label: "Parking", value: "60 free spaces at the venue" },
      { label: "Airport", value: "15 min by car" },
      { label: "City centre", value: "20 min by tram" },
    ],
  },

  contact: {
    title: "Schedule a complimentary tour of Brevnov Monastery",
    subtitle:
      "We\u2019ll show you the spaces, discuss your plans and send a no-obligation proposal within 24 hours.",
    contactLabel: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    webLabel: "Web",
    imageAlt:
      "Gala dinner in the Theresian Hall, Brevnov Monastery Prague",
  },

  inquiryForm: {
    name: "Full name",
    company: "Company / organisation",
    email: "Email",
    phone: "Phone",
    eventType: "Event type",
    guestCount: "Expected number of guests",
    preferredDate: "Preferred date",
    preferredDatePlaceholder: "Specific date or time frame",
    moreInfo: "Additional information (optional)",
    catering: "Do you need catering?",
    isAgency: "Are you an event agency?",
    agencyYes: "Yes",
    agencyNo: "No",
    description: "Brief event description",
    descriptionPlaceholder:
      "Event goals, day schedule, special requirements\u2026",
    source: "How did you hear about us?",
    selectPlaceholder: "Select\u2026",
    submit: "Submit enquiry",
    submitting: "Submitting\u2026",
    gdprNote:
      "We\u2019ll respond within 24 hours. Your data is processed in accordance with GDPR.",
    successTitle: "\u2713 Enquiry submitted",
    urgentNote: "For urgent requests call",
    eventTypeOptions: [
      "Conference",
      "Corporate party",
      "Product launch",
      "Gala dinner",
      "Workshop",
      "Press conference",
      "Congress",
      "Team building",
      "Other",
    ],
    guestCountOptions: [
      "Up to 50",
      "50\u2013100",
      "100\u2013200",
      "200\u2013400",
      "400\u2013800",
      "800+",
    ],
    cateringOptions: [
      "Yes, please send a proposal",
      "Venue hire only for now",
      "I\u2019d like to discuss options",
    ],
    sourceOptions: [
      "Recommendation",
      "Google",
      "LinkedIn",
      "Prague Convention Bureau",
      "Attended an event here",
      "Other",
    ],
  },

  cookieConsent: {
    title: "We respect your privacy",
    text: "This website uses cookies and similar technologies to ensure core functionality, analyse traffic and personalise content or ads. Shared data helps us improve our services.",
    settings: "Settings",
    reject: "Reject",
    acceptAll: "Accept all",
    settingsTitle: "Privacy settings",
    settingsText:
      "Customise which types of cookies you allow. You can change your preferences at any time.",
    necessary: "Necessary",
    necessaryDesc:
      "Technical cookies required for the website to function correctly and to save your preferences. These cannot be disabled.",
    analytics: "Analytics",
    analyticsDesc:
      "Help us understand how visitors use our website so we can continuously improve it (e.g. Google Analytics).",
    marketing: "Marketing",
    marketingDesc:
      "Used to track visitors across websites and display ads that are relevant to you.",
    back: "Back",
    save: "Save settings",
    cookieButtonLabel: "Cookie settings",
  },

  /* ─── Corporate Events page ─── */

  firemniHero: {
    title: "Create an event that leaves a lasting impression",
    subtitle:
      "Baroque halls, courtyards and gardens for 20\u20131,100 guests. Venue, catering and AV from one team \u2013 you just focus on the programme.",
    cta: "Schedule a tour",
    imageAlt:
      "Corporate event in the Theresian Hall, Brevnov Monastery Prague",
  },

  uspExpanded: {
    title:
      "Why event agencies and companies choose Brevnov Monastery",
    meaningLabel: "What this means for you",
    items: [
      {
        title:
          "Capacity you won\u2019t find at any other historic venue in Prague",
        text: "Up to 1,100 guests when combining all floors and the courtyard. For comparison: Lobkowicz Palace holds 350, Martinick\u00fd Palace 200, Kaiserstein Palace 200, the Minorite Monastery 250. If you\u2019re planning an event for 300+ people in a historic setting, alternatives in Prague are extremely limited.",
        meaning:
          "No need to split your event across two venues or manage transfer logistics. Registration, keynotes, networking, receptions and gala dinners \u2013 all in one place.",
        image: "/images/prostory/tereziansky-sal-konference.webp",
        alt: "Theresian Hall in conference layout for 180 guests",
      },
      {
        title: "Modularity \u2013 parallel programmes under one roof",
        text: "Two floors and a courtyard operate independently. Main programme in the Theresian Hall, breakout sessions in the lounges, networking in the courtyard, VIP lounge in the Golden Lounge \u2013 all within one estate, no transfers.",
        meaning:
          "Plan a conference with three parallel tracks just as easily as an intimate meeting for 30. We flip the hall from conference to banquet in 60 minutes (proven at Speedchain 2024, 800 attendees).",
        image: "/images/prostory/brevnovsky-klaster-pohled-shora.webp",
        alt: "Brevnov Monastery from above \u2013 aerial view of the multi-venue complex in Prague",
      },
      {
        title: "Logistics that central Prague cannot match",
        text: "60 free parking spaces right at the venue. Public transport (tram 22, 25) virtually to the door. V\u00e1clav Havel Airport 15 minutes by car. In Prague\u2019s historic centre, free parking for 60 cars next to the venue is unheard of.",
        meaning:
          "Guests don\u2019t waste time finding parking. International attendees arrive from the airport in fifteen minutes. Less stress for the organiser, smoother arrival for guests.",
        image: "/images/prostory/brevnovsky-klaster-exterier.webp",
        alt: "Brevnov Monastery exterior with parking and access",
      },
      {
        title: "One partner for venue hire and catering",
        text: "IN CATERING operates the lower part of the monastery and handles gastronomy across the entire complex. No coordination between venue and external supplier. One contact, one schedule, one invoice.",
        meaning:
          "No back-and-forth between caterer and building manager. The team that knows every corner of the space runs your entire event. You save coordination time and reduce miscommunication risk.",
        image: "/images/prostory/sala-terrena-raut.webp",
        alt: "Sala Terrena with reception layout and catering",
      },
      {
        title: "1,000 years of hospitality",
        text: "The oldest men\u2019s monastery in Bohemia, founded in 993 by Duke Boleslav II and Bishop Adalbert. Benedictine monks have practised hospitality here for over a millennium \u2013 from royal banquets to international congresses. No convention centre can replicate this story.",
        meaning:
          "Your event gains a context no PowerPoint can create. A historic setting lends weight to any occasion, and guests will remember it.",
        image: "/images/prostory/nadvori-klaster.webp",
        alt: "Historic courtyard at Brevnov Monastery, Prague",
      },
    ],
  },

  packagesDetail: {
    title:
      "Event packages \u2013 indicative pricing for corporate events in Prague",
    subtitle:
      "Packages serve as a pricing guide. Every event is quoted individually based on your requirements.",
    from: "from",
    currency: "CZK",
    priceNote: "indicative price for 100 guests",
    price200Label: "200 guests from",
    featured: "Most popular",
    footer:
      "Prices are indicative, excl. VAT. Final pricing depends on event scope, date and AV/catering requirements. We\u2019ll prepare a custom quote within 24 hours.",
    packages: [
      {
        name: "Conference \u00b7 1st floor",
        venue: "State rooms",
        persons: "100\u2013200 guests",
        featured: false,
        includes: [
          "Theresian Hall \u2013 full-day hire (from 65,000 CZK)",
          "Basic AV: projector, sound, microphones (from 25,000 CZK)",
          "Catering: 2\u00d7 coffee break + lunch + beverages (from 990 CZK/person)",
          "Staff and furniture (from 20,000 CZK)",
        ],
        price: "210\u00a0000",
        price200: "310\u00a0000",
        cta: "Request a quote",
        image: "/images/prostory/tereziansky-sal-konference.webp",
        alt: "Theresian Hall in conference layout",
      },
      {
        name: "Gala dinner \u00b7 1st floor",
        venue: "State rooms",
        persons: "100\u2013200 guests",
        featured: true,
        includes: [
          "Theresian Hall + adjoining lounges (from 65,000 CZK)",
          "Welcome drink + cold canap\u00e9s (from 260 CZK/person)",
          "Served 3-course menu (from 1,090 CZK/person)",
          "Beverage package with beer and wine (from 430 CZK/person)",
          "Staff and furniture (from 20,000 CZK)",
        ],
        price: "265\u00a0000",
        price200: "440\u00a0000",
        cta: "Request a quote",
        image: "/images/prostory/gala-bk.webp",
        alt: "Gala dinner at Brevnov Monastery Prague",
      },
      {
        name: "Corporate party \u00b7 1st floor",
        venue: "State rooms",
        persons: "100\u2013200 guests",
        featured: false,
        includes: [
          "Theresian Hall + adjoining spaces (from 65,000 CZK)",
          "Welcome drink + cold canap\u00e9s (from 260 CZK/person)",
          "Buffet dinner (from 790 CZK/person)",
          "Beverage package with beer and wine (from 430 CZK/person)",
          "Staff and furniture (from 20,000 CZK)",
        ],
        price: "235\u00a0000",
        price200: "380\u00a0000",
        cta: "Request a quote",
        image: "/images/prostory/brevnovsky-klaster-pohled-shora.webp",
        alt: "Brevnov Monastery aerial view \u2013 full complex for corporate parties",
      },
      {
        name: "Conference \u00b7 ground floor",
        venue: "Monastic rooms",
        persons: "100\u2013200 guests",
        featured: false,
        includes: [
          "Sala Terrena + adjoining lounges \u2013 full-day hire (from 30,000 CZK)",
          "Basic AV: projector, sound, microphones (from 25,000 CZK)",
          "Catering: 2\u00d7 coffee break + lunch + beverages (from 990 CZK/person)",
          "Staff and furniture (from 20,000 CZK)",
        ],
        price: "175\u00a0000",
        price200: "275\u00a0000",
        cta: "Request a quote",
        image: "/images/prostory/sala-terrena-raut.webp",
        alt: "Sala Terrena \u2013 conference setup in the monastic rooms",
      },
      {
        name: "Corporate party \u00b7 ground floor",
        venue: "Monastic rooms",
        persons: "100\u2013200 guests",
        featured: false,
        includes: [
          "Sala Terrena + adjoining spaces (from 30,000 CZK)",
          "Welcome drink + cold canap\u00e9s (from 260 CZK/person)",
          "Buffet dinner (from 790 CZK/person)",
          "Beverage package with beer and wine (from 430 CZK/person)",
          "Staff and furniture (from 20,000 CZK)",
        ],
        price: "200\u00a0000",
        price200: "345\u00a0000",
        cta: "Request a quote",
        image: "/images/prostory/salonek-prizemi.webp",
        alt: "Ground-floor monastic rooms \u2013 corporate party venue in Prague",
      },
    ],
    prev: "Previous",
    next: "Next",
    goTo: "Go to package",
  },

  capacityTables: {
    title:
      "Venue hire \u2013 conference halls and lounges for every format",
    headers: [
      "Room",
      "Reception",
      "Theatre",
      "Classroom",
      "Banquet",
      "Dimensions (m)",
      "Area (m\u00b2)",
    ],
    firstFloorTitle:
      "1st floor \u2013 state rooms (capacity up to 400 guests)",
    firstFloorNote: "1st-floor hire pricing available on request.",
    firstFloor: [
      {
        room: "Theresian Hall",
        reception: "150",
        theatre: "180",
        school: "100",
        banquet: "100",
        dimensions: "11.5 \u00d7 17.5",
        area: "200",
      },
      {
        room: "Abbot\u2019s Dining Room",
        reception: "80",
        theatre: "80",
        school: "50",
        banquet: "50",
        dimensions: "7.0 \u00d7 13.0",
        area: "90",
      },
      {
        room: "Reception Lounge",
        reception: "40",
        theatre: "40",
        school: "30",
        banquet: "30",
        dimensions: "7.0 \u00d7 8.6",
        area: "60",
      },
      {
        room: "Pompeian Lounge",
        reception: "30",
        theatre: "30",
        school: "20",
        banquet: "20",
        dimensions: "6.3 \u00d7 6.8",
        area: "40",
      },
      {
        room: "Corner Lounge",
        reception: "\u2013",
        theatre: "\u2013",
        school: "\u2013",
        banquet: "\u2013",
        dimensions: "6.3 \u00d7 4.2",
        area: "25",
      },
      {
        room: "Brandl Lounge",
        reception: "50",
        theatre: "50",
        school: "30",
        banquet: "30",
        dimensions: "6.0 \u00d7 8.0",
        area: "45",
      },
      {
        room: "Courtyard",
        reception: "300",
        theatre: "\u2013",
        school: "\u2013",
        banquet: "\u2013",
        dimensions: "21.0 \u00d7 25.0",
        area: "525",
      },
    ],
    groundFloorTitle: "Ground floor (capacity up to 300 guests)",
    groundFloorNote:
      "Capacities are approximate and depend on configuration (stage, AV, catering stations). We\u2019ll prepare a bespoke layout for your event.",
    groundFloor: [
      {
        room: "Sala Terrena",
        reception: "110",
        theatre: "100",
        school: "70",
        banquet: "70",
        dimensions: "16.5 \u00d7 6.0",
        area: "100",
      },
      {
        room: "Golden Lounge",
        reception: "40",
        theatre: "50",
        school: "30",
        banquet: "30",
        dimensions: "7.3 \u00d7 6.8",
        area: "50",
      },
      {
        room: "Blue Lounge",
        reception: "20",
        theatre: "30",
        school: "20",
        banquet: "20",
        dimensions: "5.8 \u00d7 6.8",
        area: "40",
      },
      {
        room: "Benedictine Wine Cellar",
        reception: "80",
        theatre: "\u2013",
        school: "\u2013",
        banquet: "\u2013",
        dimensions: "17.2 \u00d7 6.0",
        area: "105",
      },
    ],
    downloadRider: "Download technical rider",
  },

  spacesGallery: {
    title: "Explore the venues",
    items: [
      {
        image: "/images/prostory/tereziansky-sal-konference.webp",
        alt: "Theresian Hall \u2013 conference venue for 180 guests at Brevnov Monastery Prague",
        title: "Theresian Hall",
        capacity: "180 theatre / 100 banquet",
        description:
          "Baroque hall with frescoes. The flagship space for conferences and gala dinners.",
      },
      {
        image: "/images/prostory/sala-terrena-raut.webp",
        alt: "Sala Terrena \u2013 event space for receptions and presentations in Prague",
        title: "Sala Terrena",
        capacity: "110 reception / 70 banquet",
        description:
          "Ground-floor space with direct garden access. Receptions, presentations, smaller conferences.",
      },
      {
        image: "/images/prostory/nadvori-klaster.webp",
        alt: "Courtyard at Brevnov Monastery \u2013 outdoor event venue for 300 guests",
        title: "Courtyard & Gardens",
        capacity: "300 guests",
        description:
          "Outdoor space for welcome drinks, cocktail receptions and summer events.",
      },
      {
        image: "/images/prostory/salonek-prizemi.webp",
        alt: "Ground-floor lounge \u2013 workshops and meetings for 20\u201350 guests",
        title: "Lounges",
        capacity: "20\u201350 guests",
        description:
          "Golden, Blue, Pompeian, Brandl \u2013 workshops, board meetings, breakout sessions.",
      },
      {
        image: "/images/prostory/benediktinska-vinarna.webp",
        alt: "Benedictine Wine Cellar \u2013 intimate venue for afterparties and tastings",
        title: "Benedictine Wine Cellar",
        capacity: "80 guests",
        description:
          "Intimate space for afterparties, tastings and informal gatherings in an authentic monastic setting.",
      },
      {
        image: "/images/prostory/brevnovsky-klaster-exterier.webp",
        alt: "Brevnov Monastery \u2013 exterior view of the historic complex",
        title: "Exterior",
        capacity: "",
        description:
          "A historic complex with a striking atmosphere for guest arrivals.",
      },
    ],
  },

  smallerEvents: {
    title: "Lounge hire for smaller corporate events (20\u2013110 guests)",
    subtitle:
      "The monastic rooms also work independently. Individual lounges and halls are available for workshops, corporate meetings, press conferences or intimate dinners.",
    headers: ["Venue", "Capacity", "Suitable for", "Price"],
    venues: [
      {
        space: "Golden Lounge",
        capacity: "30\u201350 guests",
        suitableFor: "Workshop, board meeting, VIP gathering",
        price: "Included in ground-floor hire",
      },
      {
        space: "Blue Lounge",
        capacity: "20\u201330 guests",
        suitableFor: "Intimate meeting, breakout session",
        price: "Included in ground-floor hire",
      },
      {
        space: "Pompeian Lounge",
        capacity: "20\u201330 guests",
        suitableFor: "Lecture, corporate presentation",
        price: "Included in 1st-floor hire",
      },
      {
        space: "Sala Terrena",
        capacity: "70\u2013110 guests",
        suitableFor: "Presentation, tasting, smaller conference",
        price: "From 15,000 CZK/day (incl. corridors)",
      },
      {
        space: "Benedictine Wine Cellar",
        capacity: "Up to 80 guests",
        suitableFor: "Intimate dinner, tasting, networking",
        price: "From 20,000 CZK/day (incl. Sala Terrena)",
      },
      {
        space: "Brandl Lounge",
        capacity: "30\u201350 guests",
        suitableFor: "Workshop, training, press briefing",
        price: "Included in 1st-floor hire",
      },
    ],
    note: "Ground-floor and 1st-floor lounges are hired as part of the full floor (see price list). For specific requirements regarding individual rooms, get in touch \u2013 we\u2019ll find a solution.",
    cta: "Request venue hire",
  },

  priceList: {
    title: "Venue hire price list \u2013 Brevnov Monastery, Prague",
    groundFloorTitle: "Ground floor",
    groundFloor: [
      {
        item: "Sala Terrena + corridors",
        price: "15,000 CZK/day",
      },
      {
        item: "Sala Terrena + lounges + corridors",
        price: "20,000 CZK/day",
      },
      {
        item: "Benedictine Wine Cellar + Sala Terrena + corridors",
        price: "20,000 CZK/day",
      },
      {
        item: "Entire ground floor (Sala Terrena, lounges, wine cellar, corridors)",
        price: "30,000 CZK/day",
      },
    ],
    firstFloorTitle: "1st floor",
    firstFloor: [
      {
        item: "Theresian Hall",
        price: "65,000 CZK/day or 10,000 CZK/hr",
      },
      {
        item: "Entire 1st floor",
        price: "90,000 CZK/day or 10,000 CZK/hr",
      },
    ],
    extrasTitle: "Courtyard and additional services",
    extras: [
      {
        item: "Courtyard (depending on event layout)",
        price: "12,000 CZK/day",
      },
      {
        item: "Courtyard for welcome drink (up to 1 hr)",
        price: "free",
      },
      { item: "Basic sound system", price: "13,000 CZK/hall" },
      {
        item: "Sound + projection + screen/display",
        price: "25,000 CZK/hall",
      },
      {
        item: "Event extension (00:00\u201302:00, max 2 hrs)",
        price: "10,000 CZK/hr",
      },
      {
        item: "Setup day \u2013 preparation until 21:00",
        price: "35% of venue hire",
      },
      {
        item: "Setup day \u2013 preparation after 21:00",
        price: "50% of venue hire",
      },
    ],
    spaceHeader: "Venue",
    serviceHeader: "Service",
    priceHeader: "Price",
    note: "Prices excl. VAT. Catering is quoted individually based on event scope.",
    download: "Download price list",
  },

  upsell: {
    title: "Exclusive experiences you won\u2019t find anywhere else in Prague",
    vatNote: "excl. VAT",
    cards: [
      {
        title: "Monastery Brewery",
        text: "A guided tour of the monastery brewery with a tasting. Works as team building or a networking add-on. Guests love the backstory \u2013 the Brevnov brewery has been producing beer since the 13th century.",
        price: "from 250 CZK/person",
        image: "/images/prostory/pivovar-brevnov.webp",
        alt: "Brevnov Monastery Brewery \u2013 copper kettles in Prague",
      },
      {
        title: "Historic Crypt",
        text: "An intimate space beneath the monastery for an unconventional programme opening or an exclusive gathering. An atmosphere no modern venue can replicate. Includes a guided tour.",
        price: "from 180 CZK/person",
        image: "/images/prostory/krypta-bk.webp",
        alt: "Historic crypt beneath Brevnov Monastery, Prague",
      },
      {
        title: "Maria Theresa\u2019s Table",
        text: "A re-enactment of the ceremonial dinner of Maria Theresa and Joseph II in the Theresian Hall. Travel back to 1774 through a staged dinner that actually took place in this very room. Exceptional atmosphere with a professional guide.",
        price: "from 110,000 CZK",
        image: "/images/prostory/terezian-vecere-marie-terezie.webp",
        alt: "Maria Theresa ceremonial dinner in the Theresian Hall",
      },
    ],
    moreTitle: "More experiences on request",
    extras: [
      {
        name: "Royal Court Marketplace",
        price: "from 50,000 CZK",
      },
      {
        name: "Scenic performance \u201cAn Evening with the Monks\u201d",
        price: "from 50,000 CZK",
      },
      {
        name: "Traditional Czech hog roast",
        price: "from 20,000 CZK",
      },
      {
        name: "Baroque quartet concert",
        price: "from 25,000 CZK",
      },
      {
        name: "Special lighting effects",
        price: "from 40,000 CZK",
      },
      { name: "Floral decorations", price: "from 20,000 CZK" },
    ],
    footer:
      "Prices are indicative, excl. VAT. Availability and final pricing confirmed on request.",
  },

  processExpanded: {
    title: "From enquiry to flawless event \u2013 how the process works",
    steps: [
      {
        number: "1",
        title: "Enquiry & venue tour",
        timing: "day 1\u20135",
        text: "We respond within 24 hours. We\u2019ll walk you through the monastery, discuss the scope of your event and show how the spaces work in practice. The tour is complimentary and no-obligation.",
      },
      {
        number: "2",
        title: "Custom proposal",
        timing: "within 24 hrs of tour",
        text: "We prepare a detailed quote covering venue hire, catering and AV. Transparent breakdown, no hidden fees. If it doesn\u2019t fit, just say so \u2013 zero commitment.",
      },
      {
        number: "3",
        title: "Planning & production",
        text: "We fine-tune the schedule, layouts, menu and technical requirements. We coordinate AV suppliers, d\u00e9cor and logistics. You focus on the programme \u2013 we handle the rest.",
      },
      {
        number: "4",
        title: "Event day \u2013 flawless execution",
        text: "Our team is on site from setup to teardown. We flip the Theresian Hall from conference to banquet in 60 minutes \u2013 proven at Speedchain 2024 (800 attendees, full-day programme).",
      },
    ],
  },

  agencyProgram: {
    title: "Partner programme for event agencies",
    subtitle:
      "Sourcing a venue for your client? We work with dozens of agencies and understand what you need: a fast response, net pricing and a reliable on-site partner.",
    benefits: [
      {
        title: "Net pricing",
        text: "with room for your margin",
      },
      {
        title: "Response within 2 hours",
        text: "during business hours \u2013 dedicated contact person",
      },
      {
        title: "Familiarisation tour",
        text: "for your team, free of charge",
      },
      {
        title: "Technical rider and assets",
        text: "available for download (floor plans, high-res photos, capacity tables)",
      },
      {
        title: "Flexible collaboration",
        text: "we work to your brief, not a template",
      },
    ],
    cta: "Get in touch for agency terms",
  },

  faqFiremni: {
    title:
      "Frequently asked questions about venue hire at Brevnov Monastery",
    items: [
      {
        question:
          "What is the maximum capacity of Brevnov Monastery for events?",
        answer:
          "Up to 1,100 guests when using all floors and the courtyard. The Theresian Hall seats 180 theatre-style, the ground floor holds another 300, the courtyard another 300. By combining spaces we can accommodate events for 800+ attendees \u2013 see Speedchain International 2024.",
      },
      {
        question: "Can we bring our own caterer?",
        answer:
          "Catering is provided exclusively by IN CATERING \u2013 the operator of the monastery spaces. This means one team that knows the venue inside out and guarantees seamless logistics. No need to coordinate multiple suppliers.",
      },
      {
        question:
          "How much does it cost to hire Brevnov Monastery?",
        answer:
          "Ground floor from 15,000 CZK/day, Theresian Hall 65,000 CZK/day, entire 1st floor 90,000 CZK/day. All prices are in CZK (Czech Crowns), excl. VAT. See the full price list above. We\u2019ll prepare a custom quote including catering within 24 hours \u2013 no obligation.",
      },
      {
        question: "Is there parking at Brevnov Monastery?",
        answer:
          "Yes. 60 free parking spaces directly in front of the monastery. For larger events we organise parking management and guest navigation.",
      },
      {
        question: "Is the venue wheelchair accessible?",
        answer:
          "The ground floor (Sala Terrena, lounges) is step-free. The 1st floor (Theresian Hall) requires stairs \u2013 please let us know about accessibility requirements in advance and we\u2019ll find a solution.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "For large events (300+ guests) we recommend 3\u20136 months. For smaller events 4\u20136 weeks is often sufficient. Autumn and December fill up fast \u2013 the earlier, the better.",
      },
      {
        question: "How late can an event run?",
        answer:
          "Standard closing time is midnight. Extension until 02:00 is available for a surcharge (10,000 CZK/hr, maximum 2 hours).",
      },
      {
        question: "Do you provide AV equipment for conferences?",
        answer:
          "Yes, from trusted suppliers. Basic sound from 6,000 CZK/hall. Full AV solutions (LED walls, live streaming, conference microphones) are quoted based on your event\u2019s requirements.",
      },
      {
        question: "Can we visit the venue beforehand?",
        answer:
          "Tours are arranged by appointment, ideally on weekdays. For event agencies we offer a complimentary familiarisation tour. A virtual tour is available at brevnovevents.cz.",
      },
      {
        question:
          "We\u2019re planning an event for 20\u201350 people. Is the monastery worth considering?",
        answer:
          "Absolutely. Individual lounges (Golden, Blue, Pompeian, Brandl) hold 20\u201350 guests and are ideal for workshops, board meetings or intimate presentations. Get in touch \u2013 we\u2019ll tailor a solution.",
      },
    ],
  },

  /* ─── Wedding page ─── */

  svatbaHero: {
    title: "Your day deserves an extraordinary setting",
    subtitle:
      "Ceremony in the monastery garden, reception in a baroque hall, afterparty in the wine cellar \u2013 all within one estate for 30\u2013200 guests.",
    cta: "Schedule a tour for couples",
    imageAlt:
      "Wedding at Brevnov Monastery Prague \u2013 Vojt\u011b\u0161ka and the monastery garden",
  },

  weddingSpaces: {
    title:
      "Wedding venues \u2013 from ceremony to last dance, all under one roof",
    note: "Spaces can be combined to suit the flow of your day. We\u2019ll design a bespoke layout.",
    items: [
      {
        title: "Outdoor ceremony in the monastery garden",
        text: "The Vojt\u011b\u0161ka area and monastery garden with ponds \u2013 a setting for civil wedding ceremonies. The courtyard holds up to 300 guests for a welcome drink and cocktail reception.",
        image: "/images/svatby/bk-svatba-zahrady.webp",
        alt: "Monastery gardens Prague \u2013 outdoor wedding ceremony venue",
      },
      {
        title: "Reception dinner in the Theresian Hall",
        text: "A baroque hall with frescoed ceilings and a 7.3 m ceiling height. Capacity for 120 guests at banquet seating. A space where photographs take themselves.",
        image: "/images/svatby/bk-terezian-obrad.webp",
        alt: "Theresian Hall \u2013 baroque wedding reception venue in Prague",
      },
      {
        title: "Intimate celebration on the ground floor",
        text: "Sala Terrena (up to 110 guests) with direct garden access. Benedictine Wine Cellar (up to 80 guests) for an intimate evening celebration or afterparty.",
        image: "/images/svatby/bk-svatba-sala-terrena.webp",
        alt: "Sala Terrena \u2013 intimate wedding celebration venue in Prague",
      },
      {
        title: "Lounges for smaller groups",
        text: "Golden Lounge (40 guests) \u2013 bridal preparation, photo booth or VIP area. Blue Lounge (20 guests) \u2013 a quiet corner for your closest family and friends.",
        image: "/images/svatby/bk-prizemi-svatba.webp",
        alt: "Lounge for bridal preparation and intimate gatherings",
      },
    ],
  },

  weddingCapacity: {
    title: "Wedding venue overview and capacities",
    headers: ["Venue", "Capacity", "Suitable for"],
    rows: [
      {
        room: "Theresian Hall",
        capacity: "200 (theatre) / 120 (banquet)",
        suitableFor: "Reception dinner, ceremony",
      },
      {
        room: "Sala Terrena",
        capacity: "110 (reception) / 70 (banquet)",
        suitableFor: "Dinner, evening party",
      },
      {
        room: "Benedictine Wine Cellar",
        capacity: "80 (reception)",
        suitableFor: "Intimate celebration, afterparty",
      },
      {
        room: "Golden Lounge",
        capacity: "40 (reception)",
        suitableFor: "Welcome drink, photo booth",
      },
      {
        room: "Blue Lounge",
        capacity: "20 (reception)",
        suitableFor: "Bridal preparation, VIP area",
      },
      {
        room: "Courtyard + garden",
        capacity: "300",
        suitableFor: "Ceremony, cocktail reception",
      },
      {
        room: "Vojt\u011b\u0161ka",
        capacity: "By arrangement",
        suitableFor: "Civil wedding ceremony",
      },
    ],
  },

  weddingPricing: {
    title: "Wedding pricing at Brevnov Monastery, Prague",
    rentalTitle: "Venue hire",
    headers: ["Venue", "Price"],
    rows: [
      {
        room: "Sala Terrena + corridors",
        price: "15,000 CZK/day",
      },
      {
        room: "Sala Terrena + lounges + corridors",
        price: "20,000 CZK/day",
      },
      {
        room: "Entire ground floor (Sala Terrena, lounges, wine cellar)",
        price: "30,000 CZK/day",
      },
      {
        room: "Courtyard for ceremony or welcome drink (up to 1 hr)",
        price: "free",
      },
      {
        room: "Courtyard \u2013 full day",
        price: "12,000 CZK/day",
      },
      {
        room: "Extension past midnight (max 2 hrs)",
        price: "10,000 CZK/hr",
      },
    ],
    note: "Theresian Hall (1st floor) pricing available on request. All prices excl. VAT. Catering is quoted individually \u2013 from buffet refreshments to a formal wedding menu.",
    cta: "Get a no-obligation quote for your wedding",
  },

  weddingGallery: {
    title: "Venues for your wedding day",
    slides: [
      {
        image: "/images/svatby/bk-svatba-zahrady.webp",
        alt: "Wedding in the monastery garden, Brevnov Monastery Prague",
        title: "Monastery Garden",
        capacity: "",
        description:
          "A serene setting for civil wedding ceremonies surrounded by nature.",
      },
      {
        image: "/images/svatby/bk-terezian-obrad.webp",
        alt: "Theresian Hall \u2013 baroque wedding venue in Prague",
        title: "Theresian Hall",
        capacity: "120 guests banquet",
        description:
          "Baroque hall with frescoes for a grand wedding reception.",
      },
      {
        image: "/images/svatby/bk-svatba-sala-terrena.webp",
        alt: "Sala Terrena \u2013 wedding celebration venue in Prague",
        title: "Sala Terrena",
        capacity: "70 guests banquet",
        description:
          "Ground-floor space with direct garden access for your wedding dinner.",
      },
      {
        image: "/images/svatby/bk-svatba-nadvori.webp",
        alt: "Monastery courtyard \u2013 wedding welcome drink in Prague",
        title: "Courtyard",
        capacity: "300 guests",
        description:
          "Welcome drinks and cocktail reception under the open sky.",
      },
      {
        image: "/images/svatby/bk-vojteska2.webp",
        alt: "Vojt\u011b\u0161ka \u2013 civil wedding ceremony venue in Prague",
        title: "Vojt\u011b\u0161ka",
        capacity: "",
        description:
          "A romantic spot for civil ceremonies in the monastery garden.",
      },
      {
        image: "/images/svatby/bk-dezerty-svatba.webp",
        alt: "Wedding desserts and catering by IN CATERING",
        title: "Wedding catering",
        capacity: "",
        description:
          "Bespoke desserts and gastronomy by IN CATERING.",
      },
      {
        image: "/images/svatby/terezian-klavir-svatba.webp",
        alt: "Theresian Hall with piano \u2013 wedding day atmosphere in Prague",
        title: "Theresian Hall \u2013 detail",
        capacity: "",
        description:
          "Historic interior with a grand piano for an unforgettable atmosphere.",
      },
    ],
  },

  whyMonastery: {
    title:
      "What sets the monastery apart from hotel and ch\u00e2teau weddings",
    imageAlt:
      "Courtyard of Brevnov Monastery \u2013 a historic setting for your wedding day in Prague",
    reasons: [
      {
        title: "History you can feel.",
        text: "A monastery from 993 \u2013 frescoes, vaulted ceilings, gardens with ponds. A space with soul, not a stage set.",
      },
      {
        title: "In Prague, not an hour outside it.",
        text: "No driving to a remote ch\u00e2teau. Guests arrive by tram or park right on site (60 spaces, free).",
      },
      {
        title: "One team for everything.",
        text: "Venue and catering handled by IN CATERING. One contact, not three suppliers.",
      },
      {
        title: "Flexible spaces.",
        text: "Ceremony outdoors, dinner in the hall, afterparty in the wine cellar \u2013 all within one estate, no transfers.",
      },
      {
        title: "On-site accommodation.",
        text: "Hotel Adalbert right inside the monastery \u2013 comfort for the newlyweds and guests alike.",
      },
    ],
  },

  weddingProcess: {
    title: "From first meeting to your wedding day",
    steps: [
      {
        number: "1",
        title: "Tour & first meeting",
        text: "We\u2019ll walk you through the monastery, show you the spaces and discuss your vision \u2013 guest count, day flow, style. The tour is free and no-obligation.",
      },
      {
        number: "2",
        title: "Custom proposal",
        text: "We\u2019ll prepare a detailed quote for venue hire and catering. Full breakdown \u2013 no hidden fees.",
      },
      {
        number: "3",
        title: "Planning the details",
        text: "We finalise the menu, seating plan and day schedule. We can help coordinate your suppliers (florist, music, photographer) \u2013 we have trusted contacts.",
      },
      {
        number: "4",
        title: "Your wedding day",
        text: "Our team is on site from setup to close. You and your guests simply enjoy the day.",
      },
    ],
  },

  faqSvatba: {
    title:
      "Frequently asked questions about weddings at the monastery",
    items: [
      {
        question:
          "Are wedding ceremonies held at Brevnov Monastery?",
        answer:
          "Civil wedding ceremonies take place in the Vojt\u011b\u0161ka area within the monastery garden. Religious ceremonies in the Basilica of St Margaret must be arranged directly with the monastery.",
      },
      {
        question: "Can we bring our own caterer?",
        answer:
          "Catering is provided exclusively by IN CATERING. This gives us full control over quality and logistics \u2013 and you get a single point of contact instead of two.",
      },
      {
        question:
          "How many guests can attend a wedding at the monastery?",
        answer:
          "Banquet dinner in the Theresian Hall: 120 guests. In Sala Terrena: 70 guests. By combining spaces we can host weddings for up to 200 guests.",
      },
      {
        question: "Is parking a problem?",
        answer:
          "Not at all. 60 free parking spaces right on the monastery grounds.",
      },
      {
        question: "How late can a wedding reception run?",
        answer:
          "Until midnight as standard. Extension to 02:00 is available for a surcharge.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "We recommend 6\u201312 months, especially for summer and September dates. Smaller winter weddings can often be arranged at shorter notice.",
      },
    ],
  },

  weddingContact: {
    title: "Schedule a complimentary tour for couples",
    subtitle:
      "We\u2019d love to show you the monastery and discuss the possibilities for your wedding. The tour is free of charge.",
    contactLabel: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    webLabel: "Web",
    imageAlt:
      "Wedding at Brevnov Monastery \u2013 Theresian Hall, Prague",
  },

  weddingForm: {
    name: "Full name",
    email: "Email",
    phone: "Phone",
    preferredDate: "Preferred date",
    preferredDatePlaceholder:
      "Specific date or time frame (e.g. June 2026)",
    guestCount: "Number of guests",
    celebrationType: "What type of celebration are you planning?",
    catering: "Do you need catering?",
    moreInfo: "Additional information (optional)",
    vision: "Your vision",
    visionPlaceholder:
      "Wedding style, special requirements, allergies, anything important\u2026",
    source: "How did you hear about us?",
    selectPlaceholder: "Select\u2026",
    submit: "Submit enquiry",
    submitting: "Submitting\u2026",
    gdprNote:
      "We\u2019ll get back to you within 1 business day. Your data is processed in accordance with GDPR.",
    successTitle: "\u2713 Enquiry submitted",
    urgentNote: "For urgent requests call",
    guestCountOptions: [
      "Up to 30",
      "30\u201360",
      "60\u2013100",
      "100\u2013150",
      "150\u2013200",
      "200+",
    ],
    celebrationTypeOptions: [
      "Outdoor ceremony",
      "Reception dinner",
      "Cocktail reception",
      "Afterparty",
      "Full wedding day",
    ],
    cateringOptions: [
      "Yes, please send a proposal",
      "Venue hire only for now",
      "I\u2019d like to discuss options",
    ],
    sourceOptions: [
      "Recommendation",
      "Google",
      "Instagram",
      "Wedding portal",
      "Attended an event here",
      "Other",
    ],
  },

  /* ─── GDPR page ─── */

  gdpr: {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | brevnovevents.cz",
    metaDescription:
      "Privacy policy of IN CATERING s.r.o. for visitors of brevnovevents.cz.",
    lastUpdated: "IN CATERING s.r.o. \u00b7 Last updated: 31 July 2024",
    companyIntro:
      "The data controller is IN CATERING s.r.o.",
    contactIntro:
      "All enquiries regarding the processing of personal data can be sent to the following contacts:",
  },
};

export default en;
