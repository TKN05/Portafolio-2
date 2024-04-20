AOS.init();

// Función para simular la animación de máquina de escribir
function typeWriter(element, text, delay) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            document.getElementById(element).textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

// Iniciar la animación de máquina de escribir para el título de bienvenida
typeWriter('welcome-text', 'Bienvenido', 100);

// Iniciar la animación de máquina de escribir para el subtexto
typeWriter('subtext', 'a mi portafolio', 100);

// Función para ocultar la imagen principal cuando se hace scroll hacia abajo
window.addEventListener('scroll', function() {
    var mainImage = document.querySelector('.main-image');
    var scrollPosition = window.scrollY;

    // Si se hace scroll hacia abajo, agregar la clase "scrolled" a la imagen principal
    if (scrollPosition > 0) {
        mainImage.classList.add('scrolled');
    } else {
        mainImage.classList.remove('scrolled');
    }
});
