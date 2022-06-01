import axios from "axios";

const apiKey = "go3cnbNLwwgrxlEepnmaVGAasVazxKfx";
const apiUrl = "https://dataservice.accuweather.com";

const { REACT_APP_API_URL } = process.env;

const locationAutoComplete = (query) =>
  axios(
    `${apiUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}&language=en-us`
  );

const getCurrentWeather = (locationKey) =>
  axios(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  );

export { locationAutoComplete, getCurrentWeather };
