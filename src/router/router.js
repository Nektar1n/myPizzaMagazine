import VueRouter from "vue-router";
import vCarousel from "../components/v-carousel";
import orderPizza from "../components/order-pizza";
import orderForm from "../components/order-form";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: vCarousel,
      name: "v-carousel",
    },
    {
      path: "/order",
      component: orderPizza,
      name: "order",
    },
    {
      path: "/order/form",
      component: orderForm,
      name: "form",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 400, behavior: "smooth" };
    }
  },
});
