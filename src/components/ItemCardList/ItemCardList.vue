<template>
  <section class="ItemCardList">
    <div class="ItemCardList-items">
      <div class="ItemCardList-item" v-for="item in items" :key="item.name">
        <ItemCard :name="item.name" :picture="item.picture" :price="item.price"></ItemCard>
      </div>
    </div>
    <footer class="ItemCardList--navigation">
      <span class="ItemCardList-left"></span>
      <span>Previous</span>
      <span>Next</span>
      <span class="ItemCardList-right"></span>
    </footer>
  </section>
</template>

<script>
  import ShoppingCart from '../ShoppingCart.vue';
  import ItemCard from '../ItemCard.vue';

  export default {
    name: 'ItemsPage',
    props: {
      items: Array,
    },
    components: {
      'ShoppingCart': ShoppingCart,
      'ItemCard': ItemCard,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ItemCardList {
    display: flex;
    flex-direction: column;
    margin: 12px;
  }

  .ItemCardList-items {
    display: flex;
  }

  .ItemCardList-item {
    width: 33%;
    display: flex;
    flex-direction: row;
  }

  .ItemCardList--navigation {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    width: 400px;
  }

  .ItemCardList-left {
    background-image: url("./←.png");
    height: 16px;
    width: 38px;
  }

  .ItemCardList-right {
    background-image: url("./←.png");
    height: 16px;
    width: 38px;
    transform: rotateY(180deg);

  }
</style>
