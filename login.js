document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here you would add actual backend API call for authentication
    alert("Login successful (demo). Redirecting...");
    window.location.href = "index.html";
});

function loginWithGoogle() {
    alert("Google login clicked (Integrate with Google OAuth API here).");
}

function loginWithFacebook() {
    alert("Facebook login clicked (Integrate with Facebook Login API here).");
}
