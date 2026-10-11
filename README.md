# Thibaut Bruyneel — Editorial Portfolio

An editorial-style portfolio using **plain HTML, CSS and a little JavaScript**.

## Open in VS Code
1. Open the `portfolio_thibaut` folder in VS Code.
2. Pull the newest code: `git pull origin main`.
3. Open `index.html` with the **Live Server** extension.

There is no `npm install` or `npm run dev`.

## Customize
- `index.html` — homepage
- `projects.html` — project overview
- `project-*.html` — separate project detail pages
- `about.html`, `skills.html`, `contact.html` — additional pages
- `style.css` — complete visual design
- `script.js` — tiny current-year helper

The homepage currently loads your portrait from the public `personal_website` repository. Example project photos are loaded from Unsplash and should be replaced with authentic media as you develop the site.

## Publish
The GitHub Actions workflow deploys the static site. In repository Settings → Pages choose **GitHub Actions** as the source.
