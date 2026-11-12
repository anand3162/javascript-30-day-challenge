/**
 * Day 14 - Sign Up Form Validator
 * Javascript 30 Day Challenge
 *
 * Validates a sign up form on submit, showing a specific message
 * for the first failing rule. Clears messages while typing and
 * shows a live password strength indicator.
 */

const form = document.querySelector("#signup-form");
const message = document.querySelector("#message");
const passwordInput = document.querySelector("#password");
const strength = document.querySelector("#strength");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  if (username.length < 3) {
    message.textContent = "Username should be atleast 3 characters!!";
    return;
  }
  if (!(email.includes("@") && email.includes("."))) {
    message.textContent = "Enter a Valid Email!";
    return;
  }
  if (password.length < 8) {
    message.textContent = "Password should be atleast 8 characters!!";
    return;
  }
  if (password !== confirmPassword) {
    message.textContent = "Passwords are not matching!!";
    return;
  }
  message.textContent = "Sign up successful!";
});

form.addEventListener("input", () => {
  message.textContent = "";
});

passwordInput.addEventListener("input", () => {
  const pw = passwordInput.value;
  let score = 0;

  if (pw.length >= 8) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (score <= 1) {
    strength.textContent = "Weak";
  } else if (score <= 3) {
    strength.textContent = "Medium";
  } else {
    strength.textContent = "Strong";
  }
});
