//Función 1
function mostrarMasCanciones() {
  const cancionesExtra = document.querySelectorAll(".cancion.extra");
  cancionesExtra.forEach(cancion => {
    cancion.style.display = "block";
  });

  document.getElementById("mostrarMasBtn").style.display = "none";
}

//Función 3
document.addEventListener("DOMContentLoaded", () => {
  const btnSubirArriba = document.getElementById("btnSubirArriba");
  console.log(btnSubirArriba); 

  if (!btnSubirArriba) {
    console.error("No se encontró el botón #btnSubirArriba");
    return;
  }

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      btnSubirArriba.style.display = "block";
    } else {
      btnSubirArriba.style.display = "none";
    }
  });

  btnSubirArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});