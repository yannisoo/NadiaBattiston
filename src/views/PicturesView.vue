<script>
export default {
    mounted() {
        const track = this.$refs.track;
        const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        const handleOnMove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage;
            track.animate({
                transform: `translate(${(nextPercentage * 2) + 50}%)`
            }, { duration: 1200, fill: "forwards" });
            const images = [
                this.$refs.image1,
                this.$refs.image2,
                this.$refs.image3,
                this.$refs.image4,
                this.$refs.image5,
                this.$refs.image6,
                this.$refs.image7,
                this.$refs.image8,
                this.$refs.image9,
                this.$refs.image10,
            ];
            for (const image of images) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }

        /* -- Had to add extra lines for touch events -- */

        window.onmousedown = e => handleOnDown(e);

        window.ontouchstart = e => handleOnDown(e.touches[0]);

        window.onmouseup = e => handleOnUp(e);

        window.ontouchend = e => handleOnUp(e.touches[0]);

        window.onmousemove = e => handleOnMove(e);

        window.ontouchmove = e => handleOnMove(e.touches[0]);
    },
};


</script>


<template>
    <div id="holder">
        <div ref="track" id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            <img ref="image1" v-bind:src="'/images/5web.jpg'" class="image" draggable="false">
            <img ref="image2" v-bind:src="'/images/14web.jpg'" class="image" draggable="false">
            <img ref="image3" v-bind:src="'/images/2web.jpg'" class="image" draggable="false">
            <img ref="image4" v-bind:src="'/images/4web.jpg'" class="image" draggable="false">
            <img ref="image5" v-bind:src="'/images/6web.jpg'" class="image" draggable="false">
            <img ref="image6" v-bind:src="'/images/7web.jpg'" class="image" draggable="false">
            <img ref="image7" v-bind:src="'/images/8web.jpg'" class="image" draggable="false">
            <img ref="image8" v-bind:src="'/images/9web.jpg'" class="image" draggable="false">
            <img ref="image9" v-bind:src="'/images/3web.jpg'" class="image" draggable="false">
            <img ref="image10" v-bind:src="'/images/13web.jpg'" class="image" draggable="false">
        </div>
    </div>
</template>


<style scoped>
#holder {
    height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

#image-track {
    display: flex;
    gap: 4vmin;
    width: 100%;
    transform: translate(50%);
    user-select: none;
}

#image-track>.image {
    width: 30vh;
    height: 56vh;
    object-fit: cover;
    object-position: 100% center;
}
</style>