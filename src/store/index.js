import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/user";
import quran from "./modules/quran";
import product  from "./modules/product";
import kategori from "./modules/kategori";
import auth from "./modules/auth";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        quran,
        product,
        kategori,
        auth,
        
    },
});

export default store;