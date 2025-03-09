document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rank = document.getElementById('rank').value;

    // Dummy validation for demonstration purposes
    if (username === 'IRPstaff' && password === '2024IRPsTaff' && rank) {
        localStorage.setItem('userRank', rank);
        window.location.href = 'index.html';
    } else {
        showErrorMessage('Incorrect username or password. Please try again later.');
    }
});

function showErrorMessage(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.innerText = message;
    errorMessageDiv.classList.add('show');

    // Remove the error message after 10 seconds
    setTimeout(() => {
        errorMessageDiv.classList.remove('show');
    }, 10000); // 10 seconds
}