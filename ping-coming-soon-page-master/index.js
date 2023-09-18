

/*const submit = document.getElementById("notif");

notif.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const emailField = document.getElementById("user-email");
  let valid = true;

  if (!emailField.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute('aria-hidden', false);
    emailError.setAttribute('aria-invalid', true);

  }


  return valid;
}*/
// next code starts here

$(document).ready(function() {

    $("#form-1").validate({
        errorClass: "error fail-alert",validClass: "valid success-alert",

    });
    
    });
    



