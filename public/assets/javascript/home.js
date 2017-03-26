//This has gotten out of hand.

$('li').on('click', function() {
    var selector = $(this).text().toLowerCase()
    var color = $('.' + selector).css('background-color')
    if (!color) { color = 'white' }

    $('.portContainer').css('height', '800px')
    $('.mask').css('height', '800px')
    $('.' + selector).css('height', '1400px').addClass('noAnimation')
    $('.' + selector + 'Mask').css('height', '1400px')
    $('li').css('color', 'rgba(255,255,255,.5)')
    $(this).css('color', color)

    if (selector === 'about') {
        $('.contentHolder').css('display', 'block')
    }

    setTimeout(function() {
        $('.portContainer').each(function() {
            var getHeight = $(this).css('height')
            var height = getHeight.substring(0, getHeight.length - 2)
            if (height < 900) {
                $(this).removeClass('noAnimation')
            }
        })

        if (selector !== 'about') {
            $('.contentHolder').css('display', 'none')
        }

    }, 650);
})

$('input').on('click', function(){
	if($(this).val() === 'Email (optional)'){
		$(this).val('')
	}
})

$('textarea').on('click', function(){
	if($(this).val() === 'Your message'){
		$(this).val('')
	}
})

$('.emailButton').on('click', function(e){
	e.preventDefault()
	var data = {
		email: $('input').val(),
		message: $('textarea').val()
	}
	console.log(data)
	$.ajax({
  type: "POST",
  url: '/sendEmail',
  data: data,
  success: emailSent()
});


})

function emailSent(){
	$('input').val('Email (optional)'),
	$('textarea').val('Your message')

	$('.success').removeClass('vanish')
	
	setTimeout(function(){
	$('.success').addClass('vanish')
	}, 1000)
}

var portfolioItems = [
	{
		imgURL: '/images/test.jpg',
		title: 'Test Title',
		desc: 'This is a test description. Make sure this works with a longer paragraph. Do not go too long though.',
		siteLink: '#',
		gitHub: '#',
		techIcons: ['css3', 'git', 'html5', 'illustrator', 'photoshop', 'wordpress' ,'sequelize' ,'javascript', 'jquery', 'mongodb', 'mysql', 'nodejs' ]

	},
		{
		imgURL: '/images/test.jpg',
		title: 'Test 2',
		desc: 'This is asdfasdf',
		siteLink: '#',
		gitHub: '#',
		techIcons: ['css3', 'git', 'html5', 'wordpress' ,'sequelize' ,'javascript', 'jquery', 'mongodb', 'mysql', 'nodejs' ]

	},{
		imgURL: '/images/test.jpg',
		title: 'Test Title',
		desc: 'This is a test description. Make sure this works with a longer paragraph. Do not go too long though.',
		siteLink: '#',
		gitHub: '#',
		techIcons: ['css3', 'git', 'html5', 'illustrator', 'photoshop', 'wordpress' ,'sequelize' ,'javascript', 'jquery', 'mongodb', 'mysql', 'nodejs' ]

	},
		{
		imgURL: '/images/test.jpg',
		title: 'Test 2',
		desc: 'This is asdfasdf',
		siteLink: '#',
		gitHub: '#',
		techIcons: ['css3', 'git', 'html5', 'wordpress' ,'sequelize' ,'javascript', 'jquery', 'mongodb', 'mysql', 'nodejs' ]

	}
]

createPortfolio()
console.log(portfolioItems[0].imgURL)


function createPortfolio() {
	for (var i = 0; i < portfolioItems.length; i++) {
var portMake="";
portMake += "<div class=\"portfolioItem\">";
portMake += "    <img class=\"portImg\" src="+ portfolioItems[i].imgURL +">";
portMake += "    <h5>" + portfolioItems[i].title +"<\/h5>";
portMake += "    <div class=\"itemDesc\">"+ portfolioItems[i].desc + "<\/div>";
portMake += "    <div class=\"portLinks\"><a href="+ portfolioItems[i].siteLink + ">Visit Site<\/a><a href="+ portfolioItems[i].gitHub +"><i class=\"devicon-github-plain\"><\/i><\/a><\/div>";
portMake += "    <div class=\"techIcons\">"
	
	for (var j = 0; j < portfolioItems[i].techIcons.length ; j++) {
		portMake += "<div class=\"iconWrapper\" tooltip="+ portfolioItems[i].techIcons[j] + "><i class=\"devicon-" + portfolioItems[i].techIcons[j] + "-plain\"><\/i><\/div>";
	}
portMake += "<\/div>";
portMake += "";

$('.portfolioMain').append(portMake)
	}
}