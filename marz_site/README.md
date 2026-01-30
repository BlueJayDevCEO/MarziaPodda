
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
   - `A` record: Host `@` â†’ `76.76.21.21`
   - `CNAME`: Host `www` â†’ `cname.vercel-dns.com`

   âš ï¸ If your domain is using email (MX/TXT records), do **not** delete those recordsâ€”only add the web records.

## Content Customization
- **Fees**: Update the session fee placeholder in `components/Fees.tsx`.
- **CV**: Upload your CV file to the public folder and update the link in `components/About.tsx`.
- **Privacy Policy**: Fill in the data retention period placeholder in `components/Privacy.tsx`.

## Disclaimer
This project is for informational purposes. If you are a practitioner, ensure the final content complies with your professional governing body's (BPC/UKCP/BACP) advertising guidelines.

