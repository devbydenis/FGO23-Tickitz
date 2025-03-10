const wrapper = document.querySelector(".payment-method ul");

wrapper.addEventListener("click", () => {
  const li = wrapper.querySelectorAll("li");
  li.forEach((element) => {
    const input = element.querySelector("input");
    // console.log(input);
    if (input.checked) {
      input.parentElement.style.border = "2px solid blue";
      return;
    }
    input.parentElement.style.border = "none";
    input.parentElement.style.border = "2px solid var(--lightgrey)";
  });
});

const payYourOrder = document.querySelector(".pay-order-btn");
const inputPersonalInfo = document.querySelector(".personal-info div input");
const listPaymentMethod = document.querySelector(".payment-method ul li");
const paymentModal = document.querySelector(".payment-modal");
const paymentMain = document.querySelector(".payment-main");
const main = document.querySelector("main");
const inputAll = document.querySelector("input");
const liAll = document.querySelector("li");
const btnPayLater = document.querySelector(".btn-pay-later")

payYourOrder.addEventListener("click", () => {
  paymentModal.style.display = "block";
  paymentMain.style.position = "relative"
  paymentMain.style.zIndex = "-1"
  main.style.backgroundColor = "#121212cd";
  paymentMain.style.backgroundColor = "#121212cd";
});

btnPayLater.addEventListener('click', () => {
  paymentModal.style.display = "none";
  paymentMain.style.zIndex = "1"
  main.style.backgroundColor = "#A0A3BD33";
  paymentMain.style.backgroundColor = "var(--white)";
})