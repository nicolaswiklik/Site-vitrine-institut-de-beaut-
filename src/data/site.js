/**
 * ============================================================
 *  DONNÉES DU SITE — tout ce qu'il faut modifier est ici.
 *  Version de démonstration pour « L’Art d’Esthétique » (Montlhéry).
 *  Les informations non communiquées (téléphone, horaires, e-mail…)
 *  sont volontairement vides : les sections concernées se masquent
 *  automatiquement tant qu'elles ne sont pas renseignées.
 * ============================================================
 */

const PLANITY_URL = 'https://www.planity.com/lart-desthetique-91310-montlhery'

// ---------- Identité & coordonnées ----------
export const site = {
  name: 'L’Art d’Esthétique',
  baseline: 'Institut de beauté',
  city: 'Montlhéry',
  // Tous les boutons de réservation pointent vers la fiche Planity
  bookingUrl: PLANITY_URL,
  // Avis clients : la fiche Planity
  reviewsUrl: PLANITY_URL,
  instagramUrl: 'https://www.instagram.com/lart_desthetique_by_tulay',
  instagramHandle: '@lart_desthetique_by_tulay',
  linktreeUrl: 'https://linktr.ee/Artdesthetique',
  // Non communiqués → laissés vides (les blocs correspondants sont masqués)
  phone: '', // ex. '01 23 45 67 89'
  phoneHref: '', // ex. '+33123456789'
  address: {
    street: '3 rue Luisant',
    zip: '91310',
    city: 'Montlhéry',
  },
  // Preuve de confiance affichée dans le hero et dans la section avis
  rating: { score: '4,9', outOf: '5', source: 'Planity', label: 'Plus de 25 avis clients' },
}

// ---------- Horaires ----------
// Non communiqués. Pour les afficher, renseigner par exemple :
// { day: 'Mardi', hours: '9h30 – 18h30' }, ...
export const openingHours = []

// ---------- Navigation ----------
export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

// ---------- Images (Unsplash, libres de droits — provisoires) ----------
// Remplacez simplement une URL par celle de la vraie photo de l'institut
// (fichier placé dans /public/images/ → "/images/ma-photo.jpg" ou lien externe).
// Ne réutilisez des photos de l'établissement qu'avec son autorisation.
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: unsplash('1733145820333-6fa6ed6f8f5d', 1000),
  // Emplacement du portrait de la gérante : photo d'illustration en attendant la vraie
  portrait: unsplash('1783013951101-2d9ed3eac234', 800),
  cta: unsplash('1540555700478-4be289fbecef', 1600),
  services: {
    sourcils: unsplash('1733145820348-042a1ae7682a', 800),
    cils: unsplash('1674049406179-d7bf2c263e71', 800),
    visage: unsplash('1713085085470-fba013d67e65', 800),
    maquillage: unsplash('1785860945533-918a531bcdeb', 800),
  },
}

// ---------- Prestations & tarifs ----------
// `position` (facultatif) règle le cadrage de la photo : "50% 35%" = centré, un peu vers le haut.
export const services = [
  {
    id: 'sourcils',
    title: 'Sourcils au fil',
    description:
      'Restructuration personnalisée et épilation au fil pour obtenir une ligne nette, précise et naturellement adaptée à votre visage.',
    price: 7,
    image: images.services.sourcils,
    position: '50% 35%',
    alt: 'Esthéticienne travaillant les sourcils d’une cliente allongée dans un institut',
  },
  {
    id: 'cils',
    title: 'Extensions de cils',
    description:
      'Cil à cil, effet mascara ou volume mixte : une pose adaptée à la forme de vos yeux et au résultat souhaité.',
    price: 60,
    image: images.services.cils,
    alt: 'Pose d’extensions de cils à la pince sur une cliente',
  },
  {
    id: 'visage',
    title: 'Soins du visage',
    description:
      'Soins personnalisés, hydrafacial, luminothérapie et protocoles ciblés pour retrouver une peau nette, hydratée et lumineuse.',
    price: 50,
    image: images.services.visage,
    alt: 'Soin du visage avec appareil sur une cliente allongée portant une charlotte',
  },
  {
    id: 'maquillage-permanent',
    title: 'Maquillage permanent',
    description:
      'Microblading, microshading, powder brows et prestations sur mesure pour sublimer durablement votre regard.',
    price: 170,
    image: images.services.maquillage,
    alt: 'Praticienne gantée réalisant une prestation sur les sourcils d’une cliente',
  },
]

