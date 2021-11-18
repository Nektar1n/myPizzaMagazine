<template>
  <div class="wrapper">
    <router-link to="/order/form"
      ><div class="formOrder" @click="sell = item_slider">
        <img class="imagePizza" :src="item_slider.url" alt="sellurl" />
        <router-link to="/"
          ><button @click="viewNullClicked" class="extbtn">
            ☒
          </button></router-link
        >
        <span class="attributes">{{ item_slider.name }}</span>
        <br />
        <span class="attributes">price:{{ item_slider.price }}</span>
      </div>
    </router-link>
    <order-form v-if="sell" :form_slider="item_slider" @viewNull="viewNull" />
  </div>
</template>

<script>
import orderForm from "./order-form";
export default {
  name: "order-pizza",
  data() {
    return {
      sell: null,
    };
  },
  props: {
    item_slider: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    viewNullClicked() {
      this.$emit("viewNull", null);
    },
    viewNull() {
      this.sell = null;
    },
  },
  components: {
    orderForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formOrder {
  margin: 50px auto 0px auto;
  position: relative;
  top: 110%;
  width: 300px;
  height: 300px;
  background-color: darkgoldenrod;
  border: solid 2px grey;
  transition: all 0.2s ease;
}
.formOrder:hover {
  border: solid 2px darkolivegreen;
  background-color: burlywood;
}
.formOrder p {
  position: absolute;
  font-size: 20px;
  top: 230px;
}

.extbtn {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -5px;
  font-size: 30px;
  padding: 0;
  transition: all 0.5s ease;
}
.extbtn:hover {
  color: azure;
}

.imagePizza {
  width: 250px;
  height: 200px;
  margin-top: 20px;
  margin-left: 20px;
}
.attributes {
  color: green;
  font-size: 20px;
  margin-left: 10%;
}
</style>
