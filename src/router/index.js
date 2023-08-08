import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Quran from "../views/Quran.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
    },
    {
        path: "/quran",
        name: "Quran",
        component: Quran,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;