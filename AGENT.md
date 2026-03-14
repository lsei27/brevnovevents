# Břevnov Events – Agent Context & Architecture Guide

Referenční příručka pro AI agenty a vývojáře pracující na projektu **Břevnovský klášter Events** (brevnovevents).

## 1. Technologický stack
- **Framework:** Next.js 16 (App Router)
- **Knihovna:** React 19
- **Stylování:** Tailwind CSS v4 (prostřednictvím PostCSS pluginů)
- **Jazyk:** TypeScript (strict mode)
- **Validace dat:** Zod v4
- **Karusel/Slidery:** Embla Carousel (`embla-carousel-react`, `embla-carousel-autoplay`)
- **Nasazení:** Vercel (auto-deploy z `main` branch)

## 2. Struktura projektu

```text
src/
├── app/
│   ├── layout.tsx           # Root layout – Satoshi font, Header, Footer, Schema.org JSON-LD
│   ├── page.tsx             # Homepage (10 sekcí)
│   ├── actions.ts           # Server Actions (InquiryForm + WeddingForm)
│   ├── sitemap.ts           # Sitemap generátor
│   ├── globals.css          # Tailwind + CSS proměnné
│   ├── gdpr/page.tsx        # GDPR stránka
│   ├── firemni-eventy/page.tsx   # B2B stránka (13 sekcí)
│   └── svatba-v-klastere/page.tsx # Svatby (9 sekcí)
├── components/
│   ├── forms/               # InquiryForm.tsx (B2B), WeddingForm.tsx (svatby)
│   ├── layout/              # Header.tsx, Footer.tsx
│   ├── sections/            # Sdílené sekce (Hero, USP, SocialProof, Location, Contact, PricingAnchors, ...)
│   │   ├── firemni/         # Sekce specifické pro /firemni-eventy
│   │   └── svatba/          # Sekce specifické pro /svatba-v-klastere
│   └── ui/                  # Button, ImageCarousel (s lightbox), YouTubeEmbed
├── lib/
│   ├── schema.ts            # Schema.org JSON-LD definice
│   ├── validation.ts        # Zod schéma pro InquiryForm
│   └── wedding-validation.ts # Zod schéma pro WeddingForm
public/
├── fonts/                   # Satoshi (Light, Regular, Bold, Black)
├── images/
│   ├── hero/                # Hero obrázky
│   ├── prostory/            # Fotky prostor (sály, salonky, nádvoří, pivovar, krypta)
│   ├── reference/           # Reference / case studies (Speedchain, Evropa 2)
│   └── svatby/              # Svatební fotografie
├── downloads/               # PDF ceník + technický rider
└── robots.txt
```

## 3. Klíčové procesy

### 3.1. Formuláře (Server Actions)
- Zpracování přes **React Server Actions** (`src/app/actions.ts`), ne API routy.
- Dva formuláře: `InquiryForm` (B2B) a `WeddingForm` (svatby) s `useActionState`.
- Server-side + client-side validace přes **Zod**.
- **Honeypot:** Skryté pole `website` – pokud vyplněno, server předstírá úspěch.

