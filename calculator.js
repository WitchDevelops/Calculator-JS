// variable to display on the screen
let buffer = "0";
// variable for current total
let runningTotal = 0;

let previousOperator;

const screen = document.querySelector(".screen");

//do this when clicking any button
const buttonClick = (value) => {
    //check if the button is a number or not
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    //update the screen
    rerender();
}

const handleNumber = (value) => {
    //if current total is 0 then replace it with a number value
    if (buffer === "0") {
        buffer = value;
    //but if it alraedy contains a value, add a value to it
    } else {
        buffer += value;
    }
}

// function to perform math operations
const handleMath = (value) => {
    //when you start from 0 the result is 0 anyway
    if (buffer === "0") {
        return;
    }
    // this does the actual math
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    // need to remember what operator was clicked before
    previousOperator = value;
    buffer = "0";
}

const flushOperation = (intBuffer) => {
     switch (previousOperator) {
         case "+":
             runningTotal += intBuffer;
             break;
         case "-":
             runningTotal -= intBuffer;
             break;
         case "/":
             runningTotal /= intBuffer;
             break;
         case "×":
             runningTotal *= intBuffer;
             break;
        case "*":
            runningTotal *= intBuffer;
            break;
     }
}

const handleSymbol = (symbol) => {
    // switch all the symbol cases, as each of them will do something different
    switch (symbol) {
        case "RESET":
            buffer = "0";
            runningTotal = 0;
            break;
        case ".":
            console.log(".");
            break;    
        case "+":
        case "-":
        case "/":
        case "×":
        case "*":
            handleMath(symbol);
            break;
        case "DEL":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case "=":
            if (previousOperator === undefined) {
                return;
            } else {
                flushOperation(parseInt(buffer));
                previousOperator = null;
                buffer = runningTotal.toString();
                runningTotal = 0;
            }
            break;
    }
}

//add one event listener to all buttons
const runCalc = () => {
    document.querySelector(".buttons__container").addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    

    });
    //allow for keyboard input
    document.addEventListener("keydown", function(event) {
        const key = event.key;
    
        // Check if the key is a valid input for the calculator
        if (/^[0-9+\-/\*\.=]$/.test(key) || key === "Backspace" || key === "Enter") {
            if (key === "Backspace") {
                handleSymbol("DEL");
                rerender();
            } else if (key === "=" || key === "Enter") {
                buttonClick("=");
                handleSymbol("=");
            } else {
                buttonClick(key);
            }
    
            // Prevent default behavior of the key to avoid unwanted browser actions
            event.preventDefault();
        }
    });
}

// display the current total on the calculator screen
const rerender = () => {
    screen.innerText = buffer;
}

//call the function
runCalc();