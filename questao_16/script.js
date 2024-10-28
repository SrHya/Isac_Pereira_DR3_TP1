document.addEventListener("DOMContentLoaded", function () {
  const conteudoDiv = document.querySelector(".conteudo");
  if (conteudoDiv) {
    console.info("Div '.conteudo' encontrada");
    conteudoDiv.addEventListener("click", function () {
      conteudoDiv.style.backgroundColor = "blue";
      conteudoDiv.style.color = "white";
      conteudoDiv.style.borderColor = "orange";
      conteudoDiv.style.width = conteudoDiv.offsetWidth + 2 + "px";
      conteudoDiv.style.height = conteudoDiv.offsetHeight + 2 + "px";
      console.info("Estilos da div alterados");
    });
  } else {
    console.error("Elemento com a classe 'conteudo' não encontrado.");
  }
});
