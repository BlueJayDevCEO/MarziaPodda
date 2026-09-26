
# Marzia Podda Psychotherapy Website

A premium, modern, and high-trust landing page built for Marzia Podda, Psychodynamic Psychotherapist.

## Technical Details
- **Framework**: React + Vite (single-page site with anchor navigation and a lightweight privacy view)
- **Styling**: Tailwind CSS (calm teal / green-blue palette)
- **Typography**: Cormorant Garamond (Serif), Inter (Sans-serif)
- **Performance**: Lazy loading images, lightweight structure
- **Accessibility**: Semantic HTML, high contrast, mobile-responsive

## Setup Instructions

1. **Local Development**:
   - Clone the repository.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the local development server.

2. **Deployment (Vercel)**:
   - Connect your repository to Vercel.
   - Set the build command to `npm run build`.
   - Set the output directory to `dist`.
   - Click "Deploy".

3. **Connecting a Domain (Squarespace/Other)**:
   - In Vercel Project Settings, go to **Domains**.
   - Add your domain (e.g., `poddapsychotherapy.com`).
   - Update your DNS settings on Squarespace as instructed by Vercel.

   Typical DNS records (Vercel will confirm the exact values):
   - `A` record: Host `@` → `76.76.21.21`
   - `CNAME`: Host `www` → `cname.vercel-dns.com`

   ⚠️ If your domain is using email (MX/TXT records), do **not** delete those records—only add the web records.

## Contact email deployment

Set the Vercel project root directory to `marz_site`. The `/api/contact`
Node.js function sends via the Resend HTTP API. In Vercel environment settings,
configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a sender on a Resend-verified
domain). Optionally set `CONTACT_TO_EMAIL=poddapsychotherapy@gmail.com`; other
recipients are rejected to avoid redirecting private enquiries. Redeploy after
changing environment variables. Keep these variables server-only, without a
`VITE_` prefix. Do not commit real credentials. `.env.example` contains names only.

The form sends name, email, preferred format and message, with the visitor email
as Reply-To. It resets only after provider acceptance; provider acceptance does
not itself prove inbox delivery. A honeypot rejects automated submissions.
Failures retain all entered details. The direct email link remains available.

`npm test` checks validation, delivery payload and provider failure handling with
a mocked mail service. `npm run build` builds the frontend. Vite alone does not
run Vercel functions; use `vercel dev` for a full local integration or a Vercel
preview deployment with the server environment configured.

Deployment acceptance: open and refresh `/held` at desktop and mobile widths;
check every pink booking link targets `https://www.poddapsychotherapy.com/#contact`;
submit a clearly marked test enquiry, confirm it arrives in Marzia's inbox and
check Reply-To and all four fields. Test a provider failure in preview and verify
the error and retained form values. Keep the QR destination at
`https://poddapsychotherapy.com/held`.

## Content Customization
- **Fees**: Update the session fee placeholder in `components/Fees.tsx`.
- **CV**: Upload your CV file to the public folder and update the link in `components/About.tsx`.
- **Testimonials**: Replace placeholder text in `components/Specialisms.tsx` with compliant clinical feedback.
- **Privacy Policy**: Fill in the data retention period placeholder in `components/Privacy.tsx`.

## Disclaimer
This project is for informational purposes. If you are a practitioner, ensure the final content complies with your professional governing body's (BPC/UKCP/BACP) advertising guidelines.
