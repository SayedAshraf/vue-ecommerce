import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AdminRoute from "../router/Admin/index";
//import EndUserRoute from "../views/EndUser/index";

Vue.use(VueRouter);
const BaseRouters = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "About",
    component: About,
  },
];
const routes = [...BaseRouters, ...AdminRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
