<template>
    <div>
        <table border="1">

        </table>
        <alert text="Ganteng" udin="alert-success"></alert>
        <h1>Halo minna san</h1>
        <alert text="Logout" udin="alert-danger"></alert>
    </div>
</template>

<script>
import Alert from '../../components/Alert.vue'
export default{
    components:{
        Alert
    }
}
</script>