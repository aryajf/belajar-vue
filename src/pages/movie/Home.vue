<template>
    <div class="container-fluid">
        <h1 class="my-3">Pokemon</h1>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card">
                    <div class="card-header">

                    </div>
                    <div class="card-body">
                        <h1>lorem ipsum</h1>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore debitis praesentium modi molestias harum corrupti sed nihil provident tenetur. Sunt alias iure rerum voluptate error assumenda fugiat, aliquam voluptatum.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                pokemons: []
            }
        },
        created(){
            fetch('http://www.omdbapi.com/?s=tom&apikey=7836c7fe')
            .then(response => response.json())
            .then(data => {console.log(data)})
        }
    }
</script>