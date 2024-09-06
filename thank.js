document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById('registerForm');
    const res = document.getElementById("res");

    form1.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

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
    });
});

