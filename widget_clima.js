//https://marine-api.open-meteo.com/v1/marine?latitude=36.42806239636174&longitude=-6.158361136372706&hourly=sea_level_height_msl&timezone=Europe%2FBerlin

//Widget tiempo 7 dias
const CLIMA_INFO = {
    LAT: 36.39,
    LON: -6.21,
    // Traducción de códigos WMO de Open-Meteo
    CODIGOS_TIEMPO: {
        0: 'Despejado', 1: 'Principalmente despejado', 2: 'Nuboso', 3: 'Cubierto',
        45: 'Niebla', 48: 'Niebla depositando escarcha',
        51: 'Llovizna', 61: 'Lluvia débil', 80: 'Chubascos',
        95: 'Tormenta'
    }
};

// Función para convertir grados en dirección (Rosa de los vientos)
function obtenerDireccionViento(grados) {
    const direcciones = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const indice = Math.round(grados / 45) % 8;
    return direcciones[indice];
}


async function cargarPrevision7Dias() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${CLIMA_INFO.LAT}&longitude=${CLIMA_INFO.LON}&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FBerlin&forecast_days=3`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const daily = data.daily;

        const contenedor = document.getElementById('contenedor-prevision');
        contenedor.innerHTML = ''; // Limpiamos lo anterior

        // Generamos los 7 días
        daily.time.forEach((fecha, i) => {
            const fechaLegible = new Date(fecha).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric' });
            const estado = CLIMA_INFO.CODIGOS_TIEMPO[daily.weather_code[i]] || 'Variable';
            const dirViento = obtenerDireccionViento(daily.wind_direction_10m_dominant[i]);

            // Creamos el HTML de la tarjeta
            contenedor.innerHTML += `
                <div class="flex flex-col items-center p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm min-w-[100px]">
                    <span class="text-[10px] font-bold uppercase text-slate-400">${fechaLegible}</span>
                    <span class="text-xs font-medium my-1">${estado}</span>
                    <div class="text-sm font-black text-slate-900 dark:text-white">
                        ${Math.round(daily.temperature_2m_max[i])}° / <span class="text-slate-400">${Math.round(daily.temperature_2m_min[i])}°</span>
                    </div>
                    <div class="mt-2 flex items-center gap-1 text-[11px] font-bold text-blue-600">
                        <span class="material-symbols-outlined text-xs">air</span>
                        <span>${Math.round(daily.wind_speed_10m_max[i])} km/h ${dirViento}</span>
                    </div>
                </div>
            `;
        });

        console.log("Previsión de 7 días cargada con éxito ✅");
    } catch (e) {
        console.error("Error cargando la previsión:", e);
    }
}

document.addEventListener('DOMContentLoaded', cargarPrevision7Dias);