$(document).on("ready",function(){
	$("button").on("click",function(){
		$("body").addClass("overlay");
	});
	
	$("#lightbox button").on("click",function(){
		$("body").removeClass("overlay");
	});

//if the window has the overlay
	// if(){
	// 	$(window).on("click", function(){
	// 		$("body").removeClass("overlay");
	// 	});
	// }


});
