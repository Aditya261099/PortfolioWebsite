const form = document.querySelector("form");

sendEmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shashidhar.pothukuchi@gmail.com",
    Password: "F3791E05A0EBFBD9C6FD04FCCD6C7E03FD96",
    To: "shashidhar.pothukuchi@gmail.com",
    From: "shashidhar.pothukuchi@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
