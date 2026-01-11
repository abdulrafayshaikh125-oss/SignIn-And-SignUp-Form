'use strict';

const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const form = document.querySelector("form");

// required labels
const emailRequiredLabel = document.querySelectorAll(".required_Label")[0];
const passwordRequiredLabel = document.querySelectorAll(".required_Label")[1];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    emailRequiredLabel.style.display = "none";
    passwordRequiredLabel.style.display = "none";

    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailField.value.trim())) {
        emailRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (passwordField.value.trim() === "") {
        passwordRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (valid) {
        alert("Login successful");
        window.location.href = "homePage.html";
    }
});
