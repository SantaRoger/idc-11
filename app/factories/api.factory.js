;(function(){
	angular
	.module('advaitabio')
	.factory('api', apiFactory);

	apiFactory.$inject = ['$http'];

	function apiFactory($http)
	{
		var obj = {
			get: function(){
				return $http.get('/assets/data/br08403.json');
			}
		};

		return obj;
	}
})();