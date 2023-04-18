const d = document,
  $buscar = d.querySelector(".bx-search"),
  $menu = d.querySelector(".menu-icon");

let $buscador = d.querySelector(".search"),
  $note = d.querySelector(".note"),
  $listas = d.querySelector(".lista");

$buscar.addEventListener("click", () => {
  $buscador.classList.toggle("input");
});

$menu.addEventListener("click", () => {
  $note.classList.toggle("active");
  //$listas.classList.toggle("desplegableActivo");
});
