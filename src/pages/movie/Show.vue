<template>
    <div class="container">
        <div class="my-3">
            <div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <img v-if="movie.Poster" :src="movie.Poster" :alt="movie.Title" class="w-100">
                    </div>
                    <div class="col-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                        <h1 class="text-center mb-3">{{ movie.Title }}</h1>
                        <div>Tahun: {{ movie.Year }}</div>
                        <div>Rated: {{ movie.Rated }}</div>
                        <div>Tanggal Rilis: {{ movie.Released }}</div>
                        <div>Durasi: {{ movie.Runtime }}</div>
                        <div>Genre: {{ movie.Genre }}</div>
                        <div>Direktur: {{ movie.Director }}</div>
                        <div>Penulis: {{ movie.Writer }}</div>
                        <div>Aktor: {{ movie.Actors }}</div>
                        <div>Sinopsis: {{ movie.Plot }}</div>
                        <div>Bahasa: {{ movie.Language }}</div>
                        <div>Wilayah Asal: {{ movie.Country }}</div>
                        <div>Nominasi: {{ movie.Awards }}</div>
                        <div>Ratings: 
                            <ul>
                                <li v-for="rating in movie.Ratings">
                                    {{ rating.Source }} - {{ rating.Value }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    created(){
        console.log(this.$route.params.id)
        fetch(`http://www.omdbapi.com/?apikey=7836c7fe&i=${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.movie = data
        }).catch(error => {
            console.log(error)
            this.error = error
        })
    },
    data(){
        return{
            movie: null,
            error: false
        }
    }
}
</script>