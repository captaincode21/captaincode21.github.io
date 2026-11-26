# Opeyemi Bisiriyu portfolio

One static page: plain HTML, CSS and JavaScript. No build step and nothing to install.

## Files

    index.html    main page text and project drawings
    research.html research and publications
    styles.css    colours, type and layout
    motion.js     scroll-in effects and diagram drawing
    theme.js      light and black theme switch
    trend.js      live control trend on the opening screen
    projects.js   the project list
    main.js       typing effect, project slides, back-to-top
    assets/       portrait, font, icons, link preview image

## Run it

Open `index.html` in a browser, or run `python3 -m http.server` here and visit http://localhost:8000.

## Update it

- Projects: edit `projects.js`. Copy a block to add one. Set `status` to Planned, Ongoing or Completed, and fill `repo` or `details` only with real links.
- Papers: edit `research.html`.
- Contact details: the Contact section of `index.html`.
- About text and skills: edit `index.html`.
- Portrait: replace `assets/portrait.webp` with a square image.

## Deploy

The repository is named `captaincode21.github.io`, so GitHub Pages serves the `main` branch at https://captaincode21.github.io. Push to `main` and the site updates in a minute or two.

## Custom domain

1. Buy a domain.
2. In the repository: Settings, Pages, Custom domain, enter it.
3. At your domain provider, add the DNS records GitHub shows on that page.
4. Update the `canonical`, `og:url` and `og:image` addresses in `index.html`.

After changing styles.css, projects.js or main.js, raise the ?v= number in the HTML so browsers load the new copy.
