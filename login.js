let loginData = JSON.parse(localStorage.getItem("loginData")) || []; 
// Get stored login data, or start with an empty array

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // store login entry
    let loginEntry = {
        email: email,
        password: password, // ⚠️ not safe in real-world apps
        time: new Date().toLocaleString()
    };

    loginData.push(loginEntry);

    // save back to localStorage
    localStorage.setItem("loginData", JSON.stringify(loginData));

    alert("Login successful (demo). Redirecting...");
    window.location.href = "index.html";
});

function loginWithGoogle() {
    alert("Google login clicked (Integrate with Google OAuth API here).");
}

function loginWithFacebook() {
    alert("Facebook login clicked (Integrate with Facebook Login API here).");
}

function saved(email) {
    localStorage.setItem("Email", email);
}