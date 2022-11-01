let axis = 20;
let rows = axis;
let columns = axis;
let grid = document.getElementById("grid");
let tdElements = grid.getElementsByTagName('td')
let table = "";
let color = "red"

for (let i = 0; i < rows; i++) {
    table += "<tr>";
    for (let j = 0; j < columns; j++) {
        table += "<td></td>";
    }
    table += "</tr>";
};

//Takes that whole long table string and sets the inner HTML of the table.
grid.innerHTML = table;

//This has to be down here to work. Dynamically sets size of TDs based on axis #.
//Also sets colors
Array.from(tdElements).forEach(function(element) {
    element.style.width = "calc(100%/axis - 2px)";
    element.addEventListener("mouseenter", mouseEnter);

    function mouseEnter() {
        element.style.backgroundColor = color;
    }
});

//console.log(tdElements);