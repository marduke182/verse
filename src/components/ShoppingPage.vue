<template>
  <section class="ShoppingPage">
    <header>
      <h1>Shopping</h1>
    </header>
    <div class="ShoppingPage--itemsInCart">
      <div class="ShoppingPage-itemInCart" v-for="item in itemsInCart" :key="item.name">
        <ItemShoppingCartCard :name="item.name" :picture="item.picture" :price="item.price" :quantity="item.quantity"></ItemShoppingCartCard>
      </div>
    </div>
    <footer class="ShoppingPage-footer">
      <router-link to="/">Continue Shopping</router-link>
      <div class="ShoppingPage-total">{{total}} <CurrencySymbol :currency="currency" /></div>
    </footer>
  </section>
</template>

<script>
  import ItemShoppingCartCard from './ItemShoppingCartCard.vue';
  import CurrencySymbol from './CurrencySymbol';

  export default {
    name: 'ItemsPage',
    components: {
      'ItemShoppingCartCard': ItemShoppingCartCard,
      'CurrencySymbol': CurrencySymbol,
    },
    computed: {
      itemsInCart () {
        return this.$store.default.getters.itemsInCart;
      },
      total () {
        return this.$store.default.getters.total;
      },
      currency () {
        const firstItem = this.$store.default.getters.itemsInCart[0];
        if (firstItem) {
          return firstItem.price.currency;
        }
        return '';
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ShoppingPage--itemsInCart {
    display: flex;
    flex-direction: column;
  }

  .ShoppingPage-itemInCart {
    width: 80%;
  }

  .ShoppingPage-footer {
    display: flex;
    justify-content: space-around;
  }
</style>
