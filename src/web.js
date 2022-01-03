import setHome from "./homepage";

function createHeader() {
    const HEADER = document.createElement("header");

    const REST_NAME = document.createElement("h1");
    REST_NAME.classList.add("rest-name");
    REST_NAME.textContent = "Cook-O-Rama";

    HEADER.appendChild(REST_NAME);
    //add nav

    return HEADER;
}

function createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.classList.add("footer");

    const SOC_NETW_CONTAINER = document.createElement("div");
    SOC_NETW_CONTAINER.classList.add("row-container");

    //ADD 3 sn images

    const COPYRIGHT = document.createElement("div");
    COPYRIGHT.classList.add("copyright");
    COPYRIGHT.textContent = "Copyright © 2022 All rights reserved.";

    FOOTER.appendChild(SOC_NETW_CONTAINER);
    FOOTER.appendChild(COPYRIGHT);

    return FOOTER
}

function createMain() {
    const MAIN = document.createElement("main");
    MAIN.classList.add("main");

    return MAIN;
}

function initializeWeb() {
    const CONTENT = document.getElementsByTagName("body");
    console.log(CONTENT);
    CONTENT[0].appendChild(createHeader());
    CONTENT[0].appendChild(createMain());
    CONTENT[0].appendChild(createFooter());

    //setHome();

}

export default initializeWeb;