document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("link");
  if (link) {
    console.info("Link encontrado:", link.href);
    if (link.href !== "https://www.infnet.edu.br/infnet/instituto/") {
      link.href = "https://www.infnet.edu.br/infnet/instituto/";
      console.info("Link atualizado para:", link.href);
    }
  } else {
    console.error("Elemento com ID 'link' não encontrado.");
  }
});
