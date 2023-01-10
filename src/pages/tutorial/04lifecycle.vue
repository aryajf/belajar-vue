<template>
    <div>
        <h1>Belajar Lifecycle</h1>
        <p id="tesnya">Tesss</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nama: 'Bang Messi'
            }
        },
        created(){
            // saat layar masih putih, cocok untuk manipulasi data contoh ambil dan taruh data API
            console.log('CREATED')
            console.log(this.nama)
            this.nama = "Black Messi"
            console.log(this.nama)
        },
        mounted(){
            // saat semua tag html muncul
            console.log('MOUNTED')
            document.getElementById('tesnya').innerHTML = 'WOOW'
        }
    }
</script>