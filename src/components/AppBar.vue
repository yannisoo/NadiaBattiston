<template>
    <header class="shadow">
        <h1 class="text-2xl ">Nadia Battiston</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Accueil</router-link>
                </li>
                <li>
                    <router-link to="/about">Qui suis-je</router-link>
                </li>
                <li>
                    <router-link to="/pictures">Photos</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100vw;
        padding: 0  30px;
        height: 75px;
        background-color: var(--color1);
        color: white;
    }
    h1 {
        font-weight: 700;
        font-family: "inter bold";
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        height: 75px;
    }
    ul{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
</style>
