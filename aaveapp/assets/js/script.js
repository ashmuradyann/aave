const menuNavbar = document.querySelector(".menu-mobile")
const menuBtnMobile = document.querySelector(".menu-btn-mobile")
const menuConnectWalletBtn = document.querySelector(".navbar-connect-wallet")
const menuMobileCloseBtn = document.querySelector(".menu-mobile-close-btn")

menuBtnMobile.onclick = () => {
  menuNavbar.style.transform = "translateY(0)"
  menuBtnMobile.style.display = "none"
  menuConnectWalletBtn.style.display = "none"
  menuMobileCloseBtn.style.display = "flex"
}

menuMobileCloseBtn.onclick = () => {
  menuNavbar.style.transform = "translateY(-110%)"
  menuBtnMobile.style.display = "flex"
  menuConnectWalletBtn.style.display = "flex"
  menuMobileCloseBtn.style.display = "none"
}