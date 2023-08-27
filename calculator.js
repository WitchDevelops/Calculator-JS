// create variable for current total
let buffer = "0";
const screen = document.querySelector(".screen");

//do this when clicking any button
function buttonClick(value) {
    //check if the button is a number or not
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number) {
    // console.log("number");
    //if current total is 0 then replace it with a number value
    if (buffer === "0") {
        buffer = number;
    //but if it alraedy container a value, add a value to it
    } else {
        buffer += number;
    }
    //console.log(buffer);
}

function handleSymbol(symbol) {
    //console.log("symbol");
    // switch all the symbol cases, as each of them will do something different
    switch (symbol) {
        case "RESET":
            buffer = "0";
            break;
        case "+":
            console.log("call addition");
            break;
        case "-":
            console.log("call subtraction");
            break;
        case ".":
            console.log(".");
            break;
        case "/":
            console.log("call division");
            break;
        case "×":
            console.log("call multiplication");
            break;
        case "DEL":
            console.log("delete last");
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case "=":
            console.log("total result");
            break;
    }
}

//add onve event listener to all buttons
function runCalc() {
    document.querySelector(".buttons__container").addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    })
}

// display the current total on the calculator screen
function rerender() {
    screen.innerText = buffer;
}

//call the function
runCalc();