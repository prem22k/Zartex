document.getElementById('registerForm').addEventListener('submit', function(event) {
    

    const password = document.getElementById('reg-password');
        password.value="";
    const confirmPassword = document.getElementById('confirm-password').value;
    confirmPassword.value="";

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Handle the registration logic (e.g., saving data, redirecting, etc.)
    alert("Registration successful!");

    // Redirect to the login page or directly to the dashboard
    window.location.href = 'dash.html';  // Redirect to the student dashboard after successful registration
});

