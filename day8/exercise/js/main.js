console.log($("p").html());
$("p").on('click', function(){
	$('p').append("Me #1, Me#2").off('click');
});