// ---------- Galerie (photos d'illustration provisoires) ----------
// 7 vignettes = grille complète sur ordinateur (3 colonnes, 2 « tall » + 5 « wide »).
// Si vous changez le nombre de photos, ajustez les formats « tall » / « wide » pour éviter les trous.
export const gallery = [
  { src: unsplash('1632345031435-8727f6897d53', 900), alt: 'Pose d’ongles en gel sous lampe UV', caption: 'Onglerie', ratio: 'tall' },
  { src: unsplash('1718720410649-7524fcb0f0a5', 900), alt: 'Soin du regard réalisé par une esthéticienne sur une cliente allongée', caption: 'Soin du regard', ratio: 'wide' },
  { src: unsplash('1616394584738-fc6e612e71b9', 900), alt: 'Cliente allongée avec un masque blanc sur le visage pendant un soin', caption: 'Soin du visage', ratio: 'wide' },
  { src: unsplash('1683719312734-e31de63957ab', 900), alt: 'Gros plan sur un œil avec des extensions de cils volumineuses', caption: 'Extensions de cils', ratio: 'tall' },
  { src: unsplash('1596178060671-7a80dc8059ea', 900), alt: 'Massage relaxant sur fond de carreaux de ciment', caption: 'Massage', ratio: 'wide' },
  { src: unsplash('1522337660859-02fbefca4702', 900), alt: 'Vernis rose appliqué sur des ongles soignés', caption: 'Onglerie', ratio: 'wide' },
  { src: unsplash('1598440947619-2c35fc9aa908', 900), alt: 'Produits de soin du visage disposés sur un linge rayé', caption: 'Produits de soin', ratio: 'wide' },
]

// ---------- Avis clients ----------
// Retours publics courts, sans prénom ni note individuelle (non communiqués).
export const reviews = [
  { text: 'Très bien et efficace. Sympathique, je valide.' },
  { text: 'Super accueil, très bon contact et prestation au top. Je recommande à 100 %.' },
  { text: 'Super expérience pour l’épilation au fil. J’ai trouvé mon esthéticienne.' },
]

// ---------- À propos ----------
export const about = {
  title: 'L’expertise au service de votre beauté',
  name: 'Tulay',
  role: 'Gérante et spécialiste de l’épilation au fil',
  paragraphs: [
    'Bienvenue chez L’Art d’Esthétique, un institut dédié à la beauté et au bien-être situé au cœur de Montlhéry.',
    'Tulay est spécialiste de la restructuration et de l’épilation des sourcils au fil. Forte de 15 ans d’expérience acquise en Turquie, elle réalise un travail naturel, précis et adapté à chaque visage.',
    'L’institut propose également des soins du visage, du maquillage permanent, des extensions de cils, de l’onglerie, des épilations et des massages dans une atmosphère chaleureuse et apaisante.',
  ],
  highlights: [
    { icon: 'Award', title: '15 ans d’expérience', text: 'Un savoir-faire acquis en Turquie et une véritable expertise du regard.' },
    { icon: 'HeartHandshake', title: 'Prestations personnalisées', text: 'Chaque prestation est adaptée à la forme de votre visage et à vos envies.' },
    { icon: 'ShieldCheck', title: 'Hygiène et précision', text: 'Un travail minutieux, réalisé dans le soin et le respect des règles d’hygiène.' },
  ],
}

// ---------- Textes marketing ----------
export const copy = {
  hero: {
    eyebrow: `Institut de beauté à ${site.city}`,
    titleLead: 'L’art de révéler',
    titleAccent: 'votre beauté',
    text: `Experte du regard et spécialiste de l’épilation au fil depuis 15 ans, Tulay vous accueille au cœur de ${site.city} pour des prestations personnalisées.`,
  },
  cta: {
    title: 'Accordez-vous le moment que vous méritez',
    text: 'Choisissez votre prestation et réservez en ligne en quelques clics sur Planity.',
  },
  demoNotice: 'Proposition de site réalisée par N’Co Design – Projet de démonstration non officiel',
}

// ---------- Mentions légales (brouillon — à compléter avec l'établissement) ----------
export const legal = {
  company: 'L’Art d’Esthétique',
  owner: 'Tulay (gérante)',
  siret: 'à renseigner',
  email: '', // non communiqué
  host: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
}
