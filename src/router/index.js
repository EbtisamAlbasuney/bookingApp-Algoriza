import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/activities",
      name: "Activities",
      component: () => import("../views/Activities.vue"),
    },
    {
      path: "/discover",
      name: "Discover",
      component: () => import("../views/Discover.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/availableRooms",
      name: "AvailableRooms",
      component: () => import("../views/AvailableRooms.vue"),
    },
    {
      path: "/secureReservation",
      name: "SecureReservation",
      component: () => import("../views/SecureReservation.vue"),
    },
  ],
});

export default router;