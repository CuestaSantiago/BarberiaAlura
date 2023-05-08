let title_page = "";
let alt= "logo de la barbería Alura";
const menu = ["Home", "Productos", "Contacto"];
const menuDireccion = ["index", "productos", "contacto"];
var anio_actual = new Date().getFullYear();
var copy_right = `&copy Copyright Barbería Alura ${anio_actual}`;

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

  return menuPrincipal;
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
  return menuPages;
}

const cargarHeaderIndex = () => {
  let header = ` <div class="caja">
  <h1><img src="src/img/logo.webp" alt="${alt}" /></h1>
  <nav id="menuPrincipal">
  ${cargarMenuPrincipal()}
  </nav>
</div>`;
  let footer = `  <img src="src/img/logo-blanco.webp" alt="${alt}" />
<p id="copy-right">${copy_right}</p>`;
  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;
};

const cargarHeaderPages = () => {
  let header = ` <div class="caja">
  <h1><img src="../img/logo.webp" alt="${alt}" /></h1>
  <nav id="menuPrincipal">
  ${cargarMenuPages()}
  </nav>
</div>`;
  let footer = ` <img src="../img/logo-blanco.webp" alt="${alt}" />
<p id="copy-right">${copy_right}</p>`;
  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;
};

const init = () => {
  location.pathname.includes("src/pages")
    ? cargarHeaderPages()
    : cargarHeaderIndex();
  for (let index = 0; index < menuDireccion.length; index++) {
    if (location.pathname.includes(menuDireccion[index])) 
    {
      title_page += menu[index];
      break
    }
  }

  title_page += "-Barbería Alura";
  document.getElementById("title_page").innerHTML = title_page;
};
init();
