document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "img/1.jpg"
    },
    {
      name: "2",
      img: "img/2.jpg"
    },
    {
      name: "3",
      img: "img/3.jpg"
    },
    {
      name: "4",
      img: "img/5.jpg"
    },
    {
      name: "5",
      img: "img/5.jpg"
    },
    {
      name: "6",
      img: "img/6.jpg"
    },
    {
      name: "1",
      img: "img/1.jpg"
    },
    {
      name: "2",
      img: "img/2.jpg"
    },
    {
      name: "3",
      img: "img/3.jpg"
    },
    {
      name: "4",
      img: "img/5.jpg"
    },
    {
      name: "5",
      img: "img/5.jpg"
    },
    {
      name: "6",
      img: "img/6.jpg"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "img/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectoIAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "img/reverso png");
      cards[opcionDosId].setAttribute("src", "img/reverso.png");
      alert(";Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "img/blank.png");
      cards[opcionDosId].setAttribute("src", "img/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "img/reverso.png");
      cards[opcionDosId].setAttribute("src", "img/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;
    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
