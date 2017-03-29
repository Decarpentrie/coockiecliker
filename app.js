var clicks = 0;


function clic() {
    clicks++;
}

$('.button').click(function(){
	clic();
    console.log(clicks);	
});


