window.addEventListener('keydown', playSound);

function playSound(event) {
  const key = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const drum = document.querySelector(`div[data-key="${key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  drum.classList.add('playing');

  setTimeout(() => {
    drum.classList.remove('playing');
  }, 100);
}
