document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "images/1.jpg"
    }

    {
      name: "2",
      img: "images/2.jpg"
    }

    {
      name: "3",
      img: "images/3.jpg"
    }

    {
      name: "4",
      img: "images/4.jpg"
    }

    {
      name: "5",
      img: "images/5.jpg"
    }

    {
      name: "6",
      img: "images/6.jpg"
    }

    {
      name: "7",
      img: "images/7.jpg"
    }

    {
      name: "8",
      img: "images/8.jpg"
    }

  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
});

function crearTablero (){
  for (let i = 0; i < cardAdj.lenght; i++){

    carta.setAttribute("src","images/reverso.png");

    carta.setAttribute("data-id", i);

    carta.addEventListener("click", voltearCarta);

    cuadricula.appendChild(carta);

  }
}