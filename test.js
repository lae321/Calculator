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
console.log(calculate("5", "+", "3"))