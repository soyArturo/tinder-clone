import axios from "axios";

const instance = axios.create({
  baseURL: "https://tind3r-backend.herokuapp.com",
});

export default instance;
