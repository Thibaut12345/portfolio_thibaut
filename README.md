# Thibaut Bruyneel — Portfolio

A simple personal portfolio made with **HTML, CSS and JavaScript**. No frameworks, build tools or dependencies.

## Run locally

Open `index.html` in your browser. That's it!

For automatic refreshing while editing, you can use the **Live Server** extension in VS Code.

## Structure

- `index.html` — all text, sections and projects
- `style.css` — layout, colors, typography and responsive design
- `script.js` — dark/light mode and current year

## Customize

1. **Email:** replace `hello@example.com` in `index.html` with your actual contact address.
2. **Projects:** duplicate an `<article class="project-card">` in the Projects section and change its content.
3. **Colors:** adjust the CSS variables at the top of `style.css`.
4. **Links:** add your LinkedIn, real project URLs and optionally a CV.
5. **Images:** later add an `images/` folder and replace the CSS illustrations with your project photos.

This is intentionally a small starting point rather than a complicated application. The project descriptions are examples: check and adjust them before publishing.

## Publish

The easiest way is **GitHub Pages**: in your repository go to **Settings → Pages**, then select **Deploy from a branch**, branch **main** and folder **/(root)**.

GitHub Pages will serve the static site directly from `index.html`.

## Theme

The theme button saves a user's choice in localStorage. Otherwise, the website follows the visitor's light/dark system preference.
