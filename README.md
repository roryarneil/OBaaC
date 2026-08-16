# OBaaC.org

Open Banking as a Community — a grassroots movement turning consumer financial data into collective climate power.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the main page and [http://localhost:3000/faq](http://localhost:3000/faq) for the FAQ.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main page — Strategy (Out-In model), Community pillars, Trust/Plaid |
| `/faq` | Comprehensive FAQ with accordion sections |

## Assets

| Asset | Path |
|-------|------|
| Coco Gothic Pro Bold | `public/fonts/Coco-Gothic-Pro-Bold.woff2` |
| OBaaC Out-In Venn diagram | `public/images/obaac-out-in-model.png` |
| Footprint illustration | `public/images/footprint-illustration.png` |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Deployment

See [DEPLOY.md](DEPLOY.md) for GitHub push, Vercel setup, and `obaac.org` DNS instructions. No environment variables are required.


```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
