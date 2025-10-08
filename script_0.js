


//Función 2
const imagen = document.getElementById("imagenBiografia");

const imagenOriginal = "https://cdn-3.expansion.mx/dims4/default/681a35d/2147483647/strip/true/crop/1200x1503+0+0/resize/1200x1503!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F1e%2F26%2Fbcc424f64623a1b1d107021fc292%2Flaufey-goddess-edition-lead-photo-pc-gemma-warren.jpg";
const imagenAlternativa = "https://www.musicweek.com/cimages/0c65122028468d93983b66eb82a235ec.jpg"; 

let mostrandoOriginal = true;

imagen.addEventListener("click", () => {
  if (mostrandoOriginal) {
    imagen.src = imagenAlternativa;
  } else {
    imagen.src = imagenOriginal;
  }
  mostrandoOriginal = !mostrandoOriginal;
});

//Función 4
const canciones = [
  { titulo: "Fragile", url: "https://open.spotify.com/embed/track/0TveByn1xvhUjVrvjsWrTf?utm_source=generator", album:"Everything I Know About Love" },
  { titulo: "Beautiful Stranger", url: "https://open.spotify.com/embed/track/2EDxQGcJlVi32jBCXzUZhL?utm_source=generator", album:"Everything I Know About Love"  },
  { titulo: "Valentine", url: "https://open.spotify.com/embed/track/5cxeDbK7ZEefo866N1vE8m?utm_source=generator", album:"Everything I Know About Love"  },
  { titulo: "Above The Chinese Restaurant", url: "https://open.spotify.com/embed/track/04cnoAgTzNnV1skGbWJeTM?utm_source=generator", album:"Everything I Know About Love"  },
  { titulo: "Falling Behind", url: "https://open.spotify.com/embed/track/0mlIVjrhLn8WvmK1F9cgzY?utm_source=generator", album:"Everything I Know About Love"  },
  { titulo: "What Love Will Do To You", url: "https://open.spotify.com/embed/track/37nBLmvdfeqq8HrsMp2RmR?utm_source=generator", album:"Everything I Know About Love"  },

  { titulo: "Silver Lining", url: "https://open.spotify.com/embed/track/1oNTXGW3aioF9Je0PHpR9K?utm_source=generator", album:"A Matter Of Time" },
  { titulo: "Lover Girl", url: "https://open.spotify.com/embed/track/7C98kSnYzGhMib1TTfGRl4?utm_source=generator", album:"A Matter Of Time" },
  { titulo: "Mr. Eclectic", url: "https://open.spotify.com/embed/track/5n934Lu8pAsAHLc155qzck?utm_source=generator", album:"A Matter Of Time" },
  { titulo: "Tough Luck", url: "https://open.spotify.com/embed/track/7DUX29TUEAE39Ph0QlRFME?utm_source=generator", album:"A Matter Of Time" },
  { titulo: "Clockwork", url: "https://open.spotify.com/embed/track/1zOXs9kBDCGVYZXbxCR3eu?utm_source=generator", album:"A Matter Of Time" },
  { titulo: "Snow White", url: "https://open.spotify.com/embed/track/1AZwVoUx3UF5JbkUeMSUGe?utm_source=generator", album:"A Matter Of Time" },

  { titulo: "From The Start", url: "https://open.spotify.com/embed/track/29Gys08x2u3ZSERTe0WvbE?utm_source=generator", album:"Bewitched" },
  { titulo: "Bewitched", url: "https://open.spotify.com/embed/track/2e0txm9dWOYCWbfUvPqU75?utm_source=generator", album:"Bewitched" },
  { titulo: "Promise", url: "https://open.spotify.com/embed/track/08PdFBcXzpkn1cWNgmKqhn?utm_source=generator", album:"Bewitched" },
  { titulo: "Misty", url: "https://open.spotify.com/embed/track/5oEJyOsT68BDRwLoQQJl6W?utm_source=generator", album:"Bewitched" },
  { titulo: "Dreamer", url: "https://open.spotify.com/embed/track/1YxQxV5sKZN1TgVpXl5MLA?utm_source=generator", album:"Bewitched" },
  { titulo: "Second Best", url: "https://open.spotify.com/embed/track/4Y9Ge3i5r0vgFAZq653Yx3?utm_source=generator", album:"Bewitched" }
];

function generarPlaylistDelDia() {
  const contenedor = document.getElementById("playlistDelDia");
  contenedor.innerHTML = "";

  const seleccionadas = [];
  const usadas = new Set();

  while (seleccionadas.length < 4) {
    const indice = Math.floor(Math.random() * canciones.length);
    if (!usadas.has(indice)) {
      usadas.add(indice);
      seleccionadas.push(canciones[indice]);
    }
  }

  seleccionadas.forEach(c => {
    const div = document.createElement("div");
    div.className = "cancion mb-4";
    div.innerHTML = `
      <h3 class="cancion-titulo">${c.titulo}</h3>
      <iframe src="${c.url}" width="100%" height="100" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGenerarPlaylist");
  btn.addEventListener("click", generarPlaylistDelDia);
});

//Función 5

function actualizarReloj() {
  const reloj = document.getElementById("reloj");
  const ahora = new Date();

  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');

  reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();

//Funcion 6

function buscarCancion() {
  const input = document.getElementById("buscarCancion").value.toLowerCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = ""; 

  const filtradas = canciones.filter(c => c.titulo.toLowerCase().includes(input));

  if(filtradas.length === 0){
    resultados.innerHTML = "<p>No se encontraron canciones.</p>";
    return;
  }

  filtradas.forEach(c => {
    resultados.innerHTML += `
      <div class="cancion-buscada mb-3">
        <h4>${c.titulo}</h4>
        <p>Álbum: ${c.album}</p>
      </div>
    `;
  });
}





