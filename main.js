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
})
foodieApp.controller('loginController', function($scope, $location){
  $scope.goToHome = function(){
    $location.url('home');
  }
})
foodieApp.controller('mainController', function($scope) {
  $scope.restaurants = [
    {
      id: '1',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/7/120557/5185e162ab7ba3f04a0e027f9bdede9f_top_thumb_620_314.jpg?output-format=webp'
    },
    {
      id: '2',
      name: 'McDonals',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '3',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '4',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '5',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '6',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '7',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '8',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id: '9',
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    }
  ];
});

foodieApp.controller('restaurantController', function($scope, $routeParams){
  $scope.restaurantId = $routeParams.id;
  var restaurants = [
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/7/120557/5185e162ab7ba3f04a0e027f9bdede9f_top_thumb_620_314.jpg?output-format=webp'
    },
    {
      name: 'McDonals',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      name: 'Farzi Cafe',
    	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    	location: 'Connaught Place',
    	category: 'Casual Dining, Bar',
    	vote: '4.2',
    	cuisines: 'Modern Indian',
    	cost: '2200',
    	hours: '12 Noon to 1 AM (Mon-Sun)',
    	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    }
  ];
  $scope.restaurant = restaurants[$routeParams.id - 1];
})
