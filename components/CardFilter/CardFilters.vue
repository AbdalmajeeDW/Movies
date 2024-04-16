  <template lang="">
  <div>
    <div class="home">
      <div class="container movies">
        <div id="movies-grid" class="movies-grid">
          <div class="movie" v-for="(movie, index) in dataFilter" :key="index">
            <div class="movie-img">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                alt=""
              />
              <p class="review">
                {{ movie.vote_average }}
              </p>
              <p class="overvieww">
                {{ movie.overview }}
              </p>
            </div>
            <div class="infoF">
              <p class="release">
                Released:
                {{
                  new Date(movie.release_date).toLocaleDateString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                }}
              </p>
              <div @click="() => movieById(movie.id)" type="">
                <NuxtLink
                  class="button button-light"
                  :to="{ name: 'movies-movieid' }"
                >
                  Get Morec
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataFilter: Array,
  },
  methods: {
    movieById(id) {
      this.$store.dispatch("movies/getMovieById", id);
    },
  },
};
</script>
