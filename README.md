# Portfolio — Thibaut Bruyneel

A simple, responsive portfolio with a separate page for each project. Built with **HTML, CSS and plain JavaScript** — no frameworks, build steps or dependencies.

## Getting started
Open `index.html` in VS Code and run it with the Live Server extension. Or double-click the HTML file.

## Important: your profile photo
Place your portrait at `assets/profile.jpg`. The HTML already points to this image. Until you upload it, a clearly marked fallback appears instead. If ChatGPT supplied a `profile.jpg` file, put it in the `assets` folder and commit it with VS Code.

## Files
- `index.html`: the homepage (introduction, overview, skills, contact)
- `project-pylos.html`: Pylos AI project
- `project-vhdl.html`: VHDL processor
- `project-iot.html`: embedded and IoT
- `project-bicycle.html`: autonomous bicycle
- `style.css`: all styling and responsive layout
- `script.js`: light/dark mode (light is the default)

## Customize
- Change text directly in HTML.
- Change colors in the `:root` block at the top of `style.css`.
- Replace the abstract project illustrations with real screenshots later.
- Replace `hello@example.com` with your email in `index.html`.
- Project-page text is a suggested starting point; check the details before publishing.
- To add a project, duplicate a project page and add a matching card to `index.html`.

## Publish
Push files to the `main` branch. If GitHub Pages is enabled for `main` at `/(root)`, GitHub will publish them.
