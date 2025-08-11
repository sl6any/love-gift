const btn = document.getElementById('play');
const song = document.getElementById('song');

btn.addEventListener('click', async () => {
  try {
    if (song.paused) {
      await song.play();
      btn.textContent = 'Pause';
    } else {
      song.pause();
      btn.textContent = 'Play our song';
    }
  } catch (e) {
    alert('Could not play audio. Tap again or check volume.');
  }
});
