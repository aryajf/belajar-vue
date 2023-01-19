<template>
    <div class="container-fluid">
        <h1 class="my-3 text-center">{{keyword}} Movie List</h1>
        <h5 class="text-center">Total Movies: {{ totalMovies }}</h5>
        <div>
            <input type="text" class="w-100 my-3 form-control" placeholder="Search Here..." v-model="keyword">
        </div>
        <div v-if="loading">
            <loader></loader>
        </div>
        <div v-else>
            <div v-if="error">
                <div class="alert alert-danger">{{ error }}</div>
            </div>
            <div v-else class="row">
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="movie in movies" :key="movie.imdbID">
                    <div class="card mb-3">
                        <div class="card-header">
                            <img :src="movie.Poster" alt="Movie Image" class="w-100">
                        </div>
                        <div class="card-body">
                            <h4><router-link :to="'movie/'+movie.imdbID">{{ movie.Title }}</router-link></h4>
                            <p>Release Date: {{ movie.Year }}</p>
                            <hr>
                            <p>{{ movie.Type }}</p>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example" class="d-flex justify-content-center my-4" v-if="totalMovies > 10">
                    <ul class="pagination">
                        <li class="page-item"><a @click="page--" class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a @click="page++" class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
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
                keyword: '',
                loading: false,
                error: false,
                page: 1
            }
        },
        watch:{
            keyword(value){
                this.page = 1
                this.fetchMovie()
            },
            page(value){
                if(value <= 0){
                    this.page = 1
                }
                this.fetchMovie()
            }
        },
        methods:{
            fetchMovie(){
                this.loading = true
                fetch(`http://www.omdbapi.com/?apikey=7836c7fe&s=${this.keyword}&page=${this.page}`).then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data.Response == 'True'){
                        this.error = false
                        this.movies = data.Search
                        this.totalMovies = data.totalResults
                    }else{
                        this.error = data.Error
                    }
                    this.loading = false
                })
            }
        }
    }
</script>