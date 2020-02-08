/**
*
* @description			AdvaitaBio Assignment
*
*/

;(function(){
	angular
	.module('advaitabio',[
		'ngRoute'
	])
	.config(config);

	config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider','$compileProvider'];

	function config($routeProvider,$locationProvider,$httpProvicer,$compileProvider) 
	{
		$locationProvider.html5Mode(false);

		$routeProvider
		.when('/', {
			templateUrl: 'app/views/home.html',
			controller:'AppController',
			controllerAs:'app'
		})
		.when('/diseases', {
			templateUrl: 'app/views/diseases.html',
			controller:'DiseasesController',
			controllerAs:'DController'
		})
		.when('/magic', {
			templateUrl: 'app/views/magic.html',
			controller:'MagicController',
			controllerAs:'MController'
		})
		.otherwise({
			redirectTo:'/'
		});
	}




	/**
	* RUN!
	*/
	angular
	.module('advaitabio')
	.run(run);

	run.$inject = ['$rootScope', '$location'];

	function run($rootScope, $location)
	{
		console.log(':::     ADVAITABIO Running     :::');
		console.log(':::     Did you find the magic yet?     :::');
	}
})();