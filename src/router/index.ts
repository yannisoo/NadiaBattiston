import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PicturesView from "../views/PicturesView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pictures",
      name: "pictures",
      component: PicturesView,
    },
    {
      path: "/studio",
      name: "studio",
      component: () => import("../views/StudioView.vue"),
    }
  ],
});

export default router;
