const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {

    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Enable / Disable Button
    submitBtn.disabled = !isValid;
}

// Real-time Validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Prevent Form Submission
document.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");
});