$(function () {
	$('.search img').toggle(function() {
		$('#search')
			.show()
			.animate({width: "+=190px"}, 700)
		},function () {
		$('#search')
			.animate({width: "-=190px"},700)
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
	// Select
	$('.slct').click(function(){
		$('.drop').slideUp();
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function(){
				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult = $(this).html();
				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);
				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct').removeClass('active');
				$(this).parent().parent().find('.slct').html(selectResult);
				
				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});
			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	$(window).click(function () {
		$('.drop').slideUp();
	});
	$('a[rel=product]').colorbox({
		width : '40%',
		height: '75%',
		opacity:0.3,
		current: "photo {current} of {total}"
	});
});