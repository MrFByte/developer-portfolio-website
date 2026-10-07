# Farhan Mahmood N: Portfolio Website

Personal portfolio of **Farhan Mahmood N**, a full-stack developer working with Python, Django, React, and event-driven microservices, with a focus on IoT systems and AI-powered tools.

Live site: [farhanmn.site](https://farhanmn.site)

A fast, static, dark-themed portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It showcases projects, technical writing, skills, and a contact form, and ships as plain HTML with zero client-side framework runtime.

## Features

- **Projects showcase** with category filters (Web, App, IoT, Other), live demo and source links, and featured badges
- **Technical blog section** linking to long-form articles on Medium covering algorithms, SQL, and data structures
- **Skills and journey** sections summarizing the stack and career timeline
- **Contact form** with name, email, optional phone and LinkedIn, and a message field
- **Live availability badge** ("Open to Work" / "Not available") updated without a redeploy
- **SEO basics included**: canonical URL, Open Graph and Twitter card tags, `schema.org` Person JSON-LD, sitemap, and `robots.txt`
- **Accessible**: skip-to-content link, semantic landmarks, `aria-live` status messages, labelled form fields
- **Responsive** layout from phone to widescreen, with optimized images (WebP)

## Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| Framework      | Astro 7 (static output)                      |
| Styling        | Tailwind CSS 4 via `@tailwindcss/vite`       |
| Fonts          | Archivo Black, Inter (Google Fonts)          |
| SEO            | `@astrojs/sitemap`, JSON-LD, Open Graph      |
| Runtime        | Node.js 22.19 or newer                       |

## Project Structure

```text
portfolio-astro-aug-2026/
├── public/                  Static assets served as-is (favicon, robots.txt)
├── src/
│   ├── assets/              Optimized images (avatar)
│   ├── components/          Page sections: Hero, Nav, Projects, Blog, Skills, Journey, Contact
│   ├── data/
│   │   ├── projects.ts      Portfolio projects (typed `Project` list)
│   │   └── blog.ts          Blog post links and summaries (typed `BlogPost` list)
│   ├── layouts/Layout.astro SEO head, JSON-LD, availability loader
│   ├── pages/index.astro    Single-page entry point
│   ├── styles/global.css    Tailwind entry and theme tokens
│   └── config.ts            External status URL (GitHub Gist)
├── astro.config.mjs         Site URL, sitemap and Tailwind integration
└── package.json
```

## Getting Started

Requirements: Node.js `>=22.19.0` and npm.

```sh
# Install dependencies
npm install

# Start the dev server at http://localhost:4321
npm run dev

# Build the production site into ./dist
npm run build

# Preview the production build locally
npm run preview
```

## Updating Content

- **Projects**: edit the `projects` array in [`src/data/projects.ts`](src/data/projects.ts). Each entry has `id`, `title`, `description`, `image`, `tags`, `category` (`web`, `app`, `iot`, or `other`), and optional `demoUrl`, `codeUrl`, and `featured`.
- **Blog posts**: edit the `blogPosts` array in [`src/data/blog.ts`](src/data/blog.ts). Each entry has `id`, `title`, `url`, `category`, `date`, `readTime`, and `summary`.
- **Availability status**: update the JSON file in the GitHub Gist referenced by [`src/config.ts`](src/config.ts). Changes appear on the live site without a rebuild:

  ```json
  { "openToWork": true, "message": "Open to Work" }
  ```

- **Contact form**: submissions are sent as JSON (`name`, `email`, `phone`, `linkedin`, `message`) to the endpoint configured in [`src/components/ContactSection.astro`](src/components/ContactSection.astro).

## Deployment

The site is built as static files (`npm run build` outputs to `dist/`) and can be deployed to any static host such as Vercel, Netlify, or Cloudflare Pages. Set the production URL in `site` inside [`astro.config.mjs`](astro.config.mjs) so the canonical links, Open Graph URLs, and sitemap are correct.

## SEO and Metadata

- Unique `<title>` and meta description per page, set in [`Layout.astro`](src/layouts/Layout.astro)
- Canonical URL, Open Graph, and Twitter card tags
- `Person` JSON-LD with name, job title, `sameAs` profile links, and `knowsAbout` skills
- `sitemap-index.xml` generated at build time and referenced from [`public/robots.txt`](public/robots.txt)

## Contact

- Email: [fmahmoodn@gmail.com](mailto:fmahmoodn@gmail.com)
- LinkedIn: [linkedin.com/in/farhan-mahmood-n](https://www.linkedin.com/in/farhan-mahmood-n/)
- GitHub: [github.com/MrLionByte](https://github.com/MrLionByte)
