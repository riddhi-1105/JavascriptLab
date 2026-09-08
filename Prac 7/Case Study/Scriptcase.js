
const form = document.getElementById("regForm");
const firstname = document.getElementById("firstname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const terms = document.getElementById("terms");
const daySel = document.getElementById("day");
const monthSel = document.getElementById("month");
const yearSel = document.getElementById("year");
const successMsg = document.getElementById("successMsg");


const allInputs = document.querySelectorAll(
  "input[type='text'], input[type='email'], input[type='url'], input[type='password'], select"
);


for (let d = 1; d <= 31; d++) {
  daySel.appendChild(new Option(d, d));
}
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
months.forEach((m, i) => monthSel.appendChild(new Option(m, i + 1)));

const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= currentYear - 100; y--) {
  yearSel.appendChild(new Option(y, y));
}


allInputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("focused");
  });
  
});


function showError(inputId, errId, message) {
  document.getElementById(inputId).classList.add("input-error");
  document.getElementById(errId).textContent = message;
}
function clearError(inputId, errId) {
  document.getElementById(inputId).classList.remove("input-error");
  document.getElementById(errId).textContent = "";
}


firstname.addEventListener("change", () => {
  if (firstname.value.trim() === "") {
    showError("firstname", "err-firstname", "Firstname is required.");
  } else {
    clearError("firstname", "err-firstname");
  }
});

username.addEventListener("change", () => {
  if (username.value.trim() === "") {
    showError("username", "err-username", "Username is required.");
  } else {
    clearError("username", "err-username");
  }
});

email.addEventListener("change", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() !== "" && !pattern.test(email.value.trim())) {
    showError("email", "err-email", "Enter a valid email address.");
  } else {
    clearError("email", "err-email");
  }
});

password.addEventListener("change", () => {
  if (password.value.trim() === "") {
    showError("password", "err-password", "Password is required.");
  } else if (password.value.length < 6) {
    showError("password", "err-password", "Password must be at least 6 characters.");
  } else {
    clearError("password", "err-password");
  }
});

repassword.addEventListener("change", () => {
  if (repassword.value !== password.value) {
    showError("repassword", "err-repassword", "Passwords do not match.");
  } else {
    clearError("repassword", "err-repassword");
  }
});

[daySel, monthSel, yearSel].forEach(sel => {
  sel.addEventListener("change", () => {
    if (daySel.value === "" || monthSel.value === "" || yearSel.value === "") {
      showError("day", "err-dob", "Please select your full date of birth.");
    } else {
      clearError("day", "err-dob");
    }
  });
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Firstname
  if (firstname.value.trim() === "") {
    showError("firstname", "err-firstname", "Firstname is required.");
    valid = false;
  } else {
    clearError("firstname", "err-firstname");
  }

  // Username
  if (username.value.trim() === "") {
    showError("username", "err-username", "Username is required.");
    valid = false;
  } else {
    clearError("username", "err-username");
  }

 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() !== "" && !emailPattern.test(email.value.trim())) {
    showError("email", "err-email", "Enter a valid email address.");
    valid = false;
  } else {
    clearError("email", "err-email");
  }

 
  if (daySel.value === "" || monthSel.value === "" || yearSel.value === "") {
    showError("day", "err-dob", "Please select your full date of birth.");
    valid = false;
  } else {
    clearError("day", "err-dob");
  }

  if (password.value.trim() === "") {
    showError("password", "err-password", "Password is required.");
    valid = false;
  } else if (password.value.length < 6) {
    showError("password", "err-password", "Password must be at least 6 characters.");
    valid = false;
  } else {
    clearError("password", "err-password");
  }

  
  if (repassword.value.trim() === "") {
    showError("repassword", "err-repassword", "Please re-enter your password.");
    valid = false;
  } else if (repassword.value !== password.value) {
    showError("repassword", "err-repassword", "Passwords do not match.");
    valid = false;
  } else {
    clearError("repassword", "err-repassword");
  }


  if (!terms.checked) {
    document.getElementById("err-terms").textContent = "You must agree to the terms & conditions.";
    valid = false;
  } else {
    document.getElementById("err-terms").textContent = "";
  }


  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});