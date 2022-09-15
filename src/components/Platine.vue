<template>
  <div class="animation">
    <div class="line one">
      <div class="line two">
        <div class="line three">
          <div class="line four">
            <div class="line five">
              <img
                src="https://nadia-battiston.fr/wp-content/uploads/2018/08/stickers-citroen-c5-ref30-autocollant-voiture-sticker-auto-autocollants-decals-sponsors-racing-tuning-sport-logo-min-400x400.jpeg"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
}

img {
  width: 4vw;
  height: 4vw;
  border-radius: 50%
}

.line {
  border: 1px solid #0f0f0f;
}

.one {
  width: 9vw;
  height: 9vw;
}

.two {
  width: 8vw;
  height: 8vw;
}

.three {
  width: 7vw;
  height: 7vw;
}

.four {
  width: 6vw;
  height: 6vw;
}

.five {
  width: 5vw;
  height: 5vw;
}

.animation {
  width: 10vw;
  height: 10vw;
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>