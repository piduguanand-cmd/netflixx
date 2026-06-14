fetch("data/movies.json")
    .then(res => res.json())
    .then(allMovies => {
        const listIds = JSON.parse(localStorage.getItem("myList")) || [];
        const listMovies = allMovies.filter(m => listIds.includes(m.id));
        const container = document.getElementById("mylistContainer");
        if (listMovies.length === 0) {
            container.innerHTML = '<div class="loading">Your list is empty. Add movies from details page!</div>';
            return;
        }
        container.innerHTML = listMovies.map(movie => `
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