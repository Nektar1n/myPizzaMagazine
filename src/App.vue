<template>
  <div id="app">
    <div class="logo">Logo image here</div>
    <h1 id="titleCards">Choose your pizza</h1>
    <v-carousele :carousel_data="pizza" />
  </div>
</template>

<script>
import vCarousele from "./components/v-carousel";

export default {
  data() {
    return {
      pizza: [
        {
          name: "Pepperoni",
          price: 999,
          url: "https://toopizza.ru/wp-content/uploads/2021/06/1081.jpg",
        },
        {
          name: "mozzarella",
          price: 500,
          url: "https://static.daru-dar.org/s1024/02/03/c9/b6/c9b6735d0ddd141783d5d8a04b38f1ee5434d83d.jpg",
        },
        {
          name: "morgaritta",
          price: 400,
          url: "https://i.pinimg.com/originals/f5/9b/7a/f59b7a3f1735638b6fb8d3b4e02197fd.jpg",
        },
        {
          name: "donnaMonna",
          price: 9999,
          url: "https://im0-tub-ru.yandex.net/i?id=03092936996e432d58a3f5c5fa1b6fcd-l&ref=rim&n=13&w=640&h=640",
        },
        {
          name: "4 cheeses",
          price: 500,
          url: "https://academy.oetker.ru/upload/iblock/cf7/cf763fb2e4b643967d7c74d341c3c332.jpg",
        },
        {
          name: "mushrooms",
          price: 200,
          url: "https://pbs.twimg.com/media/Dy8eGWyVAAEyNyU.jpg",
        },
        {
          name: "morgaritta",
          price: 400,
          url: "https://i.pinimg.com/originals/f5/9b/7a/f59b7a3f1735638b6fb8d3b4e02197fd.jpg",
        },
        {
          name: "donnaMonna",
          price: 9999,
          url: "https://im0-tub-ru.yandex.net/i?id=03092936996e432d58a3f5c5fa1b6fcd-l&ref=rim&n=13&w=640&h=640",
        },
        {
          name: "Pepperoni",
          price: 999,
          url: "https://toopizza.ru/wp-content/uploads/2021/06/1081.jpg",
        },
        {
          name: "mozzarella",
          price: 500,
          url: "https://static.daru-dar.org/s1024/02/03/c9/b6/c9b6735d0ddd141783d5d8a04b38f1ee5434d83d.jpg",
        },
        {
          name: "morgaritta",
          price: 400,
          url: "https://i.pinimg.com/originals/f5/9b/7a/f59b7a3f1735638b6fb8d3b4e02197fd.jpg",
        },
        {
          name: "donnaMonna",
          price: 9999,
          url: "https://im0-tub-ru.yandex.net/i?id=03092936996e432d58a3f5c5fa1b6fcd-l&ref=rim&n=13&w=640&h=640",
        },
        {
          name: "Pepperoni",
          price: 999,
          url: "https://toopizza.ru/wp-content/uploads/2021/06/1081.jpg",
        },
        {
          name: "mozzarella",
          price: 500,
          url: "https://static.daru-dar.org/s1024/02/03/c9/b6/c9b6735d0ddd141783d5d8a04b38f1ee5434d83d.jpg",
        },
        {
          name: "morgaritta",
          price: 400,
          url: "https://i.pinimg.com/originals/f5/9b/7a/f59b7a3f1735638b6fb8d3b4e02197fd.jpg",
        },
        {
          name: "donnaMonna",
          price: 9999,
          url: "https://im0-tub-ru.yandex.net/i?id=03092936996e432d58a3f5c5fa1b6fcd-l&ref=rim&n=13&w=640&h=640",
        },
      ],
    };
  },
  name: "App",
  components: {
    vCarousele,
  },
};
</script>

<style>
body {
  background-color: gray;
  /*height: 100vh;*/
  /*width: 100vw;*/
}
#app {
  /*justify-content: center;*/
  /*position: relative;*/
  /*width: 50%;*/
}
#titleCards {
  /*position: absolute;*/
  /*left: 50%;*/
  position: relative;
  text-align: center;
}
/*.slider{*/
/*position: absolute;*/
/*  width: 100%;*/
/*  margin-left: 50%;*/
/*  margin-top: 20%;*/
/*}*/
.logo {
  font-size: 30px;
  width: 210px;
  height: 50px;
  background-color: coral;
}
</style>
