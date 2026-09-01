/* =========================================
   EXPERIMENT 06
   STRING FUNCTIONS & REGEX
========================================= */


/* =========================================
   MAIN FUNCTION
========================================= */

function processString() {

    // Get input values
    const paragraph =
        document.getElementById("paragraph").value.trim();

    const email =
        document.getElementById("email").value.trim();


    // Check paragraph
    if (paragraph === "") {

        showError("Please enter a paragraph to analyze.");

        return;
    }


    /* =====================================
       1. split()
    ===================================== */

    const words =
        paragraph.split(/\s+/);


    /* =====================================
       2. match()
       Find all vowels
    ===================================== */

    const vowels =
        paragraph.match(/[aeiou]/gi);

    const vowelCount =
        vowels ? vowels.length : 0;


    /* =====================================
       3. replace()
    ===================================== */

    const replacedParagraph =
        paragraph.replace(
            /JavaScript/gi,
            "Javascript Programming"
        );


    /* =====================================
       4. indexOf()
    ===================================== */

    const searchWord = "powerful";

    const position =
        paragraph.toLowerCase().indexOf(
            searchWord.toLowerCase()
        );


    /* =====================================
       5. Email Validation
       Regular Expression
    ===================================== */

    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const isValidEmail =
        emailRegex.test(email);


    const emailResult =
        isValidEmail ? "Valid" : "Invalid";


    /* =====================================
       6. Regex Email Extraction
    ===================================== */

    const emailText =
        "For queries contact student@gmail.com";

    const extractedEmails =
        emailText.match(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
        );


    /* =====================================
       7. reverse()
    ===================================== */

    const reversedParagraph =
        paragraph
            .split("")
            .reverse()
            .join("");


    /* =====================================
       Display Results
    ===================================== */

    const output =
        document.getElementById("output");


    output.innerHTML = `

        <div class="result-grid">


            <!-- Original -->
            <div class="result-box full">

                <div class="result-label">
                    <span class="result-number">1</span>
                    Original Paragraph
                </div>

                <div class="result-value">
                    ${escapeHTML(paragraph)}
                </div>

            </div>


            <!-- Split -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">2</span>
                    split() — Words
                </div>

                <div class="result-value">
                    ${words.map(word => escapeHTML(word)).join(", ")}
                </div>

            </div>


            <!-- Match -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">3</span>
                    match() — Vowels
                </div>

                <div class="result-value">
                    ${
                        vowels
                        ? vowels.join(", ")
                        : "No vowels found"
                    }
                </div>

            </div>


            <!-- Vowel Count -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">4</span>
                    Vowel Count
                </div>

                <div class="result-value">

                    <span class="count">
                        ${vowelCount}
                    </span>

                    total vowels

                </div>

            </div>


            <!-- Replace -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">5</span>
                    replace()
                </div>

                <div class="result-value">
                    ${escapeHTML(replacedParagraph)}
                </div>

            </div>


            <!-- indexOf -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">6</span>
                    indexOf()
                </div>

                <div class="result-value">

                    Position of
                    <span class="code-text">
                        ${searchWord}
                    </span>

                    :

                    <strong>
                        ${position}
                    </strong>

                </div>

            </div>


            <!-- Email Validation -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">7</span>
                    Email Validation
                </div>

                <div class="result-value">

                    <div style="margin-bottom: 8px;">
                        Email:
                        <strong>
                            ${escapeHTML(email || "Not entered")}
                        </strong>
                    </div>

                    <span class="
                        validation
                        ${isValidEmail ? "valid" : "invalid"}
                    ">

                        ${isValidEmail ? "✓" : "✕"}

                        ${emailResult}

                    </span>

                </div>

            </div>


            <!-- Email Extraction -->
            <div class="result-box">

                <div class="result-label">
                    <span class="result-number">8</span>
                    Regex — Extracted Email
                </div>

                <div class="result-value">

                    ${
                        extractedEmails
                        ? extractedEmails
                            .map(email =>
                                `<span class="code-text">
                                    ${escapeHTML(email)}
                                </span>`
                            )
                            .join(", ")
                        : "No email found"
                    }

                </div>

            </div>


            <!-- Reverse -->
            <div class="result-box full">

                <div class="result-label">
                    <span class="result-number">9</span>
                    reverse() — Reversed Paragraph
                </div>

                <div class="result-value">
                    ${escapeHTML(reversedParagraph)}
                </div>

            </div>


        </div>
    `;
}


/* =========================================
   CLEAR FUNCTION
========================================= */

function clearData() {

    document.getElementById("paragraph").value = "";

    document.getElementById("email").value = "";

    document.getElementById("output").innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                ⌁
            </div>

            <h3>Ready to Analyze</h3>

            <p>
                Enter your text and email above, then click
                <strong>Process Text</strong>.
            </p>

        </div>
    `;
}


/* =========================================
   ERROR MESSAGE
========================================= */

function showError(message) {

    document.getElementById("output").innerHTML = `

        <div class="empty-state">

            <div
                class="empty-icon"
                style="
                    color:#dc2626;
                    background:rgba(220,38,38,0.10);
                "
            >
                !
            </div>

            <h3>Input Required</h3>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>
    `;
}


/* =========================================
   SECURITY HELPER
   Prevent HTML injection
========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}