document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Adiciona evento de clique e teclado para os cards
  cards.forEach((card) => {
    card.addEventListener("click", (event) => toggleCard(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleCard(card);
      }
    });
  });

  // Adiciona evento de clique para os botões de filtro
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove a classe 'active' de todos os botões e adiciona ao clicado
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Chama a função de filtragem com o valor do data-filter
      const filterValue = btn.getAttribute("data-filter");
      filterCards(filterValue);
    });
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
  };

  // Função de filtragem principal
  const filterCards = (filter) => {
    cards.forEach((card) => {
      const tags = card.querySelectorAll(".tag");
      const hasMatchingTag = Array.from(tags).some(
        (tag) => tag.textContent.includes(`#${filter}`)
      );

      // Fecha o card caso ele esteja aberto antes de esconder
      if (card.classList.contains("open")) {
        toggleCard(card);
      }

      if (filter === "all" || hasMatchingTag) {
        card.style.display = ""; // Exibe o card
      } else {
        card.style.display = "none"; // Esconde o card
      }
    });
  };
});