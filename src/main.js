import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import App from './App.vue'
import ItemsPage from './components/ItemsPage'
import ShoppingPage from './components/ShoppingPage'
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: ItemsPage,
  },
  {
    // UserPosts will be rendered inside User's <router-view>
    // when /user/:id/posts is matched
    path: '/shopping',
    component: ShoppingPage
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
});


new Vue({
  render: h => h(App),
  router,
  store: require('./store'),
}).$mount('#app');
