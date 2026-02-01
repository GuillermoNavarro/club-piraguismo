const INFO_MODALIDADES = {
    'embarcaciones': {
        'piraguismo': {
            'titulo': 'Piragüismo',
            'descripcion': 'El piragüismo es un deporte acuático que consiste en navegar en una embarcación ligera llamada piragua, utilizando un remo de una sola pala. Es una actividad que combina resistencia, fuerza y técnica, y puede practicarse tanto en aguas tranquilas como en aguas bravas.',
        },
        'kayak': {
            'titulo': 'Kayak',
            'descripcion': 'El kayak es una modalidad de piragüismo que se caracteriza por el uso de una embarcación cerrada y un remo de doble pala. Los kayaks son más estables y maniobrables que las piraguas tradicionales, lo que los hace ideales para explorar ríos, lagos y costas marinas.',
        },
        'barco dragon': {
            'titulo': 'Barco Dragón',
            'descripcion': 'El barco dragón es una embarcación tradicional china que se utiliza en competiciones de remo en equipo. Está decorado con una cabeza y una cola de dragón, y puede transportar a un gran número de remeros que trabajan al unísono para propulsar el barco a través del agua.',
        }
    },
    'social': {
        'titulo': 'Paradragon & BCS',
        'descripcion': 'El Paradragon es una modalidad inclusiva del deporte del remo en barco dragón, diseñada para personas con discapacidades físicas o sensoriales. Esta actividad promueve la integración social, el trabajo en equipo y la superación personal, permitiendo que todos los participantes disfruten de la experiencia de remar juntos en un entorno acuático.',
    },
    'palmares': {
        'titulo': 'Competicion & Palmares',
        'descripcion': 'Nuestro club de remo cuenta con una destacada trayectoria en competiciones nacionales e internacionales. A lo largo de los años, hemos acumulado numerosos títulos y reconocimientos en diversas modalidades de remo, gracias al esfuerzo y dedicación de nuestros atletas y entrenadores. Nuestro palmarés refleja nuestro compromiso con la excelencia deportiva y el espíritu competitivo.',
    },
    'legal': {
        'titulo': 'Política de Privacidad',
        'descripcion': 'En nuestro sitio web, nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información que usted nos proporciona al utilizar nuestro sitio web. Al utilizar nuestro sitio, usted acepta las prácticas descritas en esta política.'
    },
    'construccion': {
        'titulo': 'Pagina en Construcción',
        'descripcion': '<img src="./images/img_const.png" class="mx-auto w-1/2" alt="En construcción" />'
    }
}


function cerrarModal() {
    document.getElementById('miModal').classList.add('hidden');
}

function abrirModal(modalidad) {
    const modal = document.getElementById('miModal');
    const tituloElem = document.getElementById('modalTitulo');
    const descripcionElem = document.getElementById('modalDescripcion');
    const info = INFO_MODALIDADES[modalidad];
    modal.classList.toggle('hidden');

    switch (modalidad) {
        case 'embarcaciones':
            let texto = '';
            tituloElem.textContent = "Embarcaciones";
            Object.values(info).forEach((submodalidad) => {
                texto += `
                    <div class="mb-4">
                    <h4 class="font-bold text-lg text-slate-900 dark:text-white">${submodalidad.titulo}</h4>
                    <p class="text-sm"> ${submodalidad.descripcion}</p>
                    </div>`;
            });
            descripcionElem.innerHTML = texto;
            break
        case 'social':
            tituloElem.textContent = info.titulo;
            descripcionElem.textContent = info.descripcion;
            break
        case 'palmares':
            tituloElem.textContent = info.titulo;
            descripcionElem.textContent = info.descripcion;
            break
        case 'legal':
            tituloElem.textContent = info.titulo;
            descripcionElem.textContent = info.descripcion;
            break
        case 'construccion':
            tituloElem.textContent = info.titulo;
            descripcionElem.innerHTML = info.descripcion;
            break
    }
}

document.addEventListener('DOMContentLoaded', () => {

    abrirModal('construccion');

    const yearElem = document.getElementById('year')
    
    if (yearElem){
        yearElem.textContent = new Date().getFullYear();
    };
    

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