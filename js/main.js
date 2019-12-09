function getLocation() {
  if (navigator.geolocation) {
  	$('.wait').addClass('waiting');
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
	var latlong = position.coords.latitude + 
	"," + position.coords.longitude;
	darksky(latlong);
}


/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */

// Replace the lat/long below with the lat/long for your desired location.
// Get your city lat/long using https://www.latlong.net/
// var latlong = '41.740681,-71.308609';
function darksky(latlong){
console.log(latlong);

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '65a4e4acbf4480bbd0f45566110ce03f';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.
.done(function(forecast) {
	// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	
	// The most basic basic approach is to just hide the header (uncomment to use)
		
	// $('header').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)
	$('.title').addClass('show');
	$('.main').addClass('grid');
	$('.rainBackground').hide();
	$('.button').hide();
	$('body').removeClass('background');
	$('.wait').removeClass('waiting');
	timeConverter();


	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)

	// $('header').append('<a class="button" href="#">Click</a>');
	// $('header .button').click(function(){
	//   $('header').hide();
	// });

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

// Print the data object feturned from DarkSky for all the details
// DO NOT EDIT THIS LINE.
.always(function(forecast) {
	console.log(forecast);
});


/* -----------------------------------------------
   Function for displaying the main weather info
   ----------------------------------------------- */

// All of the data comes from the "forecast" object returned
// from the DarkSky API. Inspect this page in the browser
// for a full list of data that can be used using the methods below.

function displayData(forecast){

	// Target an element in your interface and display
	// dynamic weather information inside of it

	// All of the data you need is located in the "Console" tab
	// when you inspect th code in the browser
	// Click the arrow next to the "Object" to drill down into the data
	// You can reference these data points in your code using the following
	// method(s).

	// For example, if I have an element <div class="today"> in my main content area
	// I can add data from the "Daily" array like this

	$('.sum').html(forecast.currently.summary);
	
	// In this example, the high temperature for the first day of the week
	// (referenced by the number 0) is written as HTML inside the <div class="today"> element
	// If I want to round this number up, I would modify the code like this

	$('.today').html(Math.round(forecast.currently.temperature) + "°F");
	$('.icon').append('<img src="'+displayIcon(forecast.currently.icon)+'">');

	$('.highTemp h2').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");
	$('.realFeel h2').html(Math.round(forecast.currently.apparentTemperature) + "°F");
	$('.lowTemp h2').html(Math.round(forecast.daily.data[0].temperatureLow) + "°F");
	$('.precipP h2').html(forecast.currently.precipProbability);
	$('.humitity h2').html(forecast.currently.humidity);
	$('.visibility h2').html(forecast.currently.visibility);
	$('.windspeed h2').html(forecast.currently.windspeed);
	$('.sunrise h2').html(timeConverter(forecast.daily.data[0].sunriseTime));
	$('.sunset h2').html(timeConverter(forecast.daily.data[0].sunsetTime));



	
	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');



	$('.day1 h2').html(displayDay(0));
	$('.day1 h3').html(Math.round(forecast.daily.data[0].temperatureLow) + "°F");
	$('.day1 div').html('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');
	$('.day1 h4').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");

	$('.day2 h2').html(displayDay(1));
	$('.day2 h3').html(Math.round(forecast.daily.data[1].temperatureLow) + "°F");
	$('.day2 div').html('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	$('.day2 h4').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");

	$('.day3 h2').html(displayDay(2));
	$('.day3 h3').html(Math.round(forecast.daily.data[2].temperatureLow) + "°F");
	$('.day3 div').html('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');
	$('.day3 h4').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");

	$('.day4 h2').html(displayDay(3));
	$('.day4 h3').html(Math.round(forecast.daily.data[3].temperatureLow) + "°F");
	$('.day4 div').html('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');
	$('.day4 h4').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");

	$('.day5 h2').html(displayDay(4));
	$('.day5 h3').html(Math.round(forecast.daily.data[4].temperatureLow) + "°F");
	$('.day5 div').html('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');
	$('.day5 h4').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");

	$('.day6 h2').html(displayDay(5));
	$('.day6 h3').html(Math.round(forecast.daily.data[5].temperatureLow) + "°F");
	$('.day6 div').html('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');
	$('.day6 h4').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");

	$('.day7 h2').html(displayDay(6));
	$('.day7 h3').html(Math.round(forecast.daily.data[6].temperatureLow) + "°F");
	$('.day7 div').html('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');
	$('.day7 h4').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");










	// $('.sunRtime').html(forecast.daily.data[0].sunriseTime);

	// If I want to display the same information for tomorrow, change the 0 to 1

	// $('.today').html(Math.round(forecast.daily.data[1].temperatureHigh));

	// If I want to display a summary of the weather
	// (like, "scattered thundershowers...") for today

	// $('.today').html(forecast.daily.data[0].summary);

	// If I want to modify the display of the page element based on the weather
	// I can access the "icon" property. This returns a value that can be used
	// as a CSS class name that you can create with your style details

	// $('.today').addClass(forecast.daily.data[0].icon);

	// Note – the value of "icon" above needs to be checked in the inspect
	// panel. It may say "rain". If this is the case, you could create a rule
	// inside your CSS called .rain and then add, maybe, a background color
	// or image. The full range of weather values returned by the "icon" property are

	// "clear-day", "clear-night", "rain", "snow", "sleet", "wind", "fog",
	// "cloudy", "partly-cloudy-day", "partly-cloudy-night", "hail",
	// "thunderstorm" and "tornado"

}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  
  if (time == '13:0') {
  	time = '1:0';
  	return time;
  	console.log(time);
  }else if (time == '14:0') {
  	time = '2:0';
  	return time;
  	console.log(time);

  }else if (time == '15:0') {
  	time = '3:0';
  	return time;
  	console.log(time);

  }else if (time == '16:0') {
  	time = '4:0';
  	return time;
  	console.log(time);

  }else if (time == '17:0') {
  	time = '5:0';
  	return time;
  	console.log(time);

  }else if (time == '18:0') {
  	time = '6:0';
  	return time;
  	console.log(time);

  }else if (time == '19:0') {
  	time = '7:0';
  	return time;
  	console.log(time);

  }else if (time == '20:0') {
  	time = '8:0';
  	return time;
  	console.log(time);

  }else if (time == '21:0') {
  	time = '9:0';
  	return time;
  	console.log(time);

  }else if (time == '22:0') {
  	time = '10:0';
  	return time;
  	console.log(time);

  }else if (time == '23:0') {
  	time = '11:0';
  	return time;
  	console.log(time);

  }else if (time == '0:0') {
  	time = '12:0';
  	return time;
  	console.log(time);

  } else {
  	return time;
  }
}



function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return "img/icons/Sun.svg";
    		break;
    	case "clear-night":
    		return "img/icons/Moon-Full.svg";
    		break;
    	case "rain":
    		return "img/icons/Cloud-Rain.svg";
    		break;
    	case "snow":
    		return "img/icons/Snowflake.svg";
    		break;
    	case "sleet":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "wind":
    		return "img/icons/Wind.svg";
    		break;
    	case "fog":
    		return "img/icons/Cloud-Fog.svg";
    		break;
    	case "cloudy":
    		return "img/icons/Cloud.svg";
    		break;
    	case "partly-cloudy-day":
    		return "img/icons/Cloud-Sun.svg";
    		break;
    	case "partly-cloudy-night":
    		return "img/icons/Cloud-Moon.svg";
    		break;
    	case "hail":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "thunderstorm":
    		return "img/icons/Cloud-Lightening.svg";
    		break;
    	case "tornado":
    		return "img/icons/Tornado.svg";
    		break;
  		default:
    		// code block
	}
}












}