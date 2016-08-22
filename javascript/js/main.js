window.onload= function(){


//#2
	hey();	
	function hey(){
		document.getElementsByClassName("hello")[0].innerHTML = "hi";
	};

//#3
var x = 4;
var y = 3;
	var z = x*y;
	alert("#3 is "+z);

//#4

var Interests= [
		["GLO", "physics homework", "coding"],
		["running", "traveling", "GLO"]
];

console.log("#4a is "+Interests[0][0] + " #4b is "+ Interests[1][1]);

//#5

for( i=0; i<15; i++){
	console.log(i);

	if(i<10){
		var u = 10 -i; 
		console.log(i +' is ' + u+ ' less than 10');
	}
	else if (i >10){
		console.log (i +' is greater than 10');
	}
	else{
		console.log(i +' is equal to 10');
	}

}

//#8

console.log('enter a number from 1-5 and see what you win (ex. door(3))');

}


//#8 function
function door(option) {
	if (option == "1"){
		console.log("you'll receive a $10 gift card from amazon");
	}
	if (option == "2"){
		console.log("you'll receive a mug from Jasmine");
	}
	if (option == "3"){
		console.log("you'll receive a porcupine for christmas");
	}
	if (option == "4"){
		console.log("you'll receive the GRAND PRIZE OF NOTHING");
	}
	if (option == "5"){
		console.log("you'll receive a car, a toy car");
	}
}


//#2b function

function two_bfactorial(a,b){
	c = a
	for(i = 1; i<=b; i++){
		c = c*i; 
	}
	console.log(c);
}

//#2c
function whatcolor2use(){

	var n = getRandInt(0, 255);
	var m = getRandInt(0, 255);
	var o = getRandInt(0, 255);

	console.log("rgb("+n+", "+m+", "+o+")");

}


function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}