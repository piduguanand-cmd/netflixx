let currentMovie = null;

fetch("data/movies.json")
    .then(res => res.json())
    .then(movies => {
        const movieId = localStorage.getItem("selectedMovie");
        currentMovie = movies.find(m => m.id == movieId);
        if (!currentMovie) return;

        document.getElementById("movieTitle").innerText = currentMovie.title;
        document.getElementById("movieLanguage").innerText = currentMovie.language;
        document.getElementById("movieGenre").innerText = currentMovie.genre;
        document.getElementById("movieYear").innerText = currentMovie.year;
        document.getElementById("movieRating").innerText = currentMovie.rating;
        document.getElementById("movieDescription").innerText = currentMovie.description;
        document.getElementById("movieImage").src = currentMovie.image;

        updateButtons();
    });

function updateButtons() {
    const favBtn = document.getElementById("favBtn");
    const listBtn = document.getElementById("listBtn");
    if (!currentMovie) return;

    if (isInFavourites(currentMovie.id)) {
        favBtn.innerHTML = "❤️ Favourited";
        favBtn.style.background = "#555";
    } else {
        favBtn.innerHTML = "❤️ Favourite";
        favBtn.style.background = "#e50914";
    }

    if (isInMyList(currentMovie.id)) {
        listBtn.innerHTML = "✓ In My List";
        listBtn.style.background = "#555";
    } else {
        listBtn.innerHTML = "➕ My List";
        listBtn.style.background = "#333";
    }
}

document.getElementById("playNowBtn").addEventListener("click", () => {
    if (currentMovie && currentMovie.videoUrl) {
        openVideoModal(currentMovie.videoUrl);
    } else {
        alert("Trailer not available. Using sample video.");
        openVideoModal("https://www.w3schools.com/html/mov_bbb.mp4");
    }
});

document.getElementById("favBtn").addEventListener("click", () => {
    if (!currentMovie) return;
    if (isInFavourites(currentMovie.id)) {
        removeFromFavourites(currentMovie.id);
    } else {
        addToFavourites(currentMovie.id);
    }
    updateButtons();
});

document.getElementById("listBtn").addEventListener("click", () => {
    if (!currentMovie) return;
    if (isInMyList(currentMovie.id)) {
        removeFromMyList(currentMovie.id);
    } else {
        addToMyList(currentMovie.id);
    }
    updateButtons();
});