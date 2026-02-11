window.onload = function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const pantallaInicial = document.getElementById("pantallaInicial");
    const pantallaFinal = document.getElementById("pantallaFinal");
    const musica = document.getElementById("musica");

    yesBtn.onclick = function() {
        pantallaInicial.style.display = "none";
        pantallaFinal.style.display = "block";
        musica.play();
    };

    noBtn.onmouseover = function() {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * window.innerWidth + "px";
        noBtn.style.top = Math.random() * window.innerHeight + "px";
    };

};


