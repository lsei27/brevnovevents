# Project Summary: Břevnov Events Web

## Overview
A modern, multilingual (CS/EN) landing page for Břevnov Monastery event venues, built with Next.js 15, React, and Vanilla CSS. The site features interactive elements, localization, and SEO optimization.

## Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Vanilla CSS with custom tokens
- **Localization**: Custom dictionary-based system (`src/lib/dictionaries`)
- **Interactive Elements**: Embla Carousel, Framer Motion (implied by animations), Custom SVG Floor Plan
- **Deployment**: Optimized for performance with `.webp` images and semantic HTML

## Key Features
- **Interactive Floor Plan**: Responsive module on both `/firemni-eventy` (CZ) and `/en/corporate-events` (EN) with synchronized floor switching, hotspot pulsing, and persistent room details. CZ uses Czech map images and labels; EN uses English map images and labels.
- **Event Banner**: Locale-aware premium section ("Genius loci since 993") on both CZ and EN corporate event pages.
- **Localization**: Seamless switching between Czech and English with full content parity.
- **Dynamic Hero**: Configurable CTAs per language (both CS and EN link to interactive floor plan).
- **SEO Ready**: Dynamic `sitemap.ts`, `robots.txt`, and documented `llms.txt`.

## Current Status (as of Mar 27, 2026)
- **Homepage**: Hero CTA updated — both CS ("Plánek prostoru") and EN ("Venue floor plan") link to interactive floor plan.
- **Corporate Events**: Interactive floor plan available in both CZ and EN.
    - **1st Floor Update**: Revised floor plan images implemented for both CS (`mapa_BK_rev.webp`) and EN (`mapa_BK_EN_rev.webp`).
    - **Hotspot Removal**: Removed "Venkovní prostor před Sala Terrenou" (Terrace at Sala Terrena) hotspot and detail card from the 1st floor to align with venue changes.
    - **EN Enhancements**: Event banner section added; SpacesGallery removed to avoid duplication.
- **Metadata**: Verified `robots.txt`, `sitemap.ts`, and `llms.txt` correctly reference the current interactive floor plan structure.
- **Performance**: High, using modern image formats and efficient React patterns.

## Repository Info
- **GitHub**: `lsei27/brevnovevents`
- **Main Branch**: `main`
- **Owner**: Lukas Seifert
