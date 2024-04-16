import axios from "axios";
export const state = () => ({
  allMovies: [],
  moviesTrends: [],
  searchAllMovies: [],
  FilmDetails: {},
  TopRatedMovies: [],
  isLoading: true,
  currentState: "",
});

export const mutations = {
  changeSearchMovie(state, movie) {
    state.allMovies = [];
    state.searchAllMovies.push(movie);
    state.isLoading = false;
  },
  changeAllMovies(state, e) {
    state.allMovies.push(e);
  },
  removeAllMovies(state) {
    state.allMovies = [];
    state.searchAllMovies = [];
  },
  changeMovieById(state, payload) {
    state.FilmDetails = payload;
    state.isLoading = false;
  },
  changeMoviesTrends(state, payload) {
    state.moviesTrends.push(payload);
    state.isLoading = false;
  },
  changeTopMoviesRated(state, payload) {
    state.TopRatedMovies.push(payload);
    state.isLoading = false;
  },
};

export const actions = {
  removeAllMovies({ commit }) {
    commit("removeAllMovies");
  },
  getAllMovies({ commit }) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=842c58bc228bfafc96a8160a9c7d952a&language=en-US&page=1"
      )
      .then((result) => {
        result.data.results.forEach((element) => {
          commit("changeAllMovies", element);
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  },
  getMoviesTrends({ commit }) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=842c58bc228bfafc96a8160a9c7d952a&language=en-US&page=1"
      )
      .then((result) => {
        result.data.results.forEach((element) => {
          commit("changeMoviesTrends", element);
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  },
  getTopMoviesRated({ commit }) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=842c58bc228bfafc96a8160a9c7d952a&language=en-US&page=1"
      )
      .then((result) => {
        result.data.results.forEach((element) => {
          commit("changeTopMoviesRated", element);
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  },
  searchMovies({ commit }, payload) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=842c58bc228bfafc96a8160a9c7d952a&language=en-US&page=1&query=${payload}`
      )
      .then((movie) => {
        movie.data.results.forEach((mov) => {
          commit("changeSearchMovie", mov, payload);
        });
      });
  },
  getMovieById({ commit }, payload) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${payload}?api_key=842c58bc228bfafc96a8160a9c7d952a&language=en-US&page=1`
      )
      .then((singleMovie) => {
        commit("changeMovieById", singleMovie.data);
      });
  },
};
