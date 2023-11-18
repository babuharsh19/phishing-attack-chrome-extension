document.addEventListener('DOMContentLoaded', function() {
    var loginForms = document.querySelectorAll('form[action*="/login"]');
    for (var i = 0; i < loginForms.length; i++) {
      var form = loginForms[i];
      var usernameInput = form.querySelector('input[type="email"]');
      var passwordInput = form.querySelector('input[type="password"]');
  
      if (usernameInput) {
        usernameInput.value = "garbage";
      }
  
      if (passwordInput) {
        passwordInput.value = "garbage";
      }
  
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("This form is likely a phishing attempt. Please do not submit your personal information.");
      });
    }
  });
  