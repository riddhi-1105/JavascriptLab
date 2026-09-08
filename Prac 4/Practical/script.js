//Function Declaration
function reverseString(str) {
    return str.split("").reverse().join("");
}

//Closure Example
function messaage() {
    var msg = "Palindrome Checker";

    function display() {
        return msg;
    }
    return display;
}

function checkPalindrome() {
    try {
        var word = document.getElementById("word").value;
        if (word === "") {
            throw "Please enter a word";
        }
        if (!/^[a-zA-Z]+$/.test(word)) {
            throw " Only alphabets are allowed";
        }
        if (word.length < 3) {
            throw "Word must be at least 3 characters long";
        }
        if (word.length > 20) {
            throw "Word must be less than 20 characters long";
        }

        let input = word.toLowerCase();
        var reversed = reverseString(input);

        if (input==reversed) {
            document.getElementById("result").innerHTML = "The word is a palindrome";
        }
        else {
            document.getElementById("result").innerHTML = "The word is not a palindrome";
        }
    } catch (error) {
        document.getElementById("result").innerHTML = error;
    }
}