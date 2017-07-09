//detectar un evento en el teclado en la ventana del navegador
window.addEventListener('keydown', function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //detecta las teclas del audio data-key del html
	if(!audio) return; //detiene la función de salir corriendo

	audio.play(); //pone play a audio
});