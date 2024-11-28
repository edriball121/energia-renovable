document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Seleccionamos el formulario
    const usernameInput = document.getElementById('username') || document.getElementById('nombre');
    const passwordInput = document.getElementById('password') || document.getElementById('contraseña');
    const modal = document.getElementById('error-modal');
    const closeModal = document.getElementById('close-modal');
    const acceptBtn = document.getElementById('accept-btn');

    const users = {
        'admin': 'admin',
        'consulta': 'Prueba'
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

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        console.log(username,password)

        const isRegister = form.id === 'register-form';

        if (isRegister) {
            if (users[username]) {
                showErrorModal();
                usernameInput.value = '';
                passwordInput.value = '';
            } else {
                users[username] = password;
                alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
                window.location.href = '/components/login.html';
                usernameInput.value = '';
                passwordInput.value = '';
            }
        } else {
            if (users[username] && users[username] === password) {
                window.location.href = '/index.html';
            } else {
                showErrorModal();
                usernameInput.value = '';
                passwordInput.value = '';
            }
        }
    });
});
