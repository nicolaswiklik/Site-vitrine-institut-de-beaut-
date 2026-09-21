import { ArrowLeft } from 'lucide-react'
import { copy, legal, site } from '../data/site'

const { street, zip, city } = site.address

/** Pages légales minimales (contenu fictif à faire valider avant mise en ligne). */
export default function LegalPage({ page }) {
  const isPrivacy = page === 'confidentialite'
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <a href="#accueil" className="inline-flex items-center gap-2 text-sm text-gold-deep hover:underline">
        <ArrowLeft size={16} aria-hidden="true" /> Retour au site
      </a>
      <h1 className="mt-6 text-5xl text-cocoa">{isPrivacy ? 'Politique de confidentialité' : 'Mentions légales'}</h1>

      <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-cocoa-soft">
        {isPrivacy ? (
          <>
            <p>
              Ce site ne comporte aucun formulaire ni service de suivi : aucune donnée personnelle n’est collectée
              directement par {site.name}. La prise de rendez-vous s’effectue sur une plateforme tierce, qui applique
              sa propre politique de confidentialité.
            </p>
            <p>
              Ce site charge des polices (Google Fonts), des images (Unsplash) et une carte (Google Maps) depuis des
              services externes, qui peuvent recevoir votre adresse IP lors de la visite.
            </p>
            <p>
              Pour toute question, contactez l’institut via Instagram ({site.instagramHandle}) ou sa fiche Planity.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl text-cocoa">Éditeur du site</h2>
            <p>
              {legal.company}<br />
              Responsable de publication : {legal.owner}<br />
              {street}, {zip} {city}<br />
              SIRET : {legal.siret}<br />
              {site.phone && <>Téléphone : {site.phone}<br /></>}
              {legal.email && <>E-mail : {legal.email}<br /></>}
              Instagram : {site.instagramHandle}
            </p>
            <h2 className="text-3xl text-cocoa">Hébergement</h2>
            <p>{legal.host}</p>
            <h2 className="text-3xl text-cocoa">Projet de démonstration</h2>
            <p>{copy.demoNotice}. Ce site n’est pas le site officiel de l’établissement.</p>
            <h2 className="text-3xl text-cocoa">Propriété intellectuelle</h2>
            <p>
              Les textes et éléments graphiques de ce site sont la propriété de {site.name}. Les photographies
              d’illustration proviennent d’Unsplash.
            </p>
          </>
        )}
      </div>
    </main>
  )
}
