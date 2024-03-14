let currentOperand = "0";
let previousOperand = "";
let operation = null;
let equals = null;
const buttons = document.querySelectorAll("button");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");

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
            previousOperand = "";
            currentOperand = "0";
            operation = null;
            equals = null;
            break;
        case "←":
            if (currentOperand.length === 1) {
                currentOperand = "0";
            } else {
                currentOperand = currentOperand.substring(0, currentOperand.length - 1);
            }
            break;
        case ".":
            if (currentOperand.includes(".")) break;
            currentOperand += value;
            break;
        case "=":
            equals = "=";
            compute();
            updateScreen();
            break;
        case "+":
            chooseOperation("+");
            break;
        case "-":
            chooseOperation("-");
            break;
        case "*":
            chooseOperation("*");
            break;
        case "÷":
            chooseOperation("÷");
            break;
    }
};

function handleNumber(value) {
    if (currentOperand === "0" || equals === "=") {
        currentOperand = value;
        equals = null;
    }
    else {
        currentOperand += value;
    }
};

function chooseOperation(currentOperation) {
    if (currentOperand === "") return;  // if no number entered, and an operation entered, do nothing and return
    if (previousOperand !== "") {
        compute();
    }
    operation = currentOperation;
    previousOperand = currentOperand;
    currentOperand = "";
};

function compute() {
    let computation;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch(operation) {
        case "+":
            computation = previous + current;
            break;
        case "-":
            computation = previous - current;
            break;
        case "*":
            computation = previous * current;
            break;
        case "÷":
            computation = previous / current;
            break;
    }

    currentOperand = computation;
    previousOperand = "";
    operation = null;
}

function updateScreen() {
    currentOperandTextElement.innerText = currentOperand;
    if (operation !== null) {
        previousOperandTextElement.innerText = previousOperand + operation;
    } else {
        previousOperandTextElement.innerText = "";
    }
};

function init() {
    updateScreen();

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            handleButtonClick(event.target.alt);
        })
    });
};

init();