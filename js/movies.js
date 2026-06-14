let allMovies = [];

function displayMovies(movies) {
    const container = document.getElementById("moviesContainer");
    if (!container) return;
    container.innerHTML = "";
    
    if (!movies || movies.length === 0) {
        container.innerHTML = '<div class="loading">No movies found 😢</div>';
        return;
    }
    
    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.onclick = () => openMovie(movie.id);
        
        // Use a default placeholder if image is missing or broken
        const imageUrl = movie.image && movie.image !== "" ? movie.image : `https://via.placeholder.com/300x450/e50914/ffffff?text=${encodeURIComponent(movie.title)}`;
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${movie.title}" 
                 onerror="this.src='https://via.placeholder.com/300x450/e50914/ffffff?text=${encodeURIComponent(movie.title)}'">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.language} | ${movie.genre}</p>
                <p>⭐ ${movie.rating}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function openMovie(id) {
    localStorage.setItem("selectedMovie", id);
    window.location.href = "details.html";
}

// Load movies
fetch("data/movies.json")
    .then(res => res.json())
    .then(movies => {
        window.allMovies = movies;
        allMovies = movies;
        displayMovies(movies);
    })
    .catch(err => {
        console.error("Error loading movies:", err);
        const container = document.getElementById("moviesContainer");
        if (container) {
            container.innerHTML = '<div class="loading">Error loading movies. Please check your movies.json file.</div>';
        }
    });