



function redirectToLogin() {
       // Retrieve values from input fields
    const email = document.getElementById('InputEmail').value;
    const inputName = document.getElementById('InputName').value;
    const password = document.getElementById('InputPassword').value;
console.log(email);
console.log(password);
console.log(inputName);
        
        // Construct the URL with the name parameter
        var loginUrl = "login.html?name=" + encodeURIComponent(inputName);
 
        // Redirect the user to the login page with the name parameter
        window.location.href = loginUrl;
    }
    