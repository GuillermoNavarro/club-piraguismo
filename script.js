document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn.querySelector('span');
    const zonaPrivadaBtn = document.getElementById('zona_privada');

    menuBtn.addEventListener('click', () => {
        
        // Alternamos 'hidden' (para mostrar/ocultar)
        mobileMenu.classList.toggle('hidden');
        // Y alternamos 'flex' (para activar/desactivar la maquetación flexible)
        mobileMenu.classList.toggle('flex');
        // Alternamos el botón de Zona Privada
        zonaPrivadaBtn.classList.toggle('hidden');
        
        // Cambiar icono
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.textContent = 'menu';
        } else {
            menuIcon.textContent = 'close';
        }
    });

    // Cerrar al pulsar un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuIcon.textContent = 'menu';
            zonaPrivadaBtn.classList.remove('hidden');
            zonaPrivadaBtn.classList.add('flex');
        });
    });

});