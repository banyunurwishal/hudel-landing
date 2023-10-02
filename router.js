import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/index.vue";
import Legal from "@/pages/legal.vue";
import Blog from "@/pages/blog.vue";
import Community from "@/pages/community.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/legal",
        component: Legal,
      },
      {
        path: "/blog",
        component: Blog,
      },
      {
        path: "/community",
        component: Community,
      },
    ],
  });
}
