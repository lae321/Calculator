let result;
let operatorCount = 2;

const calculate = (currentNum, operator, prevNum) => {
    const toNum1 = Number(currentNum);
    const toNum2 = Number(prevNum);
    if (operator === "+") {
      result += toNum1 + toNum2;
      
    } else if (operator === "-") {
      result += toNum1 - toNum2;
      
    } else if (operator === "x") {
      result += toNum1 * toNum2;
      
    } else if (operator === "/") {
      result += toNum1 / toNum2;
      
    } else if (operator === "%") {
      result += toNum1 % toNum2;
      
    }
    
  // else {
  //   operatorCount--;
  //   return result + calculate(currentNum, operator, prevNum, operatorCount);
  // }
};
calculate("5", "+", "3")
console.log(result)