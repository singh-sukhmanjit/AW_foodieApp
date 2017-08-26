var foodieApp = angular.module('foodieApp', ['ngRoute']);
foodieApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  .when('/home', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/restaurant/:id', {
    templateUrl: 'pages/restaurant.html',
    controller: 'restaurantController'
  })
  .when('/fav-food', {
    templateUrl: 'pages/fav-food.html',
    controller: 'favController'
  })
})
foodieApp.controller('loginController', function($scope, $location){
  $scope.goToHome = function(){
    $location.url('home');
  }
})
foodieApp.controller('favController', function($scope){
  $('#fast-food').on('click', function(){
    var favorite = [];
    $.each($("input:checked"), function(){
        favorite.push($(this).val());
    });
  })
})
foodieApp.controller('mainController', function($scope) {
  $scope.restaurants = [
    {
      id: '1',
      name: 'PiFi Pizza Zone',
    	address: 'Booth 49, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.6',
    	cuisines: 'Pizza, Fast Food, Beverages',
    	cost: '750',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122823_RESTAURANT_ac0c1209f5597522270a2f7c7c6b611b.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
      bestDish: {
      	name: 'Corn Pizza',
      	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
      }
    },
    {
      id: '2',
      name: 'Boston Bites',
    	address: 'Shop 39, Sector 11 D, Sector 11, Chandigarh',
    	location: 'Sector 11, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '400',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121700_RESTAURANT_a5034bff9da3c63a21b10c14853daa94.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
      bestDish: {
      	name: 'Tandoori Paneer Burger',
      	image: 'https://b.zmtcdn.com/data/res_imagery/121700_RESTAURANT_a5034bff9da3c63a21b10c14853daa94.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
      }
    },
    {
      id: '3',
      name: 'Dumpling Hood',
    	address: 'Booth 27, Sector 9 D, Sector 9, Chandigarh',
    	location: 'Sector 9, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.4',
    	cuisines: 'Modern Indian',
    	cost: '350',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122387_CHAIN_06b3e4f89a87e3209e68d4c15de08ef7.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    },
    {
      id: '4',
      name: 'Michigan Pizza Company',
    	address: 'SCF 21, Sector 9 D, Sector 9, Chandigarh',
    	location: 'Sector 9, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.5',
    	cuisines: 'Modern Indian',
    	cost: '500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/18457472_RESTAURANT_ff8cece12a0d08204d61dce494074721.JPG?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '5',
      name: 'Petite Sweet',
    	address: 'Booth 57, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.3',
    	cuisines: 'Modern Indian',
    	cost: '200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/120889_RESTAURANT_25755be599d70619627a4b916c8e30a8.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '6',
      name: 'Rustic Door',
    	address: 'SCO 12, Opposite Mount View, Sector 10, Chandigarh',
    	location: 'Sector 10, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.9',
    	cuisines: 'Italian, North Indian, Continental, Cafe',
    	cost: '1500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121858_RESTAURANT_1411203103_bde2c78b5ea214f7854a958971924add_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '7',
      name: 'Gusto Kitchen & Kaffe',
    	address: 'SCO 180, Inner Market, Sector 7 C, Sector 7, Chandigarh',
    	location: 'Sector 7, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '1600',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121765_RESTAURANT_e2001acb0f5aeb68fce83af8f052971d_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '8',
      name: 'Rollacosta',
    	address: 'Shop 45, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.9',
    	cuisines: 'Fast Food, Italian, Lebanese, Rolls',
    	cost: '500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122932_RESTAURANT_9588c34cfb9591e7dfd9dbdf6f5aafba.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '9',
      name: 'Cafe Nomad',
    	address: '178, Inner Market, Sector 7, Chandigarh',
    	location: 'Sector 7, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.7',
    	cuisines: 'Modern Indian',
    	cost: '1500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/reviews_photos/4bf/f503874b9ca6ae926aa68e53b9c3d4bf_1419193612.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C222'
    }
  ];
});

