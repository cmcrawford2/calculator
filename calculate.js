// Make sure the dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      handleButtonClick(buttonText);
    });
  });

  let operand = 0;
  let operation = "";
  let previousText = "";

  const display = document.getElementById("output");
  display.value = "0";

  function handleButtonClick(buttonText) {
    console.log(
      "BEFORE: buttonText, operand, operation, display.value, display.textContent",
      buttonText,
      operand,
      operation,
      display.value,
      display.textContent
    );
    switch (buttonText) {
      case "+":
      case "-":
      case "/":
      case "x":
        console.log("operator");
        if (operator(previousText)) {
          // Just overwrite
          operation = buttonText;
        } else if (operation === "") {
          console.log("No operation");
          operation = buttonText;
          operand = Number(display.value);
          display.value = "0";
          // Do not update textContent until the user types the next number.
        } else {
          console.log("operation exists");
          operand = calculate_number(operand, Number(display.value), operation);
          operation = buttonText;
          display.value = "0";
          display.textContent = String(operand);
        }
        break;
      case "=":
        if (operation !== "") {
          operand = calculate_number(operand, Number(display.value), operation);
          operation = "";
          display.value = "0";
          display.textContent = String(operand);
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (display.value === "0") {
          display.value = buttonText;
        } else {
          const eIndex = display.value.indexOf("e");
          if (eIndex === -1) {
            display.value += buttonText;
          } else {
            display.value =
              display.value.slice(0, eIndex) +
              buttonText +
              display.value.slice(eIndex);
          }
        }
        display.textContent = display.value;
        break;
      case "0":
        if (display.value !== "0") {
          const eIndex = display.value.indexOf("e");
          if (eIndex === -1) {
            display.value += buttonText;
          } else {
            display.value =
              display.value.slice(0, eIndex) +
              buttonText +
              display.value.slice(eIndex);
          }
          display.textContent = display.value;
        }
        break;
      case ".":
        const index = display.value.indexOf(".");
        if (index === -1) {
          const eIndex = display.value.indexOf("e");
          if (eIndex === -1) {
            display.value += buttonText;
          } else {
            display.value =
              display.value.slice(0, eIndex) +
              buttonText +
              display.value.slice(eIndex);
          }
          display.textContent = display.value;
        }
        break;
      case "DEL":
        console.log("deleting", display.textContent, "operand", operand);
        if (
          display.value !== "0" &&
          display.textContent !== "NaN" &&
          display.textContent !== "Infinity"
        ) {
          // We are deleting last digit of a value.
          const newString = truncate(display.value);
          if (newString.length === 0) {
            display.value = "0";
          } else {
            display.value = newString;
          }
          // Update the display
          display.textContent = display.value;
        } else if (operand !== 0 && operand != NaN && operand != Infinity) {
          // We are deleting last digit of a result
          const oldString = String(operand);
          const newString = truncate(oldString);
          if (newString.length === 0) {
            operand = 0;
            display.value = "0";
          } else {
            operand = Number(newString);
            display.value = newString;
          }
          // Update the display
          display.textContent = display.value;
        }
        break;
      case "RESET":
        operand = 0;
        operation = "";
        display.value = "0";
        display.textContent = "0";
        break;
    }
    // We do this to check if user types two operands in a row.
    previousText = buttonText;
    console.log(
      "AFTER: operand, display.value, display.textContent",
      operand,
      display.value,
      display.textContent
    );
  }

  function operator(text) {
    return text === "+" || text === "-" || text === "x" || text === "/";
  }

  function calculate_number(a, b, operation) {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "/":
        return a / b;
      case "x":
        return a * b;
    }
  }

  function truncate(numberString) {
    const index = numberString.indexOf("e");
    if (index === -1) {
      return numberString.slice(0, -1);
    } else if (index > 1) {
      // Remove the character before 'e'
      return numberString.slice(0, index - 1) + numberString.slice(index);
    } else {
      return numberString;
    }
  }
});