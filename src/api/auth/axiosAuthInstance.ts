import axios from "axios";

const axiosAuthInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export default axiosAuthInstance;