foodieApp.controller('restaurantController', function($scope, $routeParams, $http){
  $scope.restaurantId = $routeParams.id;
  $scope.ingredients = [];
  $scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key f27b91f7d7b74c909ed2085aa20d4cd7',
			'Content-Type': 'application/json'
		},
		'data': data,
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
  			for (var i =0;i < ingredients.length;i++) {
          if(ingredients[i].value > 0.75){
            $scope.ingredients.push(ingredients[i].name);
          }
        }
    		// $('.ingredients').html(list);
    		//console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}
  var restaurants = [
    {
      id: '1',
      name: 'PiFi Pizza Zone',
    	address: 'Booth 49, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.6',
    	cuisines: 'Pizza, Fast Food, Beverages',
    	cost: '750',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122823_RESTAURANT_ac0c1209f5597522270a2f7c7c6b611b.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
      bestDish: {
      	name: 'Cheese Pizza',
      	image: 'https://b.zmtcdn.com/data/res_imagery/122823_RESTAURANT_ac0c1209f5597522270a2f7c7c6b611b.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
      }
    },
    {
      id: '2',
      name: 'Boston Bites',
    	address: 'Shop 39, Sector 11 D, Sector 11, Chandigarh',
    	location: 'Sector 11, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '400',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121700_RESTAURANT_a5034bff9da3c63a21b10c14853daa94.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
      bestDish: {
      	name: 'Tandoori Paneer Burger',
      	image: 'https://b.zmtcdn.com/data/res_imagery/121700_RESTAURANT_a5034bff9da3c63a21b10c14853daa94.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
      }
    },
    {
      id: '3',
      name: 'Dumpling Hood',
    	address: 'Booth 27, Sector 9 D, Sector 9, Chandigarh',
    	location: 'Sector 9, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.4',
    	cuisines: 'Modern Indian',
    	cost: '350',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122387_CHAIN_06b3e4f89a87e3209e68d4c15de08ef7.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    },
    {
      id: '4',
      name: 'Michigan Pizza Company',
    	address: 'SCF 21, Sector 9 D, Sector 9, Chandigarh',
    	location: 'Sector 9, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.5',
    	cuisines: 'Modern Indian',
    	cost: '500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/18457472_RESTAURANT_ff8cece12a0d08204d61dce494074721.JPG?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '5',
      name: 'Petite Sweet',
    	address: 'Booth 57, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.3',
    	cuisines: 'Modern Indian',
    	cost: '200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/120889_RESTAURANT_25755be599d70619627a4b916c8e30a8.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '6',
      name: 'Rustic Door',
    	address: 'SCO 12, Opposite Mount View, Sector 10, Chandigarh',
    	location: 'Sector 10, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.9',
    	cuisines: 'Italian, North Indian, Continental, Cafe',
    	cost: '1500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121858_RESTAURANT_1411203103_bde2c78b5ea214f7854a958971924add_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '7',
      name: 'Gusto Kitchen & Kaffe',
    	address: 'SCO 180, Inner Market, Sector 7 C, Sector 7, Chandigarh',
    	location: 'Sector 7, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '1600',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/121765_RESTAURANT_e2001acb0f5aeb68fce83af8f052971d_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '8',
      name: 'Rollacosta',
    	address: 'Shop 45, Sector 8 B, Sector 8, Chandigarh',
    	location: 'Sector 8, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.9',
    	cuisines: 'Fast Food, Italian, Lebanese, Rolls',
    	cost: '500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/res_imagery/122932_RESTAURANT_9588c34cfb9591e7dfd9dbdf6f5aafba.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0'
    },
    {
      id: '9',
      name: 'Cafe Nomad',
    	address: '178, Inner Market, Sector 7, Chandigarh',
    	location: 'Sector 7, Chandigarh',
    	category: 'Casual Dining, Bar',
    	vote: '3.7',
    	cuisines: 'Modern Indian',
    	cost: '1500',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/reviews_photos/4bf/f503874b9ca6ae926aa68e53b9c3d4bf_1419193612.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C222'
    }
  ];
  $scope.restaurant = restaurants[$routeParams.id - 1];
})
