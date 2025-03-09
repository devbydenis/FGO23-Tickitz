const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btnPassword = document.querySelector('.input-wrapper button')
const form = document.querySelector("form")

let i = 1

btnPassword.addEventListener('click', showPassword)
function showPassword() { 
  // console.log("klik bang")
  // console.log(i)
  if (i % 2 === 1) {
    passwordInput.type = "text"
    i++
    return
  }
  if (i % 2 === 0) {
    passwordInput.type = "password"
    i++
    return 
  }
}

const criteriaEmail = (email) => {
  const regexEmail = /(\w+)@gmail.co(m|\.id|\.us)/g
  return regexEmail.test(email)
}
const criteriaPassword = (password) => {
  const regexPassword = /^[\w]+[\d]+[\W]$/g
  return regexPassword.test(password)
}

const setError = (element, message) => {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector("small");

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector("small");

  errorDisplay.textContent = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateEmailField = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
      setError(emailInput, "Email tidak boleh kosong!");
      return false;
  } else if (!criteriaEmail(emailValue)) {
      setError(emailInput, "Masukkan email yang valid!");
      return false;
  } else {
      setSuccess(emailInput);
      return true;
  }
};

const validatePasswordField = () => {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
      setError(passwordInput, "Password tidak boleh kosong!");
      return false;
  } else if (passwordValue.length <= 8) {
      setError(passwordInput, "Password harus lebih dari 8 karakter");
      return false;
  } else if (!criteriaPassword(passwordValue)) {
      setError(passwordInput, "Pola password tidak sesuai!");
      return false;
  } else {
      setSuccess(passwordInput);
      return true;
  }
};

emailInput.addEventListener("input", validateEmailField);
passwordInput.addEventListener("input", () => validatePasswordField());

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const isEmailValid = validateEmailField();
  const isPasswordValid = validatePasswordField();
  const dataRegister = {
      email: emailInput.value,
      password: passwordInput.value,
  };

  if (isEmailValid && isPasswordValid) {
      // Jika validasi berhasil
      localStorage.setItem("user", JSON.stringify(dataRegister));
      location.href = "../login/login.html";
  } else {
      // Jika validasi gagal
      console.log("Validasi Gagal");
      showModal();
      throw new Error("Register failed! Make sure data is correct!");
  }
})

