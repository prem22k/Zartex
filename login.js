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
        window.location.href = 'index1.html';  // Redirect to the student dashboard
    } else if (role === 'parent') {
        window.location.href = 'index2.html';  // Redirect to the parent dashboard
    }
});



async function sendregister(e){
    e.preventDefault();
    let f=document.getElementById("registerForm");
    let formData = new FormData(f);
    let v=await fetch("http://localhost:3000/api/users", {
        method:"POST",
        body:formData
    });
    let r=await v.json();
    console.log(r);
}
