document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const country = document.getElementById("country").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !email || !password || !country || !age) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Sign Up successful! Welcome " + name);
    // Here, you would send the data to your server using fetch() or AJAX.
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulate Social Login click
document.querySelector(".google").addEventListener("click", function() {
    alert("Google login integration coming soon!");
});

document.querySelector(".facebook").addEventListener("click", function() {
    alert("Facebook login integration coming soon!");
});
