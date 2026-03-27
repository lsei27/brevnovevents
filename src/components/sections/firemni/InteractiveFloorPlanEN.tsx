"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

/* ─── Room data ─── */

interface RoomCapacity {
  reception: string;
  theatre: string;
  school: string;
  banquet: string;
}

interface FloorPlanRoom {
  id: string;
  name: string;
  /** Hotspot position as % of image */
  x: number;
  y: number;
  /** Optional mobile-specific position to avoid overlapping text labels */
  mobileX?: number;
  mobileY?: number;
  area: string;
  dimensions: string;
  capacity: RoomCapacity;
  description: string;
  images: string[];
}

const groundFloorRooms: FloorPlanRoom[] = [
  {
    id: "sala-terrena",
    name: "Sala Terrena",
    x: 67.1,
    y: 49.9,
    mobileX: 66,
    mobileY: 53,
    area: "100 m²",
    dimensions: "16.5 × 6.0 m",
    capacity: { reception: "110", theatre: "100", school: "70", banquet: "70" },
    description:
      "The main ground-floor space with direct garden access. Ideal for receptions, presentations and smaller conferences.",
    images: [
      "/images/planek/sala-terrena-1.webp",
      "/images/planek/sala-terrena-2.webp",
      "/images/planek/sala-terrena-3.webp",
    ],
  },
  {
    id: "zlaty-salonek",
    name: "Golden Lounge",
    x: 66.9,
    y: 25.7,
    mobileX: 66,
    mobileY: 30,
    area: "50 m²",
    dimensions: "7.3 × 6.8 m",
    capacity: { reception: "40", theatre: "50", school: "30", banquet: "30" },
    description: "An elegant lounge for workshops, board meetings and VIP gatherings.",
    images: ["/images/planek/zlaty-salonek-1.webp", "/images/planek/zlaty-salonek-2.webp"],
  },
  {
    id: "modry-salonek",
    name: "Blue Lounge",
    x: 67.3,
    y: 11.7,
    mobileX: 66,
    mobileY: 11,
    area: "40 m²",
    dimensions: "5.8 × 6.8 m",
    capacity: { reception: "20", theatre: "30", school: "20", banquet: "20" },
    description: "An intimate space for smaller meetings and breakout sessions.",
    images: ["/images/planek/modry-salonek-1.webp", "/images/planek/modry-salonek-2.webp"],
  },
  {
    id: "kasna",
    name: "Fountain",
    x: 46.7,
    y: 11.8,
    mobileX: 48,
    mobileY: 13,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "A historic fountain in the central corridor. An attractive spot for welcome drinks and guest photos.",
    images: ["/images/planek/kasna-1.webp", "/images/planek/kasna-2.webp"],
  },
  {
    id: "chodba-prizemi",
    name: "Ground-floor corridor",
    x: 35.0,
    y: 20.0,
    mobileX: 38,
    mobileY: 22,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "A vaulted monastic corridor connecting all ground-floor spaces. Used as a flowing area for receptions and welcome drinks.",
    images: ["/images/planek/chodba-prizemi-1.webp", "/images/planek/chodba-prizemi-2.webp"],
  },
  {
    id: "benediktinska-vinarna",
    name: "Benedictine Wine Cellar",
    x: 34.3,
    y: 83.7,
    mobileX: 40,
    mobileY: 84,
    area: "105 m²",
    dimensions: "17.2 × 6.0 m",
    capacity: { reception: "80", theatre: "–", school: "–", banquet: "–" },
    description:
      "An intimate space for afterparties, wine tastings and informal gatherings in an authentic monastic setting.",
    images: [
      "/images/planek/benediktinska-vinarna-1.webp",
      "/images/planek/benediktinska-vinarna-2.webp",
    ],
  },
  {
    id: "prostor-pred-sala-terrenou-gf",
    name: "Terrace at Sala Terrena",
    x: 85.2,
    y: 52.2,
    mobileX: 88.5,
    mobileY: 49.8,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "An outdoor area perfect for welcome drinks, cocktail receptions and summer events.",
    images: [
      "/images/planek/prostor-pred-sala-terrenou-1.webp",
      "/images/planek/prostor-pred-sala-terrenou-2.webp",
      "/images/planek/prostor-pred-sala-terrenou-3.webp",
      "/images/planek/prostor-pred-sala-terrenou-4.webp",
    ],
  },
];

