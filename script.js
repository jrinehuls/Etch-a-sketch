let axis;
let rows = axis;
let columns = axis;
let grid = document.getElementById("grid");
let tdElements = grid.getElementsByTagName('td')
let table;
let color = "black"
const buttons = document.querySelectorAll(".color-button");

//Click action event on submit button to change grid.
document.getElementById("submit-button").addEventListener("click", function() {
    axis = document.getElementById("axis-text").value;
    axis = Math.floor(axis);
    if (axis < 1 || axis > 100) {
        document.getElementById("error-label").innerHTML =
        "Please enter a number between 1 and 100.";
    }
    else {
        document.getElementById("error-label").innerHTML = "";
        repaint(axis);
        enableColor();
    }
});

//This for loop adds TRs and TDs based on value of axis variable.
function repaint(axis) {
    table = "";
    rows = axis;
    columns = axis;
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < columns; j++) {
            table += "<td></td>";
        }
        table += "</tr>";
    };
    //Takes that whole long table string and sets the inner HTML of the table.
    grid.innerHTML = table;
}

//This has to be down here to work. Dynamically sets size of TDs based on axis #.
//Also sets colors.
function enableColor() {
    Array.from(tdElements).forEach(function(element) {
        element.style.width = "calc(100%/axis - 2px)";
        element.addEventListener("mouseenter", mouseEnter);

        function mouseEnter() {
            element.style.backgroundColor = color;
        }
    });
}

//Change the color based on selected button.
buttons.forEach(button => {
    button.addEventListener("click", function () {
        color = button.value;
    })
})

repaint(16);
enableColor();

//console.log(tdElements);