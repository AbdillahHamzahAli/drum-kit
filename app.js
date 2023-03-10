function removedTransition(e) {
  if (e.propertyName !== "transform") return; // kip it if it's no a transform
  this.classList.remove("playing");
}

function playingSound(e) {
  const audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
  const key = document.querySelector(`.key[key-data="${e.keyCode}"]`);

  if (!audio) return; // stop fucntion from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removedTransition));
window.addEventListener("keydown", playingSound);
