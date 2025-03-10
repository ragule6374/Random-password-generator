let leng = document.getElementById("length");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let result = document.getElementById("result");
let stre = document.getElementById("strength");

function generate() {
    const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschar = "0123456789";
    const symbolschar = "!@#$%^&*()_+-=";
    let pass = "";
    let includecha = "";
    let strength = 0; // Initialize strength properly

    // Check which character sets to include
    if (lowercase.checked) {
        includecha += lowercasechar;
        strength++; // Increase strength for each selected set
    }

    if (uppercase.checked) {
        includecha += uppercasechar;
        strength++;
    }

    if (numbers.checked) {
        includecha += numberschar;
        strength++;
    }

    if (symbols.checked) {
        includecha += symbolschar;
        strength++;
    }

    // Password strength message
    if (strength == 1) {
        stre.textContent = "Your password is too weak";
    } else if (strength == 2) {
        stre.textContent = "Your password is 33% strong";
    } else if (strength == 3) {
        stre.textContent = "Your password is 66% strong";
    } else if (strength >= 4) {
        stre.textContent = "Your password is 100% strong";
    }

    // Validate length input
    const passLength = Number(leng.value);
    if (passLength <= 0) {
        result.textContent = "Please enter a number greater than 0";
        return;  // Exit the function if the length is invalid
    }

    // Validate at least one character type is selected
    if (includecha.length === 0) {
        result.textContent = "Please select at least one character type";
        return;  // Exit the function if no character set is selected
    }

    // Generate the password
    for (let i = 0; i < passLength; i++) {
        const random = Math.floor(Math.random() * includecha.length);
        pass += includecha[random];
    }

    // Display the result
    result.textContent = pass;
}
