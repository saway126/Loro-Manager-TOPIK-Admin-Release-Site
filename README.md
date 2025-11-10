## Loro Manager TOPIK Admin Release Site (Next.js 14)

Migrated from a CSR React app to Next.js 14 (App Router, TypeScript, TailwindCSS).

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS (PostCSS)
- ESLint + Prettier
- Absolute imports via `@/*`

### Project Structure
- `app/`: App Router routes and UI
- `app/_components/`: Header, Footer, ThemeProvider, StoreBadges
- `public/data/`: Static JSON (`releases.json`, `faq.json`)
- `components/Icons.tsx`: Shared icons

### Scripts
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Create `.env.local` from `env.example`:
   ```bash
   cp env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`

### Routes
- `/` — Landing
- `/download` — Reads `public/data/releases.json`, shows mobile store buttons and desktop downloads
- `/faq` — Reads `public/data/faq.json`, accordion list
- `/support` — Inquiry form (name, email, title, message)
- `/api/support` (POST) — Validates input and returns `{ ok: true }`

### Data
- All static data is served from `public/data/...`
- Fetch with `fetch('/data/releases.json')` or `fetch('/data/faq.json')`

### Migration Notes
- Migrated to Next.js 14 App Router with TypeScript and TailwindCSS.
- Old CSR assets were removed or ignored. TypeScript `include` now targets only `app/**` and `components/**`.
- Tailwind uses PostCSS with class-based dark mode; theme toggling via `next-themes`.
- Metadata is loaded from `metadata.json` and applied in `app/layout.tsx`.
- Absolute import alias `@/*` configured in `tsconfig.json`.
- ESLint and Prettier configurations added for consistent code quality.

### Deploy
Standard Next.js deployment targets are supported (Vercel, Node server).

