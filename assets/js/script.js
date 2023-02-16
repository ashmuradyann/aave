const navbar = document.querySelector(".navbar")
const links = document.querySelectorAll(".link")
const launchApplink = document.querySelector(".launch-app-link")
const navbarLogo = document.querySelector(".navbar-logo")
const mobileSpans = document.querySelectorAll(".navbar-mobile-span")

var lastScrollTop = 0;
document.addEventListener("scroll", () => {
  navbar.style.transition = "transform 250ms, padding 250ms"

  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st === 0) {
    mobileSpans.forEach(span => span.style.backgroundColor = "#fff")
    if (document.body.clientWidth < 640) {
      navbar.style.padding = "16px"
    } else if (document.body.clientWidth >= 640) {
      navbar.style.padding = "35px 40px"
    }
    navbar.style.backgroundColor = "transparent"
    links.forEach(link => link.style.color = "#eaebef")
    navbarLogo.src = "./assets/images/logo.svg"
    launchApplink.style.backgroundColor = "#eaebef"
    launchApplink.style.color = "#0f121d"
  } else if (st > lastScrollTop && st > 200) {
    navbar.style.transform = "translateY(-100%)"
  } else if (st > lastScrollTop) {
    mobileSpans.forEach(span => span.style.backgroundColor = "#000")
    if (document.body.clientWidth < 640) {
      navbar.style.padding = "16px"
    } else if (document.body.clientWidth >= 640) {
      navbar.style.padding = "12px 30px"
    }
    navbar.style.backgroundColor = "#fff"
    links.forEach(link => link.style.color = "#383d51")
    navbarLogo.src = "./assets/images/logo-colorful.svg"
    launchApplink.style.backgroundColor = "#383d51"
    launchApplink.style.color = "#fff"
  } else {
    navbar.style.transform = "translateY(0)"
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false)

const infoBarTab = document.querySelectorAll(".info-bar-tab")
const infoBarInfo = document.querySelector(".info-bar-info")

infoBarTab.forEach((tab, i) => tab.addEventListener("click", () => updateInfo(tab.innerHTML, i)))

function updateInfo(tabName, i) {
  infoBarTab.forEach(tab => tab.style.color = "#5f6477")
  infoBarTab[i].style.color = "#eaebef"
  switch (tabName) {
    case "Supply":
      infoBarInfo.innerHTML = "Supply into the protocol and watch your assets grow as a liquidity provider"
      return
    case "Stake":
      infoBarInfo.innerHTML = "Deposit your Aave into the protocol and earn rewards for securing the protocol"
      return
    case "Borrow":
      infoBarInfo.innerHTML = "Borrow against your collateral from across multiple networks and assets"
      return
    case "Vote":
      infoBarInfo.innerHTML = "Participate in Aave governance and vote on new proposals, new assets, and protocol upgrades"
      return
    default:
      return false
  }
}

const chatButton = document.querySelector(".chat-button")
const chat = document.querySelector(".chat")


function showPopup() {
  chat.style.display = "flex"
  setTimeout(() => {
    chat.style.opacity = "1"
    chat.style.transform = "translateY(0px)"
  }, 0)
  chatButton.onclick = () => hidePopup()
  chatButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" fill="white"></path></svg>'
}

function hidePopup() {
  chat.style.opacity = "0"
  chat.style.transform = "translateY(20px)"
  setTimeout(() => {
    chat.style.display = "none"
  }, 250)
  chatButton.onclick = () => showPopup()
  chatButton.innerHTML = '<svg fill="#ffffff" width="28" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path></svg>'
}

const navbarMobileWrapper = document.querySelector(".navbar-mobile")
const navbarMobileContainer = document.querySelector(".navbar-mobile-container")
const navbarMobileButton = document.querySelector(".navbar-button")
const navbarMobileCloseButton = document.querySelector(".navbar-mobile-close-button")

navbarMobileButton.onclick = () => {
  navbarMobileWrapper.style.display = "block"
  navbarMobileContainer.style.display = "block"
  setTimeout(() => {
    navbarMobileWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    navbarMobileContainer.style.transform = "translateX(0px)"
  }, 0)
}

navbarMobileCloseButton.onclick = () => {
  if (document.body.clientWidth < 640) {
    navbarMobileContainer.style.transform = "translateX(300px)"
  } else if (document.body.clientWidth >= 640) {
    navbarMobileContainer.style.transform = "translateX(350px)"
  }
  navbarMobileWrapper.style.backgroundColor = "rgba(0, 0, 0, 0"
  setTimeout(() => {
    navbarMobileWrapper.style.display = "none"
    navbarMobileContainer.style.display = "none"
  }, 250)
}