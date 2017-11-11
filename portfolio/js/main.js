var currentSlide = 1;
var intervalId;

function goToSlideNumber(number) {
  var selector = "#box" + updateSlide(number); 
  var fadeDuration = 4000;
  $(".box").stop().not(selector).fadeOut(fadeDuration);
  $(selector).fadeIn(fadeDuration);
}

function updateSlide(number) {
  var slideCount = document.getElementsByClassName("box").length;
  if( number > slideCount ) {
    number = 1;
  } else if( number < 1 ) {
    number = slideCount;
  }
  currentSlide = number;
  return number;
}

function startCarousel() {
  if( intervalId ) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function(){
    goToSlideNumber(currentSlide+1);
  },5500);
}

$(document).ready(function(){
	startCarousel(); 

	$(".link").on("click", function(e){
		e.preventDefault();
		var scrollTime = 500;
		if ($(this).hasClass("link_menu")){
			$.scrollTo("#port", scrollTime);
		}
	});

	//slideshow for the portfolio
	

	//menu's opacity gets brighter as one scrolls down
	// $(window).on("scroll", function(){
	// 	if (scrollY > 1000){
	// 		$("footer").removeClass("unsee");
	// 	}
	// 	else{
	// 		$("footer").addClass("unsee");
	// 	}
	// });

});