document.addEventListener("DOMContentLoaded", function () {
  const imagem = document.querySelector("img");
  if (imagem) {
    console.info("Imagem encontrada:", imagem.src);
    imagem.addEventListener("click", function () {
      imagem.src = "cafe.jpg";
      console.info("Imagem alterada para 'cafe.jpg'");
    });
  } else {
    console.error("Elemento <img> não encontrado.");
  }
});
