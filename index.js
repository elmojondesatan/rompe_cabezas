import { cargarCartas } from "./components/tablero/tablero.js";

let DOM = document.querySelector("#root");
let contenedor = document.createElement('div');
contenedor.className = "div-contenedor";

let footer = document.createElement("div");
footer.className = "div-footer";
contenedor.appendChild(footer);

let progreso = document.createElement("div");
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

let tablero = document.createElement("div");
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());
contenedor.appendChild(tablero);

let header = document.createElement("div");
header.className = "div-header";
contenedor.appendChild(header);

DOM.appendChild(contenedor);

let todasLasCartasDelDOM = document.querySelectorAll('.carta');
todasLasCartasDelDOM.forEach(cadaCarta => {
    cadaCarta.addEventListener("click", () => {
        cadaCarta.classList.toggle("girada");
    });
});