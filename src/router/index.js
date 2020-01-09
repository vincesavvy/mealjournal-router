import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/landing",
    name: "landing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/landing.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
