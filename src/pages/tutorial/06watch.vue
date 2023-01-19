<template>
    <div>
        <div class="alert alert-danger my-3 text-center fw-bold" v-if="kataJorok">KETIKANNYA TOLONG DIJAGA YAH.</div>
        <input type="text" class="form-control mt-2" @keyup.enter="tambahMenu()" v-model="inputMenu">
        <h1>Menu</h1>
        Menu yang ingin ditambah <b>{{ inputMenu }}</b>
        <ul>
            <li v-for="list in lists">{{ list }}</li>
        </ul>
    </div>
</template>

<script setup>
    import {ref, watch} from 'vue'
    let kataJorok = ref(false)
    let inputMenu = ref('')
    let lists = ref([])

    watch(inputMenu, (current, before) => {
        console.log('CURRENT')
        console.log(current)
        console.log('BEFORE')
        console.log(before)
        
        if(current.toLowerCase() == 'kon'){
            kataJorok.value = true
        }else{
            kataJorok.value = false
        }
    })

    function tambahMenu(){
        if(kataJorok.value == false){
            lists.value.push(inputMenu.value)
            inputMenu.value = ''
        }
    }
</script>