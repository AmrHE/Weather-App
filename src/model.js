import Axios from "axios";

export default class Weather{
    constructor(location) {
        this.location = location;
    }


    async getWeather(){
        try{
            
            const results = await Axios(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=0e30663205a1ab74be2c53c7796c8c3d`);

            const WeatherInfo = {
                cityName: results.data.name,
                countryName: results.data.sys.country,
                temp: results.data.main.temp,
                feelLike: results.data.main.feels_like,
                min: results.data.main.temp_min,
                max: results.data.main.temp_max,
                icon: results.data.weather[0].icon,
                gifImg: results.data.weather[0].description
            };
            // console.log(WeatherInfo);
            return WeatherInfo;

        }catch(err) {
            console.log(err);
        }
    }
}