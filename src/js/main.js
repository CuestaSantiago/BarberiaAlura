const title_page = "Barbería Alura";
const menu = ["home", "productos", "contacto"];
const menuDireccion = ["index", "productos", "contacto"];
var anio_actual = new Date().getFullYear();
var copy_right = `&copy Copyright Barbería Alura ${anio_actual}`;
document.getElementById("title_page").innerHTML = title_page;
document.getElementById("copy-right").innerHTML = copy_right;

function cargarMenuPrincipal() {
  let menuPrincipal = "<ul>";
  for (let index = 0; index < menu.length; index++) {
    if (index == 0) {
      menuPrincipal += `<li><a href="${menuDireccion[index]}.html">${menu[index]}</a> </li>`;
    } else {
      menuPrincipal += `<li><a href="src/pages/${menuDireccion[index]}.html">${menu[index]}</a> </li>`;
    }
  }
  menuPrincipal += "</ul>";
  document.getElementById("menuPrincipal").innerHTML = menuPrincipal;
}

function cargarMenuPages() {
  let menuPages = "<ul>";
  for (let index = 0; index < menu.length; index++) {
    if (index == 0) {
      menuPages += `<li><a href="../../${menuDireccion[index]}.html">${menu[index]}</a> </li>`;
    } else {
      menuPages += `<li><a href="${menuDireccion[index]}.html">${menu[index]}</a> </li>`;
    }
  }
  menuPages += "</ul>";
  document.getElementById("menuPages").innerHTML = menuPages;
}

const init =()=>{
  location.pathname.includes("index") ? cargarMenuPrincipal() : cargarMenuPages()
}

init()