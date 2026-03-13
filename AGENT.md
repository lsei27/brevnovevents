# Břevnov Events – Agent Context & Architecture Guide

Tento dokument slouží jako hlavní referenční příručka pro AI agenty a vývojáře pracující na projektu **Břevnovský klášter Events** (brevnovevents). Popisuje architekturu, technologie, adresářovou strukturu a klíčové procesy.

## 1. Technologický stack
- **Framework:** Next.js 15 (App Router)
- **Knihovna:** React 19
- **Stylování:** Tailwind CSS v4 (prostřednictvím PostCSS pluginů)
- **Jazyk:** TypeScript (strict mode)
- **Validace dat:** Zod (`zod`)
- **Komponenty / UI:** Radix UI vzory (pokud jsou aplikovány), vlastní Tailwind shadery.
- **Karusel/Slidery:** Embla Carousel (`embla-carousel-react`, `embla-carousel-autoplay`)
- **Nasazení:** Vercel

## 2. Architektura a struktura projektu
Projekt striktně následuje konvence Next.js App Routeru (`src/app`).

```text
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Hlavička, patička, globální metadata a fonty
│   ├── page.tsx          # Homepage sestavená z bloků (sections)
│   ├── actions.ts        # Server Actions (zpracování formulářů)
│   ├── sitemap.ts        # Generování sitemapy
│   ├── globals.css       # Globální CSS (Tailwind a CSS proměnné)
│   ├── firemni-eventy/   # Podstránka Firemní eventy (bude/je implementována)
│   └── svatba-v-klastere/# Podstránka Svatby (bude/je implementována)
├── components/           # UI komponenty
│   ├── forms/            # Klientské formuláře (InquiryForm.tsx, WeddingForm.tsx)
│   ├── layout/           # Header.tsx, Footer.tsx
│   ├── sections/         # Stavební bloky stránek (Hero, USP, Pricing, atd.)
│   └── ui/               # Znovupoužitelné atomické komponenty (Button, ImageCarousel)
├── lib/                  # Pomocné funkce a definice
│   ├── schema.ts         # Generování Schema.org JSON-LD pro SEO
│   └── validation.ts     # Zod schémata, options pro leaky formů, struktury dat
public/                   # Statické soubory, obrázky, technické ridery (PDF)
```

## 3. Klíčové procesy a data flow

### 3.1. Zpracování formulářů (Server Actions)
Odesílací formuláře napříč webem nevyužívají klasické API routy. Pracují pomocí **React Server Actions** definovaných ve `src/app/actions.ts`.
- **Formuláře:** `InquiryForm` (B2B formulář), `WeddingForm` (Svatby). Formuláře drží interní state pomocí `useActionState`.
- **Validace:** Provádí se server-side i client-side přes knihovnu **Zod**. Zod definice jsou ve `src/lib/validation.ts` a `src/lib/wedding-validation.ts`.
- **Honeypot:** Většina formulářů obsahuje skryté (skryté atributem `sr-only`) pole `website`. Pokud je vyplněno, server skrytě předstírá úspěšné odeslání (ochrana proti hloupým botům).

### 3.2. E-maily a integrace
Ze server-side akcí se e-maily nebo webhooky odesílají dle nastavení prostředí (`EMAIL_MODE`). Standardní implementace komunikuje s API Resend nebo napřímo pálí Webhooky například do n8n / Make.
Proměnné prostředí zahrnují:
- `RESEND_API_KEY` a `RESEND_FROM_EMAIL` (pro e-maily do cateringové agentury i confirmation maily klientům).
- `WEBHOOK_URL` (pro odeslání dat do CRM).

## 4. UI / UX Specifika
- **Design:** Tmavý ("dark") premium vzhled. Background většinou `#090909` (brand-black), doplňkové sekce v jemně světlejší černé (`brand-black-alt`).
- **Barvy:** 
  - Firemní eventy / Obecný web: Akcentní barva je červená (`bg-brand-red`).
  - Svatby: Akcentní barva je růžová / Rose Gold (`bg-brand-pink`). Tlačítka dostávají variantu `variant="pink"`.
- **Typografie:** Font je pravděpodobně `Geist` optimalizovaný Next.js (popsáno v README) a případně `Satoshi` navěšený na CSS proměnnou `--font-sans`.
- **Odezvy:** Interaktivní věci (`Hover` state, navigace, formuláře) používají nativní Tailwind transition třídy (např. transparentnost hlavičky je při scrollování řešena hookem `isScrolled` v `Header.tsx`).
- **Responzivita:** Layout je postaven *Mobile-First*. Tabulky (např. Ceníky, Kapacity) jsou optimalizovány přes CSS třídy a nesmí na mobilu tvořit horizontální posuvník (`overflow-x-scroll`). Písmo je úměrně zmenšené a tabulky upraveny (`whitespace-nowrap` byl záměrně odstraňen).
- **Provedení sliderů:** Pagination u karuselů se vykresluje jako tečky (`rounded-full`), obalené v klikacím kontejneru se stylizací proti vizuální deformaci pod vlivem minimálních dotykových výšek (min-height přes media pointer: coarse pravidlo).

## 5. Pravidla pro další vývoj
1. **Nenarušit existující Server Actions architekturu:** Nepřidávat API routy tam, kde postačí Server Akce.
2. **Kódový styl TypeScript a Tailwind:** Používat striktní typování propů. Pro Tailwind nevyužívat komplexní `@apply`, snažit se zachovat utility třídy přímo v JSX as long as possible.
3. **Validovat všechny inputy:** Při úpravě formulářů VŽDY měnit i Zod schema (`validation.ts` a typy dat).
4. **Zarovnání a přístupnost:** Kontrolovat kontrast v dark módu, dodržovat `text-left` pro lepší čitelnost odstavců (viz minulé refaktoringy Hero sekcí).
5. **SEO Context:** S každou novou stránkou upravit `sitemap.ts` (`src/app/sitemap.ts`) a implementovat správné strukturované `Schema.org` definice (viz `src/lib/schema.ts`). Mnoho stávající dokumentace a FAQ se do stránky propisuje jako JSON-LD.
