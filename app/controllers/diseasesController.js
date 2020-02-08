;(function(){
	angular
	.module('advaitabio')
	.controller('DiseasesController',DiseasesController);

	DiseasesController.$inject = ['$scope','api'];

	function DiseasesController($scope,apiFactory)
	{
		$scope.idcData = null;
		$scope.idcNodeData = null;

		console.log(':::     DiseasesController Int     :::');
		var self = this;

		apiFactory.get()
		.then(function(data){
			var d = data.data;
			d = _parseIdcData(d);
			$scope.idcData = d;
		})


		function _parseIdcData(data)
		{
			if(data.children == undefined)
			{
				return;
			}

			data.size = data.children.length;

			data.children.forEach(function(obj, key){
				obj = _parseIdcData(obj);
			})

			return data;
		}
	}
})();