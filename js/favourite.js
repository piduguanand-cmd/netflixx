fetch("data/movies.json")
    .then(res => res.json())
    .then(allMovies => {
        const favIds = JSON.parse(localStorage.getItem("favourites")) || [];
        const favMovies = allMovies.filter(m => favIds.includes(m.id));
        const container = document.getElementById("favouritesContainer");
        if (favMovies.length === 0) {
            container.innerHTML = '<div class="loading">No favourites yet. Add some from movie details!</div>';
            return;
        }
        container.innerHTML = favMovies.map(movie => `
            <div class="movie-card" onclick="openMovie(${movie.id})">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.language}</p>
                    <p>⭐ ${movie.rating}</p>
                </div>
            </div>
        `).join("");
    });

function openMovie(id) {
    localStorage.setItem("selectedMovie", id);
    window.location.href = "details.html";
}