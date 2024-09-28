const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevenir la propagación del evento
    this.classList.toggle("favorited");

    if (this.classList.contains("favorited")) {
      this.textContent = "Favorited";
      this.style.backgroundColor = "red";
    } else {
      this.textContent = "Favorite";
      this.style.backgroundColor = "#007bff";
    }
  });
});
