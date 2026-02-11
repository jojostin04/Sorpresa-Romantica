const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mensaje = document.getElementById("mensaje");
const foto = document.getElementById("fotoFinal");
const musica = document.getElementById("musica");

yesBtn.addEventListener("click", () => {
    mensaje.textContent = "¡Sabía que dirías que sí mi ayudina hermosa! 💖✨";
    foto.style.display = "block";
    musica.play();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
