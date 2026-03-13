
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
        message: document.getElementById("message").value
    };

    emailjs.send("service_mu5u49j", "template_8vdeo1c", params)
    .then(function(response) {

        alert("Email sent successfully!");

    }, function(error) {

        alert("Failed to send email!");
        console.log(error);

    });

}