// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email && password) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("loggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("Please fill all fields");
        }
    });
}

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("signupEmail").value;
        const pwd = document.getElementById("signupPassword").value;
        if (name && email && pwd) {
            alert("Account Created Successfully! Please login.");
            window.location.href = "login.html";
        } else {
            alert("All fields are required");
        }
    });
}