import axios from "axios";

let token = "aa";

const apiClient = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = error.response;
    let status = res.status;
    if (status === 400) {
      console.log("404!!!");
    }
    console.error("Looks like there was a problem. Status Code: " + status);
    return Promise.reject(error);
  }
);

export { apiClient };
