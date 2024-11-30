/* Register Form */
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Parandalojmë dërgimin e formës nëse ka gabime
    event.preventDefault();

    // Marrim elementet e fushave
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Marrim elementet e gabimeve
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    let isValid = true;

    // Validimi për Username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    // Validimi për Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validimi për Password
    if (password.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Validimi për Confirm Password
    if (confirmPassword.value.trim() !== password.value.trim()) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    // Nëse çdo gjë është valide
    if (isValid) {
        alert("Registration successful!");
        // Ruajtje në localStorage (opsionale)
        localStorage.setItem("username", username.value.trim());
        localStorage.setItem("email", email.value.trim());
        localStorage.setItem("password", password.value.trim());

        alert("Registration successful!");
        window.location.href = "login.html"; 

     // Redirektimi te homepage
         window.location.href = "index.html";
    }
});


/* Login Form */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon rifreskimin e faqes

    // Marrim të dhënat nga inputet
    const loginUsername = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    // Marrim të dhënat e regjistruara nga localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Debugging: Shfaq vlerat në console
    console.log("Stored Username:", storedUsername);
    console.log("Stored Password:", storedPassword);
    console.log("Entered Username:", loginUsername);
    console.log("Entered Password:", loginPassword);

    // Kontrollojmë nëse të dhënat e login-it përputhen me ato të regjistruara
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirekto te faqja kryesore
    } else {
        alert("Incorrect username or password.");
    }
});


