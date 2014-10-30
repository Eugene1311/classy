$(function () {
//	$('.header-right img').click(function() {
//		$('#search').animate(
//			{width: "+=250px"}, 1200, function () {
//				$('.header-right img').click(function () {
//					$('#search').animate(
//						{width: ""});
//				});	
//	});
//});
	/*$('.specials a').hover(function () {
		$(this).css('color', '#adadad');//делегирование?
		$(this).find('h3').css('color', '#fff');
		$(this).parent().css('background', 'url(../img/menu_top_greenline.png) no-repeat top center');
	}, function () {
		$(this).css('color', '#787878');
		$(this).find('h3').css('color', '#acacac');
		$(this).parent().css('background', '');
	});*/
	$('.specials li').hover(function () {
		$(this).find('a').css('color', '#adadad');//делегирование?
		$(this).find('h3').css('color', '#fff');
		$(this).css({'background': 'url(../img/menu_top_greenline.png) no-repeat top center','backgroundSize':'100%'});
	}, function () {
		$(this).find('a').css('color', '#787878');
		$(this).find('h3').css('color', '#acacac');
		$(this).css('background', '');
	});
	/*$('#myTable').click(function(e) {  
    var clicked = $(e.target);  
    clicked.css('background', 'red');  }); */
});