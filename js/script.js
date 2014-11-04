$(function () {
	$('.search img').click(function() {
		$('#search')
			.show('slow')
			.animate({
				width : "+=200px"});
	}).click( function () {
		$('#search')
			.animate({
				width : "-=200px"})
			.hide('slow');
	});	//пользовательское событие?			   
//	$('.search img').click(function() {
//		$('#search')
//			.animate({
//				width : "-=200px"})
//			.hide('slow');
//	});
});