# Electron Calculator

An interactive calculator built with Electron and JavaScript, featuring basic arithmetic operations, keyboard support, and a responsive design. This project serves as a foundational example of integrating frontend and backend functionality using the Electron framework.

---

## **Features**

### Core Functionality:
- Addition, subtraction, multiplication, and division.
- Clear button (`C`) to reset the input.
- Backspace button to delete the last input.
- Support for keyboard input, including `Enter`, `Backspace`, and `Delete`.

### Enhanced User Experience:
- Responsive design with a modern look and feel.
- Error handling for invalid operations (e.g., division by zero).
- Dedicated equal (`=`) button spanning the width of the calculator.

### Cross-Platform Support:
- Packaged as a standalone desktop application for Windows, macOS, and Linux.

---

## **Setup Instructions**

### Prerequisites:
- [Node.js](https://nodejs.org/) installed on your system.

### Steps:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/electron-calculator.git
   cd electron-calculator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Package the Application** (optional):
   - Use `electron-packager` or `electron-builder` to create a distributable version.
   ```bash
   npm install -g electron-packager
   electron-packager . Calculator
   ```

---

## **Usage**

1. Click the number and operator buttons to perform calculations.
2. Use the keyboard for input:
   - Numbers (`0-9`), operators (`+`, `-`, `*`, `/`), and `Enter` for equals.
   - `Backspace` to delete the last character.
   - `Delete` to clear the entire input.
3. Press the equal (`=`) button or `Enter` to calculate the result.

---

## **Project Structure**

```plaintext
.
├── main.js           # Main process script
├── index.html        # Calculator user interface
├── styles.css        # Styling for the calculator
├── renderer.js       # Logic for user interactions and calculations
├── package.json      # Project configuration and dependencies
├── preload.js        # Preload script (optional)
└── README.md         # Documentation
```

---

## **Screenshots**

### Calculator Interface:
![Calculator Screenshot](https://via.placeholder.com/800x400?text=Screenshot+Placeholder)

---

## **Future Enhancements**

1. **Scientific Functions**: Add advanced operations like square root, power, and trigonometry.
2. **Memory Features**: Support memory storage and recall (`M+`, `M-`, `MC`).
3. **Dark Mode**: Include a theme toggle for light and dark modes.
4. **Error Logging**: Log errors for debugging and improving user experience.

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository and submit pull requests.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request with a detailed description of your changes.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Acknowledgments**

- [Electron](https://www.electronjs.org/) for enabling cross-platform desktop apps.
- [Node.js](https://nodejs.org/) for its powerful runtime.
- The open-source community for inspiring creativity and collaboration.

