import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("@/views/Discover.vue"),
    meta: {
      title: "Discover",
    },
  },
  {
    path: "/activities",
    name: "activities",
    component: () => import("@/views/Activites.vue"),
    meta: {
      title: "Activities",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/ABout.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/searchResults",
    name: "searchResults",
    component: () => import("@/views/SearchResults"),
    meta: {
      title: "searchResults",
    },
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/sendData"),
    meta: {
      title: "sendData",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
    meta: {
      title: "login",
    },
  },
  {
    path: "/myTrips",
    name: "MyTrips",
    component: () => import("../views/MyTrips.vue"),
    meta: {
      title: "MyTrips",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/availableRooms",
    name: "AvailableRooms",
    component: () => import("../views/AvailableRooms.vue"),
    meta: {
      title: "AvailableRooms",
    },
  },
  {
    path: "/secureReservation",
    name: "SecureReservation",
    component: () => import("../views/SecureReservation.vue"),
    meta: {
      title: "SecureReservation",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
