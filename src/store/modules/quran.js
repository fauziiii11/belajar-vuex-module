import axios from "axios";

const quran = {
    namespaced: true,
    state : {
        quranData: [],
    },
    getters: {
        getQuran: (state) => state.quranData,
    },
    actions: {
        async fetchQuran ({ commit }) {
            try {
                const data = await axios.get(
                    "https://al-quran-8d642.firebaseio.com/data.json?print=pretty"
                );
                commit("SET_QURAN", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_QURAN(state, quran) {
            state.quranData = quran;
        },
    },
};

export default quran;