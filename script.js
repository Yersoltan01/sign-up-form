let submit = document.querySelector('#join');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

submit.addEventListener('click', function(event) {
    console.log(passwordConfirm.value)
  if (password.value != passwordConfirm.value) {
    alert("Passwords should match");
    returnToPreviousPage();
    return false;
  }
});