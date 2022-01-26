// Query selectors
const allButtons = document.querySelectorAll("div");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const acButton = document.querySelector(".AC");
const equalsButton = document.querySelector(".equals");

// Calculator variables
let num1 = "";
console.log(num1)
let operator = "";
let num2 = "";

// Functions
const calculate = (num1, operator, num2) => {
  const toNum1 = Number(num1);
  const toNum2 = Number(num2);
  if (operator === "+") {
    return toNum1 + toNum2;
  } else if (operator === "-") {
    return toNum1 - toNum2;
  } else if (operator === "x") {
    return toNum1 * toNum2;
  } else if (operator === "/") {
    return toNum1 / toNum2;
  } else if (operator === "%") {
    return toNum1 % toNum2;
  } 
} 

// When number button clicked
numButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    //console.log(event.target.innerHTML);
    num1 = event.target.innerHTML
  });
});

// When operator button clicked
operatorButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    operator = event.target.innerHTML
  });
});

// When equals button clicked
equalsButton.addEventListener("click", (event) => {
    calculate(num1, operator, num2)
  });




// Basic mathematical functionality
// Retrieve value when button is pressed
// Print value to screen
// Save value to variable, eg, num1, when operation is pressed

// Additonal functionality
// Clear number and operation variables and display when AC pressed
