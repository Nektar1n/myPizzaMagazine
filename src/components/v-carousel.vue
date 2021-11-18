<template>
  <div class="v-carousel">
    <VueSlickCarousel class="carousel" v-bind="settings">
      <div
        class="carousel__item"
        v-for="(item, i) in carousel_data"
        :key="i"
        @click="(sell = item), $router.push({ name: 'order' })"
      >
        {{ item.name }}
      </div>
    </VueSlickCarousel>
    <order-pizza v-if="sell" :item_slider="sell" @viewNull="viewNull" />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import orderPizza from "./order-pizza";

export default {
  name: "v-carousel",
  data() {
    return {
      settings: {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        arrows: true,
        dots: true,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      sell: null,
    };
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VueSlickCarousel,
    orderPizza,
  },
  methods: {
    viewNull() {
      this.sell = null;
    },
    mediaFunc() {
      const mediaQuery = window.matchMedia("(max-width: 900px)");
      function handleTabletChange(e) {
        if (e.matches) {
          console.log("hey");
        }
      }
      mediaQuery.addListener(handleTabletChange);
      handleTabletChange(mediaQuery);
    },
  },
  mounted() {
    this.mediaFunc();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-carousel {
  justify-content: center;
  position: relative;
  width: 50%;
  margin: 0 auto;
  min-width: 400px;
}

.carousel {
  border: 2px solid black;
  padding-right: 20px;
  padding-left: 18px;
  text-align: center;
  align-items: center;
  background-color: burlywood;
}
.carousel__item {
  margin: 10px 0;
  box-sizing: border-box;
  background-color: green;
  height: 200px;
  border: solid 2px gray;
  cursor: pointer;
  overflow: hidden;
  font-size: 30px;
  align-items: center;
  padding-top: 60px;
  transition: all 0.2s ease;
}
.carousel__item:hover {
  background-color: #42b983;
}

@media (max-width: 1200px) {
  .carousel__item {
    font-size: 20px;
  }
}
</style>
