# Thibaut Bruyneel — Portfolio

Modern, responsive portfolio made with **plain HTML, CSS and JavaScript**. No framework, no build pipeline, no dependencies.

## View locally
Open `index.html` with VS Code Live Server.

## Files
- `index.html` — homepage, all text and portfolio cards
- `project-pylos.html`, `project-vhdl.html`, `project-iot.html`, `project-bicycle.html` — separate project pages
- `style.css` — all site styling and design variables
- `script.js` — optional theme toggle
- `assets/profile.jpg` — your portrait photo; **you need to add this image manually** if it is not in the repository

## Photo
Create a folder named `assets` in the repository and place your photo there as `profile.jpg`. The homepage is already wired to `assets/profile.jpg`. If missing, a clearly marked placeholder appears.

## Editing
Update your text directly in HTML. The color palette is at the top of `style.css`. To add a new project, copy an existing project page and its linked card in `index.html`. The project illustrations are original HTML/CSS graphics, so they load quickly without third-party services.

**Light mode is always the default when a page opens.** Dark mode can be selected using the moon icon, but is not saved between pages.

Replace `hello@example.com` in `index.html` with your real email, and add your own screenshots and results to the project detail pages. The descriptions are starting points to verify and personalize.

## Publishing
Push changes to `main`. GitHub Pages can publish this repository from the main branch root; the live deployment typically takes a few minutes.
