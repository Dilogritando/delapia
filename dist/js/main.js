//Show menu + close
let menubtn = document.getElementById("icon_menu");
let menuMobile = document.getElementById("nav");
menubtn.addEventListener("click", mostrarMenu)
function mostrarMenu(){
    menuMobile.classList.toggle("visible")
}

//Show prices + close
let allPrices = document.getElementsByClassName("precios");
let i;
for (i = 0; i < allPrices.length; i++) {
    let parent = allPrices[i].closest("div");
    let priceTable = parent.querySelector(".porciones_precios");
    function showPrice() {
        priceTable.classList.toggle("visible");
    };
    allPrices[i].addEventListener("click", showPrice);
};

//Valida + close
let validaBtn = document.getElementById("formulario_valida-title")
let mapaForm = document.getElementById("formulario_mapa")
validaBtn.addEventListener("click", mostrarMapa)
function mostrarMapa(){
    mapaForm.classList.toggle("visible")
}

//Form

//Modal open + close
