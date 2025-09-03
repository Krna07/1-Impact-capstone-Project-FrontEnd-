document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("username-display");
    const totalDonatedDisplay = document.getElementById("total-donated");

    const supportedList = document.getElementById("supported-list");
    const upcomingList = document.getElementById("upcoming-list");

    let totalDonated = 0;

    // Button to show all details
    document.getElementById("show-details-btn").addEventListener("click", function () {
        const detailsSection = document.getElementById("details-section");
        detailsSection.style.display = (detailsSection.style.display === "none") ? "block" : "none";
    });

    // Profile form
    document.getElementById("profile-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        usernameDisplay.textContent = name;
        alert("Profile updated successfully!");
    });

    // Donation form
    document.getElementById("donation-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const charityName = document.getElementById("charity-name").value;
        const donationAmount = parseInt(document.getElementById("donation-amount").value);

        supportedList.innerHTML += `<li>${charityName} - ₹${donationAmount}</li>`;
        totalDonated += donationAmount;
        totalDonatedDisplay.textContent = totalDonated;

        e.target.reset();
    });

    // Upcoming donations form
    document.getElementById("upcoming-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const charity = document.getElementById("upcoming-charity").value;
        const amount = parseInt(document.getElementById("upcoming-amount").value);
        const date = document.getElementById("upcoming-date").value;

        upcomingList.innerHTML += `<li>${charity} - ₹${amount} on ${date}</li>`;

        e.target.reset();
    });
});
