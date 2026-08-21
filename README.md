# Trans Baronne Landing Page

Landing page mobile-first para a Trans Baronne, transportadora de cargas com base em Camaçari BA e atuação nacional.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- `next/font/local`

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Estrutura

```text
app/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  Navbar.tsx
  WhatsAppIcon.tsx
lib/
  constants.ts
public/
  images/
```

## Observações

- Apenas a imagem do hero usa carregamento prioritário.
- Logos e fontes locais ficam versionadas no repositório.
- Dados de SEO, JSON-LD, WhatsApp, FAQ e NAP ficam centralizados em `lib/constants.ts` e `app/layout.tsx`.
