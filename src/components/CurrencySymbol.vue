<template>
  <span>{{symbol}}</span>
</template>

<script>
  function getSymbolFromCurrency(currency) {
    switch (currency) {
      case 'EUR':
        return '€';
      default:
        return '';
    }
  }

  export default {
    name: 'CurrencySymbol',
    props: {
      currency: String
    },
    data() {
      return {
        symbol: getSymbolFromCurrency(this.currency),
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
