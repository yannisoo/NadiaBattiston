<template>
    <div class="holder">
        <h1 >Nadia Battiston, Actrice</h1>
        <h2>Une voix off pro pour magnifier votre travail</h2>
        <img src="images/mic-background-image.png" alt="Nadia Battiston">
    </div>
</template>
  

<style scoped>
img{
    width: 100%;
}
.holder {
    position:relative;
    text-align: center;
}

h1 {
    position: absolute;
    font-size: 2.65rem;
    font-weight: 700;
    top: 40%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
  }

h2{
    position: absolute;
    font-size: 1.55rem;
    font-weight: 400;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
}
@media (max-width: 940px) {
    h2 {
        top: 70%;
        left: 50%;
    }
  }

  @media (max-width: 700px) {
    h2 {
        font-size: 1.2rem;
    }
    h1 {
        font-size: 2rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
        font-size: 1rem;
    }
    h1 {
        font-size: 1.5rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
        font-size: 0.8rem;
    }
    h1 {
        font-size: 1.2rem;
    }

    
  }
</style>