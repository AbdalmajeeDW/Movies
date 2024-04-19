<template>
  
  <div class="home">
  
    <div class="search">
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
      <span v-if="loader"class="loader"></span>

    
    <CardFilters :data-filter="allMovies"  />
    <CardFilters :data-filter="searchMovies" />
    
    
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
      console.log(this.loader);
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
    loader() {
      return this.$store.state.movies.loader;
    },
  },
  components: { Loading, CardFilters },
};
</script>
  
