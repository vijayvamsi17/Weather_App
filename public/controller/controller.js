var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http){

	$http.get('/weather').then(function(response){

		$scope.weth = response.data;
		
		console.log($scope.weth.main.temp);
			
	});



	$scope.submit = function(){

		// var inp = JSON.stringify($scope.inputcity);

		$http.post('/weather', $scope.weather).then(function(response){
			console.log("data posted");
			console.log(response);

			$scope.weth = response.data;

	});
		
		// console.log($scope.weather);
	};

});

// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope, $http){

// 	$http.get('/weather').then(function(response){

// 		$scope.weth = response.data.main;
		
// 		console.log($scope.weth.temp);
			
// 	});

// 	$scope.cityfunct = function(){
// 		// $scope.inputcity;
// 		console.log($scope.inputcity);
// 	};

// });