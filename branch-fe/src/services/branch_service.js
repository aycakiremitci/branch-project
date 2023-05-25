import network from "../network/network";

class BranchService {
  getAll() {
    return network.get("/branches");
  }

  get(id) {
    return network.get(`/branches/${id}`);
  }

  updateBranch(id, data) {
    return network.put(`/branches/${id}/edit`, data);
  }
}

export default new BranchService();