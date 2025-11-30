let form = document.getElementById("feedbackForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(e) {

    e.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    message.innerHTML = "Thank you! Your feedback has been received.";

    form.reset(); 
});
