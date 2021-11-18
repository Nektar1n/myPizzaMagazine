<template>
  <div class="orderForm">
    <div class="pizzaOrdering">
      <div class="logo">Logo image here</div>
      <router-link to="/order"
        ><button @click="viewNull" class="extbtn">☒</button></router-link
      >
      <h1 id="make">Make order</h1>
      <form action="">
        <h1 id="name">{{ form_slider.name }}</h1>
        <h1 id="price">{{ form_slider.price }}</h1>
        <div class="adress">
          <h2 id="title">adress</h2>
          <div class="placeholders">
            <input
              type="text"
              class="inputs"
              name="street"
              placeholder="street"
            />
            <input
              type="text"
              class="inputs"
              name="house"
              placeholder="house"
            />
            <input type="text" class="inputs" name="flat" placeholder="flat" />
            <button class="OrderBtn">Make order</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-form",
  data() {
    return {};
  },
  props: {
    form_slider: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    viewNull() {
      this.$emit("viewNull", null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#make {
  text-align: center;
}
.extbtn {
  background: none;
  border: none;
  cursor: pointer;
  right: 0;
  top: 0;
  font-size: 30px;
  padding: 0;
  transition: all 0.5s ease;
  position: absolute;
}
.extbtn:hover {
  color: wheat;
}
.orderForm {
  background-color: green;
  position: absolute;
  right: 5px;
  margin: 50px auto 0px auto;
  height: 370px;
  width: 100%;
}

.placeholders {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.placeholders > input {
  height: 40px;
}
.OrderBtn {
  position: absolute;
  bottom: 2px;
  right: 2px;
  height: 40px;
}
.adress {
  display: flex;
  width: 100%;
}
#title {
  width: 20%;
  font-size: 40px;
  margin-top: 0;
  margin-left: 10px;
}
#price {
  position: absolute;
  top: 110px;
  left: 210px;
}
#name {
  margin-left: 10px;
}
@media (max-width: 1100px) {
  .orderForm {
    background-color: burlywood;
    margin-left: 20px;
  }
  #title {
    font-size: 20px;
  }
}
@media (max-width: 530px) {
  .orderForm {
    background-color: aqua;
  }
  #price {
    left: 220px;
  }
}
</style>
