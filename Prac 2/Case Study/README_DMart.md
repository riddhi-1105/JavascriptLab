# 🛒 DMart Smart Billing System

A responsive billing web app built with **HTML, CSS and JavaScript** as a college practical at **SIT Nagpur**. It generates a complete shopping bill with discount and GST, and it demonstrates core **JavaScript data types** along with type conversion and type coercion.

---

## Features

- Customer details input (name and mobile number)
- **Live product search** that filters the list as you type
- Checkbox list of 20 grocery and household products
- Price, quantity, discount (%) and payment method (Cash, UPI, Credit Card, Debit Card)
- **Generate Bill** with a unique random bill number and the current date and time
- Automatic calculation of subtotal, discount, **18% GST** and grand total
- **Print Bill** button (uses the browser print dialog)
- **Clear** button that resets the form, the search and the bill
- Input validation with an alert if required details are missing
- Responsive layout that works on mobile screens

---

## JavaScript Concepts Demonstrated

| Concept | Example in the code |
|---|---|
| `var`, `let`, `const` | `var customerName`, `let contact`, `const GST = 18` |
| **Primitive data types** | String, Number, Boolean, Undefined, Null (shown on the bill) |
| **Type conversion** | `Number("100") + 50` → `150` |
| **Type coercion** | `"100" + 50` → `"10050"` |
| **Arrays** | `Array.from()` + `map()` to collect checked products |
| **Objects** | `bill` object holding customer and amount details |
| **Object destructuring** | `const { customerName: name, ... } = bill` |
| **Template literals** | Building the bill HTML with `${...}` |
| **DOM manipulation** | `getElementById`, `querySelectorAll`, `innerHTML` |
| **Events** | `onclick`, `onkeyup` handlers |
| **Date object** | `new Date().toLocaleString()` |
| **Math functions** | `Math.floor(Math.random() * ...)` for the bill number |

---

## Bill Calculation

```
Subtotal            = Price × Quantity
Discount Amount     = Subtotal × Discount% / 100
Amount After Disc.  = Subtotal − Discount Amount
GST (18%)           = Amount After Discount × 18 / 100
Grand Total         = Amount After Discount + GST
```

---

## Technologies Used

- **HTML5**: page structure and form
- **CSS3**: Flexbox, Grid, media queries, hover and focus effects
- **JavaScript (ES6)**: logic, calculations and DOM updates

---

## Project Structure

```
├── index.html      # Page layout, styling and form
├── script1.js      # Search, bill generation and clear logic
└── README.md       # Project documentation
```

---

## How to Run

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Keep `index.html` and `script1.js` in the **same folder**.
3. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
4. Enter the customer details, select products, add price and quantity, then click **Generate Bill**.

No installation or server is needed.

---

## Usage

1. Enter the **customer name** and **mobile number**.
2. Use the search box to find products, then tick the ones you want.
3. Enter the **price per item**, **quantity** and an optional **discount**.
4. Choose the **payment method**.
5. Click **Generate Bill** to see the full bill, and **Print Bill** to print it.
6. Click **Clear** to start a new bill.

---

## Screenshots

> Add screenshots of the form and the generated bill here.

```
![Billing Form](screenshots/form.png)
![Generated Bill](screenshots/bill.png)
```

---

## Author

**Riddhi Thakkar**
B.Tech Computer Science & Engineering, SIT Nagpur

---

## License

This project was created for educational purposes as part of a college practical.
