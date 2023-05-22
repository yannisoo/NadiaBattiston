<script setup lang="ts"></script>
<template>
  <div id="max-size">

    <h1>Qui-suis-je?</h1>

    <section>
      <img src="/images/4web.jpg" alt="">
      <div class="block">


        <div class="handwritten">
          Ma voix a un pouvoir étrange sur les mots. Une seule intonation sur une syllabe et tout change...
          <br>
          
        </div>
        <div class="text">
          <p>
            Je suis née à Paris de parents algériens dont je parle le dialecte avec aisance.
            <br>
            À 7 ans, j'ai déjà une bonne élocution. J'aime lire à haute voix pour faire vivre les personnages. Quelque
            chose
            frissonne en moi...
            <br>
            10 ans ! Je lis ma première pièce de Shakespeare. Je suis subjuguée par sa plume, par ces mots, mais je ne
            comprends rien !
          </p>
          <br>
          <p>
            En 1987, j'obtiens un BAC littéraire option Art Dramatique. J'intègre ensuite, pendant trois ans, l'École de
            Théâtre le T.E.M à Montreuil sous la direction de Michel BLIN. Nous avons travaillé sur différents auteurs et
            monté avec notre troupe la pièce de théâtre "La Poche Parmentier" de Georges Perec.
          </p>
          <br>
          <p>
            En parallèle, je travaille chez "Première Heure". C'est là que je fais mes premiers pas dans la voix off. J'ai
            cette facilité à placer et à poser ma voix.
            <br>
            J'aime cette ambiance de travail, c'est une révélation !
            <br>
          </p>
          <br>
          <p>
            Je prends mon envol et me spécialise dans le doublage, voice-over, narration, radio, films institutionnels et
            publicités.
            <br>
            Aujourd'hui, comédienne depuis 20 ans, je voue une véritable passion pour la comédie, la poésie, le théâtre…
            <br>
            J’apprends encore et toujours des textes qui résonnent en moi.
            <br>
          </p>
        </div>
      </div>
    </section>
    <h1>Contact</h1>
    <section class="contact-block">
      <div class="contact-section">
        <span class="material-symbols-outlined">
          phone
        </span>
        <br>
        <p>
          <a href="tel:+336 12 79 13 07">06 12 79 13 07</a>
        </p>
      </div>
      <div class="contact-section">
        <span class="material-symbols-outlined">
          email
        </span>
        <br>

        <p>
          <a href="mailto:n.battiston@outlook.fr">
            n.battiston@outlook.fr
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 667/1000;
  width: 30vw;
  height: calc(30% * 1000/667);
  max-width: 667px;
  max-height: 1000px;
}

#max-size {
  max-width: 1700px;
  margin: auto;
}

.right{
  text-align: right;
  padding-right: 15%;
}
.handwritten {
  font-family: 'handwritten';
  font-size: 2rem;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: white;
  font-size: 2.65rem;
  font-family: 'Inter', sans-serif;
  padding: 2rem 0 0 2rem;
}

section {
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  display: flex;
  padding: 2rem;
}

.contact-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--color2);
  width: 30vw;
  margin: 1rem;
}

.contact-block {
  padding-top: 2rem;
  display: flex;
  justify-content: center;

}

@media screen and (max-width: 940px) {
  section {
    flex-direction: column;
  }

  .contact-section {
    width: 80vw;
  }
  img {
    margin: auto;
    width: 80vw;
    height: calc(80vw * 1000/667);
  }
}


.material-symbols-outlined {
  font-size: 2rem;
}

.text {
  padding: 2rem;
}
</style>


