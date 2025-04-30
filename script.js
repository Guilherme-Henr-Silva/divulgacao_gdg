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
// Adiciona funcionalidade de clique nas imagens do carrossel
const imagensGaleria = document.querySelectorAll('.carousel-track img');
const popupGImg = document.getElementById('popupGImg');

imagensGaleria.forEach(img => {
  img.addEventListener('click', () => {
    popupGImg.src = img.src;
    abrirPopupGaleria();
  });
});

// Funções para abrir/fechar o popup com nome correto
function abrirPopupGaleria() {
  document.getElementById("popupG").style.display = "flex";
}

function fecharPopupGaleria() {
  document.getElementById("popupG").style.display = "none";
}
