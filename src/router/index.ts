import type { RouteRecordRaw, RouterScrollBehavior } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/studio",
    name: "studio",
    component: () => import("../views/StudioView.vue"),
  },
  {
    path: "/a-propos",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/photos",
    name: "pictures",
    component: () => import("../views/PicturesView.vue"),
  },
  {
    path: "/mentions-legales",
    name: "legal",
    component: () => import("../views/LegalView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFoundView.vue"),
  },
];

export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) return savedPosition;
  if (to.hash) return { el: to.hash, behavior: "smooth" };
  return { top: 0 };
};
