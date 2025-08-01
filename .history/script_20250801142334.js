document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Verifica se o card clicado já está aberto
            const isCardOpen = card.classList.contains('open');

            // 1. Fecha todos os cards (removendo a classe 'open')
            cards.forEach(otherCard => {
                otherCard.classList.remove('open');
            });

            // 2. Se o card clicado não estava aberto, agora o abre
            if (!isCardOpen) {
                card.classList.add('open');
            }
        });
    });
});