var counter = 0;
var images = ["img/Photo1.jpg","img/Photo2.jpg","img/Photo3.jpg","img/Photo4.jpg","img/Photo5.jpg","img/Photo6.jpg"];

window.addEventListener("load",function(){

	var galleryImage = document.querySelector("#galleryImage");

	document.querySelector("#left").addEventListener("click",function(){
	var url = images[counter];
	counter--;
		if(counter == -1) {
			counter = 4;
		}

		
		galleryImage.src = url;
	});

	document.querySelector("#right").addEventListener("click",function(){
	var url = images[counter];
	counter++;
		if(counter == 5) {
			counter = 0;
		}

		galleryImage.src = url;
	});
	
	

});

	
	




