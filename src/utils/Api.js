import axios from "axios";

const Api = axios.create({
  baseURL: "http://18.142.153.136:3000/api/application/",
});

export default Api;
