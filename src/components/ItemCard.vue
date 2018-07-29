<template>
  <section class="ItemCard">
    <header>
      <img class="ItemCard--image" :src="picture" :alt="name">
    </header>
    <div class="ItemCard--content">
      <p><strong>{{name}}</strong></p>
      <p><strong>{{price.value}} <CurrencySymbol :currency="price.currency" /></strong></p>
    </div>
    <footer class="ItemCard--footer">
      <button v-on:click="addItemToCart">Add Cart</button>
      <button v-on:click="removeItemInCart">Close</button>
    </footer>
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
      price: Object,
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
  .ItemCard--image {
    width: 60%;
  }
</style>
