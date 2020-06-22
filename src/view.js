import { elements } from "./base";

//Get the value of the input
export const getInput = () => {
    return elements.searchInput.value;
};

//Clear the input feild
export const clearInput = () => {
    elements.searchInput.value = '';
};

//Dispay the results of the Search in the UI
export const renderResults = (result) => {
        const markup = `
            <div class="weather-card">
                <h2>Today's Temperature</h2>
                <h1 class="temp">${convertKtoC(result.temp)}</h1>

                <div class="location">
                    <p class="city">${result.cityName},</p>
                    <p class="country">${result.countryName}</</p>       
                </div>

                <p class="feels_like">Feels like <span>${convertKtoC(result.feelLike)}</ ºC</span></p>
                <div class="min_max">
                    <p>Minimum: <span class="temp_min">${convertKtoC(result.min)}</span></p>
                    <p>Maximum: <span class="temp_max">${convertKtoC(result.max)}</span></p>
                </div>
            </div>
            <div class="conversion">
                <button class="cel">Celsius</button>
                <button class="fah" onclick="">Fahrenheit</button>
            </div>
        `;
    elements.container.insertAdjacentHTML('afterbegin', markup);
};


//Display results in Fehrenhiet
export const renderResultsFah = (result) => {
    const newMarkup = `
            <div class="weather-card">
                <h2>Today's Temperature</h2>
                <h1 class="temp">${convertKtoF(result.temp)}</h1>

                <div class="location">
                    <p class="city">${result.cityName},</p>
                    <p class="country">${result.countryName}</</p>       
                </div>

                <p class="feels_like">Feels like <span>${convertKtoF(result.feelLike)}</ ºC</span></p>
                <div class="min_max">
                    <p>Minimum: <span class="temp_min">${convertKtoF(result.min)}</span></p>
                    <p>Maximum: <span class="temp_max">${convertKtoF(result.max)}</span></p>
                </div>
            </div>
            <div class="conversion">
                <button class="cel">Celsius</button>
                <button class="fah">Fahrenheit</button>
            </div>
        `;
    elements.container.insertAdjacentHTML('afterbegin', newMarkup);
};

//Clear the results of the old search from UI
export const clearResults = () => {
    elements.container.innerHTML = "";
};

//Convert data from kelvin to celsius
const convertKtoC = (tempK) => {
    return `${parseFloat(parseFloat(tempK) - 273.15).toFixed(2)} ºC`;
};

//Convert data from kelvin to fahrenhiet
const convertKtoF = (tempK) => {
    return `${Number(((parseFloat(tempK) - 273.15) * 9) / 5 + 32).toFixed(2)} ºF`;
};

