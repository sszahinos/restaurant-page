import BurgerImg from './res/images/burger.jpg';
import PizzaImg from './res/images/pizza.jpg';
import SaladImg from './res/images/salad.jpg';
import SteakImg from './res/images/steak.jpg';

const REFERENCES = [ //path / alt / text
    [BurgerImg, "burger", "Recommended by someone"],
    [PizzaImg, "pizza", "Recommended by other someone"],
    [SaladImg, "salad", "Another recommendation"],
    [SteakImg, "steak", "God recommendation"]
];

function createHome() {
    const HOME = document.createElement("div");
    HOME.classList.add("home", "container");
    
    HOME.appendChild(createRefs());

    return HOME;
}

function createRefs() {
    const REFS_CONTAINER = document.createElement("div");
    REFS_CONTAINER.classList.add("refs-cont");
    let reference;
    for (let index = 0; index < REFERENCES.length; index++) {
        reference = createSingleReference(index % 2, REFERENCES[index][0], REFERENCES[index][1], REFERENCES[index][2]);
        REFS_CONTAINER.appendChild(reference);
    }

    return REFS_CONTAINER;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

///Creates single reference. Direction = 0 -> normal / Other -> reverse
function createSingleReference(direction, img, alt, text) {
    const REFERENCE = document.createElement("div");
    REFERENCE.classList.add("reference");
    if (direction == 0) {
        REFERENCE.classList.add("row-container");
    } else {
        REFERENCE.classList.add("reverse-row-container");
    }

    const REF_IMG_CONT = document.createElement("div");
    REF_IMG_CONT.classList.add("ref-image-cont");

    //const REF_IMG = document.createElement("img");
    const REF_IMG = new Image();
    REF_IMG.src = img;
    REF_IMG.alt = alt;

    REF_IMG_CONT.appendChild(REF_IMG);

    const REF_TEXT = createParagraph(text);
    REF_TEXT.classList.add("ref-text");

    REFERENCE.appendChild(REF_IMG_CONT);
    REFERENCE.appendChild(REF_TEXT);

    return REFERENCE;

}

function setHome() {
    const MAIN = document.getElementById("main");

    MAIN.appendChild(createHome());
}

export default setHome;