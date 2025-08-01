document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            // Este é o ajuste principal.
            // Para o evento de clique de se propagar para elementos filhos.
            event.stopPropagation();
            
            const clickedCard = event.currentTarget;

            // Verifica se o card clicado já tem a classe 'open'
            const isCardOpen = clickedCard.classList.contains("open");

            // Fecha todos os outros cards
            cards.forEach((otherCard) => {
                if (otherCard !== clickedCard) {
                    otherCard.classList.remove("open");
                }
            });

            // Se o card clicado não estava aberto, ele será aberto.
            // Se estava aberto, ele será fechado.
            clickedCard.classList.toggle("open");
        });
    });
});