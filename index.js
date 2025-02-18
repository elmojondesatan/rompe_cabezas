// index.js
import { cargarTablero } from "./components/tablero/tablero.js";  // Asegúrate de que la ruta sea correcta
import { cargarheaderr } from "./components/header/header.js";  // Si tienes un header, asegúrate de que esta función esté exportada correctamente

let DOM = document.querySelector("#root");

function cargarDOM() {
    let contenedor = document.createElement('div');
    contenedor.className = "div-contenedor";

    // Crear y agregar el pie de página
    let footer = document.createElement("div");
    footer.className = "div-footer";
    contenedor.appendChild(footer);

    // Crear y agregar la sección de progreso
    let progreso = document.createElement("div");
    progreso.className = "div-progreso";
    contenedor.appendChild(progreso);

    // Crear y agregar el tablero
    let tablero = document.createElement("div");
    tablero.className = "div-tablero";
    tablero.appendChild(cargarTablero());  // Llamada a cargarTablero
    contenedor.appendChild(tablero);

    // Crear y agregar el encabezado
    let header = document.createElement("div");
    header.className = "div-header";
    contenedor.appendChild(header);
    header.appendChild(cargarheaderr());

    // Finalmente, agregar todo al DOM
    DOM.appendChild(contenedor);
}

cargarDOM();  // Asegúrate de llamar a cargarDOM para agregar todo al DOM
