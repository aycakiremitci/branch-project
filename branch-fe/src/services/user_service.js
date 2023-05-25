import network from "../network/network";

class UserService {
  getAll() {
    return network.get("/users/");
  }

  get(id) {
    return network.get(`/users/${id}`);
  }
}

export default new UserService();