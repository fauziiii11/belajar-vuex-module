import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue";
import UserCreate from "../views/user/Create.vue";
import Quran from "../views/Quran.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Kategori from "../views/Kategori.vue";
import Login from "../views/Login.vue";
import store from "../store";
import Filter from "../views/Filter.vue";


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
        meta: { requireLogin: true},
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requireLogin: true},
    },
    {
        path: "/quran",
        name: "Quran",
        component: Quran,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/kategori/:kategori",
        name: "FilterKategori",
        component: Filter,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true},
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;