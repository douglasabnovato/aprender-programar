document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    // Anexamos o evento de clique ao card completo.
    card.addEventListener("click", (event) => {
      // Garante que o clique seja tratado apenas no elemento .card, e não em seus filhos.
      const clickedCard = event.currentTarget;
      
      // Itera sobre todos os cards para fechar aqueles que não foram clicados
      cards.forEach((otherCard) => {
        if (otherCard !== clickedCard && otherCard.classList.contains("open")) {
          otherCard.classList.remove("open");
        }
      });
      
      // Alterna a classe "open" no card que foi clicado.
      clickedCard.classList.toggle("open");
    });
  });
});