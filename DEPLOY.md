# Deployment Guide — GitHub + Vercel

This site has **no API keys, webhooks, or environment variables** required for deployment.

## Step 1: Push to GitHub

The repo is committed locally and configured to push to:

**https://github.com/roryarneil/OBaaC**

Run this in your terminal (GitHub auth required):

```bash
cd /Users/roryarneil/Desktop/OBaaC
git push -u origin main
```

If prompted, sign in with GitHub (HTTPS) or ensure your SSH key is added to GitHub.

Verify after push: https://github.com/roryarneil/OBaaC — you should see `src/`, `public/`, and no `.cursor/` or `.env` files.

## Step 2: Deploy on Vercel

1. Open [vercel.com/new](https://vercel.com/new)
2. Click **Import** next to `roryarneil/OBaaC`
3. Keep defaults:
   - Framework: **Next.js**
   - Build Command: `next build`
   - Install Command: `npm install`
4. **Environment Variables:** leave empty (none needed)
5. Click **Deploy**

Your preview URL will be something like `obaac.vercel.app`.

## Step 3: Add obaac.org Domain

In Vercel → your project → **Settings → Domains**:

1. Add `obaac.org`
2. Add `www.obaac.org` (set redirect: www → apex, or apex → www)
3. Copy the DNS records Vercel shows and add them at your domain registrar:

| Type | Name | Value (use Vercel's exact values) |
|------|------|-----------------------------------|
| A | `@` | `76.76.21.21` (typical — confirm in Vercel) |
| CNAME | `www` | `cname.vercel-dns.com` (typical — confirm in Vercel) |

4. Wait for DNS propagation (usually 5–60 minutes)
5. Vercel auto-provisions SSL

## Step 4: Verify Live Site

- [ ] https://obaac.org — main page (Strategy, Community, Trust)
- [ ] https://obaac.org/faq — FAQ accordion works
- [ ] Images and Coco Gothic font load
- [ ] No console errors about missing env vars
- [ ] GitHub repo has no secrets committed

## Security Checklist

- `.env*` — gitignored, not in repo
- `.cursor/` — gitignored, not in repo
- No `process.env` or API routes in source
- Future secrets: add only in Vercel **Environment Variables**, never in git

## Updating the Site

After the Vercel ↔ GitHub link is set up, every push to `main` auto-deploys:

```bash
git add .
git commit -m "Your change"
git push
```
