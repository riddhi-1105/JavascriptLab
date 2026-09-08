// ===============================
// SIT NAGPUR STUDENT GRADING SYSTEM
// ===============================

const form = document.getElementById("studentForm");

const photoInput = document.getElementById("photo");

const previewImage = document.getElementById("previewImage");

// -----------------------------
// Photo Preview
// -----------------------------

photoInput.addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

previewImage.src=e.target.result;

}

reader.readAsDataURL(file);

}

});

// -----------------------------
// Grade System
// -----------------------------

function gradeSystem(){

const name=document.getElementById("name").value.trim();

const prn=document.getElementById("prn").value.trim();

const email=document.getElementById("email").value.trim();

const department=document.getElementById("department").value;

const semester=document.getElementById("semester").value;

const subject=document.getElementById("subject").value.trim();

const faculty=document.getElementById("faculty").value.trim();

const exam=document.getElementById("exam").value;

const marks=Number(document.getElementById("marks").value);

const mobile=document.getElementById("mobile").value.trim();

// -----------------------------
// Empty Validation
// -----------------------------

if(

name===""||

prn===""||

email===""||

department===""||

semester===""||

subject===""||

faculty===""||

exam===""||

mobile===""||

document.getElementById("marks").value===""

){

alert("Please fill all the required fields.");

return;

}

// -----------------------------
// Name Validation
// -----------------------------

const namePattern=/^[A-Za-z ]+$/;

if(!namePattern.test(name)){

alert("Student name should contain only alphabets.");

return;

}

if(!namePattern.test(faculty)){

alert("Faculty name should contain only alphabets.");

return;

}

// -----------------------------
// PRN Validation
// -----------------------------

const prnPattern=/^[0-9]{11}$/;

if(!prnPattern.test(prn)){

alert("PRN Number should contain exactly 11 digits.");

return;

}

// -----------------------------
// Email Validation
// -----------------------------

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid Email Address.");

return;

}

// -----------------------------
// Mobile Validation
// -----------------------------

const mobilePattern=/^[6-9][0-9]{9}$/;

if(!mobilePattern.test(mobile)){

alert("Enter a valid 10-digit Mobile Number.");

return;

}

// -----------------------------
// Marks Validation
// -----------------------------

if(isNaN(marks)||marks<0||marks>100){

alert("Marks should be between 0 and 100.");

return;

}

}