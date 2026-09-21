/**
 * ============================================================
 *  DONNÉES DU SITE — tout ce qu'il faut modifier est ici.
 *  Les valeurs marquées « FICTIF » sont des exemples à remplacer
 *  par les vraies informations de l'institut.
 * ============================================================
 */

// ---------- Identité & coordonnées (FICTIF) ----------
export const site = {
  name: 'Maison Élise',
  baseline: 'Institut de beauté',
  city: 'Lyon',
  // Lien de réservation (Planity ou autre)
  bookingUrl: 'https://www.planity.com/',
  instagramUrl: 'https://www.instagram.com/',
  instagramHandle: '@maisonelise.lyon',
  // Lien vers la fiche / les avis Google
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Maison+%C3%89lise+Lyon',
  phone: '04 78 00 00 00',
  phoneHref: '+33478000000',
  address: {
    street: '12 rue des Tanneurs',
    zip: '69002',
    city: 'Lyon',
  },
  // Preuve de confiance affichée dans le hero
  rating: { score: '4,9', outOf: '5', source: 'Google', count: '120' },
}

// ---------- Horaires (FICTIF) ----------
export const openingHours = [
  { day: 'Lundi', hours: 'Fermé' },
  { day: 'Mardi', hours: '9h30 – 18h30' },
  { day: 'Mercredi', hours: '9h30 – 18h30' },
  { day: 'Jeudi', hours: '9h30 – 19h30' },
  { day: 'Vendredi', hours: '9h30 – 19h30' },
  { day: 'Samedi', hours: '9h00 – 17h00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

// ---------- Navigation ----------
export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

// ---------- Images (Unsplash) ----------
// Remplacez simplement une URL par celle de la vraie photo de l'institut
// (fichier placé dans /public/images/ → "/images/ma-photo.jpg" ou lien externe).
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: unsplash('1509967419530-da38b4704bc6', 1000),
  portrait: unsplash('1580489944761-15a19d654956', 800),
  ambiance: unsplash('1560750588-73207b1ef5b8', 1600),
  cta: unsplash('1540555700478-4be289fbecef', 1600),
  services: {
    mains: unsplash('1610992015732-2449b76344bc', 800),
    cils: unsplash('1487412947147-5cebf100ffc2', 800),
    visage: unsplash('1570172619644-dfd03ed5d881', 800),
    epilation: unsplash('1544161515-4ab6ce6db874', 800),
  },
}

// ---------- Prestations & tarifs (FICTIF) ----------
export const services = [
  {
    id: 'mains',
    title: 'Beauté des mains',
    description:
      'Manucure, pose de vernis semi-permanent ou gel : des ongles soignés, une tenue durable et une finition naturelle.',
    price: 35,
    image: images.services.mains,
    alt: 'Mains manucurées aux ongles roses naturels posées sur un tissu blanc',
  },
  {
    id: 'cils',
    title: 'Extensions de cils',
    description:
      'Un regard intense sans effort : pose cil à cil ou volume russe, adaptée à la forme de vos yeux et à votre style.',
    price: 60,
    image: images.services.cils,
    alt: 'Gros plan sur un regard maquillé avec des cils longs et définis',
  },
  {
    id: 'visage',
    title: 'Soins du visage',
    description:
      'Nettoyage, gommage, masque et massage : un soin sur mesure pour retrouver un teint lumineux et une peau apaisée.',
    price: 55,
    image: images.services.visage,
    alt: 'Cliente allongée pendant un soin du visage avec masque à l’argile',
  },
  {
    id: 'epilation',
    title: 'Épilation',
    description:
      'Épilation à la cire tiède, douce et précise, pour une peau nette et confortable. Protocole d’hygiène strict.',
    price: 12,
    image: images.services.epilation,
    alt: 'Ambiance de soin apaisante avec huile de massage dans un institut',
  },
]

// ---------- Galerie (FICTIF) ----------
// 7 vignettes = grille complète sur ordinateur (3 colonnes, 2 « tall » + 5 « wide »).
// Si vous changez le nombre de photos, ajustez les formats « tall » / « wide » pour éviter les trous.
export const gallery = [
  { src: unsplash('1632345031435-8727f6897d53', 900), alt: 'Pose d’ongles en gel sous lampe UV', caption: 'Pose en gel', ratio: 'tall' },
  { src: unsplash('1522337660859-02fbefca4702', 900), alt: 'Vernis rose appliqué sur des ongles soignés', caption: 'Couleur rose poudré', ratio: 'wide' },
  { src: unsplash('1552693673-1bf958298935', 900), alt: 'Soin du visage réalisé par une esthéticienne gantée', caption: 'Soin du visage', ratio: 'wide' },
  { src: unsplash('1515377905703-c4788e51af15', 900), alt: 'Application d’un sérum sur la main', caption: 'Rituel de soin', ratio: 'tall' },
  { src: unsplash('1596178060671-7a80dc8059ea', 900), alt: 'Massage relaxant sur fond de carreaux de ciment', caption: 'Moment de détente', ratio: 'wide' },
  { src: unsplash('1560750588-73207b1ef5b8', 900), alt: 'Espace détente lumineux avec plantes et fauteuil en rotin', caption: 'L’institut', ratio: 'wide' },
  { src: unsplash('1598440947619-2c35fc9aa908', 900), alt: 'Produits de soin professionnels du visage disposés sur un linge rayé', caption: 'Nos produits', ratio: 'wide' },
]

// ---------- Avis clients (FICTIF — à remplacer par de vrais avis Google) ----------
export const reviews = [
  {
    name: 'Camille',
    rating: 5,
    service: 'Extensions de cils',
    text: 'Un accueil chaleureux et un vrai souci du détail. Mes cils sont magnifiques, très naturels, et tiennent parfaitement depuis trois semaines. Je recommande les yeux fermés !',
  },
  {
    name: 'Sophie',
    rating: 5,
    service: 'Beauté des mains',
    text: 'Enfin un institut où l’on prend le temps de m’écouter. Le semi-permanent est impeccable et l’ambiance est vraiment apaisante. Ma pause préférée du mois.',
  },
  {
    name: 'Léa',
    rating: 5,
    service: 'Soin du visage',
    text: 'Mon soin du visage était sur mesure, avec des produits agréables et des conseils honnêtes. Ma peau est plus éclatante. Hygiène irréprochable, je me suis sentie en confiance.',
  },
]

// ---------- À propos (FICTIF) ----------
export const about = {
  name: 'Élise Martin',
  role: 'Fondatrice & esthéticienne diplômée',
  paragraphs: [
    'Après dix ans d’expérience en institut et en spa, j’ai ouvert Maison Élise avec une conviction : la beauté doit rester simple, sincère et adaptée à chacune.',
    'Chaque rendez-vous commence par un temps d’écoute. Je vous conseille selon vos envies, votre peau et votre quotidien, sans jamais vous imposer de forfaits inutiles.',
    'Ici, tout est pensé pour que vous vous sentiez bien : une cabine calme, une lumière douce et un rendez-vous qui vous est entièrement consacré.',
  ],
  highlights: [
    { icon: 'Leaf', title: 'Produits professionnels', text: 'Des marques exigeantes, sélectionnées pour leur qualité et le respect de votre peau.' },
    { icon: 'HeartHandshake', title: 'Prestations personnalisées', text: 'Chaque soin est adapté à vos besoins, à votre morphologie et à votre style.' },
    { icon: 'ShieldCheck', title: 'Hygiène irréprochable', text: 'Matériel stérilisé, cabine désinfectée et protocoles rigoureux à chaque rendez-vous.' },
  ],
}

// ---------- Textes marketing ----------
export const copy = {
  hero: {
    eyebrow: `Institut de beauté à ${site.city}`,
    title: 'Révélez votre beauté naturelle',
    text: 'Ongles, cils, soins du visage et épilation : des prestations soignées, personnalisées et réalisées avec des produits professionnels, dans un cadre pensé pour vous détendre.',
  },
  cta: {
    title: 'Accordez-vous le moment que vous méritez',
    text: 'Réservez en ligne en quelques clics, 24h/24. Nous nous occupons du reste.',
  },
}

// ---------- Mentions légales (FICTIF — à faire valider avant mise en ligne) ----------
export const legal = {
  company: 'Maison Élise — entreprise individuelle',
  owner: 'Élise Martin',
  siret: '000 000 000 00000 (à renseigner)',
  email: 'contact@maison-elise.example',
  host: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
}
