import { todas_las_cartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta";
    
    let front = document.createElement('div');
    front.className = "front";
    front.textContent = contenido;
    
    let back = document.createElement('div');
    back.className = "back";
    back.textContent = "?";
    
    div.appendChild(front);
    div.appendChild(back);

    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });
    
    return div;
}

export { cargarCartas };
