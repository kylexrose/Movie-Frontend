import axios from "axios";//sets axios case that checks if site is in development or published

const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "deploy CLOUD ADDRESS",
  timeout: 50000,
});

export default Axios;
