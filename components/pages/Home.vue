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
    <!-- <Loading v-if="!this.$store.state.movies.currentState" /> -->
    <CardFilters :data-filter="allMovies" />
    <CardFilters :data-filter="searchMovies" />
  </div>
</template>
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
  fetchDelay: 1000,
  methods: {
    search() {
      this.$store.dispatch("movies/searchMovies", this.searching);
      this.searching = "";
      this.$store.dispatch("movies/removeAllMovies");
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
    searchMovies() {
      return this.$store.state.movies.searchAllMovies;
    },
  },
  components: { Loading, CardFilters },
};
</script>
  
