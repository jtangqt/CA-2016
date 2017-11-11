$(document).ready(function(){
//  Card A
// 1) Find the person who has the <h1> card.
// 2) Together, write a jQuery statement that will log the text inside the <h1> to console.
	console.log($("h1").html());
	$("h1").on("click", function{
		$(this).html("We did it!") 
		//this one changes only the h1 we want
	//	$("h1").html("we did it!") 
	// this one changes all of the h1
	});
// 3) Then, update the text to say "We did it!" when the <h1> is clicked.

// Card B
// 1) Find the person who has the <footer> card.
// 2) Together, write a jQuery statement that will log the text inside the <footer> to console.
// 3) Then, update the text to include both of your names when the <footer> is clicked.

console.log($("footer").html());
$("footer").on('click', function(){
	$("footer").append("Me #1, Me #2").off('click');
	// $('footer').append("Me #1, Me #2";
	// 	$('footer').off('click');
	//this was what it was before the off
});

// Card C
// 1) Find the person who has the div#message card...
// 2) Together, write a jQuery statement that adds the text "You have made an error." inside the tag.
// 3) Next, add a class called error to the div when the <div#message> is clicked.
$("div#message").html("you have made an error").on("click", function(){
	$(this).
});


// Card D
// 1) Find the person who has the <nav> card.
// 2) Together, write a jQuery statement that logs the text of each <li> to console.
// 3) Next, add a 4th <li> to the <ul> and have its text say: "Login"
});