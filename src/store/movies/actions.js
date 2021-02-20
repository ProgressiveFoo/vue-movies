import movieService from "../../services/MovieService";

export const actions = {
  async getAllMovies({ commit }) {
    const response = await movieService.getAll();
    commit("setAllMovies", response.data);
  },
};
