function abrirPopup() {
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
function openPopup() {
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

let index = 0;

function moveCarousel(step) {
  const track = document.querySelector('.carousel-track');
  const width = 320;
  index += step;
  const max = track.children.length - 1;
  if (index < 0) index = 0;
  if (index > max) index = max;
  track.scrollTo({ left: width * index, behavior: 'smooth' });
}