<template>
  <div class="col">
    <div class="single-movie container">
      <div class="movie-info">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${getById.poster_path}`"
            alt=""
          />
        </div>
        <div class="movie-content">
          <h1>
             <span>{{ getById.title }}</span>
          </h1>
          <p class="movie-fact tagline">
            <span>Tagline:</span> "{{ getById.tagline }}"
          </p>
          <p class="movie-fact">
            <span>Duration:</span> {{ getById.runtime }} minutes
          </p>
          <p class="movie-fact">
            <span>Overview:</span> {{ getById.overview }}
          </p>
        </div>
      </div>
      <div class="btn_single_movie">
      <NuxtLink class="button" :to="{ name: 'index' }"> Back </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movies-movieid",
  created() {
    console.log(this.$store.state.movies.FilmDetails, "mov");
  },
  computed: {
    getById() {
      return this.$store.state.movies.FilmDetails;
    },
  },
};
</script>