const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentValue = "";
let operator = "";
let previousValue = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value");

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      previousValue = currentValue;
      currentValue = "";
      operator = value;
    } else if (button.id === "clear") {
      currentValue = "";
      previousValue = "";
      operator = "";
      display.innerText = "0";
    } else if (button.id === "equal") {
      let result = calculate(previousValue, currentValue, operator);
      display.innerText = result;
      currentValue = result;
      previousValue = "";
      operator = "";
    } else if (value === ".") {
      if (!currentValue.includes(".")) {
        // condition -> false
        currentValue = currentValue + value; // "1" + "."
      }
    } else {
      currentValue = currentValue + value; // "1." + "2"
      display.innerText = currentValue;
    }
  });
});

function calculate(firstNum, secondNum, operator) {
  let num1 = parseFloat(firstNum);
  let num2 = parseFloat(secondNum);
  let answer = "";
  switch (operator) {
    case "+":
      answer = num1 - num2;
      break;
    case "-":
      answer = num1 + num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      break;
  }

  return answer;
}
