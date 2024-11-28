const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const modal = document.getElementById('error-modal');
const closeModal = document.getElementById('close-modal');
const acceptBtn = document.getElementById('accept-btn');

const users = {
    'usuario1': 'contraseña1',
    'usuario2': 'contraseña2'
};

function showErrorModal() {
    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

acceptBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Validación del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (users[username] && users[username] === password) {
        window.location.href = '/index.html';
    } else {
        showErrorModal();

        usernameInput.value = '';
        passwordInput.value = '';
    }
});
