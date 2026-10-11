# Thibaut Bruyneel — personal portfolio

A simple multi-page portfolio with a premium light glassmorphism style inspired by `personal_website`, without React or a build setup.

## Run locally
Open `index.html` directly, or use the **Live Server** extension in VS Code. No npm or Node.js is needed.

## Important files
- `index.html` — homepage
- `projects.html` — project overview
- `project-pylos.html`, `project-vhdl.html`, `project-iot.html`, `project-bicycle.html` — project stories with image headers
- `about.html`, `skills.html`, `contact.html` — separate pages
- `style.css` — all colors, layout, glass effects and responsive styling
- `script.js` — optional dark-mode toggle

**Light mode is always the default.**

The homepage photo currently loads from the public image in the `personal_website` repository, so you don't have to upload it again. Project photos are illustrative placeholders and may be replaced with real media later. Some project descriptions are examples: update them to match your work.

## Deploy
The GitHub Actions workflow at `.github/workflows/deploy.yml` deploys the static files directly. In Settings → Pages, set **Source = GitHub Actions**. No npm commands are required.

## Update
After changing the HTML or CSS, use `git add .`, `git commit -m "Update portfolio"`, and `git push`.
