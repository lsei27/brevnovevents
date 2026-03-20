/* ─── Dictionary type definitions ─── */

export interface NavLink {
  label: string;
  href: string;
}

export interface SpaceItem {
  image: string;
  alt: string;
  title: string;
  capacity: string;
  description: string;
}

export interface PricingPackage {
  name: string;
  venue: string;
  persons: string;
  includes: string;
  price: string;
  price200: string;
  featured: boolean;
  cta: string;
}

export interface ReferenceStat {
  number: string;
  label: string;
}

export interface Reference {
  title: string;
  image: string;
  alt: string;
  description: string;
  stats: ReferenceStat[];
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export interface TransportItem {
  label: string;
  value: string;
}

export interface USPCard {
  title: string;
  text: string;
}

/* ─── Firemní page types ─── */

export interface USPExpandedItem {
  title: string;
  text: string;
  meaning: string;
  image: string;
  alt: string;
}

export interface DetailedPackage {
  name: string;
  venue: string;
  persons: string;
  featured: boolean;
  includes: string[];
  price: string;
  price200: string;
  cta: string;
  image: string;
  alt: string;
}

export interface RoomRow {
  room: string;
  reception: string;
  theatre: string;
  school: string;
  banquet: string;
  dimensions: string;
  area: string;
}

export interface SmallVenue {
  space: string;
  capacity: string;
  suitableFor: string;
  price: string;
}

export interface PriceRow {
  item: string;
  price: string;
}

export interface UpsellCard {
  title: string;
  text: string;
  price: string;
  image: string;
  alt: string;
}

export interface UpsellExtra {
  name: string;
  price: string;
}

export interface ProcessExpandedStep {
  number: string;
  title: string;
  timing?: string;
  text: string;
}

export interface AgencyBenefit {
  title: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* ─── Svatba page types ─── */

export interface WeddingSpaceItem {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface WeddingCapacityRow {
  room: string;
  capacity: string;
  suitableFor: string;
}

export interface WeddingPriceRow {
  room: string;
  price: string;
}

export interface WeddingSlide {
  image: string;
  alt: string;
  title: string;
  capacity: string;
  description: string;
}

export interface WhyReason {
  title: string;
  text: string;
}

/* ─── Main Dictionary interface ─── */

export interface Dictionary {
  locale: "cs" | "en";
  skipLink: string;

  header: {
    nav: NavLink[];
    cta: string;
    ctaHref: string;
    logoAlt: string;
    operatedBy: string;
    openMenu: string;
    closeMenu: string;
  };

  footer: {
    nav: NavLink[];
    operatedBy: string;
    navigation: string;
    contact: string;
    copyright: string;
    privacy: string;
    privacyHref: string;
  };

  /* ─── Homepage sections ─── */

  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    imageAlt: string;
  };

  usp: {
    title: string;
    cta: string;
    cards: USPCard[];
  };

  spaces: {
    title: string;
    ctaPrimary: string;
    ctaSecondary: string;
    items: SpaceItem[];
  };

  videoTour: {
    title: string;
    videoTitle: string;
  };

  pricing: {
    title: string;
    subtitle: string;
    from: string;
    currency: string;
    priceNote: string;
    price200Label: string;
    featured: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    footer: string;
    packages: PricingPackage[];
    prev: string;
    next: string;
    goTo: string;
  };

  socialProof: {
    cta: string;
    prev: string;
    next: string;
    goTo: string;
    references: Reference[];
  };

  howItWorks: {
    title: string;
    steps: ProcessStep[];
  };

  weddingGateway: {
    title: string;
    text: string;
    features: string[];
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    imageAlt: string;
  };

  location: {
    title: string;
    address: string;
    mapTitle: string;
    note: string;
    transport: TransportItem[];
  };

  contact: {
    title: string;
    subtitle: string;
    contactLabel: string;
    emailLabel: string;
    phoneLabel: string;
    webLabel: string;
    imageAlt: string;
  };

