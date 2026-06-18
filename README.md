# Hopewell STEM Academy — Website

The official website for **Hopewell STEM Academy**, Nakuru, Kenya, rebuilt as a modern, professional web application with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/                     # App Router pages
  page.tsx               # Home
  about/                 # About + directors, staff, history, policies
  discover/              # Discover HSA hub + 9 sub-pages
  academics/             # Academics overview + playgroup, primary, junior-high
  get-involved/          # Overview + gallery, calendar
  contact/               # Contact + application form + FAQ
components/              # Reusable UI + page-section components
  home/                  # Home page sections
lib/                     # Centralised content & config
  site.ts                # School info, contacts, socials, navigation
  content.ts             # Home page content (hero, news, events, etc.)
  images.ts              # All image paths → public/images/ only
  about.ts, team.ts      # About + people data
  gallery.ts             # Gallery items & categories
  icons.ts               # String -> icon mapping
public/images/           # Site images (see checklist below)
```

All page content is hardcoded in `lib/*` and the page components, so it is easy to edit without a CMS. A CMS can be layered on later if needed.

## Image Assets

All images come from **`public/images/`** only — no external URLs. Paths are defined in `lib/images.ts` and `lib/gallery.ts`.

### Main school photos (`public/images/`)

These are your primary photos used across heroes, home, and discover pages:

- `academics-playgroup.jpg`, `academics-primary.jpg`, `academics-junior.jpg`
- `discover-stem.jpg`, `discover-sports.jpg`, `discover-clubs.jpg`
- `discover-guidance.jpg`, `discover-transport.jpg`, `discover-computerlab.jpg`
- `discover-library.jpg`, `discover-events.jpg`, `discover-uniform.jpg`

### Other folders

- `public/images/gallery/` — gallery page (add more photos here, then list them in `lib/gallery.ts`)
- `public/images/team/` — staff & director headshots (referenced in `lib/team.ts`)
- `public/images/logo.png`, `partner-*.png` — branding & partner logos

To add a new photo to the gallery, drop it in `public/images/gallery/` and add an entry to `galleryItems` in `lib/gallery.ts`. To change which photo a page hero uses, edit `heroes` in `lib/images.ts`.

## Notes

- Contact form and newsletter form currently show a success message client-side.
  Wire them to an email service or API route to handle real submissions.
- The Contact page embeds Google Maps; the Calendar page embeds Google Calendar.

---

Developed for Hopewell STEM Academy — _One Team, One Purpose, Student Success._
