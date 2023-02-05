const inputs = document.querySelectorAll("input");
inputs.forEach((input) => input.addEventListener("keyup", (e) => {
  validate(e.target, patterns[e.target.name])
}))

const patterns = {
  user_name: /^\w{3,}$/,
  user_email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  user_number: /^([\d]{3})-([\d]{6})-([\d]{2})$/,
  user_password: /^[\w@-]{8,20}$/,
}

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}