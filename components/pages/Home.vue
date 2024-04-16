<template>
  
  <div class="home">
    <div class="container search">
      <input
        style="border"
        @keyup.enter="search"
        label="Label"
        v-model="searching"
        prepend-icon="mdi-vuetify"
      />
      <button @click="clear" class="button">Clear</button>
    </div>
    <div>
    
    <div v-if="loading" class="centered">
      <div class="blob-1"></div>
      <div class="blob-2"></div>
    </div>
    <dir v-else>
    
    <CardFilters :data-filter="allMovies"  />
    <CardFilters :data-filter="searchMovies" />
    </dir>
    
    </div>
  </div>
</template>

<script>
import CardFilters from "../CardFilter/CardFilters.vue";
import Loading from "../Lodaing/Loading.vue";

export default {
  name: "IndexPage",
  created() {
    this.$store.dispatch("movies/getAllMovies");
    this.$store.dispatch("movies/getMoviesTrends");
  },
  data() {
    return {
      searching: "",
      sea: "",
    };
  },
  
  methods: {
    search() {
      this.$store.dispatch("movies/searchMovies", this.searching);
      this.searching = "";
      this.$store.dispatch("movies/removeAllMovies");
    },
    clear() {
      this.$store.dispatch("movies/removeAllMovies");
      this.$store.dispatch("movies/getAllMovies");
      console.log(this.loading);
    },
  },

  computed: {
    allMovies() {
      return this.$store.state.movies.allMovies;
    },
    loading() {
      return this.$store.state.movies.loading;
    },
    searchMovies() {
      return this.$store.state.movies.searchAllMovies;
    },
  },
  components: { Loading, CardFilters },
};
</script>
  
