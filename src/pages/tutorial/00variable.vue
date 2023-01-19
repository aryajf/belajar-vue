<template>
    <div>
        <h1>Hai {{ name }} dan {{ nama }}</h1>
        <h1 v-once>Hai {{ name }} dan {{ nama }}</h1>
        <hr>
        <p>Wassup <span v-html="name"></span></p>
        <button @click="change">ubah</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    let nama = ref('adot')
    let name = ref('adit')

    function change(){
        nama.value = 'aditya'
        name.value = 'Megawati'
    }
</script>