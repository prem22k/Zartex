let form=document.getElementById('registerForm');
    form.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the default form submission

    const password = document.getElementById('reg-password');
    const confirmPassword = document.getElementById('confirm-password');
        
    
    // Handle the registration logic (e.g., saving data, redirecting, etc.)
    alert("Registration successful!");

    // Redirect to the login page or directly to the dashboard
    window.location.href = 'dash.html';  // Redirect to the student dashboard after successful registration
});

