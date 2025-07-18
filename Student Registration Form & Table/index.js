let serialNumber = 1; // Start Sr No from 1

function register(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values
    const firstName = document.getElementById("first_name").value.trim();
    const secondName = document.getElementById("second_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const year = document.getElementById("Year").value;
    const course = document.getElementById("Course").value;

    if (password1 != password2) {
        alert("Passwords do not match!");
        return;
    }

    const fullName = firstName + " " + secondName;

    // Build the row as a string
    const row = "<tr><td>" + serialNumber++ + "</td><td>" + fullName + "</td><td>" + email + "</td><td>" + year + "</td><td>" + course + "</td></tr>";

    // Append to the table
    document.querySelector("#list tbody").innerHTML += row;

    alert("Student details registered successfully!");
    
    // Clear the form
    document.querySelector("form").reset();
}


