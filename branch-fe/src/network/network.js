import axios from "axios";

const owner_test_user = {
  id: 1,
  username: "owner",
  role: "owner"
};

const employee_test_user = {
  id: 1,
  username: "employee",
  role: "employee"
};

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:6868/api' || 'http://localhost:8080/api',
  headers: {
    "Content-type": "application/json",
    "user": JSON.stringify(owner_test_user)
  }
});