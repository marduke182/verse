<template>
  <section class="ItemShoppingCartCard">
    <div class="ItemShoppingCartCard---imageContainer">
      <img class="ItemShoppingCartCard---image" :src="picture" :alt="name">
    </div>
    <div class="ItemCard--name">
      <p><strong>{{name}}</strong></p>
    </div>
    <div class="ItemCard--quantity">
      <span v-on:click="removeItemInCart">-</span>
      <p class="ItemCard--quantityValue"><strong>{{quantity}}</strong></p>
      <span v-on:click="addItemToCart">+</span>
    </div>
    <div class="ItemShoppingCartCard-price">{{total}} <CurrencySymbol :currency="price.currency" /></div>
    <div class="ItemShoppingCartCard-remove"></div>
  </section>
</template>

<script>
  import CurrencySymbol from './CurrencySymbol';
  export default {
    name: 'ShoppingCart',
    components: {
      CurrencySymbol: CurrencySymbol,
    },
    props: {
      picture: String,
      name: String,
      quantity: Number,
      price: Object,
    },
    computed: {
      total() {
        return this.quantity * this.price.value;
      }
    },
    methods: {
      addItemToCart() {
        this.$store.default.dispatch('addItem', { picture: this.picture, name: this.name, price: this.price });
      },
      removeItemInCart() {
        this.$store.default.dispatch('removeItem', { picture: this.picture, name: this.name, price: this.price });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ItemShoppingCartCard {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .ItemShoppingCartCard > div {
    flex: 1;
  }

  .ItemShoppingCartCard---imageContainer {
    width: 120px;
  }

  .ItemShoppingCartCard---image {
    max-width: 100%;
    height: auto;
  }
  .ItemCard--quantity {
    display: flex;
    align-items: center;
  }

  .ItemCard--quantityValue {
    margin: 0 10px;
  }

</style>
