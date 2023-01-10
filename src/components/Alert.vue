<template>
    <div class="alert" :class="udin">{{ text }}, {{ nama }}</div>
</template>

<script>
export default{
    // Data isinya sudah ditetapkan, sedangkan props isinya berasal dari pengirim / emaknya
    data(){
        return{
            nama: 'kepin masuk'
        }
    },
    props:{
        text:{
            type: String,
            default: ''
        },
        udin:{
            type: String,
            default: ''
        }
    }
}
</script>