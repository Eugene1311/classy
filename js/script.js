$(function () {
	$('.search img').toggle(function() {
		$('#search')
			.show()
			.animate({width: "+=200px"}, 1000)
		},function () {
		$('#search')
			.animate({width: "-=200px"},1000)
	});	
//	$('.specials li').hover(function () {
//		$(this).find('a').css('color', '#adadad');//делегирование?
//		$(this).find('h3').css('color', '#fff');
//		$(this).addClass('hovered');
//	}, function () {
//		$(this).find('a').css('color', '#787878');
//		$(this).find('h3').css('color', '#acacac');
//		$(this).removeClass('hovered');
//	});
});