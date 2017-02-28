$(function(){
	bindEvent();
	judgmentTime();
});

function bindEvent(){
	$('.toggle-menu').click(function() {
		toogleMenu();
	});

	$("ul.menu-section-list > li").click(function(){
		openIframe.apply(this);
	});
	
	toogleMenu();
	var _firstBookmarks = document.querySelector('.menu > section.menu-section > ul.menu-section-list > li');
	!!_firstBookmarks && openIframe.apply(_firstBookmarks);
};

function judgmentTime(){
	var nowHour = new Date().getHours(),
		welcomeWord = "Moring";

	if(nowHour >= 0 && nowHour < 12){
		welcomeWord = "Moring";
	}else if(nowHour >= 12 && nowHour < 18){
		welcomeWord = "Afternoon";
	}else if(nowHour >= 18 && nowHour < 24){
		welcomeWord = "Night";
	}
	$(".welcome-word").html(welcomeWord);
}

function openIframe(){
	var _url = $(this).find("a").attr("data");
	$("#iframe").attr("src",_url);
}

function toogleMenu(){
	var _leftSize = parseInt($('.main').css('left')),
		_expendWidth = !_leftSize ? $('.menu').width() : 0;
	$(".main").animate({left: _expendWidth},'fast');
}