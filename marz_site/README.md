
# Marzia Podda Psychotherapy Website

A premium, modern, and high-trust landing page built for Marzia Podda, Psychodynamic Psychotherapist.

## Technical Details
- **Framework**: React + Vite (single-page site with anchor navigation and a lightweight privacy view)
- **Styling**: Tailwind CSS (ivory, petrol teal, hot pink and aquamarine palette)
- **Typography**: Caveat (handwritten headings matching the blue story panel), Inter (body text)
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

## Contact enquiries

The form opens the visitor's default email app with Marzia's address and their enquiry prefilled. The visitor reviews the draft and presses Send. No email integration, server endpoint or credentials are required. See [EMAIL_SETUP.md](./EMAIL_SETUP.md).

Run `npm test`, `npm run typecheck` and `npm run build` to validate the site.

## Held design reference

`public/held-mockup-original.jpg` is the unchanged 698 × 1536 image supplied by
Marzia (`Desktop/Marzia/4808DED1-A74A-45D8-A458-F503EA443748.jpeg`). Desktop uses
that exact composition, with responsive link regions over all four booking
buttons and the navigation. Semantic headings and copy are available to screen
readers; keyboard focus is visible on every link. This deliberately retains the
supplied raster lettering and artwork instead of substituting fonts or icons.
Its sharpness is limited by the supplied image resolution.

At widths of 700px and below, the content reflows into a readable single-column
layout using the original artwork, headings, icons and button crops. No separate
mobile mockup was supplied. Forced-colour mode uses the readable content layout.
The original QR poster is not modified. All booking links use the full canonical
contact URL.


## Main-site brand brief

The supplemental brief is applied as an evolution of the existing section
structure: ivory/petrol-teal alternation, pink primary actions, aqua accents,
a subtle Therapy with Marz signature, five consistent line-icon motifs, a
warmer About introduction and three professional-standards cards. The formal
Marzia Podda identity, qualifications, practical information, crisis guidance
and existing section anchors remain. The campaign artwork stays on `/held`;
the supplemental brief's earlier `/rope` name does not replace the QR route.


## Review status and remaining acceptance

The main homepage follows the supplemental brief's section order: hero, five
support areas, psychodynamic approach, affirming space, About and credentials,
London/online practical information, and the final invitation/contact form.
The supplied `caac.jpeg` portrait is preserved as `public/marzia-portrait.jpeg`.
`/held` is not linked from the main navigation. Its four booking links keep the
requested production contact destination even on preview deployments.

The desktop campaign composition is the original raster reference, not a
reconstruction of its lettering. Mobile is an adaptation; exact mobile fidelity
cannot be claimed without a separate mobile reference. Ask Marzia to review it.
Enquiries open in the visitor's configured email app. The website cannot confirm that the visitor sends the draft or that it reaches the inbox.

The September 28 review removed unrelated obfuscated remote-code execution from
`postcss.config.js`. It should contain only the Tailwind and Autoprefixer plugin
configuration. Credentials exposed to earlier builds should be rotated by their
owners, and repository/deployment access reviewed before production release.
