<template>
    <div>
        <h1 v-if="status">Belajar if else vue</h1>
        <h1 v-else>Ini kalau status false</h1>
        <button @click="changeStatus()">Ubah status ke false</button>
        <button @click="toggleStatus()">Ubah status ke kebalikannya</button>
        <hr>
        <div v-if="tiket == 1">Jono masuk</div>
        <div v-else-if="tiket == 2">Wendi masuk</div>
        <div v-else-if="tiket == 3">Toto masuk</div>
        <div v-else>Pajar masuk</div>
        <div>{{ tiket }}</div>
        <input type="number" v-model="tiket">
    </div>
</template>

<script>
    export default{
        data(){
            return{
                status: true,
                tiket: 1
            }
        },
        methods:{
            changeStatus(){
                this.status = false
            },
            toggleStatus(){
                this.status = !this.status
            }
        }
    }
</script>