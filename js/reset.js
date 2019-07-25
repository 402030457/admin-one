


var myAuto = document.getElementById('myaudio');
var Play = document.getElementById('play');
var Pause = document.getElementById('pause');
var Img = document.getElementById('photo');
 function autoPlay() {
	myAuto.play();
	Play.style.display = 'none';
	Pause.style.display = 'block';
	Img.src = 'img/open.jpg';
}
function closePlay() {
	myAuto.pause();
	// myAuto.load();
	Play.style.display = 'block';
	Pause.style.display = 'none';
	Img.src = 'img/stop.jpg';
}