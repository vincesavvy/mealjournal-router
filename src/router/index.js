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
  },
  {
    path: "/forgot",
    name: "forgot you password",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/forgot.vue")
  },
  {
    path: "/pastmeals",
    name: "pastmeals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PastMeals.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
