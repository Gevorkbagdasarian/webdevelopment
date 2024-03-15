
    function validateForm() {
        const form = document.getElementById("myForm");
        const firstName = form.elements["firstName"].value;
        const lastName = form.elements["lastName"].value;
        const birthdate = form.elements["birthdate"].value;
        const email = form.elements["email"].value;
        const children = form.elements["children"].value;


        validateField(lastName, "lastNameError", "verplicht veld", 50);
        validateField(birthdate, "birthdateError", "formaat is niet jjjj-mm-dd", null, /^\d{4}-\d{2}-\d{2}$/);
        validateField(email, "emailError", "geen geldig email adres", null, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);


        if (!document.querySelector(".error-message").textContent) {
            alert("Proficiat!");
        }
    }

    function validateField(value, errorId, errorMessage, maxLength, pattern, additionalErrorMessage, min, max) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = "";

        if (value.trim() === "") {
            errorElement.textContent = "Verplicht veld";
        } else if (maxLength && value.length > maxLength) {
            errorElement.textContent = errorMessage;
        } else if (pattern && !pattern.test(value)) {
            errorElement.textContent = errorMessage;
        } else if (additionalErrorMessage && (min || max)) {
            if (min && parseInt(value) < min) {
                errorElement.textContent = errorMessage;
            } else if (max && parseInt(value) > max) {
                errorElement.textContent = errorMessage;
            }
        }
    }

window.addEventListener("load", setup);