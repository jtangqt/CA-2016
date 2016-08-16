var modal = document.getElementById("modal");
var button = document.getElementById("click");
var x = document.getElementsByClassName("close")[0];



button.onclick = function(){
	modal.style.display= "block";
	console.log("hello");
};

x.onclick = function(){
	modal.style.display = "none";
};

window.onclick= function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
};