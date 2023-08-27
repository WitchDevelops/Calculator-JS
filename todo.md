# TODO

## implement handling decimals
To add support for decimals in your JavaScript calculator, you'll need to make the following changes:

Add a variable to track whether a decimal point has already been entered.
Modify the handleNumber function to handle the decimal point.
Modify the handleMath function to reset the decimal tracking when a math operator is clicked.
Modify the handleSymbol function to handle the decimal symbol.
Here's the updated JavaScript code with these changes:

```
// ... (previous code)

let decimalEntered = false;

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleMath(value) {
    if (buffer === "0") {
        return;
    }

    if (runningTotal === 0) {
        runningTotal = parseFloat(buffer);
    } else {
        flushOperation(parseFloat(buffer));
    }

    previousOperator = value;
    buffer = "0";
    decimalEntered = false; // Reset decimal tracking
}

function handleSymbol(symbol) {
    switch (symbol) {
        // ... (other cases)
        case ".":
            if (!decimalEntered) {
                buffer += ".";
                decimalEntered = true;
            }
            break;
        // ... (other cases)
    }
}

// ... (rest of the code)
```

Here's what's been done:

Introduced the decimalEntered variable to track whether a decimal point has been entered.
In the handleNumber function, no change is needed as it handles regular number input.
In the handleMath function, a line decimalEntered = false; is added to reset the decimal tracking when a math operator is clicked.
In the handleSymbol function, the decimal handling case is added to allow inputting decimals only once.
With these changes, your calculator should now handle decimal points correctly. Make sure to test thoroughly to ensure everything works as expected.

## add keyboard input

Sure, you can add keyboard input handling to your calculator by adding an event listener for the "keydown" event on the document object. Here's how you can modify your code to include keyboard input handling:
```
// ... (previous code)

// Add event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Check if the key is a valid input for the calculator
    if (/^[0-9+\-*/.=]$/.test(key) || key === "Backspace") {
        if (key === "=" || key === "Enter") {
            handleSymbol("=");
        } else if (key === "Backspace") {
            handleSymbol("DEL");
        } else {
            buttonClick(key);
        }

        // Prevent default behavior of the key to avoid unwanted browser actions
        event.preventDefault();
    }
});

// ... (rest of the code)

```

This code snippet adds an event listener to the document object for the "keydown" event. It checks if the pressed key is a valid input for the calculator (digits, operators, decimal point, equal sign, and backspace). If it's a valid input, it triggers the appropriate action in your calculator logic (using functions like handleSymbol, buttonClick, etc.).

Remember to test thoroughly to ensure that keyboard input works as expected in your calculator.