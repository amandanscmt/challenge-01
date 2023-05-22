// Disabled button when fields are unfilled

function disableBtn() {
  const userName = document.getElementById("username").value.trim();
  const fullName = userName.split(" ");
  const validUserName = fullName.length;
  const userEmail = document.getElementById("email").value.trim();
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  const userMessage = document.getElementById("message").value.trim();
  const validMessage = userMessage.length;
  const sendButton = document.getElementById("sendBtn");

  if (validUserName !== "" && validUserName >= 2 && validEmail !== "" && validMessage >= 20 && validMessage !== "") {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

// Error messages

function validateUserName() {
  const userName = document.getElementById("username").value.trim();
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
  const messageError = document.getElementById("messageError");
  
  if (userMessage.length >= 20) {
    messageError.style.display = "none";
    console.log('Valid message.')
  } else {
    messageError.style.display = "block";
    console.log('Enter at least 20 letters.');
  }
}

// localStorage

function submitForm(event) {
  event.preventDefault();

  const userName = document.getElementById("username").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  let userInterests;

  checkbox.forEach(function(checkbox) {
    if (checkbox.checked) {
      userInterests = (checkbox.value);
    }
  });

  const InterestForm = {
    "Name" : userName,
    "Email" : userEmail,
    "Message" : userMessage,
    "Interests" : userInterests
  };

  localStorage.setItem("New interest form", JSON.stringify(InterestForm));
  document.getElementById("userInfo").reset();
}
