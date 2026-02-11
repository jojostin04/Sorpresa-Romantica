const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const pantallaInicial = document.getElementById("pantallaInicial");
const pantallaFinal = document.getElementById("pantallaFinal");
const musica = document.getElementById("musica");

yesBtn.addEventListener("click", () => {
    pantallaInicial.style.display = "none";
    pantallaFinal.style.display = "flex";
    musica.play();
    crearCorazones();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function crearCorazones() {
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "💖";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);

    }, 300);
}