const firstFloorRooms: FloorPlanRoom[] = [
  {
    id: "tereziansky-sal",
    name: "Theresian Hall",
    x: 64.0,
    y: 49.8,
    mobileX: 64,
    mobileY: 54,
    area: "200 m²",
    dimensions: "11.5 × 17.5 m",
    capacity: { reception: "150", theatre: "180", school: "100", banquet: "100" },
    description:
      "A baroque hall with frescoes – the flagship space for conferences, gala dinners and formal events.",
    images: [
      "/images/planek/tereziansky-sal-1.webp",
      "/images/planek/tereziansky-sal-2.webp",
      "/images/planek/tereziansky-sal-3.webp",
    ],
  },
  {
    id: "opatska-jidelna",
    name: "Abbot's Dining Room",
    x: 26.7,
    y: 80.8,
    mobileX: 28,
    mobileY: 84,
    area: "90 m²",
    dimensions: "7.0 × 13.0 m",
    capacity: { reception: "80", theatre: "80", school: "50", banquet: "50" },
    description:
      "A historic dining room with a vaulted ceiling. Suitable for mid-size conferences and banquets.",
    images: ["/images/planek/opatska-jidelna-1.webp"],
  },
  {
    id: "prijimaci-salonek",
    name: "Reception Lounge",
    x: 46.1,
    y: 81.1,
    mobileX: 46,
    mobileY: 84,
    area: "60 m²",
    dimensions: "7.0 × 8.6 m",
    capacity: { reception: "40", theatre: "40", school: "30", banquet: "30" },
    description:
      "A distinguished lounge for VIP gatherings, lectures and intimate banquets.",
    images: ["/images/planek/prijimaci-salonek-1.webp"],
  },
  {
    id: "pompejsky-salonek",
    name: "Pompeian Lounge",
    x: 59.7,
    y: 81.2,
    mobileX: 61,
    mobileY: 84,
    area: "40 m²",
    dimensions: "6.3 × 6.8 m",
    capacity: { reception: "30", theatre: "30", school: "20", banquet: "20" },
    description:
      "An intimate room with unique wall paintings. Ideal for presentations and smaller corporate events.",
    images: ["/images/planek/pompejsky-salonek-1.webp"],
  },
  {
    id: "nadvori",
    name: "Courtyard",
    x: 34.4,
    y: 46.0,
    mobileX: 36,
    mobileY: 49,
    area: "525 m²",
    dimensions: "21.0 × 25.0 m",
    capacity: { reception: "300", theatre: "–", school: "–", banquet: "–" },
    description:
      "A spacious courtyard for outdoor receptions, welcome drinks and summer events for up to 300 guests.",
    images: [
      "/images/planek/nadvori-1.webp",
      "/images/planek/nadvori-2.webp",
      "/images/planek/nadvori-3.webp",
      "/images/planek/nadvori-4.webp",
      "/images/planek/nadvori-5.webp",
    ],
  },
  {
    id: "chodba-1patro",
    name: "1st-floor corridor",
    x: 12.2,
    y: 34.0,
    mobileX: 14,
    mobileY: 44,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "A grand corridor with historic frescoes connecting the first-floor halls. Used as a flowing space during conferences and receptions.",
    images: ["/images/planek/chodba-1patro-1.webp", "/images/planek/chodba-1patro-2.webp"],
  },
  {
    id: "prostor-pred-klasterem",
    name: "Monastery entrance",
    x: 34.9,
    y: 94.9,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "The entrance area in front of the monastery, offering a unique atmosphere for guest arrivals and welcome receptions.",
    images: [
      "/images/planek/prostor-pred-klasterem-1.webp",
      "/images/planek/prostor-pred-klasterem-2.webp",
      "/images/planek/prostor-pred-klasterem-3.webp",
    ],
  },
  {
    id: "prostor-pred-sala-terrenou-1f",
    name: "Terrace at Sala Terrena",
    x: 85.2,
    y: 52.2,
    mobileX: 88.8,
    mobileY: 51.5,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "An outdoor area perfect for welcome drinks, cocktail receptions and summer events.",
    images: [
      "/images/planek/prostor-pred-sala-terrenou-1.webp",
      "/images/planek/prostor-pred-sala-terrenou-2.webp",
      "/images/planek/prostor-pred-sala-terrenou-3.webp",
      "/images/planek/prostor-pred-sala-terrenou-4.webp",
    ],
  },
];

/* ─── Lightbox ─── */

