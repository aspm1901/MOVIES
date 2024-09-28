document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const selectedCategory = this.value;
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach((card) => {
      if (
        selectedCategory === "all" ||
        card.getAttribute("data-genre") === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
