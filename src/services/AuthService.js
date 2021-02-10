import http from "./BaseURL";

class AuthService {
  async login(credentials) {
    const response = await http.post("login", credentials);
    return JSON.parse(JSON.stringify(response));
  }

  async register(formData) {
    console.log(formData);
    const response = await http.post("register", formData);
    return JSON.parse(JSON.stringify(response));
  }
}
const authService = new AuthService();
export default authService;
