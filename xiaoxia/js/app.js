$(function(){
	bindEvent();
	judgmentTime();
});

function bindEvent(){
	var slideout = new Slideout({
		'panel': $('.main')[0],
		'menu': $('.menu')[0],
		'padding': $('.menu').width(),
		'touch': false
	});
	
	slideout.toggle();
	$('.toggle-menu').click(function() {
		slideout.toggle();
	});

	$("ul.menu-section-list > li").click(function(){
		var _url = $(this).find("a").attr("data");
		$("#iframe").attr("src",_url);
	});
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