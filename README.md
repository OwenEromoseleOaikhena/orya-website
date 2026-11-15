# ORYA landing website

A responsive React + Vite landing page for ORYA with a clean, minimal visual direction.

## Included
- Responsive desktop and mobile layout
- Navigation with mobile menu
- Landing page sections: hero, concept, capabilities, approach, and get-started
- Accessible labels, focus-friendly native controls, reduced-motion support
- SEO title and description, Open Graph metadata, favicon
- No invented claims about capabilities; the page clearly states ORYA is in development

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal.

## Production build
```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Before launch
1. Connect the signup form to a real email-list service or remove it. At present it is a front-end preview only and does not send or store addresses.
2. Add final privacy policy and terms pages if the site collects data or offers a live service.
3. Confirm the final public domain and configure DNS/HTTPS at your host.
4. Replace any draft copy that no longer matches ORYA's actual available features.
5. Test the production build on mobile and desktop and connect analytics only if desired.

## Deploy
This is a standard Vite project and can be deployed to Vercel, Netlify, Cloudflare Pages, or another static host. Build command: `npm run build`; output directory: `dist/`.

ORYA is the only public AI brand presented in this site. No parent architecture or internal implementation details are disclosed.