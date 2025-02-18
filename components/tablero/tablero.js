// tablero.js
import { cartas } from "./data.js"  // Asegúrate de que la ruta de data.js esté correcta
import { mezclarCartas, cargarCartas } from "./funcionesCartas.js";  // Asegúrate de que las rutas estén correctas

// Función para barajar las cartas
function barajarCartas() {
    let allCartas = cartas.concat(cartas);  // Duplicar las cartas
    return mezclarCartas(allCartas);  // Mezclar las cartas duplicadas
}

// Función para cargar el tablero con cartas
function cargarTablero() {
    let cartasMezcladas = barajarCartas();  // Obtener las cartas barajadas
    return cargarCartas(cartasMezcladas);   // Cargar las cartas en el tablero
}

// Exportar las funciones
export { cargarTablero };
