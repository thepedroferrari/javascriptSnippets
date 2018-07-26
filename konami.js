// Write my name to change all images to cat gifs

const pressed = [];
const secretCode = 'Pedro';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
	const imgs = Array.from(document.getElementsByTagName("img"));
		imgs.map(img => {
			let ts = new Date().getTime();
			img.src = "https://thecatapi.com/api/images/get?format=src&type=gif&timestamp="+ts;
		})
	}
});
