<template>
  <v-app :class="model === true ? 'app-dark' : 'app-light'">
    <Drawer
      :title-page="
        $route.path === '/'
          ? 'The All Movies'
          : $route.path === '/moviesTrends/trends'
          ? 'Trending'
          : $route.path === '/bestMoviesRated/topRated'
          ? 'Top Movies Rate'
          : 'Movie Details'
      "
    >
      <template v-slot:header>
        <div class="toggle" >
        <div @click="toggleDarkMode" class="toggleIcon">
          <span :class="model === true? 'mdi mdi-weather-night':'mdi mdi-white-balance-sunny'"></span>
        </div>
        </div>
      </template>
    </Drawer>
   
    <v-main >
      <div class="hero">
        <img src="../assets/images/movieHero.jpg" alt="" />
  <div class="container">
        <div class="text-container">
          <div class="text">
            <span class="mini-heading"> now Stremaing </span>
            <h1>
              {{
                $route.path === "/"
                  ? "The All Movies"
                  : $route.path === "/moviesTrends/trends"
                  ? "Trending"
                  : $route.path === "/bestMoviesRated/topRated"
                  ? "Top Movies Rate"
                  : "Movie Details"
              }}
            </h1>
            <a v-if="$route.path !== '/'" href="/" class="buttonImg"
              >Back To Home</a
            >
          </div>
        </div>
      </div>
  </div>

      <Tabs />
      <Nuxt keep-alive/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Tabs from "../components/Tabs/Tabs.vue";
import Footer from "../components/footer/Footer.vue";
import Drawer from "../components/Drawer/Drawer.vue";

export default {
  name: "DefaultLayout",
  head() {
    return {
      // title: "Movie App - Latest Streaming Movie Info",
      meta: [
        {
          hid: "descripaton",
          name: "descripaton",
          content: "Get all the latest streaming movies in theaters & online",
        },
        {
          hid: "Keywords",
          name: "Keywords",
          content: "movies, stream, streaming",
        },
      ],
    };
  },
  components: {
    Tabs,
    Footer,
    Drawer,
  },
  data() {
    return {
      model: false,
      loader: true,
    };
  },
  computed: {
    allMovies() {
      return this.$store.state.movies.allMovies.length;
    },
  },
  created() {
    const storedValue = localStorage.getItem("dark");
    if (storedValue !== null) {
      this.model = storedValue === "true";
    }
 
  },
  methods: {
    toggleDarkMode() {
      this.model = !this.model;
      localStorage.setItem("dark", this.model);
    },
  },
};
</script>
