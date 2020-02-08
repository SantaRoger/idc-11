;(function(){
	'use strict';

	angular
	.module('advaitabio')
	.directive('d3Sunburst', D3Sunburst);

	D3Sunburst.$inject = ['$window'];

	function D3Sunburst($window)
	{
		var directiveObj = {
			restrict: 'E',
			template: '<svg width="500" height="500"></svg>',
			link:function(scope,elem,attrs) {

				scope.$watch('idcData', function(){

					if(scope.idcData == null) return; 

					var d3 = $window.d3,
						width = 425,
						height = 425,
						radius = Math.min(width,height) / 2,
						color = d3.scaleOrdinal(d3.schemeTableau10);

					var partition = d3
						.partition()
						.size([2 * Math.PI, radius]);

					var root = d3
						.hierarchy(scope.idcData)
						.sum(function (i) {return i.size});

					partition(root);

					root.each(d => d.current = d);

					var g = d3.select('svg')
						.attr('width',width)
						.attr('height', height)
						.append('g')
						.attr('transform', 'translate(150,200)');

					var arc = d3.arc()
						.startAngle(function (d) { return d.x0 })
						.endAngle(function (d) { return d.x1 })
						.innerRadius(function (d) { return d.y0 })
						.outerRadius(function (d) { return d.y1 });

					var path = g
						.selectAll('path')
						.data(root.descendants().slice(1))
						.enter()
						.append('g')
						.append('path')
						.attr("display", function (d) { return d.depth ? null : "none"; })
						.attr('d', arc)
						.attr('data-toggle','tooltip')
						.attr('data-placement','top')
						.attr('title', function(d){return d.data.name})
						.style("fill", function (d) { return color((d.children ? d : d.parent).data.name); })

					path.filter(d => d.children)
					.style('curson', 'pointer')
					.on('click', clicked);

					$('[data-toggle="tooltip"]').tooltip();

					function arcVisible(d)
					{
						return d.y1 >= 3 && d.y0 >= 1 && d.x1 > d.x0;
					}

					function clicked(p)
					{
						scope.idcNodeData = p;
						scope.$apply();
					}

				});
			}
		}
		return directiveObj;
	}
})();