'use strict';

const firstNameField = document.querySelector("#first_Name");
const lastNameField = document.querySelector("#last_Name");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm_password");

const form = document.querySelector("form");

// Required labels
const firstNameRequiredLabel = document.querySelectorAll(".required_Label")[0];
const lastNameRequiredLabel = document.querySelectorAll(".required_Label")[1];
const emailRequiredLabel = document.querySelectorAll(".required_Label")[2];
const passwordRequiredLabel = document.querySelectorAll(".required_Label")[3];
const confirmPasswordRequiredLabel = document.querySelectorAll(".required_Label")[4];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // hide all labels first
    firstNameRequiredLabel.style.display = "none";
    lastNameRequiredLabel.style.display = "none";
    emailRequiredLabel.style.display = "none";
    passwordRequiredLabel.style.display = "none";
    confirmPasswordRequiredLabel.style.display = "none";

    let valid = true;

    if (firstNameField.value.trim() === "") {
        firstNameRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (lastNameField.value.trim() === "") {
        lastNameRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (!emailRegex.test(emailField.value.trim())) {
        emailRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (!passwordRegex.test(passwordField.value)) {
        passwordRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (confirmPasswordField.value !== passwordField.value || confirmPasswordField.value === "") {
        confirmPasswordRequiredLabel.style.display = "inline";
        valid = false;
    }

    if (valid) {
        alert("Sign up successful");
        window.location.href = "./index.html";
    }
});
