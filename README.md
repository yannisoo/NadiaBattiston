# nadia-battiston

Site vitrine de Nadia Battiston, comédienne voix off — [www.nadia-battiston.fr](https://www.nadia-battiston.fr).

Vue 3 + Vite, prérendu en HTML statique avec [vite-ssg](https://github.com/antfu-collective/vite-ssg) et déployé sur Vercel.

## Commandes

```sh
npm install
npm run dev              # serveur de développement
npm run build            # type-check + optimisation des images + prérendu dans dist/
npm run preview          # sert dist/ en local
npm run optimize-images  # génère les images WebP manquantes (-- --force pour tout régénérer)
```

## Contenu

- **Extraits audio** : `src/assets/extracts.json` (fichiers dans `public/audio/`, logos dans `originals/`).
  Les libellés des filtres sont dans `src/assets/filters.json`.
- **Photos** : `src/assets/photos.json` (originaux `originals/<n>.jpg`).
- **Coordonnées** : `src/site.ts`.

Les images en pleine résolution sont dans `originals/` (non déployé). Après l'ajout d'un extrait ou
d'une photo, `npm run optimize-images` (lancé aussi à chaque build) génère les versions WebP servies
par le site dans `public/images/extraits/`, `public/images/photos/` et `public/images/studio/`.
`public/` ne doit contenir que des fichiers réellement utilisés par le site.

## Cookies

Google Analytics n'est chargé qu'après acceptation dans le bandeau (`src/consent.ts`,
`src/components/CookieBanner.vue`). Le choix est conservé 6 mois et modifiable via le lien
« Cookies » du pied de page.

## SEO

- Chaque page est prérendue (`dist/*.html`) avec son titre, sa description, son URL canonique et
  ses balises Open Graph (`usePageSeo` dans `src/site.ts`).
- Données structurées JSON-LD : `WebSite` + `Person` sur toutes les pages, `VideoObject` sur `/studio`.
- `public/robots.txt` et `public/sitemap.xml` : penser à ajouter toute nouvelle page au sitemap.
- `vercel.json` : URLs propres (`/studio` → `studio.html`), redirections et cache des assets.
