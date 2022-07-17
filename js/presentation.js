const presentationContainer = document.querySelector("#presentation-container");
const controls = {
  prev: document.querySelector("#prev"),
  next: document.querySelector("#next"),
};

const currentPresentorElements = {
  title: presentationContainer.querySelector(".presentation__title"),
  text: presentationContainer.querySelector(".presentation__text"),
  img: presentationContainer.querySelector(".presentations__img > img"),
};

const presentations = [
  {
    title: "Concentrado",
    img: "../img/mascleaning/concentrados.png",
    text: `El <em>CONCENTRADO Más Cleaning</em> revoluciona 
        la limpieza del hogar, oficina y negocio, 
        porque crece y se multiplica con su fórmula 
        concentrada que convierte 1 litro de producto 
        base en 20 litros de producto terminado, solo 
        agregando agua`,
  },
  {
    title: "BIDÓN 20 L",
    img: "../img/mascleaning/bidon.png",
    text: `El <em>Bidón Grupo Más Cleaning</em> de 20 litros de 
    producto terminado, revoluciona la limpieza 
    del hogar, oficina y negocio, rinde hasta 240 
    cargas. Contamos con una gran variedad de 
    productos de limpieza para tu hogar y negocio`,
  },
  {
    title: `PAQUETE DE BOTELLA (1L)`,
    img: "../img/mascleaning/paquete_litro.png",
    text: `El <em>paquete de 24 pzs Grupo Más Cleaning</em> de 20 
    litros de producto Mas Cleaning terminado, revoluciona la limpieza del hogar, oficina y negocio, 
    rinde hasta 240 cargas. Contamos con una gran 
    variedad de productos de limpieza para tu hogar 
    y negocio`,
  },
];
let indexPresentation = 0;

const renderPresentation = ({ title, img, text }) => {
  currentPresentorElements.img.setAttribute("src", img);
  currentPresentorElements.text.innerHTML = text;
  currentPresentorElements.title.innerHTML = title;
};

const setCurrentPresentation = (next = true) => {
  if (next && indexPresentation < presentations.length - 1) {
    indexPresentation++;
  }

  if (!next && indexPresentation > 0) {
    indexPresentation--;
  }
  const currPresentation = presentations[indexPresentation];
  console.log({ indexPresentation, currPresentation });
  renderPresentation(currPresentation);
};

controls.next.addEventListener("click", () => {
  setCurrentPresentation();
});
controls.prev.addEventListener("click", () => {
  setCurrentPresentation(false);
});

renderPresentation(presentations[0]);
