// Check authentication
if (!isLoggedIn() && !window.location.pathname.includes("login.html") && !window.location.pathname.includes("signup.html")) {
    redirectToLogin();
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("userEmail");
        window.location.href = "login.html";
    });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Hero buttons - only if on index.html
const heroPlayBtn = document.getElementById("heroPlayBtn");
if (heroPlayBtn) {
    heroPlayBtn.addEventListener("click", () => {
        if (window.allMovies && window.allMovies.length) {
            const randomMovie = window.allMovies[Math.floor(Math.random() * window.allMovies.length)];
            if (window.openVideoModal) {
                window.openVideoModal(randomMovie.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4");
            }
        }
    });
}

const heroInfoBtn = document.getElementById("heroInfoBtn");
if (heroInfoBtn) {
    heroInfoBtn.addEventListener("click", () => {
        if (window.allMovies && window.allMovies.length) {
            const randomMovie = window.allMovies[Math.floor(Math.random() * window.allMovies.length)];
            localStorage.setItem("selectedMovie", randomMovie.id);
            window.location.href = "details.html";
        }
    });
}