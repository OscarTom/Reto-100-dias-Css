const d = document,
  $menu = d.querySelector(".menu"),
  $lineTop = d.querySelector(".line1"),
  $lineCenter = d.querySelector(".line2"),
  $lineButtom = d.querySelector(".line3");

$menu.addEventListener("click", (e) => {
  $lineTop.classList.toggle("top");
  $lineCenter.classList.toggle("center");
  $lineButtom.classList.toggle("buttom");
});
