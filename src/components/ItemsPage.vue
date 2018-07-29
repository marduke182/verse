<template>
  <section class="ItemPage">
    <header class="ItemPage--header">
      <h1 class="ItemPage--title">Kitchen</h1>
      <ShoppingCart />
    </header>
    <ItemCardList :items="items" />
  </section>
</template>

<script>
  import Axios from 'axios';
  import ShoppingCart from './ShoppingCart.vue';
  import ItemCardList from './ItemCardList/ItemCardList.vue';

  export default {
    name: 'ItemsPage',
    components: {
      'ShoppingCart': ShoppingCart,
      'ItemCardList': ItemCardList,
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchItems()
    },
    data() {
      return {
        loading: false,
        items: [{
          "name": "Ethiopia Reko",
          "price": { "value": 590, "currency": "EUR" },
          "picture": "https://verse-frontend-test.firebaseapp.com/pictures/p_1.png"
        },
          {
            "name": "Guatemala San José",
            "price": { "value": 850, "currency": "EUR" },
            "picture": "https://verse-frontend-test.firebaseapp.com/pictures/p_2.png"
          },
          {
            "name": "Mexico El Triungo",
            "price": { "value": 1050, "currency": "EUR" },
            "picture": "https://verse-frontend-test.firebaseapp.com/pictures/p_3.png"
          }]
      }
    },
    methods: {
      async fetchItems() {
        const response = await Axios.get('https://verse-frontend-test.firebaseapp.com/items.json');
        this.items = response.data;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ItemPage--header {
    display: flex;
    align-items: center;
    margin: 0 2%;
  }
  .ItemPage--title {
    flex: 1
  }
</style>
