import setHome from "./homepage";
import GitHubLogo from './res/images/github.png';
import InstagramLogo from './res/images/instagram.png';
import FacebookLogo from './res/images/facebook.png';

const SN = [
    ["https://github.com/sszahinos/restaurant-page", GitHubLogo, "github"],
    ["https://www.instagram.com", InstagramLogo, "instagram"],
    ["https://www.facebook.com", FacebookLogo, "facebook"]
];
const COPYRIGHT_TEXT = "Copyright © 2022 All rights reserved.";
const REST_NAME_TEXT = "Cook O' Rama";

let sticky = 0;
let navBar;

function stickyController() {
    if (window.pageYOffset >= sticky) {
      navBar.classList.add("sticky");
    } else {
      navBar.classList.remove("sticky");
    }
} 

function createHeader() {
    const HEADER = document.createElement("header");

    const REST_NAME = document.createElement("h1");
    REST_NAME.classList.add("rest-name");
    REST_NAME.textContent = REST_NAME_TEXT;

    HEADER.appendChild(REST_NAME);
    HEADER.appendChild(createNav());

    return HEADER;
}

function createNav() {
    const NAV = document.createElement('nav');

    const SEPARATOR = document.createElement('div');
    SEPARATOR.classList.add("nav-separator");
    SEPARATOR.textContent = "|";

    const HOME_NAV = document.createElement('div');
    HOME_NAV.setAttribute("id", "home-nav");
    HOME_NAV.classList.add("nav-item");
    HOME_NAV.textContent = "HOME";
    HOME_NAV.addEventListener('click', () => (loadHome()));

    const MENU_NAV = document.createElement('div');
    MENU_NAV.setAttribute("id", "menu-nav");
    MENU_NAV.classList.add("nav-item");
    MENU_NAV.textContent = "MENU";

    const ABOUT_NAV = document.createElement('div');
    ABOUT_NAV.setAttribute("id", "about-nav");
    ABOUT_NAV.classList.add("nav-item");
    ABOUT_NAV.textContent = "ABOUT US";

    NAV.appendChild(HOME_NAV);
    NAV.appendChild(SEPARATOR);
    NAV.appendChild(MENU_NAV);
    NAV.appendChild(SEPARATOR.cloneNode(true));
    NAV.appendChild(ABOUT_NAV);

    return NAV;
}

function getSocNetw(link, logo, alt) {
    const LINK_ELEM = document.createElement("a");
    LINK_ELEM.setAttribute("href", link);
    const LOGO = new Image();
    LOGO.src = logo;
    LOGO.alt = alt;
    LINK_ELEM.appendChild(LOGO);
    return LINK_ELEM;
}

function createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.classList.add("footer", "row-container");

    const COPYRIGHT = document.createElement("div");
    COPYRIGHT.classList.add("copyright");
    COPYRIGHT.textContent = COPYRIGHT_TEXT;

    const SOC_NETW_CONTAINER = document.createElement("div");
    SOC_NETW_CONTAINER.classList.add("row-container");
    SOC_NETW_CONTAINER.setAttribute("id", "sn-container");

    for (let index = 0; index < SN.length; index++) {
        console.log(SN[index][0]);
        SOC_NETW_CONTAINER.appendChild(getSocNetw(SN[index][0], SN[index][1], SN[index][2]));
    }

    FOOTER.appendChild(COPYRIGHT);
    FOOTER.appendChild(SOC_NETW_CONTAINER);

    return FOOTER
}

function createMain() {
    const MAIN = document.createElement("main");
    MAIN.classList.add("main");
    MAIN.setAttribute("id", "main");

    return MAIN;
}

function initializeWeb() {
    const CONTENT = document.getElementsByTagName("body");
    CONTENT[0].appendChild(createHeader());
    CONTENT[0].appendChild(createMain());
    CONTENT[0].appendChild(createFooter());

    navBar = document.getElementsByTagName('nav')[0];
    sticky = navBar.offsetTop;

    window.onscroll = () => {stickyController();};
    //setHome();
}

function clearMain() {
    let mainContent = document.getElementById("main");
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

function loadHome() {
    console.log("load home");
    clearMain();
    setHome();
}

function loadMenu() {
    clearMain();
    setMenu();
}

function loadAbout() {
    clearMain();
    setMenu();
}




export default initializeWeb;