import { cargarCartas } from "./components/tablero/tablero.js";
import { headerr } from "./components/header/header.js";

headerr();


let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');

let footer = document.createElement("div");
contenedor.appendChild(footer);
footer.className = "div-footer"

let progreso = document.createElement("div");
contenedor.appendChild(progreso);
progreso.className = "div-progreso";

let tablero = document.createElement("div");
contenedor.appendChild(tablero);
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());
    

let header = document.createElement("div");
header.appendChild(headerr());
contenedor.appendChild(header);
header.className = "div-header";

DOM.appendChild(contenedor);
contenedor.className = "div-contenedor";