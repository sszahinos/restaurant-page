import { createParagraph } from "./utilities";
const CUST_REVIEW_TEXT = "Twelve years serving the best food to our customers. These are their opinions about us:"
const CONTACT_TEXT = ["DIR: Evergreen Terrace 123, Springfield, EEUU", "TLF: 92345678", "MAIL: cook"];

function createAbout() {
    const ABOUT = document.createElement("div");
    ABOUT.classList.add("about", "container");

    ABOUT.appendChild(createMilestones());
    ABOUT.appendChild(createContactInfo());

    return ABOUT
}

function createMilestones() {
    const CUST_REVIEW_DIV = document.createElement("div");
    CUST_REVIEW_DIV.classList.add("cust-review");
    CUST_REVIEW_DIV.appendChild(createParagraph(CUST_REVIEW_TEXT));
    
    const CANVAS_CONTAINER = document.createElement("div");
    CANVAS_CONTAINER.classList.add("chart-div");
    CANVAS_CONTAINER.setAttribute("id", "canvas-container");

    CUST_REVIEW_DIV.appendChild(CANVAS_CONTAINER);

    createChart();

}

function createContactInfo() {
    const CONTACT_INFO = document.createElement("div");
    CONTACT_INFO.classList.add("contact-info");
    CONTACT_INFO.appendChild(createParagraph(CONTACT_TEXT[0]));
    CONTACT_INFO.appendChild(createParagraph(CONTACT_TEXT[1]));
    CONTACT_INFO.appendChild(createParagraph(CONTACT_TEXT[3]));

    return CONTACT_INFO;

}

function createChart() {
    const CANVAS = document.createElement("canvas");
    CANVAS.setAttribute("id", "reviewChart");
    CANVAS.setAttribute("width", "100%");
    CANVAS.setAttribute("height", "100%");
    document.getElementById("canvas-container").appendChild(CANVAS);
    var ctx = document.getElementById("reviewChart").getContext('2d');
    var reviewChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["LOT1", "LOT2", "LOT3", "LOT4", "LOT5", "LOT6"],
            datasets: [{
                title: "Quantity",
                label: '# of Votes',
                data: rawData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },    
        options: {
            responsive: true,
            cutoutPercentage: 50,
            plugins: {
                title: {
                    display: true,
                    position: 'top',
                    fontColor: '#000',
                    text: ["Work speed", "[ud/min]"],
                    fontStyle: "bold",
                    fontSize: 21,
                    fontFamily: "Arial"
                },
                legend: {
                    display: false,
                },
            }
        }//coma?
    });
}

function setAbout() {
    const MAIN = document.getElementById("main");

    MAIN.appendChild(createAbout());
}

export default setAbout;