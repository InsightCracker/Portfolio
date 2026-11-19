# Michael Oladimeji, portfolio

React + Vite, prerendered to static HTML at build time, deployed on Netlify.

```
npm install
npm run dev       # local development
npm run build     # production build (also prerenders the HTML)
npm run preview   # serve the built site locally
```

## Where to edit

All text, links and project data live in `src/data/site.js`. The components only lay it out.
Colors and type are tokens at the top of `src/styles.css`.

## Fill these in before you deploy

- **Client work** (`clientWork` in `site.js`): fill in both NGO entries, add a screenshot if you
  have one, get each client's OK, then set `visible: true`. A "Web" filter appears automatically.
- **Pharmacy Pulse repo link** (`projects`, id `pharmacy`): the old site pointed it at a Ballon d'Or
  repo. Paste the right URL, or leave `null` to hide the link.
- **Project results**: each project has an empty `result`. One sentence on what the analysis found.
- **Background** (`background`): add your other roles, newest first, and set `visible: true`.
- **DataEre "Now building"** line: remove it if Dataset Challenge is not public yet.

## Contact form

The form uses Netlify Forms. After the first deploy, send a test message, then in Netlify go to
Forms, then Form notifications, and add an email notification so messages reach your inbox.

## Files that matter for SEO

`index.html` (title, description, social preview, structured data), `public/og-image.png`,
`public/robots.txt`, `public/sitemap.xml`. Update `lastmod` in the sitemap when you make big changes.
