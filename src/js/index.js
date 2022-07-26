const imagens = document.querySelectorAll(".cartao");
const setaVoltar = document.getElementById("btn-voltar");
const setaAvancar = document.getElementById("btn-avancar");
var imagemAtual = 0;

function esconderImagens() {
  imagens.forEach((imagem) => {
    imagem.classList.remove("selecionado");
  });
}

function selecionarImagem() {
  imagens[imagemAtual].classList.add("selecionado");
}

setaAvancar.addEventListener("click", function (event) {
  event.preventDefault();
  if (imagemAtual !== imagens.length - 1) {
    imagemAtual++;
  }

  esconderImagens();
  selecionarImagem();
});

setaVoltar.addEventListener("click", function (event) {
  event.preventDefault();
  if (imagemAtual !== 0) {
    imagemAtual--;
  }

  esconderImagens();
  selecionarImagem();
});