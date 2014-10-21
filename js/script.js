$(function () {
	$('.header-right img').click(function() {
		$('#search').animate(
			{width: "+=250px"}, 200, function () {
				$('.header-right img').click(function () {
					$('#search').animate(
						{width: ""});
				});	
	});
});
});