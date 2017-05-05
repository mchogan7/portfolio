//This has gotten out of hand.

$('li').on('click', function() {
    var selector = $(this).text().toLowerCase()
    var color = $('.' + selector).css('background-color')
    if (!color) { color = 'white' }

    $('.portContainer').removeClass('expand')
    $('.mask').removeClass('expand')
    $('.' + selector).addClass('noAnimation expand')
    $('.' + selector + 'Mask').addClass('expand')
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
		imgURL: '/images/appraiseless.jpg',
		title: 'AppraiseLess.com',
		desc: 'This web app helps users protest their property taxes by finding comparable properties. Users can sort through the suggested results and it will then generate a protest that can be sent to the county appraisal office.',
		siteLink: 'http://www.appraiseless.com/',
		gitHub: 'https://github.com/mchogan7/AppraiseLess',
		techIcons: ['git', 'css3', 'html5', 'illustrator', 'photoshop','javascript' ,'mysql', 'nodejs', 'react']

	},
	{
		imgURL: '/images/preshift.jpg',
		title: 'PreShift Planner',
		desc: 'This collaborative web app assists restaurant servers in managing and maximizing tips. It featues several ways of visualizing data as well as study aids. This is an on-going project that we hope will reach a wider audience.',
		siteLink: 'http://www.preshiftplanner.com/',
		gitHub: 'https://github.com/REvanCof/ServerBartenderApp',
		techIcons: ['git', 'css3', 'html5', 'illustrator', 'photoshop','sequelize' ,'javascript', 'jquery','mysql', 'nodejs' ]

	},
		{
		imgURL: '/images/darrell.jpg',
		title: 'Darrellist',
		desc: 'A fun site that scrapes the Austin area Craigslist for postings with any spelling of the name Darrell. Posts and comments are saved to a Mongo database.',
		siteLink: 'https://nameless-woodland-28515.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/MongoScraper',
		techIcons: ['git', 'css3', 'html5', 'photoshop', 'javascript', 'jquery', 'mongodb', 'nodejs' ]

	},{
		imgURL: '/images/cpare.jpg',
		title: 'C-Pare',
		desc: 'This collaborative project utilizes multiple data APIs to graph and average comparisons.',
		siteLink: 'https://desolate-shore-87950.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/C-Pare',
		techIcons: ['git', 'css3', 'html5', 'illustrator', 'javascript', 'jquery']

	},{
		imgURL: '/images/giphy.jpg',
		title: 'Giphy API',
		desc: 'An entertaining exercise handling AJAX data with buttons.',
		siteLink: 'https://mysterious-hamlet-86534.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/Giphy-API',
		techIcons: [ 'git', 'css3', 'html5', 'javascript', 'jquery']

	},{
		imgURL: '/images/dinoQuiz.jpg',
		title: 'Dino Quiz',
		desc: 'One of my many dino apps. This one allows users to take or create a timed quiz.',
		siteLink: 'https://morning-fjord-15506.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/TriviaGame',
		techIcons: ['git', 'css3', 'html5', 'javascript', 'jquery']

	},{
		imgURL: '/images/sunset.jpg',
		title: 'Sunset Press',
		desc: 'A site redesign and Ad-Words campaign that has led to year over year sales growth.',
		siteLink: 'http://www.sunsetpressinc.com/',
		gitHub: '#',
		techIcons: ['css3', 'html5', 'wordpress']

	},{
		imgURL: '/images/dinoSurvey.jpg',
		title: 'Dino Survey',
		desc: 'This silly app matches you with like-minded dinos.',
		siteLink: 'https://fast-springs-54155.herokuapp.com/survey',
		gitHub: 'https://github.com/mchogan7/FriendFinder',
		techIcons: ['git', 'css3', 'html5', 'javascript', 'jquery', 'nodejs' ]

	},{
		imgURL: '/images/dinoRPG.jpg',
		title: 'Dino RPG',
		desc: 'An exercise in managing HTML attributes with jQuery.',
		siteLink: 'https://thawing-temple-71492.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/04-RPG',
		techIcons: [ 'git', 'css3', 'html5', 'javascript', 'jquery']

	},{
		imgURL: '/images/dinoHangman.jpg',
		title: 'Dino Hangman',
		desc: 'My first foray into JavaScript. I will always keep this around to see how far I\'ve come.',
		siteLink: 'https://frozen-beyond-82893.herokuapp.com/',
		gitHub: 'https://github.com/mchogan7/week-3-game',
		techIcons: ['git', 'css3', 'html5', 'illustrator', 'javascript']

	}
]

createPortfolio()

function createPortfolio() {
	for (var i = 0; i < portfolioItems.length; i++) {
var portMake="";
portMake += "<div class=\"portfolioItem\">";
portMake += "    <img class=\"portImg\" src="+ portfolioItems[i].imgURL +">";
portMake += "    <h5>" + portfolioItems[i].title +"<\/h5>";
portMake += "    <div class=\"itemDesc\">"+ portfolioItems[i].desc + "<\/div>";
portMake += "    <div class=\"portLinks\"><a href="+ portfolioItems[i].siteLink + " target=\"blank\">Visit Site<\/a><a href="+ portfolioItems[i].gitHub +"  target=\"blank\"><i class=\"devicon-github-plain\"><\/i><\/a><\/div>";
portMake += "    <div class=\"techIcons\">"
	
	for (var j = 0; j < portfolioItems[i].techIcons.length ; j++) {
		portMake += "<div class=\"iconWrapper\" tooltip="+ portfolioItems[i].techIcons[j] + "><i class=\"devicon-" + portfolioItems[i].techIcons[j] + "-plain\"><\/i><\/div>";
	}
portMake += "<\/div>";
portMake += "";

$('.portfolioMain').append(portMake)
	}
	$('.portfolioMain').append('<div class="spacer"></div>')
}