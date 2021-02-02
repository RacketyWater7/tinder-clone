import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderrr-backendd.herokuapp.com",
});

export default instance;
