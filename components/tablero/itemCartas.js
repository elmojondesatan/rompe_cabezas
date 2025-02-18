// itemCartas.js
function carta(contenido) {
    let div = document.createElement('div');
    div.className = "carta";  // Asigna la clase de la carta

    let front = document.createElement('div');
    front.className = "front";
    front.textContent = contenido;  // Agrega el contenido de la carta

    let back = document.createElement('div');
    back.className = "back";
    back.textContent = "?";  // Cara trasera de la carta

    div.appendChild(front);
    div.appendChild(back);

    div.addEventListener("click", () => {
        div.classList.toggle("girada");  // Cambia la clase 'girada' al hacer clic
    });

    return div;  // Devuelve el div de la carta
}

export { carta };
