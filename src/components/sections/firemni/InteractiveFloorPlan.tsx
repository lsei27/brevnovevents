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
    dimensions: "16,5 × 6,0 m",
    capacity: { reception: "110", theatre: "100", school: "70", banquet: "70" },
    description:
      "Hlavní prostor přízemí s přímým vstupem do zahrady. Ideální pro rauty, prezentace a menší konference.",
    images: [
      "/images/planek/sala-terrena-1.webp",
      "/images/planek/sala-terrena-2.webp",
      "/images/planek/sala-terrena-3.webp",
    ],
  },
  {
    id: "zlaty-salonek",
    name: "Zlatý salonek",
    x: 66.9,
    y: 25.7,
    mobileX: 66,
    mobileY: 30,
    area: "50 m²",
    dimensions: "7,3 × 6,8 m",
    capacity: { reception: "40", theatre: "50", school: "30", banquet: "30" },
    description: "Elegantní salonek pro workshopy, board meetingy a VIP setkání.",
    images: ["/images/planek/zlaty-salonek-1.webp", "/images/planek/zlaty-salonek-2.webp"],
  },
  {
    id: "modry-salonek",
    name: "Modrý salonek",
    x: 67.3,
    y: 11.7,
    mobileX: 66,
    mobileY: 11,
    area: "40 m²",
    dimensions: "5,8 × 6,8 m",
    capacity: { reception: "20", theatre: "30", school: "20", banquet: "20" },
    description: "Komorní prostor pro menší meetingy a breakout sessions.",
    images: ["/images/planek/modry-salonek-1.webp", "/images/planek/modry-salonek-2.webp"],
  },
  {
    id: "kasna",
    name: "Kašna",
    x: 46.7,
    y: 11.8,
    mobileX: 48,
    mobileY: 13,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Historická kašna v centrální části chodby. Atraktivní místo pro welcome drink a focení hostů.",
    images: ["/images/planek/kasna-1.webp", "/images/planek/kasna-2.webp"],
  },
  {
    id: "chodba-prizemi",
    name: "Chodba – přízemí",
    x: 35.0,
    y: 20.0,
    mobileX: 38,
    mobileY: 22,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Klášterní chodba s křížovou klenbou propojující všechny prostory přízemí. Slouží jako průchozí prostor pro rauty a welcome drinky.",
    images: ["/images/planek/chodba-prizemi-1.webp", "/images/planek/chodba-prizemi-2.webp"],
  },
  {
    id: "benediktinska-vinarna",
    name: "Benediktinská vinárna",
    x: 34.3,
    y: 83.7,
    mobileX: 40,
    mobileY: 84,
    area: "105 m²",
    dimensions: "17,2 × 6,0 m",
    capacity: { reception: "80", theatre: "–", school: "–", banquet: "–" },
    description:
      "Komorní prostor pro afterparty, degustace a neformální setkání v autentickém klášterním prostředí.",
    images: [
      "/images/planek/benediktinska-vinarna-1.webp",
      "/images/planek/benediktinska-vinarna-2.webp",
    ],
  },
  {
    id: "prostor-pred-sala-terrenou-gf",
    name: "Prostor před Sala Terrenou",
    x: 85.5,
    y: 52.8,
    mobileX: 88.5,
    mobileY: 49.8,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Venkovní prostor ideální pro welcome drink, cocktail reception a letní akce.",
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
    name: "Tereziánský sál",
    x: 64.0,
    y: 49.8,
    mobileX: 64,
    mobileY: 54,
    area: "200 m²",
    dimensions: "11,5 × 17,5 m",
    capacity: { reception: "150", theatre: "180", school: "100", banquet: "100" },
    description:
      "Barokní sál s freskami – hlavní prostor pro konference, gala večery a slavnostní akce.",
    images: [
      "/images/planek/tereziansky-sal-1.webp",
      "/images/planek/tereziansky-sal-2.webp",
      "/images/planek/tereziansky-sal-3.webp",
    ],
  },
  {
    id: "opatska-jidelna",
    name: "Opatská jídelna",
    x: 26.7,
    y: 80.8,
    mobileX: 28,
    mobileY: 84,
    area: "90 m²",
    dimensions: "7,0 × 13,0 m",
    capacity: { reception: "80", theatre: "80", school: "50", banquet: "50" },
    description:
      "Historická jídelna s klenebním stropem. Vhodná pro konference a bankety střední velikosti.",
    images: ["/images/planek/opatska-jidelna-1.webp"],
  },
  {
    id: "prijimaci-salonek",
    name: "Přijímací salonek",
    x: 46.1,
    y: 81.1,
    mobileX: 46,
    mobileY: 84,
    area: "60 m²",
    dimensions: "7,0 × 8,6 m",
    capacity: { reception: "40", theatre: "40", school: "30", banquet: "30" },
    description:
      "Reprezentativní salonek pro VIP setkání, přednášky a komorní bankety.",
    images: ["/images/planek/prijimaci-salonek-1.webp"],
  },
  {
    id: "pompejsky-salonek",
    name: "Pompejský salonek",
    x: 59.7,
    y: 81.2,
    mobileX: 61,
    mobileY: 84,
    area: "40 m²",
    dimensions: "6,3 × 6,8 m",
    capacity: { reception: "30", theatre: "30", school: "20", banquet: "20" },
    description:
      "Intimní prostor s unikátní výmalbou. Ideální pro prezentace a menší firemní akce.",
    images: ["/images/planek/pompejsky-salonek-1.webp"],
  },
  {
    id: "nadvori",
    name: "Nádvoří",
    x: 34.4,
    y: 46.0,
    mobileX: 36,
    mobileY: 49,
    area: "525 m²",
    dimensions: "21,0 × 25,0 m",
    capacity: { reception: "300", theatre: "–", school: "–", banquet: "–" },
    description:
      "Rozlehlé nádvoří pro venkovní recepce, welcome drinky a letní akce až pro 300 hostů.",
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
    name: "Chodba – 1. patro",
    x: 12.2,
    y: 34.0,
    mobileX: 14,
    mobileY: 44,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Reprezentativní chodba s historickými freskami propojující sály 1. patra. Využívá se jako průchozí prostor při konferencích a rautech.",
    images: ["/images/planek/chodba-1patro-1.webp", "/images/planek/chodba-1patro-2.webp"],
  },
  {
    id: "prostor-pred-klasterem",
    name: "Prostor před klášterem",
    x: 34.9,
    y: 94.9,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Vstupní prostor před klášterem s unikátní atmosférou pro příjezd hostů a welcome reception.",
    images: [
      "/images/planek/prostor-pred-klasterem-1.webp",
      "/images/planek/prostor-pred-klasterem-2.webp",
      "/images/planek/prostor-pred-klasterem-3.webp",
    ],
  },
  {
    id: "prostor-pred-sala-terrenou-1f",
    name: "Prostor před Sala Terrenou",
    x: 84.8,
    y: 51.5,
    mobileX: 88.8,
    mobileY: 51.5,
    area: "–",
    dimensions: "–",
    capacity: { reception: "–", theatre: "–", school: "–", banquet: "–" },
    description:
      "Venkovní prostor ideální pro welcome drink, cocktail reception a letní akce.",
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
        aria-label="Zavřít"
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
          aria-label="Předchozí obrázek"
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
          aria-label="Další obrázek"
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
        aria-label={`Zvětšit: ${roomName}`}
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
                aria-label={`Zvětšit: ${roomName} – ${i + 1}`}
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
          aria-label="Předchozí fotka"
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
              aria-label={`Fotka ${i + 1}`}
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
          aria-label="Další fotka"
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
      <span className="text-sm font-semibold">{value} os.</span>
    </div>
  );
}

