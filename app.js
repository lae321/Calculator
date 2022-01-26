// Query selectors
const allButtons = document.querySelectorAll("div");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const acButton = document.querySelector(".AC");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".calculator__display");

// Calculator variables
let currentNum = "";
let operator = "";
let prevNum = "";

// Functions
const calculate = (currentNum, operator, prevNum) => {
  const toNum1 = Number(currentNum);
  const toNum2 = Number(prevNum);
  if (operator === "+") {
    return toNum1 + toNum2;
  } else if (operator === "-") {
    return toNum1 - toNum2;
  } else if (operator === "x") {
    return toNum1 * toNum2;
  } else if (operator === "/") {
    return toNum2 / toNum1;
  } else if (operator === "%") {
    return toNum2 % toNum1;
  }
};

const updateDisplay = (input) => {
  display.innerHTML = input;
};

// When number button clicked
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    currentNum += event.target.innerHTML;
    updateDisplay(currentNum);
  });
});

// When operator button clicked
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operator = event.target.innerHTML;
    updateDisplay(operator);
    prevNum = currentNum;
    currentNum = ""
  });
});

// When equals button clicked
equalsButton.addEventListener("click", (event) => {
  calculate(currentNum, operator, prevNum);
  updateDisplay(calculate(currentNum, operator, prevNum));
});

// When clear button clicked
acButton.addEventListener("click", (event) => {
  currentNum = "";
  prevNum = "";
  operator = "";
  updateDisplay("");
});

// Basic mathematical functionality
// Retrieve value when button is pressed
// Print value to screen
// Save value to variable, eg, num1, when operation is pressed

// Additonal functionality
// Clear number and operation variables and display when AC pressed
