export default {
  state: {
    items: [],
  },
  getters: {
    numOfItems: state => state.items.reduce((quantity, itemInCart) => quantity + itemInCart.quantity, 0),
    itemsInCart: state => state.items,
    total: state => state.items.reduce((total, itemInCart) => total + (itemInCart.quantity * itemInCart.price.value), 0),
    getItemInCart: state => name => state.items.find(item => item.name === name),
  },
  mutations: {
    add (state, payload) {
      const itemInCart = state.items.find(item => item.name === payload.name);
      if (!itemInCart) {
        state.items.push({...payload, quantity: 1});
        return;
      }

      itemInCart.quantity++;
    },
    remove (state, payload) {
      const itemInCartIndex = state.items.findIndex(item => item.name === payload.name);
      if (itemInCartIndex === -1) {
        return;
      }

      const itemInCart = state.items[itemInCartIndex];
      itemInCart.quantity--;

      if (itemInCart.quantity <= 0) {
        state.items.splice(itemInCartIndex, 1);
      }
    }
  },
  actions: {
    addItem (context, item) {
      context.commit('add', item);
    },
    removeItem (context, item) {
      context.commit('remove', item);
    }
  }
}