/* ─── Room detail panel ─── */

function RoomDetail({ room, onClose }: { room: FloorPlanRoom; onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, lightboxIndex]);

  const hasCapacity = Object.values(room.capacity).some((v) => v !== "–");

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-brand-gray-dark/30 bg-brand-black-alt">
        <div className="flex items-center justify-between border-b border-brand-gray-dark/20 px-5 py-3 md:px-6 md:py-4">
          <h3 className="text-lg font-bold md:text-xl">{room.name}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zavřít detail"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5 md:p-6">
          {/* Photos */}
          <RoomCarousel
            images={room.images}
            roomName={room.name}
            onImageClick={(i) => setLightboxIndex(i)}
          />

          {/* Info */}
          <div className="mt-5">
            <p className="text-sm leading-relaxed text-brand-white/70">{room.description}</p>

            {/* Dimensions */}
            {(room.area !== "–" || room.dimensions !== "–") && (
              <div className="mt-4 flex gap-6">
                {room.area !== "–" && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-white/40">Plocha</p>
                    <p className="mt-1 text-lg font-bold">{room.area}</p>
                  </div>
                )}
                {room.dimensions !== "–" && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-white/40">Rozměr</p>
                    <p className="mt-1 text-lg font-bold">{room.dimensions}</p>
                  </div>
                )}
              </div>
            )}

            {/* Capacity table */}
            {hasCapacity && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Kapacita podle uspořádání
                </p>
                <CapacityRow label="Recepce" value={room.capacity.reception} />
                <CapacityRow label="Divadlo" value={room.capacity.theatre} />
                <CapacityRow label="Škola" value={room.capacity.school} />
                <CapacityRow label="Banket" value={room.capacity.banquet} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={room.images}
          initialIndex={lightboxIndex}
          roomName={room.name}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

/* ─── Default rooms per floor ─── */

const DEFAULT_GROUND_FLOOR_ROOM = groundFloorRooms[0]; // Sala Terrena
const DEFAULT_FIRST_FLOOR_ROOM = firstFloorRooms[0]; // Tereziánský sál

/* ─── Main component ─── */

type Floor = "ground" | "first";

export function InteractiveFloorPlan() {
  const [activeFloor, setActiveFloor] = useState<Floor>("first");
  const [selectedRoom, setSelectedRoom] = useState<FloorPlanRoom>(DEFAULT_FIRST_FLOOR_ROOM);
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
      ? "/images/planek/planek-prizemi.webp"
      : "/images/planek/planek-1patro.webp";

  function handleFloorSwitch(floor: Floor) {
    hasInteracted.current = true;
    setActiveFloor(floor);
    setSelectedRoom(floor === "ground" ? DEFAULT_GROUND_FLOOR_ROOM : DEFAULT_FIRST_FLOOR_ROOM);
  }

  function handleRoomClick(room: FloorPlanRoom) {
    hasInteracted.current = true;
    setSelectedRoom(room);
  }

  // Auto-scroll to detail panel on mobile when room changes (skip initial mount)
  useEffect(() => {
    if (!hasInteracted.current) return;
    if (detailRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [selectedRoom]);

  return (
    <section id="planek" className="scroll-mt-20 bg-brand-black-alt pb-12 pt-8 md:pb-8 md:pt-6">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Interaktivní plánek prostor
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-brand-white/70 md:mt-2">
          Klikněte na bod v plánku pro zobrazení detailu místnosti s fotografiemi a kapacitami.
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
              1. patro
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
              Přízemí
            </button>
          </div>
        </div>

        {/* Desktop: side-by-side layout / Mobile: stacked */}
        <div className="mt-4 grid items-stretch gap-4 md:mt-5 lg:grid-cols-[1fr_360px]">
          {/* Floor plan with hotspots */}
          <div className="relative mx-auto w-full max-w-3xl lg:max-w-none">
            <Image
              src={floorImage}
              alt={
                activeFloor === "ground"
                  ? "Plánek přízemí Břevnovského kláštera"
                  : "Plánek 1. patra Břevnovského kláštera"
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
                aria-label={`Zobrazit detail: ${room.name}`}
                className="group absolute -m-2 p-2 md:-m-1 md:p-1"
                style={{
                  left: `${hotX}%`,
                  top: `${hotY}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Ring — animated ping only for selected, static glow for others */}
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    selectedRoom.id === room.id
                      ? "h-5 w-5 animate-ping bg-brand-red/40 md:h-7 md:w-7"
                      : "h-6 w-6 bg-white/20 md:h-8 md:w-8"
                  }`}
                />
                {/* Dot */}
                <span
                  className={`relative block h-3 w-3 rounded-full border-[1.5px] transition-transform md:h-4 md:w-4 md:border-2 ${
                    selectedRoom.id === room.id
                      ? "scale-125 border-white bg-brand-red"
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

          {/* Room detail panel — fixed height matching floor plan on desktop */}
          <div ref={detailRef} className="lg:flex lg:flex-col">
            <RoomDetail room={selectedRoom} onClose={() => setSelectedRoom(
              activeFloor === "ground" ? DEFAULT_GROUND_FLOOR_ROOM : DEFAULT_FIRST_FLOOR_ROOM
            )} />
          </div>
        </div>
      </div>
    </section>
  );
}
