let runningTotal = 0;
let buffer = "0";
const buttons = document.querySelectorAll("button");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        handleButtonClick(event.target.alt);
    })
});

function handleButtonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    updateScreen();
};

function handleSymbol(value) {
    switch(value) {
        case "C":
            runningTotal = 0;
            buffer = "0";
            break;
        case "←":
            buffer = buffer.substring(0, buffer.length - 1);
            break;
        case "+":

        case "-":

        case "*":

        case "/":

        case ".":

        case "=":

    }
};

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function updateScreen() {
    currentOperand.innerText = buffer;
}