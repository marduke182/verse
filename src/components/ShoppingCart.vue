<template>
  <div class="ShoppingCart">
    <router-link to="/shopping">
      <img :src="shapeUrl" alt="Shopping Cart" class="ShoppingCart--image">{{numOfItems}}
    </router-link>
  </div>
</template>

<script>
  import shapeUrl from '../assets/shape.png';

  export default {
    name: 'ShoppingCart',
    data() {
      return {
        shapeUrl,
      }
    },
    computed: {
      numOfItems () {
        return this.$store.default.getters.numOfItems;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ShoppingCart {
    display: flex;
  }
  .ShoppingCart--image {
    height: 20px;
    margin-right: 10px;
  }
</style>
