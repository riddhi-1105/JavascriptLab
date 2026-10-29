# 🔒 Password Validation Login Page

A responsive login page built with **HTML, CSS and JavaScript** as a college practical at **SIT Nagpur**. It checks the password strength **live while typing**, shows a ✅ / ❌ indicator, and uses popup messages and a welcome page after a successful login.

---

## Features

- Glassmorphism-style login card with a gradient background and fade-in animation
- **Real-time password validation** on every key press
- ✅ / ❌ indicator with a colour-coded message (green for strong, red for weak)
- Popup messages for errors and success (zoom animation)
- Login is blocked if the username is empty or the password format is invalid
- **Welcome page** shown after a successful login, with a **Logout** button that resets everything
- Press **Enter** to log in
- Fully responsive layout for mobile screens

---

## Password Rules

A password is valid only if it has all of these:

| Rule | Check |
|---|---|
| Minimum length | At least **8 characters** |
| Uppercase letter | `A-Z` |
| Lowercase letter | `a-z` |
| Number | `0-9` |
| Special character | `! @ # $ % ^ & * ( ) , . ? " : { } \| < >` |

**Example of a valid password:** `Riddhi@123`

---

## JavaScript Concepts Demonstrated

| Concept | Where it is used |
|---|---|
| **Regular expressions** | `/[A-Z]/`, `/[a-z]/`, `/[0-9]/` and a special-character pattern with `.test()` |
| **Conditional statements** | `if / else` for validation rules |
| **Logical operators** | `&&` to combine all password rules |
| **DOM manipulation** | `getElementById`, `innerHTML`, `style`, `className` |
| **Events** | `onkeyup`, `onclick`, `keydown` (Enter key) |
| **Functions** | `checkPassword()`, `login()`, `logout()`, `showPopup()`, `closePopup()` |
| **Timing function** | `setTimeout()` to close the popup and show the home page |
| **Boolean flag** | `passwordValid` tracks the password state |

---

## Technologies Used

- **HTML5**: login page, home page and popup structure
- **CSS3**: Flexbox, glassmorphism (`backdrop-filter`), animations (`@keyframes`), media queries
- **JavaScript (ES6)**: validation logic and page switching

---

## Project Structure

```
├── indexdemo.html    # Login page, home page and popup markup
├── styledemo.css     # Styling and animations
├── scriptdemo.js     # Password validation and login logic
└── README.md         # Project documentation
```

---

## How to Run

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Keep `indexdemo.html`, `styledemo.css` and `scriptdemo.js` in the **same folder**.
3. Open `indexdemo.html` in any modern browser (Chrome, Edge, Firefox).

No installation or server is needed.

---

## Usage

1. Enter a **username**.
2. Type a **password**. The ✅ / ❌ indicator updates as you type.
3. Click **Login** (or press **Enter**).
4. If the details are valid, a success popup appears and then the **Welcome** page opens.
5. Click **Logout** to return to the login page.

---

## Screenshots

> Add screenshots of the login page, the invalid-password popup and the welcome page here.

```
![Login Page](screenshots/login.png)
![Validation Popup](screenshots/popup.png)
![Welcome Page](screenshots/welcome.png)
```

---

## Note

This is a front-end demo for learning purposes. Validation runs only in the browser and there is no real authentication or backend.

---

## Author

**Riddhi Thakkar**
B.Tech Computer Science & Engineering, SIT Nagpur

---

## License

This project was created for educational purposes as part of a college practical.
