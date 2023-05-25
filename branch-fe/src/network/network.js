import axios from "axios";

const test_user = {
  id: 1,
  username: "owner",
  role: "owner"
};

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:6868/api' || 'http://localhost:8080/api',
  headers: {
    "Content-type": "application/json",
    "user": JSON.stringify(test_user)
  }
});