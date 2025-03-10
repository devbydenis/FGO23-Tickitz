const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btnShowPassword = document.querySelector("#show-password");
const imgPassword = btnShowPassword.querySelector("img");
const form = document.querySelector("form");

// show password
btnShowPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    imgPassword.src = "../assets/show-password.svg";
  } else {
    passwordInput.type = "password";
    imgPassword.src = "../assets/show-password-dashed.svg";
  }
});

function showModal() {
  const modal = document.getElementById("myModal");
  const cancel = document.querySelector(".cancel");

  modal.style.display = "block";

  cancel.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

const criteriaEmail = (email) => {
  const regexEmail = /(\w+)@gmail.co(m|\.id|\.us)/g;
  return regexEmail.test(email);
};
const criteriaPassword = (password) => {
  const regexPassword = /^[\w]+[\d]+[\W]$/g; //denis123.
  return regexPassword.test(password);
};

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

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
    showModal();
    console.log("Validasi Gagal");
    throw new Error("Register failed! Make sure data is correct!");
  }
});

// ///////////////////////////////////////////////////////////////////////////////
