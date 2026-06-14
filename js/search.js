// Wait for DOM and allMovies to be ready
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    // Function to perform search
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        // Use the global allMovies array from movies.js
        if (typeof window.allMovies === "undefined" || !window.allMovies) {
            console.log("Movies not loaded yet");
            return;
        }
        
        let filteredMovies;
        if (query === "") {
            // Show all movies
            filteredMovies = window.allMovies;
        } else {
            // Filter movies
            filteredMovies = window.allMovies.filter(movie =>
                movie.title.toLowerCase().includes(query) ||
                movie.language.toLowerCase().includes(query) ||
                movie.genre.toLowerCase().includes(query)
            );
        }
        
        // Use the displayMovies function from movies.js (global)
        if (typeof displayMovies === "function") {
            displayMovies(filteredMovies);
        } else {
            console.log("displayMovies not found");
        }
    }

    // Add event listener
    searchInput.addEventListener("input", performSearch);
    
    // Also listen for when movies finish loading
    const checkInterval = setInterval(() => {
        if (typeof window.allMovies !== "undefined" && window.allMovies) {
            clearInterval(checkInterval);
            // Initial display already done by movies.js
        }
    }, 100);
});