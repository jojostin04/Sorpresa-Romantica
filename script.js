window.onload = function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const pantallaInicial = document.getElementById("pantallaInicial");
    const pantallaFinal = document.getElementById("pantallaFinal");
    const musica = document.getElementById("musica");

    if (yesBtn) {
        yesBtn.addEventListener("click", function() {
            pantallaInicial.style.display = "none";
            pantallaFinal.style.display = "flex";
            musica.play();
            crearCorazones();
        });
    }

    if (noBtn) {
        noBtn.addEventListener("mouseover", function() {
            const x = Math.random() * (window.innerWidth - 120);
            const y = Math.random() * (window.innerHeight - 60);

            noBtn.style.position = "absolute";
            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        });
    }

    function crearCorazones() {
        setInterval(function() {
            const corazon = document.createElement("div");
            corazon.className = "corazon";
            corazon.innerHTML = "💖";
            corazon.style.left = Math.random() * 100 + "vw";
            corazon.style.fontSize = (Math.random() * 20 + 20) + "px";
            document.body.appendChild(corazon);

            setTimeout(function() {
                corazon.remove();
            }, 5000);

        }, 300);
    }

};

