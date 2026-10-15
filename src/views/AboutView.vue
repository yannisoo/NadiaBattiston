<script setup lang="ts">
import ContactCards from "@/components/ContactCards.vue";
import { usePageSeo } from "@/site";

usePageSeo({
  title: "Qui suis-je ? Parcours et contact | Nadia Battiston, voix off",
  description:
    "Formée au théâtre, comédienne depuis plus de 20 ans, Nadia Battiston se spécialise dans la voix off, le doublage, la narration et la publicité. Parcours et contact.",
  path: "/a-propos",
});
</script>

<template>
  <div class="container page">
    <section class="about">
      <figure class="portrait">
        <img
          src="/images/photos/4-640.webp"
          srcset="/images/photos/4-640.webp 640w, /images/photos/4-1280.webp 1280w"
          sizes="(max-width: 860px) 90vw, 40vw"
          width="640"
          height="960"
          alt="Portrait de Nadia Battiston, comédienne voix off"
          fetchpriority="high"
        />
      </figure>

      <div class="text">
        <p class="eyebrow">À propos</p>
        <h1>Qui suis-je&nbsp;?</h1>

        <blockquote class="quote">
          «&nbsp;Ma voix a un pouvoir étrange sur les mots. Une seule intonation sur une syllabe et
          tout change…&nbsp;»
        </blockquote>

        <div class="bio">
          <p>
            Je suis née à Paris de parents algériens dont je parle le dialecte avec aisance.
          </p>
          <p>
            À 7&nbsp;ans, j'ai déjà une bonne élocution. J'aime lire à haute voix pour faire vivre
            les personnages. Quelque chose frissonne en moi…
            10&nbsp;ans&nbsp;! Je lis ma première pièce de Shakespeare. Je suis subjuguée par sa
            plume, par ces mots, mais je ne comprends rien&nbsp;!
          </p>

          <h2>Une formation de théâtre</h2>
          <p>
            En 1987, j'obtiens un BAC littéraire option Art Dramatique. J'intègre ensuite, pendant
            trois ans, l'École de Théâtre le T.E.M à Montreuil sous la direction de Michel BLIN.
            Nous avons travaillé sur différents auteurs et monté avec notre troupe la pièce de
            théâtre «&nbsp;La Poche Parmentier&nbsp;» de Georges Perec.
          </p>

          <h2>La révélation de la voix off</h2>
          <p>
            En parallèle, je travaille chez «&nbsp;Première Heure&nbsp;». C'est là que je fais mes
            premiers pas dans la voix off. J'ai cette facilité à placer et à poser ma voix. J'aime
            cette ambiance de travail, c'est une révélation&nbsp;!
          </p>
          <p>
            Je prends mon envol et me spécialise dans le doublage, voice-over, narration, radio,
            films institutionnels et publicités. Aujourd'hui, comédienne depuis 20&nbsp;ans, je voue
            une véritable passion pour la comédie, la poésie, le théâtre… J'apprends encore et
            toujours des textes qui résonnent en moi.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact" aria-labelledby="contact-title">
      <header class="section-head">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Travaillons ensemble</h2>
        <p>Pour tout projet de voix off, de doublage ou de narration, contactez-moi directement.</p>
      </header>
      <ContactCards />
    </section>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr);
  align-items: start;
  gap: clamp(32px, 6vw, 88px);
}

.portrait {
  position: sticky;
  top: calc(var(--header-height) + 32px);
}

.portrait img {
  width: 100%;
  border-radius: var(--radius);
}

.quote {
  margin: 32px 0 40px;
  padding-left: 24px;
  border-left: 2px solid var(--accent);
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  line-height: 1.3;
}

.bio {
  max-width: 62ch;
  font-size: 1.075rem;
  color: #d4d0c8;
}

.bio p + p {
  margin-top: 1.1em;
}

.bio h2 {
  margin: 40px 0 14px;
  font-size: 1.9rem;
  color: var(--text);
}

.contact {
  margin-top: clamp(64px, 10vw, 120px);
  padding-bottom: 0;
  border-top: 1px solid var(--line);
}

@media (max-width: 860px) {
  .about {
    grid-template-columns: 1fr;
  }

  .portrait {
    position: static;
    max-width: 440px;
  }
}
</style>
