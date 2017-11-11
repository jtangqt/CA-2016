$(document).ready(function(){

$(".modal_wrapper").click(function(e){
	if(e.target.className=="modal_wrapper"){
		$("body").removeClass("modal-on");
	}
});

	$(".activate_modal").click(function(e){
		e.preventDefault();
		console.log(e);
		$("body").addClass("modal-on");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("modal-on");
	
		if($(this).hasClass("yes")){
			window.location = "http://rubytuesday.com";
		}
		else if ($(this).hasClass("no")) {
			confirm("Are you ashamed of yourself?");
				$("img.circle").animate({
				right: "50px",
				top: "100px"
			}, 5000);
		}

	});		
});