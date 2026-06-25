const header = document.getElementById('header');
const menu_icon = document.getElementById("menu_icon");
const close_icon = document.getElementById("close_icon");
const mobile_nav = document.getElementById("mobile_nav");

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

function openMobileNav(){
  mobile_nav.style.transform = "translateY(0)";
  mobile_nav.style.opacity = 1;
}
function closeMobileNav(){
  mobile_nav.style.transform = "translateY(-100vh)";
  mobile_nav.style.opacity = 0;
}

function toggleMenuIcons() {
  const isMenuVisible = getComputedStyle(menu_icon).display == "block";

  if (isMenuVisible) {
    menu_icon.style.display = "none";
    close_icon.style.display = "block";
    openMobileNav();
  }else{
    menu_icon.style.display = "block";
    close_icon.style.display = "none";
    closeMobileNav();
  }

  // menu_icon.style.display = isMenuVisible ? "none" : "block";
  // close_icon.style.display = isMenuVisible ? "block" : "none";
};
menu_icon.addEventListener('click', toggleMenuIcons);
close_icon.addEventListener('click', toggleMenuIcons);