<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">AL-QURAN</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">nomor</th>
                    <th class="px-4 py-2">Nama</th>
                    <th class="px-4 py-2">Arti</th>
                    <th class="px-4 py-2">Ayat</th>
                </tr>
            </thead>
             <tbody>
                <tr v-for="quran in getQuran" :key="quran.nomor">
                    <td class="border px-4 py-2">{{ quran.nama }}</td>
                    <td class="border px-4 py-2">{{ quran.arti }}</td>
                    <td class="border px-4 py-2">{{ quran.type }}</td>
                    <td class="border px-4 py-2">{{ quran.ayat }}</td>
                    
                </tr>
             </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('quran', ['getQuran']),
    },
    methods: {
        ...mapActions('quran', ['fetchQuran']),
    },
    created() {
        this.fetchQuran();
    }
}
</script>