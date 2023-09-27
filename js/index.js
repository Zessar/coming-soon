const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const errorId = document.getElementById('errorId');



form.addEventListener ('submit', function (event) {
    event.preventDefault();

    if (email.value.trim() === '') {
        error.innerHTML = 'You must enter an email!';
        errorId.style.display = 'block';
        error.style.display = 'block';
    } else if (!validateEmail(email.value)) {
        error.style.display = 'block';
        errorId.style.display = 'block';
    } else {
        error.style.display = "none";
        errorId.style.display = "none";
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}