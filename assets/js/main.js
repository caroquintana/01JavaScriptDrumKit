 function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //detecta la etiqueta audio data-key del html
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //detecta la etiqueta div data-key del html
	if(!audio) return; //detiene la función de salir corriendo
	audio.currentTime = 0; //permite que se pueda repetir el sonido al presionar varias veces las teclas
	audio.play(); //pone play a audio
	//En jquery sería key.addClass('playing');
	key.classList.add('playing'); //añade al div que tiene clase key, la clase playing (css)
}

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//detectar un evento del teclado en la ventana del navegador
window.addEventListener('keydown', playSound);