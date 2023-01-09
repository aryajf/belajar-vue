<template>
    <div>
        <h1>Tutorial Lifecycle</h1>
        <p id="textnya">tessss</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                pesan: 'haloo'
            }
        },
        created(){
            // Dijalanin pas layar masih putih
            console.log(this.pesan)
        },
        mounted(){
            // Dijalanin pas layar udah nampil semua elemen html
            console.log(this.pesan)
            this.pesan = 'haii kawan'
            console.log(this.pesan)
            document.getElementById('textnya').innerHTML = 'wow'
        }
    }
</script>