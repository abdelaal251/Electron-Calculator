// Select the display element
const display = document.getElementById('display');

// Initialize a variable to store the current input
let currentInput = "";

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === "C") {
      // Clear button: Reset the input
      currentInput = "";
      display.textContent = "0";
    } else if (value === "=") {
      // Equals button: Evaluate the expression
      try {
        // Check for division by zero
        if (currentInput.includes("/0")) {
          throw new Error("Division by zero is not allowed");
        }

        // Evaluate the expression
        currentInput = eval(currentInput).toString(); // Convert result to string
        display.textContent = currentInput;
      } catch (error) {
        // Handle errors (e.g., invalid expressions, division by zero)
        display.textContent = "Error";
        console.error("Calculation error:", error.message);
        currentInput = ""; // Reset the input after an error
      }
    } 
    else if (value === "Backspace") {
        // Remove the last character from the input
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || "0"; // Default to "0" if input is empty
      }else {
      // Append value to the input
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});


// Map keyboard keys to calculator buttons
const keyMap = {
    "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
    "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
    "+": "+", "-": "-", "*": "*", "/": "/",
    "Enter": "=", "Backspace": "Backspace", "Escape": "C",
  };
  
  // Add keyboard event listener
  document.addEventListener("keydown", (event) => {
    const key = event.key;
  
    if (keyMap[key]) {
      const buttonValue = keyMap[key];
  
      // Simulate button click for the corresponding key
      if (buttonValue === "=") {
        // Trigger evaluation
        try {
          if (currentInput.includes("/0")) {
            throw new Error("Division by zero is not allowed");
          }
          currentInput = eval(currentInput).toString();
          display.textContent = currentInput;
        } catch (error) {
          display.textContent = "Error";
          currentInput = "";
        }
      } else if (buttonValue === "Delete") {
        // Clear input
        currentInput = "";
        display.textContent = "0";
      } else if (buttonValue === "Backspace") {
        // Remove the last character
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || "0";
      } else {
        // Append the key value to the input
        currentInput += buttonValue;
        display.textContent = currentInput;
      }
    }
  });
  