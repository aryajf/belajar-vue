<template>
    <div>
        <h1 title="halo kawan kawan">Halo Kawan</h1>
        <h2>{{ nama2 }}</h2>
        <p>{{ nama }}</p>
        <!-- TWO WAY DATA BINDING -->
        <input v-model="nama" />
        <hr>
        <button @click="ubahPasangan()">ganti pacar</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            nama: 'jiki',
            nama2: 'dea'
            }
        },
        methods:{
            ubahPasangan(){
            this.nama2='sukiem'
            console.log('coba')
            }
        }
    }
</script>