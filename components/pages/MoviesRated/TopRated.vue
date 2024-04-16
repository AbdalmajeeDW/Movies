<template lang="">
<div>
  <CardFilters :dataFilter="TopRatedMovies"/>
</div>
</template>
<script>
import CardFilters from '../../CardFilter/CardFilters.vue'
export default {
  components: {
    CardFilters
  },
  created() {
    this.$store.dispatch('movies/getTopMoviesRated')
  },
  computed: {
    TopRatedMovies() {
      return this.$store.state.movies.TopRatedMovies
    }
  },
}
</script>

