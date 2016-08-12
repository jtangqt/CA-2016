// alert('Hello World')

document.getElementsByTagName("h1")[0].innerHTML = "Hello World";


var multiArray =[
		[1, 2,3],
		["Red", "green", "blue"]
];

// var x = 3;
// var y = 2;

// console.log(x+y);



// alert(multiArray[1][1]+' pink');

// var interests =["running", "biking", "eating", "playing league"];
// var person ={firstName:'Jasmine', lastName: 'Tang', favoriteNumber:96, interests};

// console.log(person.firstName, person.lastName, person.favoriteNumber, interests[0], interests[1], interests[2], interests[3]);

// // for (var interests in person.interests){
// // 	console.log(interests);
// // }


// for (var i=0; i<person.interests.length; i++){
// 	console.log(person.interests[i]);
// }


// for( i=0; i<10; i++){
// 	console.log(i);
// }

// var x =3;

// if(x<10){
// 	console.log(x +'is less than 10');
// }
// else if (x >10){
// 	console.log (x +'is greater than 10');
// }
// else{
// 	console.log(x +'is equal to 10');
// }

function someText(textone){
	console.log(textone);
}

console.log('input a number from 1-3')
function door(texttwo){
	if (texttwo = "1"){
		console.log("you've received a new bmw z4");
	}
	else if (texttwo = "2"){
		console.log("you've received a new TOMATO");
	}
	else if (texttwo ="3"){
		console.log("you've received ONE new shoe");
	}
	else {
		console.log('that is an invalid input')
	}
}