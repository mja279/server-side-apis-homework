$("#find-city").on("click", function(event) {

    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-input").val();
    // api key
    var key = "540c1512d41801eb53d62f05f55a02d0";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#city-view").text(JSON.stringify(response));
    });

});
