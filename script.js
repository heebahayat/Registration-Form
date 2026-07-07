const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Text Fields
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    // Passwords
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Contact
    const phone = document.getElementById("phone").value.trim();
    const altPhone = document.getElementById("altPhone").value.trim();

    // Other Details
    const dob = document.getElementById("dob").value;
    const address1 = document.getElementById("address1").value.trim();
    const address2 = document.getElementById("address2").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const pin = document.getElementById("pin").value.trim();
    const qualification = document.getElementById("qualification").value;
    const college = document.getElementById("college").value.trim();
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value.trim();
    const terms = document.getElementById("terms").checked;

    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');

    // Skills
    const skills = document.querySelectorAll('input[name="skills"]:checked');

    // Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone Pattern
    const phonePattern = /^[0-9]{10}$/;

    // PIN Pattern
    const pinPattern = /^[0-9]{6}$/;

    // Clear old message
    message.textContent = "";

    // Validation

    if (
        fname === "" ||
        lname === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        phone === "" ||
        altPhone === "" ||
        dob === "" ||
        address1 === "" ||
        address2 === "" ||
        city === "" ||
        pin === "" ||
        college === "" ||
        answer === ""
    ) {
        showError("Please fill all the fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        showError("Enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        showError("Phone number must contain exactly 10 digits.");
        return;
    }

    if (!phonePattern.test(altPhone)) {
        showError("Alternate phone number must contain exactly 10 digits.");
        return;
    }

    if (phone === altPhone) {
        showError("Phone number and Alternate Phone cannot be the same.");
        return;
    }

    if (password.length < 8) {
        showError("Password must contain at least 8 characters.");
        return;
    }

    if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
    }

    if (!gender) {
        showError("Please select your gender.");
        return;
    }

    if (state === "") {
        showError("Please select your state.");
        return;
    }

    if (country === "") {
        showError("Please select your country.");
        return;
    }

    if (!pinPattern.test(pin)) {
        showError("PIN Code must be exactly 6 digits.");
        return;
    }

    if (qualification === "") {
        showError("Please select your qualification.");
        return;
    }

    if (skills.length === 0) {
        showError("Please select at least one skill.");
        return;
    }

    if (question === "") {
        showError("Please choose a security question.");
        return;
    }

    if (!terms) {
        showError("Please accept the Terms & Conditions.");
        return;
    }

    // Success
    message.style.color = "lime";
    message.innerHTML = "🎉 Registration Successful! Welcome, <b>" + fname + "</b>";

    form.reset();

});

// Function to show errors
function showError(text) {

    message.style.color = "yellow";
    message.textContent = text;

}