let form=document.getElementById('registerForm');
    form.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the default form submission

    const password = document.getElementById('reg-password');
        password.value="";
    const confirmPassword = document.getElementById('confirm-password').value;
    confirmPassword.value="";

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const res = document.getElementById("res");

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://otp-api-test-backend.onrender.com/send-sms/", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                res.innerHTML = result.status+"<br>"+result.det;
                throw new Error('Network response was not ok');
            }

            const result = await response.json(); // or response.text() if not JSON
            res.innerHTML = result.status+"<br>"+result.det;
            console.log('Success:', result);
            // Optional: Handle success (e.g., show a success message)

        } catch (error) {
            res.innerHTML = result.status+"<br>"+result.det;
            console.error('Error:', error);
            // Optional: Handle error (e.g., show an error message)
        }

    
    // Handle the registration logic (e.g., saving data, redirecting, etc.)
    alert("Registration successful!");

    // Redirect to the login page or directly to the dashboard
    window.location.href = 'dash.html';  // Redirect to the student dashboard after successful registration
});

