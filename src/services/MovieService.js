import http from "./BaseURL";

class MovieService {
  async getAll() {
    try {
      const response = await http.get("movies");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    const response = await http.get(`movies/${id}`);
    return response.data;
  }

  async add(newMovie) {
    const response = await http.post("movies", newMovie);
    return response.data;
  }

  async update(id, data) {
    const response = await http.put(`movies/${id}`, data);
    return response.data;
  }

  delete(id) {
    return http.delete(`movies/${id}`);
  }
}
const movieService = new MovieService();
export default movieService;
