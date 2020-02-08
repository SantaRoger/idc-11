;(function(){
	angular
	.module('advaitabio')
	.controller('MagicController', MagicController);

	MagicController.$inject = ['$scope'];

	function MagicController($scope)
	{
		console.log(':::      MagicController     :::');

		$scope.cards = ['kh','jc','ks','qd','qc','jd','qh','kc','jh','qs','kd'];
		
		$scope.start = function() 
		{
			_start($scope.cards);
		}

	}

	function _start(cards)
	{
		var row1 = $(".row1");
		var row2 = $(".row2");

		for(i=0;i<3;i++)
		{
			var col = $("<div></div>")
				.addClass('col-4')
			var c = $('<div></div>')
				.addClass('magic-card')
				.addClass(cards.shift());

			col.append(c);
			row1.append(col);
		}
		for(i=0;i<3;i++)
		{
			var col = $("<div></div>")
				.addClass('col-4')
			var c = $('<div></div>')
				.addClass('magic-card')
				.addClass(cards.shift());

			col.append(c);
			row2.append(col);
		}

		setTimeout(_shuffleAndStack, 5000,cards);
	}

	function _shuffleAndStack(cards)
	{
		$("#step2").removeClass('d-none');
		$(".magic-card").removeClass().addClass('magic-card').addClass('back');

		setTimeout(function(){
				$(".magic-card").parent().remove();
				$("#step2").text('That was hard, but your card is gone!');
				_end(cards);
			},5000);
	}

	function _end(cards)
	{
		var row1 = $(".row1");
		var row2 = $(".row2");

		for(i=0;i<2;i++)
		{
			var col = $("<div></div>")
				.addClass('col-6')
			var c = $('<div></div>')
				.addClass('magic-card')
				.addClass(cards.shift());

			col.append(c);
			row1.append(col);
		}
		for(i=0;i<3;i++)
		{
			var col = $("<div></div>")
				.addClass('col-4')
			var c = $('<div></div>')
				.addClass('magic-card')
				.addClass(cards.shift());

			col.append(c);
			row2.append(col);
		}
	}

})();