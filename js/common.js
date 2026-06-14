// Common utility functions
function getCurrentUser() {
    return localStorage.getItem("userEmail");
}

function isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
}

function redirectToLogin() {
    if (!window.location.pathname.includes("login.html") && !window.location.pathname.includes("signup.html")) {
        window.location.href = "login.html";
    }
}

function addToMyList(movieId) {
    let myList = JSON.parse(localStorage.getItem("myList")) || [];
    if (!myList.includes(movieId)) {
        myList.push(movieId);
        localStorage.setItem("myList", JSON.stringify(myList));
        showToast("Added to My List");
    } else {
        showToast("Already in My List");
    }
}

function removeFromMyList(movieId) {
    let myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList = myList.filter(id => id != movieId);
    localStorage.setItem("myList", JSON.stringify(myList));
    showToast("Removed from My List");
}

function addToFavourites(movieId) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!favourites.includes(movieId)) {
        favourites.push(movieId);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        showToast("Added to Favourites ❤️");
    } else {
        showToast("Already in Favourites");
    }
}

function removeFromFavourites(movieId) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites = favourites.filter(id => id != movieId);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    showToast("Removed from Favourites");
}

function isInMyList(movieId) {
    let myList = JSON.parse(localStorage.getItem("myList")) || [];
    return myList.includes(movieId);
}

function isInFavourites(movieId) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    return favourites.includes(movieId);
}

function showToast(message, type = "success") {
    let toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = type === "success" ? "#2e7d32" : "#e50914";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";
    toast.style.fontWeight = "bold";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function openVideoModal(videoUrl) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoPlayer");
    if (!modal || !video) return;
    video.src = videoUrl;
    video.load();
    modal.classList.add("active");
    video.play().catch(e => console.log("Autoplay blocked"));
}

// Close video modal
document.addEventListener("click", (e) => {
    if (e.target.id === "closeVideoBtn") {
        const modal = document.getElementById("videoModal");
        const video = document.getElementById("videoPlayer");
        if (modal && video) {
            modal.classList.remove("active");
            video.pause();
        }
    }
});