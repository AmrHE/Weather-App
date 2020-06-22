import Weather from "./model";
import * as view from "./view";
import { elements } from "./base";


// const cairo = new Weather(cairo);
// cairo.getWeather('california');


const searchControl = async () => {
    //1.get the input from the search box
    const location = view.getInput();

    if(location){

        //2.start a new search for the weather
        const forecast = new Weather(location);
    
        //3.Prepare the UI for the results rendering
        view.clearInput();
        view.clearResults();
        
        try{

            //4.search for the Weather
            const data = await forecast.getWeather();
        
            //5.display the results on UI
            view.renderResults(data);

            //6.event delegation for units' buttons
            elements.container.addEventListener('click', function(e) {
                //add event listener to the fahrenhiet btn
                if(e.target.matches('.fah')) {
                    view.clearResults();
                    view.renderResultsFah(data);

                    //add event listener to the celsius btn
                }else if(e.target.matches('.cel')) {
                    view.clearResults();
                    view.renderResults(data);
                }
            });

        }catch(err) {
            console.log(err);
        }
    }
};


//Adding the Event handler to the search button
elements.searchButton.addEventListener("click", e => {
    e.preventDefault();
    searchControl();
});

//Adding the Event handler to the  Enter Key
elements.searchInput.addEventListener("keypress", e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchControl();
        }
});
