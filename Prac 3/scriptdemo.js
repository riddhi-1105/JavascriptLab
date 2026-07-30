// =====================================
// PASSWORD VALIDATION LOGIN
// =====================================

let passwordValid = false;

// =====================================
// CHECK PASSWORD
// =====================================

function checkPassword() {

    const password = document.getElementById("password").value;

    const tick = document.getElementById("tick");
    const message = document.getElementById("message");

    // Password Rules
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /[0-9]/;
    const special = /[!@#$%^&*(),.?":{}|<>]/;

    if (
        password.length >= 8 &&
        upperCase.test(password) &&
        lowerCase.test(password) &&
        number.test(password) &&
        special.test(password)
    ) {

        passwordValid = true;

        tick.innerHTML = "✅";
        tick.className = "success";

        message.innerHTML = "Strong Password";
        message.style.color = "#22c55e";

    } else {

        passwordValid = false;

        tick.innerHTML = "❌";
        tick.className = "error";

        message.innerHTML =
            "Minimum 8 characters, Uppercase, Lowercase, Number & Special Character";

        message.style.color = "#ef4444";
    }

}


function login() {

    const username = document.getElementById("username").value.trim();

    if (username === "") {

        showPopup(
            "Username Required",
            "Please enter your username."
        );

        return;
    }

    if (!passwordValid) {

        showPopup(
            "Invalid Password",
            "Password does not satisfy the required format."
        );

        return;
    }

    showPopup(
        "Login Successful",
        "Welcome " + username + "!"
    );

    setTimeout(function () {

        closePopup();

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("homePage").style.display = "flex";

    }, 1500);

}

function logout() {

    document.getElementById("homePage").style.display = "none";

    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    passwordValid = false;

    document.getElementById("tick").innerHTML = "❌";
    document.getElementById("tick").className = "error";

    document.getElementById("message").innerHTML =
        "Password not checked";

    document.getElementById("message").style.color = "white";

}

// =====================================
// POPUP
// =====================================

function showPopup(title, text) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupTitle").innerHTML = title;

    document.getElementById("popupMessage").innerHTML = text;

    if (title === "Login Successful") {

        document.getElementById("popupTitle").style.color = "#16a34a";

    } else {

        document.getElementById("popupTitle").style.color = "#ef4444";

    }

}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        login();

    }

});