
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/menu/:restaurantid",
      name: "menu-list",
      component: () => import("./components/Menu")
    },
    {
      path: "/meal",
      name: "meal",
      component: () => import("./components/Meal")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("./components/Order")
    }
  ]
});

