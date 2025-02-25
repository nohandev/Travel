const select = e => document.querySelector(e)

const mobileNavigation = select('.navigation-mobile-overlay')
const mobileNavigationBtn = select('.navigation-mobile-btn')
const closeMobileBtn = select('.close-mobile-navigation')

const openMobileNavigation = () => mobileNavigation.style.display = 'flex'
const closeMobileNavigation = () => mobileNavigation.style.display = 'none'


mobileNavigationBtn.addEventListener('click', openMobileNavigation)
closeMobileBtn.addEventListener('click', closeMobileNavigation)
