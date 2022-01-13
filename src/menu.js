import * as MenuData from './res/menu/menu.json';
const ITEM_SPACING = " -------- ";
const REST_MENU = MenuData;
const REST_MENU_SECTIONS = Object.keys(REST_MENU);

function createMenu() {
    const MENU = document.createElement("div");
    MENU.classList.add("menu", "container");
    MENU.appendChild(createMenuList());
    
    return MENU;
}

function createMenuList() {
    const MENU_LIST = document.createElement("div");
    MENU_LIST.classList.add("menu-list");
    
    for (const sec in REST_MENU) {
        console.log(sec.sectionName);
    }

    ////
    /*for (let index = 0; index < REST_MENU.length; index++) {
        console.log(REST_MENU.section1);
        MENU_LIST.appendChild(createMenuSection(REST_MENU[index][0], REST_MENU[index][1]));        
        console.log("section added");
    }*/
    ////
    //console.log(MENU_LIST);
    return MENU_LIST;
}

function createMenuSection(title, sectionItems) {
    const SECTION = document.createElement("div");
    SECTION.classList.add("section");
    SECTION.setAttribute("id", `section-${title.toLowerCase()}`);

    const TITLE = document.createElement("h2");
    TITLE.textContent = title.toUpperCase();
    TITLE.classList.add("section-title");
    SECTION.appendChild(TITLE);

    for (let index = 0; index < sectionItems.length; index++) {
        SECTION.appendChild(createMenuItem(sectionItems[index]));
    }
    
    return SECTION;
}

function createMenuItem(item) { //Item = ["name", "price"]
    const ITEM = document.createElement("div");
    ITEM.setAttribute("id", `item-${item[0]}`);
    ITEM.classList.add("section-item");
    ITEM.textContent = item[0] + ITEM_SPACING + item[1] + "€";
    
    return ITEM;
}

function setMenu() {
    const MAIN = document.getElementById("main");
    MAIN.appendChild(createMenu());
}

export default setMenu;