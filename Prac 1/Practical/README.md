# SIT Nagpur – User Information Webpage (JavaScript Practical)

A simple, single-page web application built as a JavaScript practical at **SIT Nagpur**. The page collects student details through a form and displays a personalised welcome message. It also demonstrates the three ways of using JavaScript in a webpage and several browser console methods.

---

## Features

- Gradient-background page with a centered card layout and the SIT Nagpur logo
- Form to enter **Name, SEM, PRN, Contact, Age, CGPA and Address**
- On clicking **Submit**:
  - Shows a personalised welcome message with all entered details on the page
  - Displays a welcome `alert()` popup
  - Prints the data to the browser console using different console methods
- Button hover effect and rounded, responsive-style card UI

---

## JavaScript Concepts Demonstrated

| Concept | Where it is used |
|---|---|
| **Internal JavaScript** | `<script>` block in `<head>` of `Webpage.html` (`showWelcome()` function) |
| **Inline JavaScript** | `onclick="showWelcome(); greet();"` on the Submit button |
| **External JavaScript** | `function.js`, linked with `<script src="function.js">` (`greet()` function) |
| **DOM manipulation** | `document.getElementById()` and `innerHTML` |
| **Alert box** | `alert("Welcome to SIT Nagpur!")` |
| **Console methods** | `console.log()`, `console.info()`, `console.table()`, `console.time()` / `console.timeEnd()` |

---

## Technologies Used

- **HTML5**: structure of the form and page
- **CSS3**: styling, gradient background, card layout, hover effects
- **JavaScript (ES6)**: form handling, DOM updates, console output

---

## Project Structure

```
├── Webpage.html    # Main page (HTML + CSS + internal JavaScript)
├── function.js     # External JavaScript file (greet function)
├── logo.jpg        # SIT Nagpur logo
└── README.md       # Project documentation
```

---

## How to Run

1. Download or clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Keep `Webpage.html`, `function.js` and `logo.jpg` in the **same folder**.
3. Open `Webpage.html` in any modern browser (Chrome, Edge, Firefox).
4. Fill in the form and click **Submit**.
5. Press **F12** → **Console** tab to see the console output.

No installation or server is required.

---

## How It Works

1. The user fills in the form fields.
2. Clicking **Submit** triggers two functions:
   - `showWelcome()` (internal JS) reads all input values, displays them inside the `#output` div, and logs them with `console.log()` and `console.info()`.
   - `greet()` (external JS in `function.js`) shows an alert, prints a table with `console.table()` and measures time with `console.time()` / `console.timeEnd()`.

---

## Screenshots

> Add screenshots of the page and the console output here.

```
![Webpage](screenshots/webpage.png)
![Console Output](screenshots/console.png)
```

---

## Author

**Riddhi**
B.Tech Computer Science & Engineering, SIT Nagpur

---

## License

This project was created for educational purposes as part of a college practical.
