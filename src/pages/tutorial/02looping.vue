<template>
    <div>
        <h1>Tutorial Looping</h1>
        <ul>
            <li v-for="teacher in teachers" :key="teacher.id">{{ teacher.nama }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                teachers: [
                    {
                        id:1,
                        nama: 'Bang Blax',
                        alamat: 112124,
                        sekolah: 'fiefh'
                    },
                    {
                        id:2,
                        nama: 'Yakul',
                        alamat: 112124,
                        sekolah: 'fiefh'
                    },
                    {
                        id:3,
                        nama: 'Kapir',
                        alamat: 112124,
                        sekolah: 'fiefh'
                    },
                ]
            }
        }
    }
</script>