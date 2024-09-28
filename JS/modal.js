// modal.js

// Función para abrir el modal
function openModal(movie) {
  document.getElementById("modalMovieImage").src = movie.img;
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("movieDescription").innerText = movie.description;
  document.getElementById("movieModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

// Añadir un evento a cada botón de la película
const movieCards = document.querySelectorAll(".movie-card");
movieCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    // Verificar si el clic fue en el botón de "Favorito"
    if (event.target.classList.contains("favorite-btn")) {
      return; // No abrir el modal si se hizo clic en "Favorito"
    }

    // Crear objeto de película
    const movie = {
      img: card.querySelector(".movie-img").src,
      title: card.querySelector("h3").innerText,
      description: card.querySelector("p").innerText,
    };
    openModal(movie); // Abrir modal para la película
  });
});

// Cerrar el modal al hacer clic fuera de él
document.getElementById("movieModal").addEventListener("click", closeModal);
