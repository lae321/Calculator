// Query selectors
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const acButton = document.querySelector(".AC");
const equalsButton = document.querySelector(".equals");
const currNum = document.querySelector(".currNum");
const preNum = document.querySelector(".preNum")

// Calculator variables
let currentNum = "";
let operator = "";
let prevNum = "";
let result;

// Functions
const calculate = (currentNum, operator, prevNum) => {
  const toNum1 = Number(currentNum);
  const toNum2 = Number(prevNum);
  if (operator === "+") {
    result = toNum1 + toNum2;
    return toNum1 + toNum2;
  } else if (operator === "-") {
    result = toNum1 - toNum2;
    return toNum2 - toNum1;
  } else if (operator === "x") {
    result = toNum1 * toNum2;
    return toNum1 * toNum2;
  } else if (operator === "/") {
    result = toNum1 / toNum2;
    return toNum2 / toNum1;
  } else if (operator === "%") {
    result = toNum1 % toNum2;
    return toNum2 % toNum1;
  }
};

const updateDisplay = (input) => {
  currNum.innerHTML = input;
  preNum.innerHTML = prevNum + operator;
};

// When number button clicked
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentNum.includes(".") && event.target.innerHTML === ".") {
      return;
    } else {
      currentNum += event.target.innerHTML;
      updateDisplay(currentNum);
    }
  });
});

// When operator button clicked
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operator = event.target.innerHTML;
    prevNum = currentNum;
    currentNum = "";
    updateDisplay("");
  });
});

// When equals button clicked
equalsButton.addEventListener("click", (event) => {
  currNum.innerHTML = calculate(currentNum, operator, prevNum);
  preNum.innerHTML = "";
  prevNum = "";
  operator = "";
});

// When clear button clicked
acButton.addEventListener("click", (event) => {
  currentNum = "";
  prevNum = "";
  operator = "";
  updateDisplay("");
});

