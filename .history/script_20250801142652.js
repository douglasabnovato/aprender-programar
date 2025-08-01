document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Garante que o evento foi disparado no card, e não em um de seus filhos
      // que possa ter a mesma lógica de evento.
      const clickedCard = event.currentTarget;

      // Fecha todos os outros cards
      cards.forEach((otherCard) => {
        if (otherCard !== clickedCard) {
          otherCard.classList.remove("open");
        }
      });

      // Abre ou fecha o card clicado
      clickedCard.classList.toggle("open");
    });
  });
});
