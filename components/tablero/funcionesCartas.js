// funcionesCartas.js
import { carta } from "./itemCartas.js";   // Asegúrate de que la ruta de itemCartas.js esté correcta

// Función para mezclar las cartas
function mezclarCartas(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; 
    }
    return cartas;  // Asegúrate de devolver las cartas mezcladas
}

// Función para cargar las cartas en el tablero
function cargarCartas(cartasMezcladas) {
    let div = document.createElement('div');
    div.className = "div-tablero";

    cartasMezcladas.forEach((letra) => {
        div.appendChild(carta(letra));  // Agrega cada carta generada al tablero
    });

    return div;  // Devuelve el div con las cartas cargadas
}

export { mezclarCartas, cargarCartas };
