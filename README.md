# Hyuk-soo Kwon academic website

This is a Quarto academic website prepared for deployment through GitHub Pages.

## Content preserved from the current Google Site

- Home introduction and contact information
- Research order: Working Papers → Work in Progress → Publications
- Collapsible abstracts
- Presentations grouped by paper
- Existing Teaching page content
- Paper and research-coverage links, including VoxChina and BFI links
- A local CV path (`files/CV.pdf`)

## Before first deployment

1. Put the current CV at `files/CV.pdf`.
2. The current profile image is loaded from the existing public VoxChina image. For long-run reliability, optionally save the preferred profile image as `images/profile.jpg` and replace the image path in `index.qmd`.
3. Review `LINK_AUDIT.md`. A few links displayed on Google Sites could not be resolved to exact destination URLs and should be supplied before final launch.

## GitHub Pages deployment

The included workflow renders the Quarto site and deploys the `_site` artifact to GitHub Pages whenever `main` is updated.

After the files are in the repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and run **Deploy Quarto website to GitHub Pages**, or push a new commit to `main`.
4. Check the temporary site at `https://hyuksookwon.github.io`.
5. Add `hyuksookwon.com` only after the temporary site has been reviewed.