  inquiryForm: {
    name: string;
    company: string;
    email: string;
    phone: string;
    eventType: string;
    guestCount: string;
    preferredDate: string;
    preferredDatePlaceholder: string;
    moreInfo: string;
    catering: string;
    isAgency: string;
    agencyYes: string;
    agencyNo: string;
    description: string;
    descriptionPlaceholder: string;
    source: string;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    gdprNote: string;
    successTitle: string;
    urgentNote: string;
    eventTypeOptions: string[];
    guestCountOptions: string[];
    cateringOptions: string[];
    sourceOptions: string[];
  };

  cookieConsent: {
    title: string;
    text: string;
    settings: string;
    reject: string;
    acceptAll: string;
    settingsTitle: string;
    settingsText: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    marketing: string;
    marketingDesc: string;
    back: string;
    save: string;
    cookieButtonLabel: string;
  };

  /* ─── Firemní eventy page ─── */

  firemniHero: {
    title: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
  };

  uspExpanded: {
    title: string;
    meaningLabel: string;
    items: USPExpandedItem[];
  };

  packagesDetail: {
    title: string;
    subtitle: string;
    from: string;
    currency: string;
    priceNote: string;
    price200Label: string;
    featured: string;
    footer: string;
    packages: DetailedPackage[];
    prev: string;
    next: string;
    goTo: string;
  };

  capacityTables: {
    title: string;
    headers: string[];
    firstFloorTitle: string;
    firstFloorNote: string;
    firstFloor: RoomRow[];
    groundFloorTitle: string;
    groundFloorNote: string;
    groundFloor: RoomRow[];
    downloadRider: string;
  };

  spacesGallery: {
    title: string;
    items: SpaceItem[];
  };

  smallerEvents: {
    title: string;
    subtitle: string;
    headers: string[];
    venues: SmallVenue[];
    note: string;
    cta: string;
  };

  priceList: {
    title: string;
    groundFloorTitle: string;
    groundFloor: PriceRow[];
    firstFloorTitle: string;
    firstFloor: PriceRow[];
    extrasTitle: string;
    extras: PriceRow[];
    spaceHeader: string;
    serviceHeader: string;
    priceHeader: string;
    note: string;
    download: string;
  };

  upsell: {
    title: string;
    vatNote: string;
    cards: UpsellCard[];
    moreTitle: string;
    extras: UpsellExtra[];
    footer: string;
  };

  processExpanded: {
    title: string;
    steps: ProcessExpandedStep[];
  };

  agencyProgram: {
    title: string;
    subtitle: string;
    benefits: AgencyBenefit[];
    cta: string;
  };

  faqFiremni: {
    title: string;
    items: FAQItem[];
  };

  /* ─── Svatba page ─── */

  svatbaHero: {
    title: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
  };

  weddingSpaces: {
    title: string;
    note: string;
    items: WeddingSpaceItem[];
  };

  weddingCapacity: {
    title: string;
    headers: string[];
    rows: WeddingCapacityRow[];
  };

  weddingPricing: {
    title: string;
    rentalTitle: string;
    headers: string[];
    rows: WeddingPriceRow[];
    note: string;
    cta: string;
  };

  weddingGallery: {
    title: string;
    slides: WeddingSlide[];
  };

  whyMonastery: {
    title: string;
    imageAlt: string;
    reasons: WhyReason[];
  };

  weddingProcess: {
    title: string;
    steps: ProcessStep[];
  };

  faqSvatba: {
    title: string;
    items: FAQItem[];
  };

  weddingContact: {
    title: string;
    subtitle: string;
    contactLabel: string;
    emailLabel: string;
    phoneLabel: string;
    webLabel: string;
    imageAlt: string;
  };

  weddingForm: {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredDatePlaceholder: string;
    guestCount: string;
    celebrationType: string;
    catering: string;
    moreInfo: string;
    vision: string;
    visionPlaceholder: string;
    source: string;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    gdprNote: string;
    successTitle: string;
    urgentNote: string;
    guestCountOptions: string[];
    celebrationTypeOptions: string[];
    cateringOptions: string[];
    sourceOptions: string[];
  };

  /* ─── GDPR page (metadata + headings) ─── */

  gdpr: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    lastUpdated: string;
    companyIntro: string;
    contactIntro: string;
  };
}
