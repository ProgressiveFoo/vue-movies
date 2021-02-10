import http from "./BaseURL";

class MovieService {
  async getAll() {
    const response = await http.get("movies");
    return response.data;
  }

  async getById(id) {
    const response = await http.get(`movies/${id}`);
    return response.data;
  }

  async create(movie) {
    const response = await http.post("movies", movie);
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
