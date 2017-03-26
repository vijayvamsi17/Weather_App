var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var key ="appid=feda89c4ef386f950d8f654178f9b64d";
var city = "London";
var units = "&units=metric&";
var url = api + city + units + key ;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/weather', function(req, res){
	console.log('received get request');

	request(url, (error, response, body)=>{

		// res.json(body);
		
		var weather = JSON.parse(body);
		res.json(weather);

		console.log(weather.main);
});

});

app.post('/weather', function(req, res){
	console.log(req.body.city);
	var cityname = req.body.city;
	console.log(cityname);

	var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var key ="appid=feda89c4ef386f950d8f654178f9b64d"
var city = cityname;
var units = "&units=metric&";
var url = api + city + units + key ;

console.log(url);
request(url, (error,response, body)=>{

	var weather = JSON.parse(body);
	res.send(weather);
	console.log(weather);
})
	
});

console.log(url);




app.listen(3000);
console.log("server running on port 3000");