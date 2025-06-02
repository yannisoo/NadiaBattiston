<template>
  <div id="max-size">
    <h1>Mon studio</h1>
    <section class="studio-section">
      <img ref="img1" src="/images/cabine_one_plus.jpg" />
      <div class="block">
        <ul></ul>
      </div>

      <div class="block space-between">
        <img ref="img2" src="/images/studio-micro.jpeg" />
        <img ref="img3" src="/images/studio.jpeg" />
      </div>
      <div class="block space-between">
        <div class="text-side">
          <div class="text-holder">
            <ul>
              <li>- Cabine StudioBricks VO Edition</li>
              <br />
              <li>- Carte son SSL2+</li>
              <br />
              <li>- Micro Neumann U87 Ai</li>
              <br />
              <li>- Casque Neumann NDH 20</li>
              <br />
              <li>- Filtre anti-pop Shure PS-6</li>
              <br />
              <li>- Mac mini M1</li>
              <br />
              <li>- Pro Tools Studio</li>
            </ul>
          </div>
        </div>
        <img ref="img1" src="/images/studio-mylo.jpeg" />
      </div>
    </section>
    <section class="video-section">
      <iframe height="600" src="https://www.youtube.com/embed/P9nJpAhNe8k">
      </iframe>
    </section>
    <h1>Contact</h1>
    <section>
      <div class="contact-section">
        <span class="material-symbols-outlined"> phone </span>
        <br />
        <p>
          <a href="tel:+336 12 79 13 07">06 12 79 13 07</a>
        </p>
      </div>
      <div class="contact-section">
        <span class="material-symbols-outlined"> email </span>
        <br />
        <p>
          <a href="mailto:n.battiston@outlook.fr"> n.battiston@outlook.fr </a>
        </p>
      </div>
      <a href="https://www.instagram.com/battistonnadia/">
        <div class="contact-section">
          <img src="/images/instagram.svg" alt="instagram" class="icon" />
          <br />
          <p>@battistonnadia</p>
        </div>
      </a>
    </section>
  </div>
</template>

<style scoped>
#max-size {
  margin: auto;
  max-width: 1700px;
}
h3 {
  font-size: 2.5rem;
  color: white;
  text-align: center;
  align-self: flex-start;
}
section {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
}

img {
  width: 45%;
  height: auto;
}
.text-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
}
.title {
  border: 2px solid white;
  padding: 0 1rem;
  margin: auto;
  align-self: self-start;
}

.block {
  margin: 2rem auto;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  max-width: 1700px;
}
.video-section {
  max-height: 90vh;
}
.space-between {
  justify-content: space-between;
}

.text-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.giga-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slider {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.studio-section {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

h1 {
  color: white;
  font-size: 2.65rem;
  font-family: "Inter", sans-serif;
  padding: 2rem 0 0 2rem;
}

section {
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  display: flex;
  padding: 2rem;
}

li {
  font-size: 1.3rem;
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

@media screen and (max-width: 940px) {
  section {
    flex-direction: column;
    padding: 0;
  }
  img {
    width: 80vw;
    margin: 15px 0;
  }
  .block {
    flex-direction: column;
    margin: 0 auto;
    width: 80vw;
  }

  .contact-section {
    width: 80vw;
  }
  li {
    font-size: 1rem;
  }
}

.material-symbols-outlined {
  font-size: 2rem;
}

.text {
  width: 60%;
  padding: 2rem;
}
.icon {
  width: 40px;
  height: 40px;
}
</style>
<!-- <template>
  <div id="max-size">

    <h1>Mon studio</h1>
    <div id="block">
      <section class="studio-section">
        <div class="text">
          <ul>
            <li>- Cabine StudioBricks VO Edition</li>
            <li>- Carte son SSL2+ </li>
            <li>- Mac mini M1</li>
            <li>- Pro Tools Studio</li>
            <li>- Micro Neumann U87 Ai</li>
            <li>- Casque Neumann NDH 20</li>
            <li>- Filtre anti-pop Shure PS-6</li>
          </ul>
        </div>
        <div class="container">
          <div class="slider">
            <img ref="img1" src="/images/studio-mylo.jpeg">
            <img ref="img2" src="/images/studio-micro.jpeg">
            <img ref="img3" src="/images/studio.jpeg">
          </div>
          <a class="prev" @click="handleOnUp">&#10094;</a>
          <a class="next" @click="handleOnDown">&#10095;</a>
        </div>
      </section>
    </div>
    <h1>Contact</h1>
    <section>
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
  
<script>
export default {
  data() {
    return {
      images: [],
      currentStep: 0,
    };
  },
  mounted() {
    this.images = [
      this.$refs.img1,
      this.$refs.img2,
      this.$refs.img3,
    ];
  },
  methods: {
    handleOnUp() {
      if (this.currentStep === 0) return;
      this.currentStep--;
      for (const image of this.images) {
        image.animate(
          {
            transform: `translateX(-${this.currentStep * 100}%)`,
          },
          {
            duration: 500,
            fill: "forwards",
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
        );
      }
    },
    handleOnDown() {
      if (this.currentStep === this.images.length - 1) return;
      this.currentStep++;
      for (const image of this.images) {
        image.animate(
          {
            transform: `translateX(-${this.currentStep * 100}%)`,
          },
          {
            duration: 500,
            fill: "forwards",
            easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          }
        );
      }
    },
  },
};
</script>

<style scoped>
#max-size {
  margin: auto;
  max-width: 1700px;
}

section {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
}

#block {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
}

.slider {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.studio-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
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

li {
  font-size: 1.3rem;
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

img {
  width: 100%;

}


@media screen and (max-width: 940px) {
  section {
    flex-direction: column;
  }

  .contact-section {
    width: 80vw;
  }


}

.material-symbols-outlined {
  font-size: 2rem;
}

.text {
  width: 60%;
  padding: 2rem;
}

* {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>  -->
