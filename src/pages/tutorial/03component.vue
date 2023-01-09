<template>
    <div>
        <alert text="Login" udin="alert-success"></alert>
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