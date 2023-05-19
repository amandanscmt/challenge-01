// Disabled button when fields are unfilled

function disableBtn() {
  const userName = document.getElementById("name").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const userMessage = document.getElementById("message").value.trim();
  const sendButton = document.getElementById("sendBtn");

  if (userName !== "" && userEmail !== "" && userMessage !== "") {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

// Form validations

function validateUserName() {
  const userName = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  const fullName = userName.split(" ");
  const validUserName = fullName.length;

  if (validUserName >= 2) {
    nameError.style.display = "none";
    console.log('Username is valid.')
  } else {
    nameError.style.display = "block";
    console.log('Enter at least two names.')
  }
}

function validateUserEmail() {
  const userEmail = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
    emailError.style.display = "none";
    console.log('Valid email.')
  } else {
    emailError.style.display = "block";
    console.log('Invalid email.');
  }
}

function validateMessage() {
  const userMessage = document.getElementById("message").value.trim();
  const messageError = document.getElementById("messageError")
  if (userMessage.length >= 20) {
    messageError.style.display = "none";
    console.log('Valid message.')
  } else {
    messageError.style.display = "block";
    console.log('Enter at least 20 characters.');
  }
}