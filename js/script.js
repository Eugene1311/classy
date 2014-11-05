$(function () {
	$('.search img').toggle(function() {
		$('#search')
			.show()
			.animate({width: "+=200px"}, 1200)
		},function () {
		$('#search')
			.animate({width: "-=200px"},1200)
	});	
	$('.specials li').hover(function () {
		$(this).find('a').css('color', '#adadad');//делегирование?
		$(this).find('h3').css('color', '#fff');
		$(this).css({'background': 'url(../img/menu_top_greenline.png) no-repeat top center','backgroundSize':'100%'});
	}, function () {
		$(this).find('a').css('color', '#787878');
		$(this).find('h3').css('color', '#acacac');
		$(this).css('background', '');
	});
});