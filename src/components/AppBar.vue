<script setup lang="ts">
import { ref } from 'vue';

import { useAudioStore } from '@/stores/audio';

const stepperInfo = useAudioStore()

const expanded = ref(false);

const handleExpand = () => {
    stepperInfo.pause();
    expanded.value = !expanded.value;
};
</script>



<template>
    <div class="holder">
        <header class="shadow">
            <h1 class="text-2xl full_title">Nadia Battiston</h1>
            <h2 class="text-2xl small_title">NB</h2>
            <nav class="nav-desktop">
                <ul>
                    <li>

                        <router-link to="/" @click="stepperInfo.pause">
                            Accueil
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/studio" @click="stepperInfo.pause">
                            Studio
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" @click="stepperInfo.pause"> 
                            Contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/pictures" @click="stepperInfo.pause">
                            Photos
                        </router-link>
                    </li>
                </ul>
            </nav>
            <nav class="mobile-nav">
                <button class="burger" :aria-expanded="expanded" aria-controls="navigation-list" aria-label="ouvrir le menu"
                    @click="handleExpand">
                    <span class="burger__icon" :class="{ 'burger-transition': expanded }"></span>
                </button>
            </nav>
        </header>

        <div class="menu" :class="{ 'show': expanded }">
            <nav>
                <ul>
                    <li>

                        <router-link to="/" @click="handleExpand" >
                            Accueil
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/studio" @click="handleExpand">
                            Studio
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" @click="handleExpand">
                            Contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/pictures" @click="handleExpand">
                            Photos
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped >
.small_title {
    display: none;
}

.holder {
    height: 75px;
    position: relative;
}
.nav-desktop ul {
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu {
    overflow: hidden;
    z-index: 100;
    position: absolute;
    top: 75px;
    right: 0;
    width: 70vw;
    height: 100vh;
    background-color: var(--color1);
    color: white;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.menu.show {
    transform: translateX(0);
}



.menu nav {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    margin: 0;
    padding: 0;
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1em;
}

header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 0 30px;
    height: 75px;
    background-color: var(--color1);
    color: white;
}

h1,
h2 {
    font-weight: 700;
    font-family: "inter bold";
}

.mobile-nav {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
}

.burger {
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    align-items: center;
}

.burger__icon {
    display: block;
    width: 12px;
    height: 3px;
    margin: 2px 0;
    background-color: white;
    position: relative;
    transition: all 0.2s ease;
}

.burger__icon::after {
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    background-color: white;
    position: absolute;
    top: -10px;
    transition: all 0.2s ease;
}

.burger__icon::before {
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    background-color: white;
    position: absolute;
    top: 10px;
    transition: all 0.2s ease;
}

.burger__icon.burger-transition {
    background-color: transparent;
}

.burger__icon.burger-transition::after {
    opacity: 1;
    transform: translateY(10px) rotate(45deg);
}

.burger__icon.burger-transition::before {
    opacity: 1;
    transform: translateY(-10px) rotate(-45deg);
}


@media (max-width: 940px) {
    .mobile-nav {
        display: block;
    }
    .nav-desktop {
        display: none;
    }

    .small_title {
        display: block;
    }

    .full_title {
        display: none;
    }
}
</style>
