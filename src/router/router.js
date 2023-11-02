import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/:catchAll(.*)",
    //   component: Notfound,
    // },
  ],
});

export default router;
