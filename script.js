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
  const popup = document.getElementById("popupG");
  popup.style.display = "flex";
  const img = document.getElementById("popupGImg");
  img.src = src;
  popup.style.display = "flex"; // Isso só funciona se não houver !important
}

function fecharPopupGaleria() {
  document.getElementById("popupG").style.display = "none";
}
window.onload = function () {
  // Mantém o GIF por 2s
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";

    // Título aparece
    document.querySelector(".titulo").classList.add("ativo");

    // Após o título, aparece o botão
    setTimeout(() => {
      document.querySelector(".inscricao-btn").classList.add("ativo");
    }, 900); // Tempo depois do titulo

    // Após o título, aparece o botão *palestrantes
    setTimeout(() => {
      document.querySelector(".programacao-btn").classList.add("ativo");
    }, 900); // Tempo depois do titulo

    // Depois aparece a navbar
    setTimeout(() => {
      document.querySelector(".navbar").classList.add("ativo");
    }, 1400); // Tempos depois do botão )
  }, 400); // Tempo para começar as animações
};

