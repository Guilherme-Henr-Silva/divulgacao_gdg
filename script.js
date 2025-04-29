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

document.addEventListener("DOMContentLoaded", function () {
    // Máscara do CPF
    function aplicarMascaraCPF(cpfInput) {
      cpfInput.addEventListener("input", function () {
        let valor = cpfInput.value.replace(/\D/g, "");
        
        if (valor.length > 11) valor = valor.slice(0, 11);
        
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        
        cpfInput.value = valor;
      });
    }
  
    const cpfInput = document.querySelector('input[name="cpf"]');
    aplicarMascaraCPF(cpfInput);
  
    // Popup de Inscrição
    const popup = document.getElementById("popup-overlay");
    const openBtn = document.querySelector(".inscricao-btn");
    const closeBtn = document.querySelector(".close-btn");

  
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popup.style.display = "flex";
    });
  
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

  
    // Validação de Maioridade e Envio do Formulário
    document.getElementById("form-inscricao").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
  
      // Validação da idade (maior de 18 anos)
      const hoje = new Date();
      const nascimento = new Date(data.dataNascimento);
      const idade = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
  
      const maiorDeIdade = mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())
        ? idade - 1
        : idade;
  
      if (maiorDeIdade < 18) {
        alert("Você precisa ser maior de 18 anos para se inscrever.");
        return;
      }
  
      console.log("Dados enviados:", data);
  
      alert("Inscrição enviada com sucesso!");
      popup.style.display = "none";
      this.reset();
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll('.nav-btn');
  
    botoes.forEach(botao => {
      botao.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const programacaoBtn = document.querySelector(".programacao-btn");
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeBtn = popupOverlay.querySelector(".close-btn");
  
    if (programacaoBtn && popupOverlay) {
      programacaoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popupOverlay.classList.remove("hidden");
      });
  
      closeBtn.addEventListener("click", function () {
        popupOverlay.classList.add("hidden");
      });
  
      window.addEventListener("click", function (e) {
        if (e.target === popupOverlay) {
          popupOverlay.classList.add("hidden");
        }
      });
    }
  });
  