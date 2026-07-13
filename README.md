# Hyuk-soo Kwon academic website

A simple static academic website inspired by the layout of Ryungha Oh's site, with:

- White background
- Left profile sidebar
- Main page containing About Me and Research
- Separate Presentation and Teaching pages
- Collapsible abstracts
- Local CV at `files/CV.pdf`
- GitHub Actions deployment without Quarto

## Upload

Replace the existing website files with the contents of this folder, commit, and push to `main`.

The workflow at `.github/workflows/pages.yml` deploys the static HTML files directly. No Quarto installation or rendering is required.

## Profile image

Place your portrait at:

`files/profile.jpg`

All three pages already use this local image. A square or nearly square JPG of at least 800 × 800 pixels is recommended. Keep the filename exactly `profile.jpg`.
