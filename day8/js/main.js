// $(document).ready(function(){
// //  Card A
// // 1) Find the person who has the <h1> card.
// // 2) Together, write a jQuery statement that will log the text inside the <h1> to console.
// 	console.log($("h1").html());
// 	$("h1").on("click", function(){
// 		$(this).html("We did it!") 
// 		//this one changes only the h1 we want
// 	//	$("h1").html("we did it!") 
// 	// this one changes all of the h1
// 	});
// // 3) Then, update the text to say "We did it!" when the <h1> is clicked.

// // Card B
// // 1) Find the person who has the <footer> card.
// // 2) Together, write a jQuery statement that will log the text inside the <footer> to console.
// // 3) Then, update the text to include both of your names when the <footer> is clicked.

// console.log($("footer").html());
// $("footer").on('click', function(){
// 	$("footer").append("Me #1, Me #2").off('click');
// 	// $('footer').append("Me #1, Me #2";
// 	// 	$('footer').off('click');
// 	//this was what it was before the off
// });

// // Card C
// // 1) Find the person who has the div#message card...
// // 2) Together, write a jQuery statement that adds the text "You have made an error." inside the tag.
// // 3) Next, add a class called error to the div when the <div#message> is clicked.
// $("div#message").html("you have made an error").on("click", function(){
// 	$(this).addClass("error");
// });


// // Card D
// // 1) Find the person who has the <nav> card.
// // 2) Together, write a jQuery statement that logs the text of each <li> to console.
// // 3) Next, add a 4th <li> to the <ul> and have its text say: "Login"


// for(var i=0; i < $("nav li").length; i++){
// 	console.log($("nav li")[i].innerHTML);
// }



// var global_name = "Jasmine";
// var global_github_account = "jtangqt";

// function countRepositories(account){
// 	if(typeof account == "undefined"){
// 		account = global_github_account;
// 	}
// 	//returns the number of repositories the user has
// 	var repos = {
// 		"jtangqt": ["SCC", "example_form"],
// 		"camerican": ["SCC"]
// 	}
// 	if (typeof repos[account]!="undefined"){
// 		return repos[account].length;
// 	}
// 	else{
// 		return 0;
// 	}
// }

// var global_var = 3;

// function contain(variable){
// 	var local_variable = 5; 
// 	if (typeof variable == "undefined"){
// 		variable = global_var; 
// 	}
// 	return variable+local_variable;
// }


$(document).on("ready", function(){
	$("#lightbox button").on("click". function(){
		$("body").removeClass("overlay");
	});

	$("h1").on("click", function(){
		$("body").addClass("overlay");
	});

})