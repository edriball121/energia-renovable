// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente');
    const aboutSection = document.getElementById('about-us');
    aboutSection.addEventListener('click', () => {
        alert('¡Bienvenido a la sección Acerca de Nosotros!');
    });
});
