<script setup lang="ts">
import { openCookieSettings } from "@/consent";
import { CONTACT, SITE_URL, usePageSeo } from "@/site";

// Noindex: the page holds Nadia's home address, it has no reason to appear in search results
usePageSeo({
  title: "Mentions légales et confidentialité | Nadia Battiston",
  description: "Mentions légales, données personnelles et cookies du site de Nadia Battiston.",
  path: "/mentions-legales",
  noindex: true,
});

// Les champs vides s'affichent « à compléter »
const legal = {
  address: "76 avenue de Ceinture, 95880 Enghien-les-Bains",
  siret: "953 298 031 00014",
  photographer: "Lou Sarda",
};

const lastUpdate = "14 octobre 2026";
</script>

<template>
  <div class="container page">
    <article class="legal">
      <header class="section-head">
        <p class="eyebrow">Informations légales</p>
        <h1>Mentions légales</h1>
        <p>Dernière mise à jour&nbsp;: {{ lastUpdate }}</p>
      </header>

      <section aria-labelledby="editeur">
        <h2 id="editeur">Éditeur du site</h2>
        <p>
          Le site <a :href="SITE_URL">{{ SITE_URL.replace("https://", "") }}</a> est édité par&nbsp;:
        </p>
        <dl class="details">
          <div>
            <dt>Nom</dt>
            <dd>Nadia Battiston, entrepreneur individuel (EI)</dd>
          </div>
          <div>
            <dt>Activité</dt>
            <dd>
              Comédienne voix off, en micro-entreprise et en tant qu'artiste-interprète intermittente
              du spectacle
            </dd>
          </div>
          <div>
            <dt>Adresse</dt>
            <dd :class="{ todo: !legal.address }">{{ legal.address || "Adresse à compléter" }}</dd>
          </div>
          <div>
            <dt>SIRET</dt>
            <dd :class="{ todo: !legal.siret }">{{ legal.siret || "SIRET à compléter" }}</dd>
          </div>
          <div>
            <dt>TVA</dt>
            <dd>TVA non applicable, article 293&nbsp;B du CGI</dd>
          </div>
          <div>
            <dt>Téléphone</dt>
            <dd><a :href="CONTACT.phoneHref">{{ CONTACT.phone }}</a></dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></dd>
          </div>
          <div>
            <dt>Directrice de la publication</dt>
            <dd>Nadia Battiston</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="hebergement">
        <h2 id="hebergement">Hébergement</h2>
        <p>
          Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis —
          <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a> —
          <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
        </p>
      </section>

      <section aria-labelledby="propriete">
        <h2 id="propriete">Propriété intellectuelle</h2>
        <p>
          Les textes, photographies, enregistrements audio et vidéo de ce site sont protégés par le
          droit d'auteur et les droits voisins. Toute reproduction ou diffusion, totale ou partielle,
          sans autorisation préalable est interdite.
        </p>
        <p>
          Les extraits sonores sont présentés à titre de démonstration du travail de Nadia Battiston.
          Les marques, logos et œuvres cités appartiennent à leurs titulaires respectifs.
        </p>
        <p>
          Portraits&nbsp;:
          <span :class="{ todo: !legal.photographer }">
            © {{ legal.photographer || "photographe à compléter" }}
          </span>
        </p>
      </section>

      <section id="donnees-personnelles" aria-labelledby="donnees-titre">
        <h2 id="donnees-titre">Données personnelles</h2>
        <p>
          Nadia Battiston est responsable des traitements de données réalisés sur ce site. Le site ne
          comporte ni formulaire ni compte utilisateur&nbsp;: les informations que vous transmettez
          par e-mail ou par téléphone servent uniquement à répondre à votre demande et ne sont pas
          cédées à des tiers.
        </p>
        <p>
          Le nombre d'écoutes de chaque extrait est comptabilisé de façon anonyme via le service
          Supabase&nbsp;: aucune donnée permettant de vous identifier n'est enregistrée par le site.
          L'hébergeur peut traiter des données techniques de connexion (adresse IP, navigateur) pour
          assurer la sécurité et le bon fonctionnement du site.
        </p>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
          de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos
          données. Pour l'exercer, écrivez à
          <a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a>. Vous pouvez également
          adresser une réclamation à la
          <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a>.
        </p>
      </section>

      <section id="cookies" aria-labelledby="cookies-titre">
        <h2 id="cookies-titre">Cookies et mesure d'audience</h2>
        <p>
          Avec votre accord uniquement, ce site utilise Google Analytics (Google Ireland Limited) pour
          mesurer son audience&nbsp;: pages consultées, durée de visite, type d'appareil. Aucun cookie
          publicitaire n'est utilisé. Les données peuvent être transférées aux États-Unis à Google
          LLC, certifiée au Data Privacy Framework UE–États-Unis.
        </p>
        <ul class="list">
          <li>
            Cookies déposés après acceptation&nbsp;: <code>_ga</code> et <code>_ga_*</code>, conservés
            13&nbsp;mois au maximum.
          </li>
          <li>Données de mesure d'audience conservées 14&nbsp;mois au maximum.</li>
          <li>
            Votre choix (acceptation ou refus) est enregistré dans votre navigateur pendant
            6&nbsp;mois, puis la question vous est reposée.
          </li>
        </ul>
        <p>
          Si vous refusez, aucun cookie de mesure d'audience n'est déposé et le site reste
          entièrement accessible. Vous pouvez modifier votre choix à tout moment&nbsp;:
        </p>
        <button type="button" class="btn btn-ghost" @click="openCookieSettings">
          Gérer mes cookies
        </button>
      </section>
    </article>
  </div>
</template>

<style scoped>
.legal {
  max-width: 760px;
}

section + section {
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}

h2 {
  margin-bottom: 18px;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
}

p,
.list {
  color: #d4d0c8;
}

p + p,
p + .list,
.list + p {
  margin-top: 14px;
}

.list {
  padding-left: 20px;
}

.list li + li {
  margin-top: 6px;
}

a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

a:hover {
  color: var(--accent-strong);
}

code {
  padding: 1px 6px;
  border-radius: 6px;
  background: var(--surface-2);
  font-size: 0.9em;
}

.details {
  margin-top: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
}

.details > div {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  padding: 14px 20px;
}

.details > div + div {
  border-top: 1px solid var(--line);
}

.details dt {
  color: var(--text-muted);
}

.btn {
  margin-top: 20px;
}

/* Missing information, must be filled in before going live */
.todo {
  color: #f08c6b;
  font-style: italic;
}

@media (max-width: 600px) {
  .details > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
