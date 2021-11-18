<template>
  <div class="v-carousel-item"></div>
</template>

<script>
export default {
  name: "v-carousel-item",
  data() {
    return {};
  },
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
