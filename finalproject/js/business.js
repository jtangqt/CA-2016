var profpic = ["img/one.jpg", "img/two.jpg", "img/three.jpeg", "img/four.jpg", 
"img/five.jpg", "img/six.jpg"];
var preview = ["http://www.google.com", "http://www.facebook.com"]// this will go in the iframe
var profname = ["Name One", "Name Two", "Name Three", "Name Four", "Name Five", "Name Six"];
var number = ["one", "two", "three", "four", "five", "six"];
//var name = portfolio.getElementsByClassName('profname');
//var filter_name = portfolio.getElementsByClassName("checked_filters");

onReady(function () {
    show('page', true);
    show('loading', false);
});

$(document).on("ready", function(){
	var portfolio = document.getElementsByClassName('port');
	var high_rating = document.getElementsByClassName("high_rating");
	var high_numprojects = document.getElementsByClassName("high_numprojects");
    var inpersonNYC = document.getElementsByClassName("inpersonNYC");
    var low_numprojects = document.getElementsByClassName("low_numprojects");


    $(window).on("scroll", function(){
    	var height = $(window).height();
    	var height10 = (height)/10;
    	console.log(height10);
    	if(window.scrollY>height10){
    		$(".something").addClass("sticky");
		}
		else{
			$(".something").removeClass("sticky");
		}
    });


    //this part is for the display: to check which filters apply to the person
    if($("div").hasClass("high_rating")){
	   	var n = high_rating.length;
	   	for (i = 0;i <n; i++){	
	   		high_rating[i].getElementsByClassName("checked_filters")[0].innerHTML = "#highrating ";
	   	}
    }
    
   	if($("div").hasClass("high_numprojects")){
	   	var n = high_numprojects.length;
	   	for (i = 0;i <n; i++){	
	   		high_numprojects[i].getElementsByClassName("checked_filters")[0].innerHTML += "#lotsofprojects ";
	   	}
    }

    if($("div").hasClass("inpersonNYC")){
	   	var n = inpersonNYC.length;
	   	for (i = 0;i <n; i++){	
	   		inpersonNYC[i].getElementsByClassName("checked_filters")[0].innerHTML += "#inNYC ";
	   	}
    }

    if($("div").hasClass("low_numprojects")){
	   	var n = low_numprojects.length;
	   	for (i = 0;i <n; i++){	
	   		low_numprojects[i].getElementsByClassName("checked_filters")[0].innerHTML += "#babydeveloper:) ";
	   	}
    }


    profname.forEach(function(name,i){
    	portfolio[i].getElementsByClassName('profname')[0].innerHTML = name;
    });

    var m = portfolio.length;
    for(i = 0; i<m; i++){
    	var z = "pic"+(i+1);
    	$('.'+z).css("backgroundImage", "url('" + profpic[i] + "')");
    }


	

	$("#filters :checkbox").click(function() {
		$(".port").hide();
		$("#filters :checkbox:checked").each(function() {
	    	$("." + $(this).val()).show();
	    	//console.log($(this).val());
		});
		if ($("#filters :checkbox:checked").length <1){
			$(".port").show();
		}

		heightcheck();
		
	});

	$(".modal_wrapper").click(function(e){
		if(e.target.className=="modal_wrapper"){
			$("body").removeClass("modal-on");
		}
	});


	//activates the modal and puts information inside the modal
	$(".activate_modal").click(function(e){
		e.preventDefault();
		console.log(e.target.parentElement);	
		var target = e.target.parentElement;
		$(".box").css("backgroundImage", $(".prof",target).css("backgroundImage"));	
		$(".modal .name").html( $(".profname", target).html());
		$(".modal .filtered").html( $(".checked_filters", target).html());
		
		$("body").addClass("modal-on");
	});
	
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("modal-on");
	});

})

function heightcheck(){
	var height = $(window).height();
	var mainheight = $("main").height();


	if(mainheight<height){
		$("footer").addClass("sticky");
	}
	else{
		$("footer").removeClass("sticky");
	}
}

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

