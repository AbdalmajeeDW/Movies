<template>
  <div>
    <CardFilters :dataFilter="getMoviesTrends" />
  </div>
</template>
<script>
import CardFilters from '../../CardFilter/CardFilters.vue'
export default {
  components: { CardFilters },
  created() {
    this.$store.dispatch('movies/getMoviesTrends')
  },
  computed: {
    getMoviesTrends() {
      return this.$store.state.movies.moviesTrends
    },

  },
}
</script>
