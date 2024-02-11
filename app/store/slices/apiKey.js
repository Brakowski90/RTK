//app/store/slices/apiKey.js
import axios from "axios";

const API_KEY = "406df33df083ef35bd7f534e329e8941";
//const apiKey = process.env.REACT_APP_API_KEY;

export const getWeatherByCity = (city) => {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data.message;
    });
};

export default API_KEY; 