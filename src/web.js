import setHome from "./homepage";
const COPYRIGHT_TEXT = "Copyright © 2022 All rights reserved.";
const REST_NAME_TEXT = "Cook O' Rama";
let sticky = 0;
let navBar;

function stickyController() {
    console.log("Sticky: " + sticky);
    console.log("window.pageYOffset: " + window.pageYOffset);
    if (window.pageYOffset >= sticky) {
      navBar.classList.add("sticky")
      console.log("sticky");
    } else {
      navBar.classList.remove("sticky");
      console.log("not Sticky");
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

    const HOME_NAV = document.createElement('a');
    HOME_NAV.setAttribute("id", "home-nav");
    HOME_NAV.classList.add("nav-item");
    HOME_NAV.textContent = "HOME";

    const MENU_NAV = document.createElement('a');
    MENU_NAV.setAttribute("id", "menu-nav");
    MENU_NAV.classList.add("nav-item");
    MENU_NAV.textContent = "MENU";

    const ABOUT_NAV = document.createElement('a');
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

function createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.classList.add("footer");

    const SOC_NETW_CONTAINER = document.createElement("div");
    SOC_NETW_CONTAINER.classList.add("row-container");

    //ADD 3 sn images

    const COPYRIGHT = document.createElement("div");
    COPYRIGHT.classList.add("copyright");
    COPYRIGHT.textContent = COPYRIGHT_TEXT;

    FOOTER.appendChild(SOC_NETW_CONTAINER);
    FOOTER.appendChild(COPYRIGHT);

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
    console.log(CONTENT);
    CONTENT[0].appendChild(createHeader());
    CONTENT[0].appendChild(createMain());
    CONTENT[0].appendChild(createFooter());

    navBar = document.getElementsByTagName('nav')[0];
    sticky = navBar.offsetTop;

    window.onscroll = () => {stickyController();};
    setHome();

}

export default initializeWeb;