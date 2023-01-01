<script setup lang="ts">

</script>


<template>
    <div class="block">

        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />

        <div id="carousel">
            <img v-bind:src="'images/5web.jpg'" class="item">
            <img v-bind:src="'images/10web.jpg'" class="item">
            <img v-bind:src="'images/14web.jpg'" class="item">
            <img v-bind:src="'images/2web.jpg'" class="item">
            <img v-bind:src="'images/4web.jpg'" class="item">
            <img v-bind:src="'images/6web.jpg'" class="item">
            <img v-bind:src="'images/7web.jpg'" class="item">
            <img v-bind:src="'images/8web.jpg'" class="item">
            <img v-bind:src="'images/9web.jpg'" class="item">
            <img v-bind:src="'images/3web.jpg'" class="item">
            <img v-bind:src="'images/13web.jpg'" class="item">
        </div>

    </div>
</template>


<style scoped>
.block {
    margin-top: 10vh;
    height: 600px;
    display: grid;
    grid-template-rows: 500px 100px;
    grid-template-columns: 1fr 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 1fr;
    align-items: center;
    justify-items: center;
}

#carousel {
    grid-row: 1 / 2;
    grid-column: 1 / 15;
    width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 600px;
    z-index: -100;
    --items: 11;
    --middle: 5.5;
    --position: 1;
    pointer-events: none;
}

.item {
    position: absolute;
    width: 300px;
    height: 400px;
    --r: calc(var(--position) - var(--offset));
    --abs: max(calc(var(--r) * -1), var(--r));
    transition: all 0.25s linear;
    transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)));
    z-index: calc((var(--position) - var(--abs)));
}

.item:nth-of-type(1) {
    --offset: 1;
}

.item:nth-of-type(2) {
    --offset: 2;
}

.item:nth-of-type(3) {
    --offset: 3;
}

.item:nth-of-type(4) {
    --offset: 4;
}

.item:nth-of-type(5) {
    --offset: 5;
}

.item:nth-of-type(6) {
    --offset: 6;
}

.item:nth-of-type(7) {
    --offset: 7;
}

.item:nth-of-type(8) {
    --offset: 8;
}

.item:nth-of-type(9) {
    --offset: 9;
}

.item:nth-of-type(10) {
    --offset: 10;
}

.item:nth-of-type(11) {
    --offset: 11;
}

.item:nth-of-type(12) {
    --offset: 12;
}

.item:nth-of-type(13) {
    --offset: 13;
}

.item:nth-of-type(14) {
    --offset: 14;
}

.item:nth-of-type(15) {
    --offset: 15;
}


input:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

input:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

input:nth-of-type(3) {
    grid-column: 4 /5;
    grid-row: 2 / 3;
}

input:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
}

input:nth-of-type(5) {
    grid-column: 6 / 7;
    grid-row: 2 / 3;
}

input:nth-of-type(6) {
    grid-column: 7 / 8;
    grid-row: 2 / 3;
}

input:nth-child(7) {
    grid-column: 8 / 9;
    grid-row: 2 / 3;
}

input:nth-child(8) {
    grid-column: 9 / 10;
    grid-row: 2 / 3;
}

input:nth-child(9) {
    grid-column: 10 / 11;
    grid-row: 2 / 3;
}

input:nth-child(10) {
    grid-column: 11 / 12;
    grid-row: 2 / 3;
}

input:nth-child(11) {
    grid-column: 12 / 13;
    grid-row: 2 / 3;
}
input:nth-of-type(1):checked~#carousel {
    --position: 1;
}
input:nth-of-type(2):checked~#carousel {
    --position: 2;
}
input:nth-of-type(3):checked~#carousel {
    --position: 3;
}
input:nth-of-type(4):checked~#carousel {
    --position: 4;
}
input:nth-of-type(5):checked~#carousel {
    --position: 5;
}
input:nth-of-type(6):checked~#carousel {
    --position: 6;
}
input:nth-of-type(7):checked~#carousel {
    --position: 7;
}
input:nth-of-type(8):checked~#carousel {
    --position: 8;
}
input:nth-of-type(9):checked~#carousel {
    --position: 9;
}
input:nth-of-type(10):checked~#carousel {
    --position: 10;
}
input:nth-of-type(11):checked~#carousel {
    --position: 11;
}


</style>