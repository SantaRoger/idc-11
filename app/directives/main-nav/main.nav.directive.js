;(function(){
	'use strict';

	angular
	.module('advaitabio')
	.directive('mainNav', MainNav);

	function MainNav()
	{
		var directiveObj = {
			restrict: 'E',
			templateUrl: 'app/directives/main-nav/main-nav.html'
		}
		return directiveObj;
	}
})();