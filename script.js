document.addEventListener('DOMContentLoaded', () => {
    // Handle Sign-Up Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dob = document.getElementById('dob').value;
            const contact = document.getElementById('contact').value;

            if (name && email && password && dob && contact) {
                console.log('Sign-Up Form submitted with values:', { name, email, password, dob, contact });
                alert('Sign-Up successful!');
                // Add AJAX request to submit form data to the server here
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email && password) {
                console.log('Login Form submitted with values:', { email, password });
                alert('Login successful!');
                // Add AJAX request to submit login data to the server here
            } else {
                alert('Please fill in both email and password.');
            }
        });
    }

    // Handle Logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            console.log('Logout button clicked.');
            alert('You have been logged out.');
            // Add AJAX request to log out the user from the server here
            // Redirect to login or home page after logout
            window.location.href = 'login.html';
        });
    }
});
