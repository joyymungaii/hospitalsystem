const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "joywanjirum4@gmail.com",
        Password : "6F2634B7975F5C1EF5AA91F42CBF6B13DE72",
        To : 'joywanjirum4@gmail.com',
        From : "joywanjirum4@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            
        }
      }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});

