document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Ação: toggles (adiciona/remove) a classe 'open' no card clicado
            card.classList.toggle('open');
        });
    });
});