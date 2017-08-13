var tween1 = TweenMax.to("#img1", 3, {left:"100px",ease:Power2.easeInOut});
var tween2 = TweenMax.to("#img2", 3, {left:"500px",ease:Power2.easeInOut});
var tween3 = TweenMax.from(".w1",3,{opacity:0.2});
window.onload = function(){
	tween1.play();
	tween2.play();
	tween3.play();
}

$(window).on('scroll',function(){

	var wScroll = $(this).scrollTop()
	var w1 = document.querySelector('.w1')
	w1.style.top=wScroll*0.5+'px';
	var exp = document.querySelector('.explore')
	exp.style.top=wScroll*0.5+'px';
	var cloud1 = document.querySelector('#img1')
	cloud1.style.top=wScroll*0.7+'px';
	var cloud2 = document.querySelector('#img2')
	cloud2.style.top=wScroll*0.2+'px';
	
});
$('.explore').on('click',function(){
	TweenMax.to("#img1",2,{left:600,opacity:0});
	TweenMax.to("#img2",2,{left:0,opacity:0});
	TweenMax.to(".w1",2,{opacity:0});
	TweenMax.to(".explore",2,{opacity:0});
	setTimeout(function(){
			$('.w1').addClass('hidden')
			$(".w1Detail").removeClass('hidden')
			TweenMax.to(".w1Detail",2,{opacity:1,ease:Power3.easeInOut})
		}, 2000);
});

$(function(){  

var wrapper = $("#wrapper"),
    $menu = $("#menu"),
    $window = $(window);

$menu.on("click","a", function(){
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
   
    TweenMax.to(window, 3, {scrollTo:{y: topY,offsetY:50}, ease:Power3.easeOut });
  	// $window.scrollTo(topY, 2500, {easing: 'elasout'});
  return false;
});  
  
});
$('#l1').on('click',function(){
	TweenMax.to(window,2,{scrollTo:{y:"#div01"},ease:Power3.easeInOut})
})