function Lightbox({
  images,
  initialIndex,
  roomName,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  roomName: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i - 1 + images.length) % images.length);
          }}
          aria-label="Previous image"
          className="absolute left-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="flex h-full max-h-[90vh] w-full max-w-[90vw] flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full flex-1">
          <Image
            src={images[index]}
            alt={`${roomName} – ${index + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 shrink-0 text-center pb-4">
          <p className="text-lg font-bold">{roomName}</p>
          <p className="mt-1 text-sm text-brand-white/50">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIndex((i) => (i + 1) % images.length);
          }}
          aria-label="Next image"
          className="absolute right-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ─── Mini carousel for room detail ─── */

function RoomCarousel({
  images,
  roomName,
  onImageClick,
}: {
  images: string[];
  roomName: string;
  onImageClick: (index: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 1) {
    return (
      <button
        type="button"
        onClick={() => onImageClick(0)}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl"
        aria-label={`Enlarge: ${roomName}`}
      >
        <Image
          src={images[0]}
          alt={roomName}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
          <svg
            className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </span>
      </button>
    );
  }

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden rounded-xl">
        <div className="flex">
          {images.map((img, i) => (
            <div key={img} className="min-w-0 flex-[0_0_100%]">
              <button
                type="button"
                onClick={() => onImageClick(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden"
                aria-label={`Enlarge: ${roomName} – ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${roomName} – ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <svg
                    className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous photo"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Photo ${i + 1}`}
              className="p-1"
            >
              <span
                className={`block h-2 w-2 rounded-full transition-colors ${
                  i === selectedIndex ? "bg-brand-white" : "bg-brand-white/30"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next photo"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Capacity table row ─── */

function CapacityRow({ label, value }: { label: string; value: string }) {
  if (value === "–") return null;
  return (
    <div className="flex items-center justify-between border-b border-brand-gray-dark/20 py-2">
      <span className="text-sm text-brand-white/60">{label}</span>
      <span className="text-sm font-semibold">{value} pers.</span>
    </div>
  );
}

/* ─── Room detail panel ─── */

function RoomDetail({
  room,
  onClose,
  onImageClick,
}: {
  room: FloorPlanRoom;
  onClose: () => void;
  onImageClick: (index: number) => void;
}) {
  const hasCapacity = Object.values(room.capacity).some((v) => v !== "–");

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-brand-gray-dark/30 bg-brand-black-alt">
        <div className="flex items-center justify-between border-b border-brand-gray-dark/20 px-5 py-3 md:px-6 md:py-4">
          <h3 className="text-lg font-bold md:text-xl">{room.name}</h3>
        </div>
        <div className="p-5 md:p-6">
          <RoomCarousel images={room.images} roomName={room.name} onImageClick={onImageClick} />

          {/* Info */}
          <div className="mt-5">
            <p className="text-sm leading-relaxed text-brand-white/70">{room.description}</p>

            {/* Dimensions */}
            {(room.area !== "–" || room.dimensions !== "–") && (
              <div className="mt-4 flex gap-6">
                {room.area !== "–" && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-white/40">Area</p>
                    <p className="mt-1 text-lg font-bold">{room.area}</p>
                  </div>
                )}
                {room.dimensions !== "–" && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-white/40">Dimensions</p>
                    <p className="mt-1 text-lg font-bold">{room.dimensions}</p>
                  </div>
                )}
              </div>
            )}

            {/* Capacity table */}
            {hasCapacity && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Capacity by layout
                </p>
                <CapacityRow label="Reception" value={room.capacity.reception} />
                <CapacityRow label="Theatre" value={room.capacity.theatre} />
                <CapacityRow label="Classroom" value={room.capacity.school} />
                <CapacityRow label="Banquet" value={room.capacity.banquet} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Default rooms per floor ─── */

const DEFAULT_GROUND_FLOOR_ROOM = groundFloorRooms[0]; // Sala Terrena
const DEFAULT_FIRST_FLOOR_ROOM = firstFloorRooms[0]; // Theresian Hall

/* ─── Main component ─── */

type Floor = "ground" | "first";

export function InteractiveFloorPlanEN() {
  const [activeFloor, setActiveFloor] = useState<Floor>("first");
  const [selectedRoom, setSelectedRoom] = useState<FloorPlanRoom>(DEFAULT_FIRST_FLOOR_ROOM);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isChangingFloor, setIsChangingFloor] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const rooms = activeFloor === "ground" ? groundFloorRooms : firstFloorRooms;
  const floorImage =
    activeFloor === "ground"
      ? "/images/planek/mapa_BK_EN_2.webp"
      : "/images/planek/mapa_BK_EN_1.webp";

  function handleFloorSwitch(floor: Floor) {
    if (activeFloor === floor || isChangingFloor) return;
    hasInteracted.current = true;

    const newDefaultRoom = floor === "ground" ? DEFAULT_GROUND_FLOOR_ROOM : DEFAULT_FIRST_FLOOR_ROOM;
    setIsChangingFloor(true);
    setTimeout(() => {
      setActiveFloor(floor);
      setSelectedRoom(newDefaultRoom);
      setIsChangingFloor(false);
    }, 300);
  }

  function handleRoomClick(room: FloorPlanRoom) {
    hasInteracted.current = true;
    setSelectedRoom(room);
  }

  // Auto-scroll to detail panel on mobile when room changes (skip initial mount)
  useEffect(() => {
    if (!hasInteracted.current) return;
    if (selectedRoom && detailRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [selectedRoom]);


  return (
    <section id="planek" className="scroll-mt-20 bg-brand-black-alt pb-12 pt-8 md:pb-8 md:pt-6">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Interactive venue floor plan
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-brand-white/70 md:mt-2">
          Click a hotspot on the floor plan to view room details, photos and capacity.
        </p>

        {/* Floor switcher */}
        <div className="mt-4 flex justify-center md:mt-3">
          <div className="inline-flex overflow-hidden rounded-full border border-brand-gray-dark/30 bg-brand-black">
            <button
              type="button"
              onClick={() => handleFloorSwitch("first")}
              className={`px-6 py-3 text-sm font-semibold transition-colors ${
                activeFloor === "first"
                  ? "bg-brand-red text-white"
                  : "text-brand-white/60 hover:text-brand-white"
              }`}
            >
              1st floor
            </button>
            <button
              type="button"
              onClick={() => handleFloorSwitch("ground")}
              className={`px-6 py-3 text-sm font-semibold transition-colors ${
                activeFloor === "ground"
                  ? "bg-brand-red text-white"
                  : "text-brand-white/60 hover:text-brand-white"
              }`}
            >
              Ground floor
            </button>
          </div>
        </div>

        {/* Layout: centered plan by default, shifts left + detail on click */}
        <div
          className="mt-4 grid items-start gap-4 transition-all duration-500 ease-in-out md:mt-5 lg:grid-cols-[1fr_360px]"
        >
          {/* Floor plan with hotspots */}
          <div
            className={`relative mx-auto w-full max-w-3xl lg:max-w-none ${
              isChangingFloor
                ? "animate-[genie-out_0.3s_ease-in_forwards]"
                : "animate-[genie_0.3s_ease-out_forwards]"
            }`}
            style={{ transformOrigin: "center center" }}
          >
            <Image
              src={floorImage}
              alt={
                activeFloor === "ground"
                  ? "Ground floor plan of Brevnov Monastery"
                  : "First floor plan of Brevnov Monastery"
              }
              width={2000}
              height={2000}
              className="h-auto w-full rounded-2xl"
              priority
            />

            {/* Hotspots */}
            {rooms.map((room) => {
              const hotX = isMobile && room.mobileX != null ? room.mobileX : room.x;
              const hotY = isMobile && room.mobileY != null ? room.mobileY : room.y;
              return (
              <button
                key={room.id}
                type="button"
                onClick={() => handleRoomClick(room)}
                aria-label={`View details: ${room.name}`}
                className="group absolute flex h-10 w-10 items-center justify-center"
                style={{
                  left: `${hotX}%`,
                  top: `${hotY}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Ring — centered via flex in button */}
                <span
                  className={`absolute rounded-full p-0 transition-opacity ${
                    selectedRoom?.id === room.id
                      ? "h-6 w-6 animate-ping bg-brand-red/40 md:h-8 md:w-8"
                      : "h-7 w-7 bg-brand-red/15 opacity-100 group-hover:bg-brand-red/25 md:h-9 md:w-9"
                  }`}
                />
                {/* Dot */}
                <span
                  className={`relative block h-3 w-3 rounded-full border-[1.5px] transition-transform md:h-4 md:w-4 md:border-2 ${
                    selectedRoom?.id === room.id
                      ? "scale-110 border-white bg-brand-red shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      : "border-brand-red/60 bg-brand-red/80 group-hover:scale-110 group-hover:border-white group-hover:bg-brand-red"
                  }`}
                />
                {/* Tooltip (desktop only) */}
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-black px-3 py-1.5 text-xs font-semibold shadow-lg transition-opacity group-hover:opacity-100 md:block md:opacity-0">
                  {room.name}
                </span>
              </button>
              );
            })}
          </div>

          {/* Room detail panel — always visible */}
          <div
            ref={detailRef}
            className="animate-[genie_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards] lg:flex lg:flex-col"
            style={{
              transformOrigin: "left center",
            }}
          >
            <RoomDetail
              room={selectedRoom}
              onClose={() => {}}
              onImageClick={(i) => setLightboxIndex(i)}
            />
          </div>
        </div>
      </div>

      {/* Lightbox — outside of genie animated context to prevent stacking issues */}
      {lightboxIndex !== null && selectedRoom && (
        <Lightbox
          images={selectedRoom.images}
          initialIndex={lightboxIndex}
          roomName={selectedRoom.name}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
