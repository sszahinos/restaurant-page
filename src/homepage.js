const REFERENCES = [ //pathm / alt / text
    "./res/images/burger.jpg", "burger", "Recommended by someone",
    "./res/images/pizza.jpg", "pizza", "Recommended by other someone"
];

function createHome() {
    const HOME = document.createElement("div");
    HOME.classList.add("home");
    
    HOME.appendChild(createRefs());

    return HOME;
}

function createRefs() {
    const REFS_CONTAINER = document.createElement("div");
    REFS_CONTAINER.classList.add("refs-cont");

    for (let index = 0; index < REFERENCES.length; index++) {
        let reference = createSingleReference(index % 2, REFERENCES[0], REFERENCES[1], REFERENCES[2]);
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

    const REF_IMG = document.createElement("img");
    REF_IMG.src = img;
    REF_IMG.alt = alt;

    REF_IMG_CONT.appendChild(REF_IMG);

    const REF_TEXT = createParagraph(text);
    REF_TEXT.classList.add("ref-text");

    REFERENCE.appendChild(REF_IMG_CONT);
    REFERENCE.appendChild(REF_TEXT);

    return REFERENCE;

}