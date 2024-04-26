<template>
  
  <div class="home ">
  <div class="container">
  
    <div class="search">
      <input
        style="border"
        label="Label"
        v-model="searching"
        prepend-icon="mdi-vuetify"
      />
      <button @click="search" class="tabs"><span class="mdi mdi-magnify"></span></button>
      <button @click="clear" class="tabs">Clear</button>
    </div>
    <div>
      <span v-if="loader"class="loader"></span>

    
    <CardFilters :data-filter="allMovies"  />
    <CardFilters :data-filter="searchMovies" />
    
    
    </div>
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
      loader:false,
    };
  },
  
  methods: {
    search() {
      this.loader=true;
      this.$store.dispatch("movies/searchMovies", this.searching);
      this.searching = "";
      this.$store.dispatch("movies/removeAllMovies");
      this.loader=false
    },
    clear() {
      this.$store.dispatch("movies/removeAllMovies");
      this.$store.dispatch("movies/getAllMovies");
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
  
