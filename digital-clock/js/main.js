document.addEventListener("DOMContentLoaded", function(event){
	


	var clock = document.getElementsByClassName('clock')[0];
		if (typeof clock !==  "undefined"){

		var today = new Date();

		clock.getElementsByClassName("seconds")[0].innerText =pad2Digits(today.getSeconds());
		clock.getElementsByClassName("minutes")[0].innerText = pad2Digits(today.getMinutes());
		clock.getElementsByClassName("hours")[0].innerText = pad2Digits(today.getHours()); 
		}

	var colors = ["#ffe6ee", " #ffccdd", "#ffb3cc", "#ff99bb", "#ff80aa", "#ff6699", " #ff4d88", "#ff3377", "#ff1a66", "#ff0055", "#e6004c", "#cc0044", "#b3003b", "#990033", " #80002a", "#660022", "#4d0019", "#330011", "#1a0008", "#000000", "#260033", "#4d0066", "#730099", "#9900cc"];

	setInterval(function(){
		var clock = document.getElementsByClassName('clock')[0];
		if (typeof clock ===  "undefined"){
			return; 
		}
		var seconds = clock.getElementsByClassName("seconds")[0];
		var minutes = clock.getElementsByClassName("minutes")[0];
		var hours = clock.getElementsByClassName("hours")[0];



		var num_seconds= parseInt(seconds.innerText) +1; 
		//if seconds is a minute or more, increase minutes by 1
		if(num_seconds >=60){	
			seconds.innerText = "00";
			var num_minutes = parseInt(minutes.innerText)+1;

			if(num_minutes %5==0){
				var x = getRandomInt(0,255);
				var y = getRandomInt(0,255);
				var z = getRandomInt(0,255);
				clock.style.backgroundColor = "rgb(" + [x,y,z].join() + ")";
			}
			else{
				clock.style.backgroundColor= "pink"
			}

			if (num_minutes == 60){
				minutes.innerText = "00";
				var num_hours = parseInt(hours.innerText)+1;
				if(num_hours == 24){
					hours.innerText = "00";
					clock.style.color = colors[0];
				}
				else{
					hours.innerText = pad2Digits(num_hours);
					clock.style.color = colors[num_hours];
				}
			}
			else{
				minutes.innerText = pad2Digits(num_minutes);
			}

			if (num_minutes % 2 ==0){
				minutes.style.color = "pink";
			}
			else{
				minutes.style.color = "black"; 
			}
			
		}

		else{
			seconds.innerText = pad2Digits(num_seconds);
		}
	}, 1000);

});


function pad2Digits(someNumber){
	if(someNumber <10){
		return "0"+someNumber; 
	}
	else{
		return someNumber;
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//this is when we have jquery
// $(document).on("ready", function(){

// });


// for(hours = 0, hours<25, hours ++){
// 	for (minutes = 0, minutes < 60, minutes ++){
// 		for (seconds = 0, seconds <60, seconds ++){
// 			setTimeout()
// 		}
// 	}
// }