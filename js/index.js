const imagens = document.querySelectorAll(".cartao");
const setaVoltar = document.getElementById("btn-voltar");
const setaAvancar = document.getElementById("btn-avancar");
var imagemAtual = 2;

function esconderImagens() {
  imagens.forEach((imagem) => {
    imagem.classList.remove("selecionado");
  });
}

function selecionarImagem() {
  imagens[imagemAtual].classList.add("selecionado");
}

setaAvancar.addEventListener("click", function () {
  if (imagemAtual !== imagens.length - 1) {
    imagemAtual++;
  }

  esconderImagens();
  selecionarImagem();
  slide("avancar");
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual !== 0) {
    imagemAtual--;
  }

  esconderImagens();
  selecionarImagem();
  slide("voltar");
});

function slide(direcao) {
  const lista = document.getElementById("pokemons");
  let larguraCartao = imagens[0].offsetWidth - 20;
  let scroll = 0;

  if (direcao === "avancar") {
    scroll = scroll - larguraCartao;
  } else if(direcao === 'voltar') {
    scroll = scroll + larguraCartao;
  }

  lista.style.transform = `translateX(${scroll}px)`;
}
