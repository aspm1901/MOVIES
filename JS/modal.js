function openModal(movie) {
  document.getElementById("modalMovieImage").src = movie.img;
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("movieDescription").innerText = movie.description;
  document.getElementById("movieModal").style.display = "block";
}

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

const movieCards = document.querySelectorAll(".movie-card");
movieCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.classList.contains("favorite-btn")) {
      return;
    }

    const movie = {
      img: card.querySelector(".movie-img").src,
      title: card.querySelector("h3").innerText,
      description: card.querySelector("p").innerText,
    };
    openModal(movie);
  });
});

document.getElementById("movieModal").addEventListener("click", closeModal);
