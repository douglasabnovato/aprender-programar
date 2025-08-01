document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            const clickedCard = event.currentTarget;
            const isCardOpen = clickedCard.classList.contains('open');

            // Primeiro, fecha todos os outros cards
            cards.forEach(otherCard => {
                if (otherCard !== clickedCard) {
                    otherCard.classList.remove('open');
                }
            });

            // Depois, alterna o estado do card clicado.
            // Se ele já estava aberto, ele será fechado.
            // Se estava fechado, ele será aberto.
            clickedCard.classList.toggle('open');
        });
    });
});