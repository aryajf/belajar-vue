<template>
    <div class="container-fluid">
        <h1 class="my-3 text-center">{{keyword}} Movie List</h1>
        <h5 class="text-center">Total Movies: {{ totalMovies }}</h5>
        <div>
            <input type="text" class="w-100 my-3 form-control" placeholder="Search Here..." v-model="keyword">
        </div>
        <div>
            <loader></loader>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="movie in movies" :key="movie.imdbID">
                <div class="card mb-3">
                    <div class="card-header">
                        <img :src="movie.Poster" alt="Movie Image" class="w-100">
                    </div>
                    <div class="card-body">
                        <h4>{{ movie.Title }}</h4>
                        <p>Release Date: {{ movie.Year }}</p>
                        <hr>
                        <p>{{ movie.Type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import loader from '../../components/Loader.vue'
    export default{
        components:{
            loader
        },
        data(){
            return{
                movies: [],
                totalMovies: 0,
                keyword: ''
            }
        },
        watch:{
            keyword(value){
                console.log(value)
                this.fetchMovie()
            }
        },
        methods:{
            fetchMovie(){
                fetch(`http://www.omdbapi.com/?apikey=7836c7fe&s=${this.keyword}&page=1`).then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.movies = data.Search
                    this.totalMovies = data.totalResults
                })
            }
        }
    }
</script>