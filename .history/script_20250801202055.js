document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    // Adiciona o evento de clique e de teclado (Enter/Espaço)
    card.addEventListener("click", (event) => toggleCard(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleCard(card);
      }
    });

    // Função para lidar com o toggle do card
    const toggleCard = (clickedCard) => {
      const isOpen = clickedCard.classList.contains("open");

      // Fecha outros cards abertos
      cards.forEach((otherCard) => {
        if (otherCard !== clickedCard && otherCard.classList.contains("open")) {
          otherCard.classList.remove("open");
          otherCard.setAttribute("aria-expanded", "false");
        }
      });

      // Alterna o card clicado
      clickedCard.classList.toggle("open");
      clickedCard.setAttribute("aria-expanded", !isOpen);

      // Adiciona o efeito de "ripple"
      createRipple(clickedCard, event);
    };

    // Função para criar o efeito de "ripple" (feedback visual do clique)
    const createRipple = (element, event) => {
      const ripple = document.createElement("span");
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      // Define o tamanho e a posição da onda a partir do clique
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - element.offsetLeft - radius}px`;
      ripple.style.top = `${event.clientY - element.offsetTop - radius}px`;

      ripple.classList.add("ripple");
      
      // Remove qualquer ripple anterior e adiciona o novo
      const oldRipple = element.querySelector(".ripple");
      if (oldRipple) {
        oldRipple.remove();
      }
      element.appendChild(ripple);
    };
  });
});