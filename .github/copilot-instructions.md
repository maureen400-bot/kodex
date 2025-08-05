# Copilot Instructions for March Cohort Codebase

## Overview
This project is a web development workspace focused on HTML and CSS, with TailwindCSS as a core styling tool. The structure is organized for educational or assignment-based workflows, with separate folders for HTML, CSS, and assets.

## Key Directories
- `src/`: Main working directory for HTML entry points and TailwindCSS input/output files.
- `HTML/`: Contains various HTML assignment and project files.
- `CSS/`: Contains custom CSS files for different assignments and layouts.
- `IMAGES/`: Asset folder for images and SVGs used in the HTML files.

## Styling Workflow
- TailwindCSS is used via CLI. The main input is `src/input.css` (which imports Tailwind), and the output is `src/output.css`.
- To build or watch TailwindCSS changes, use:
  ```
  npm run dev
  ```
  This runs: `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch`
- HTML files in `src/` and `HTML/` reference `output.css` for styles.

## Project Conventions
- Do **not** edit `output.css` directly; always update `input.css` or Tailwind config (if present).
- Custom CSS for specific assignments is in `CSS/` and referenced by corresponding HTML files in `HTML/`.
- Images and SVGs are referenced with relative paths from HTML files.
- No JavaScript or backend logic is present; focus is on static site development and styling.

## Adding New Assignments or Pages
- Place new HTML files in `HTML/` or `src/` as appropriate.
- Add custom styles in `CSS/` if needed, or extend Tailwind via `input.css`.
- Reference images from `IMAGES/` using relative paths.

## Example: Adding a New Styled Page
1. Create `HTML/my-assignment.html`.
2. Add a link to `../CSS/my-assignment.css` if custom styles are needed.
3. Reference `../IMAGES/` for assets.
4. Ensure `output.css` is up to date by running `npm run dev`.

## Troubleshooting
- If styles are missing, ensure `npm run dev` is running and `output.css` is being updated.
- If adding new Tailwind classes, verify they are included in HTML files so Tailwind can detect and generate them.

---
For further conventions or questions, review the folder structure and existing file references for examples.
