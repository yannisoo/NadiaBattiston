<template>
    <header class="shadow">
        <h1 class="text-2xl ">Nadia Battiston</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
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
