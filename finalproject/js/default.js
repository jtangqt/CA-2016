$(document).ready(function(){
	var faq	= document.getElementsByClassName("faq")[0];
	var developer = faq.getElementsByClassName("right")[0];
	var devprice = developer.getElementsByClassName("devprice")[0];

	//this keeps the header in one spot
	$(window).on("scroll",function(){
		//transitioning the header from unseen to seen   
	    var height = $(window).height();

	    if( window.scrollY < height ) {
	      $("header").removeClass("sticky");
	    } else { //window.scrollY >= 320
	      $("header").addClass("sticky");
	    }

		if( window.scrollY < 930 ) {
	    	$("header").css("background-color","rgba(255,255,255, 0.5)");
	    	$(".link").css("color", "rgba(255,255,255,0)");
	    }
	    else {
	    	$("header").css("background-color","rgba(255,255,255,1)");
	    	$(".link").css("color", "black");
	    }

	});


	//this is for the scroll to section function
	$(".link").on("click",function(e){
	    e.preventDefault();
	    var scrollTime = 500;

		if( $(this).hasClass("link_home") ) {
	   		$.scrollTo("#jump_home",scrollTime);
	    } 
	    else if( $(this).hasClass("link_about") ) {
	    	$.scrollTo("#jump_about",scrollTime);
	    } 
	    else if( $(this).hasClass("link_faq") ) {
	    	$.scrollTo("#jump_faq",scrollTime);
	    }
	    else if ($(this).hasClass("link_contact")){
	    	$.scrollTo("#jump_contact", scrollTime);
	    }
  	});


	//this is for the form for businesses to get an approximate price
	$("#business").submit(function(e){
		e.preventDefault();
		var rating = parseInt($("input[name = 'rating']").val());
		var num_projects = parseInt($("input[name = 'num_projects']").val());

		console.log("rating:",rating);
		console.log("num-projects:", num_projects);
		
		if(isNaN(num_projects)){
			console.log("hallo");
			//need to add error statement here
		}	
		else if (isNaN(rating)){
			console.log("rawr");
			//need to add error statement here
		}

		var price = (rating*300)+(num_projects*1);
		console.log(price);
		
		devprice.innerHTML = "Price: " +price; 
	});

})
