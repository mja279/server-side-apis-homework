// OpenWeather API Key as global variable
var key = "540c1512d41801eb53d62f05f55a02d0";

// populate recent cities area from localstorage on page refresh
recentCities();

//using localstorage, run api to search from history
// currentWeather(localStorage.getItem("last_searched"));

//search 
<form id="search-form">

{/* Label for Text Box  */}
<label for="zip-input">Enter Zipcode</label>

{/* <!-- Text Input Box --> */}
<input type="text" id="search-zip"><br>

{/* <!-- Submit Button --> */}
<input id="select-zip" type="submit" value="GO!">
</form>

{/* <!-- City Information --> */} 
<div id="zip-div"></div>


function searchWeather(zipcode) {

var zipcode = "#search-zip";
var queryURL = "api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + "units=imperial" + "&appid=" + key;


    $.ajax({
            url: queryURL,
            method: "GET",
        })
        
    .then(function(response) {
    
        if(response.status == 404){
            alert("Enter valid zipcode");
        }

    localStorage.setItem("city-input-list",response.name);

    
        console.log(response);
        displayElement(response);

    
        });



    var temp = response.main.temp;
    var humidity = response.main.humidty;
    var city = response.name;
    var wind = response.main.speed
  

    $("#city-view").text("" + city);
    $("#city-temp").text("" + temp);
    $("#city-humidity").text("" + humidity);
    $("#city-wind").text("" + wind);
};



$("#search-zip").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the zipcode 
    var inputZipcode = $("#search-zip").val().trim();

    // Run the search function(passing in the zipcode as an argument)
    searchBandsInTown(inputZipcode);
  });


