const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve values from input fields
    const email = document.getElementById('InputEmail').value;
    const inputName = document.getElementById('InputName');
    const password = document.getElementById('InputPassword').value;

    if (!inputName.checkValidity()) {
        // If the input is invalid, prevent form submission
        alert("Please enter a valid name containing only letters and up to 20 characters.");
        return; // Exit the function early if validation fails
    }

    // Construct the URL with the name parameter
    var loginUrl = "login.html?name=" + encodeURIComponent(inputName.value);

    // Redirect the user to the login page with the name parameter
    window.location.href = loginUrl;
});