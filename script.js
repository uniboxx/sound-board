const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.querySelector(`#${sound}`);
    song?.pause();
    song.currentTime = 0;
  });
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', e => {
    stopSongs();
    document.querySelector(`#${sound}`).play();
  });

  document.querySelector('#buttons')?.appendChild(btn);
});
