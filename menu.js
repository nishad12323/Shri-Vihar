function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

document.querySelectorAll("img").forEach((img) => {
  img.oncontextmenu = () => false;
});
