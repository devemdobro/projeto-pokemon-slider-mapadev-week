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

let scroll = 0;
function slide(direcao) {
  console.log(imagemAtual)
  console.log('imagens.length :>> ', imagens.length);
  if(imagemAtual === 0) return;
  if (imagemAtual === imagens.length - 2) {
    return;
  }
  const lista = document.getElementById("pokemons");

  const cartao = imagens[0];
  var style = window.getComputedStyle(cartao);
  let larguraCartao = cartao.offsetWidth;    

  const larguraTotal = larguraCartao + (parseInt(style.margin) * 2) + 7;  

  if (direcao === "avancar") {
    scroll = scroll - larguraTotal;
  } else if (direcao === "voltar") {
    scroll = scroll + larguraTotal;
  }

  lista.style.transform = `translateX(${scroll}px)`;
}
