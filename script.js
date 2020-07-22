 $("#find-city").on("click", function() {

    event.preventDefault();

//     // Here we grab the text from the input box
    var city = $("#city-input").val();
//     // api key
    var key = "540c1512d41801eb53d62f05f55a02d0";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    //   })
    //   .then(function(response) {
    //     $("#city-view").text(JSON.stringify(response));
    })

    .then(function(response) {
        console.log(response);
        // validation criteria for faulty search input - api did not understand city querry
        if(response.status == 404){
    
            // change this to on page validation - debug only
            alert("Please type valid city");
        
        }

        displayElement(response);
    });

});

function displayElement (a) {
    // jquery lines to display current weather
    var temp = a.main.temp;
    var humidty = a.main.humidty
    var city = a.name
}


$(document).ready(function (){
    $("#find-city").click(function() {

        var city = $("#city-input").val();

        if(city != "") {

            $.ajax({

                url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=540c1512d41801eb53d62f05f55a02d0",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);
                }
            })

        }else{
            $("#error").html("Field cannot be empty")
        }
    });
});



