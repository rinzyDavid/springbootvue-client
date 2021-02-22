import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8386/api",
  headers: {
    "Content-type": "application/json"
  }
});