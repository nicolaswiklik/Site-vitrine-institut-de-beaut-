# Site vitrine – institut de beauté (démo)

React + Vite + Tailwind CSS v4 + Lucide. Aucun backend.

## Lancer
```bash
npm install
npm run dev      # développement
npm run build    # production (dossier dist/)
```
Déploiement Vercel : preset « Vite » (build `npm run build`, sortie `dist`).

## Personnaliser
Tout le contenu est dans `src/data/site.js` : nom, ville, téléphone, adresse,
lien de réservation, Instagram, horaires, prestations et tarifs, images, avis,
texte « À propos », mentions légales.
Les couleurs et polices sont dans `src/index.css` (bloc `@theme`).
