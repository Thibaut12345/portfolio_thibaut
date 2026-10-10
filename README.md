# Thibaut Bruyneel — portfolio_thibaut

This portfolio now uses the design and React/Vite structure from my own `personal_website` reference repository, with **light mode as the default**.

## Run in VS Code

Install Node.js (18+), then from the project root run:

```bash
npm ci
npm run dev
```

Open the localhost URL shown by Vite. Unlike the older HTML version, this site requires a Vite build to deploy.

## Edit the website

- `src/App.tsx` — pages and navigation
- `src/index.css` — styles, colors, glass effects and animations
- `src/data/projects.ts` — projects, images and project details
- `src/data/blog.ts` — blog articles
- `src/data/timeline.ts` — CV timeline
- `src/data/personal.ts` — contact and personal links
- `public/` — local images you add later

The profile image currently loads from the public image in my `personal_website` repository. This avoids the missing-photo problem. Copy it locally to `public/profile.png` and change `photoPath` in `src/App.tsx` if you prefer a standalone setup.

Project hero images are examples; replace them with actual photos/videos when available.

## GitHub Pages — important change

The old site was deployed directly from the `main` branch. **That no longer works with Vite source files.**

1. Open repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The committed workflow `.github/workflows/deploy.yml` builds and deploys the site after a push.
4. Inspect the result in **Actions**; the live site will be `https://thibaut12345.github.io/portfolio_thibaut/`.

The app uses hash-based navigation (`#/projecten`) to work reliably on GitHub Pages. Vite's `base` points to `/portfolio_thibaut/`.

## Notes

The CV page shows the timeline; the PDF download is deliberately not linked until you add a real PDF. The contact form opens the visitor's mail application, rather than pretending an email was sent. Check the factual accuracy of the example project descriptions before publishing.

The previous standalone HTML files have been left in the repository for reference, but React/Vite controls the new homepage.
