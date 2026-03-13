
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Gamer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Email JS

function sendEmail() {

    let params = {
        from_name: document.getElementById("Name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value}
    };

    // Loading popup
   function sendEmail() {

    let name = document.getElementById("Name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check empty fields
    if(name === "" || email === "" || message === ""){

        Swal.fire({
            title: "Missing Information!",
            text: "Please fill in all fields before sending.",
            icon: "warning"
        });

        return;
    }

    let params = {
        from_name: name,
        email_id: email,
        message: message
    };

    // Loading animation
    Swal.fire({
        title: "Sending...",
        text: "Please wait while your message is being sent.",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    emailjs.send("service_mu5u49j", "template_8vdeo1c", params)
    .then(function(response) {

        Swal.fire({
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        });

        // Clear form
        document.getElementById("Name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    }, function(error) {

        Swal.fire({
            title: "Error!",
            text: "Failed to send email. Please try again.",
            icon: "error"
        });

        console.log(error);

    });

}