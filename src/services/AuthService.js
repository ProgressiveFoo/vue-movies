import http from "./BaseURL";

class AuthService {
  async login(credentials) {
    const response = await http.post("login", credentials);
    return response.data;
  }

  async register(formData) {
    console.log(formData);
    const response = await http.post("register", formData);
    return response.data;
  }

  getMyProfile() {}
}
const authService = new AuthService();
export default authService;
