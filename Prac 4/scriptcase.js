function checkRegistration(regNo) {

    if (regNo === "") {
        throw "Registration number should not be empty.";
    }

    if (regNo.length !== 10) {
        throw "Registration number must be exactly 10 characters.";
    }

    let pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

    if (!pattern.test(regNo)) {
        throw "Invalid registration number format.";
    }

    return true;
}

function validateRegistration() {

    let regNo = document.getElementById("regNumber").value.trim();
    let result = document.getElementById("result");

    try {

        checkRegistration(regNo);

        result.style.color = "green";
        result.innerHTML = "✅ Valid Registration Number";

    } catch(error) {

        result.style.color = "red";
        result.innerHTML = "❌ Invalid Registration Number<br>" + error;
    }
}