$('li').on('click', function(){
	var selector = $(this).text().toLowerCase()
	var color = $('.' + selector).css('background-color')
	if (!color){color = 'white'}

	$('.portContainer').css('height', '800px').removeClass('noAnimation')
	$('.mask').css('height', '800px')
	$('.' + selector).css('height', '1400px').addClass('noAnimation')
	$('.' + selector +'Mask').css('height', '1400px')
	$('li').css('color', 'rgba(255,255,255,.5)' )
	$(this).css('color', color)
})

// $('li:contains("ABOUT")').on('click', function(){
// 	console.log('wat')
// 	$('.portContainer').css('height', '800px')
// 	$('.mask').css('height', '800px')
// 	$('li').addClass('default')
// 	$(this).css('color', 'rgba(255,255,255,1)') 
	
// 	setTimeout(function(){
// 	$('.contact').removeClass('noAnimation')
// },650);
// })