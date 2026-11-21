# Olenna Oss Creative — website starter

A responsive static storefront starter for **olennaosscreative.com**. It includes a homepage, sample product gallery, about section, and contact form.

## Files
- `index.html` — page content and structure
- `styles.css` — responsive styling and visual design
- `script.js` — mobile navigation and contact form behavior

## Before publishing
1. Replace the sample product concepts in `index.html` with real kit names, descriptions, photographs, and prices.
2. Add your business email to `CONTACT_EMAIL` in `script.js`. The current form prepares an email using the visitor's email app; it does not send messages to a server.
3. Update the About section with your real brand story.
4. Check all wording, contact details, and product information.

## Put the website on GitHub
1. Sign in at https://github.com.
2. Create a new **public** repository named `olenna-oss-creative` (a public repo is easiest for this free static-hosting setup).
3. Upload `index.html`, `styles.css`, `script.js`, and this README. Keep the files in the repository root (not inside another folder).
4. Commit the changes.

You can upload files using **Add file → Upload files** on the repository page.

## Publish with Cloudflare Pages
1. Create/sign in to a Cloudflare account at https://dash.cloudflare.com.
2. Open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your GitHub account and the `olenna-oss-creative` repository.
4. For a plain HTML site, use these settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` (or `.` if the dashboard requests a relative directory)
5. Deploy. Cloudflare will provide a temporary `*.pages.dev` address.

## Connect your domain
1. In Cloudflare Pages, open the project → **Custom domains** → **Set up a custom domain**.
2. Add `olennaosscreative.com` and `www.olennaosscreative.com` as appropriate.
3. Follow Cloudflare's instructions. If Cloudflare asks you to move DNS management to Cloudflare, it will show the nameservers to enter at your domain registrar.
4. Choose one preferred version (usually `www.olennaosscreative.com`) and set the other to redirect to it if desired.

Do not change nameservers or delete existing DNS records until you understand whether they are used for email or other services. If you already use domain-based email, preserve its MX and related records.

## Important limitations
This is a static website starter, not a complete ecommerce checkout. The product cards are presentation-only. To accept orders and payments, connect an ecommerce platform or payment-enabled checkout service later. The contact form currently opens the visitor's email application after you configure the business email; it does not store submissions online.