### 3.2. E-maily a integrace
- `EMAIL_MODE=webhook` (výchozí) → POST na `WEBHOOK_URL` (n8n/Make)
- `EMAIL_MODE=direct` → Resend API (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`)
- Notifikace na `brevnov@incatering.cz` + potvrzovací e-mail klientovi.

### 3.3. Cenové balíčky
Ceny jsou kalkulované z PPTX nabídek (složka `Context_project/Nabídky_balíčky/`).
Dvě kategorie prostor:
- **Reprezentační prostory · 1. patro** – pronájem od 65 000 Kč (Tereziánský sál)
- **Klášterní prostory · přízemí** – pronájem od 30 000 Kč (Sala Terrena)

Balíčky zobrazené jako Embla carousel (5 karet):
| Balíček | Reprez. (100 os.) | Reprez. (200 os.) | Klášt. (100 os.) | Klášt. (200 os.) |
|---------|-------------------|-------------------|-------------------|-------------------|
| Konference | 210 000 | 310 000 | 175 000 | 275 000 |
| Gala večeře | 265 000 | 440 000 | – | – |
| Firemní večírek | 235 000 | 380 000 | 200 000 | 345 000 |

Doprovodné programy (Upsell sekce): Pivovar od 250 Kč/os, Krypta od 180 Kč/os, Stůl Marie Terezie od 110 000 Kč. 
Další na vyžádání: Tržiště z královského dvora (od 50 000 Kč), Večer s mnichy (od 50 000 Kč), Domácí zabíjačka (od 20 000 Kč), Koncert barokního kvarteta (od 25 000 Kč), Světelné efekty (od 40 000 Kč), Květinové dekorace (od 20 000 Kč).

## 4. UI / UX

- **Design:** Tmavý premium vzhled. Background `#090909` (brand-black), alternativní sekce `brand-black-alt`.
- **Barvy:** Firemní = červená (`brand-red`), Svatby = růžová (`brand-pink`, `variant="pink"`).
- **Typografie:** Font Satoshi (`--font-satoshi`), Light/Regular/Bold/Black.
- **Hlavička:** Průhledná při načtení (`bg-brand-black/10`), ztmavne při scrollování na 95 %.
- **Responzivita:** Mobile-First. Tabulky bez horizontálního scrollu na mobilu.
- **Carousel pattern:** Embla Carousel s loop, dots pagination a šipkami pod obsahem. Používáno pro: PricingAnchors, Packages, SocialProof, ImageCarousel (SpacesShowcase, SpacesGallery).
- **ImageCarousel lightbox:** Klik na obrázek otevře fullscreen overlay s navigací (šipky, Escape, prev/next).
- **Featured badge:** U karty "Nejoblíbenější" je badge jako overlay v pravém horním rohu obrázku (ne v body karty), aby nadpisy karet zůstaly zarovnané.
- **Hero H1 copy:** Krátké, benefit-driven nadpisy zaměřené na zákazníka (ne popisné SEO texty). Font size `text-5xl` na desktopu.

## 5. Pravidla pro další vývoj

1. **Server Actions architektura:** Nepřidávat API routy tam, kde stačí Server Actions.
2. **TypeScript + Tailwind:** Striktní typování propů. Utility třídy přímo v JSX, ne `@apply`.
3. **Validace:** Při změně formulářů VŽDY aktualizovat Zod schéma (`validation.ts` / `wedding-validation.ts`).
4. **SEO:** S každou novou stránkou upravit `sitemap.ts` a přidat Schema.org JSON-LD (`lib/schema.ts`).
5. **Obrázky:** Formát WebP, ukládat do příslušné podsložky v `public/images/`. Nepoužívané obrázky mazat.
6. **Carousel:** Pro seznamy 4+ položek používat Embla carousel se stávajícím patternem (šipky pod obsahem + dots).
7. **Přístupnost:** Kontrolovat kontrast v dark módu, `text-left` pro odstavce, skip-link na `#hlavni-obsah`.

## 6. Sledování a analytika (Cookies)

Web implementuje **Google Consent Mode v2** a custom `<CookieConsent />` banner (`src/components/ui/CookieConsent.tsx`).
- Vložen přímo v `layout.tsx` pod hlavičkou jako globální script vracející defaultní signál `denied`.
- Tlačítko pro vyvolání nastavení je plovoucí, vizuálně fixované vpravo dole, když je banner skrytý.
- Při přijetí nebo zamítnutí se stav uloží do `localStorage` (pod klíčem `cookie_consent`) a do datové vrstvy se odešle signál `update` (např. `analytics_storage: 'granted'`).
- Web je tak plně připraven na napojení s **Google Tag Manager** (v budoucnu k vložení do hlavičky layoutu pod consent-init script).
