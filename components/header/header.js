function headerr(){
    let header = document.createElement('header');
    header.className = "headerr";

    let logo = document.createElement('img');
    logo.src = "https://w7.pngwing.com/pngs/190/629/png-transparent-playing-card-suit-card-game-divider-game-text-logo.png";
    logo.alt = "";
    logo.className = "header_logo";
    header.appendChild(logo);

    let titulo = document.createElement('h1');
    titulo.innerText = "Frutas";
    header.appendChild(titulo);

    let botones = document.createElement('div');
    botones.className = "bt_header";
    header.appendChild(botones);

    let btn1 = document.createElement('button');
    btn1.innerText = "Nivel 1";
    btn1.className = "btn_bt"
    botones.appendChild(btn1);

    let btn2 = document.createElement('button');
    btn2.innerText = "Nivel 2";
    btn2.className = "btn_bt"
    botones.appendChild(btn2);

    let btn3 = document.createElement('button');
    btn3.innerText = "Nivel 3";
    btn3.className = "btn_bt"
    botones.appendChild(btn3);

    let btn4 = document.createElement('button');
    btn4.innerText = "Nivel 4";
    btn4.className = "btn_bt"
    botones.appendChild(btn4);

    let btn5 = document.createElement('button');
    btn5.innerText = "Nivel 5";
    btn5.className = "btn_bt"
    botones.appendChild(btn5);

    return header;
}

export {headerr}