document.getElementById('student-btn').addEventListener('click', () => {
    document.getElementById('login-form').dataset.role = 'student';
    showLoginForm();
});

document.getElementById('parent-btn').addEventListener('click', () => {
    document.getElementById('login-form').dataset.role = 'parent';
    showLoginForm();
});

function showLoginForm() {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.register-form').style.display = 'none';
}

function showRegisterForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

function closeForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'none';
}

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('login-form').dataset.role;
    if (role === 'student') {
        window.location.href = 'dash.html';  // Redirect to the student dashboard
    } else if (role === 'parent') {
        window.location.href = 'index2.html';  // Redirect to the parent dashboard
    }
});



// async function sendregister(e){
//     e.preventDefault();
//     let f=document.getElementById("registerForm");
//     let formData = new FormData(f);
//     let v=await fetch("http://localhost:3000/api/users", {
//         method:"POST",
//         body:formData
//     });
//     let r=await v.json();
//     console.log(r);
// }


let form=document.getElementById('registerForm');
    form.addEventListener('submit', async function(event) {

    // event.preventDefault(); // Prevent the default form submission

    const password = document.getElementById('reg-password');
    const confirmPassword = document.getElementById('confirm-password').value;

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
