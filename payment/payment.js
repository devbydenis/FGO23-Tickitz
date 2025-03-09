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

payYourOrder.addEventListener("click", () => {
  paymentModal.style.display = "block";
  inputPersonalInfo.style.position = "relative";
  inputPersonalInfo.style.zIndex = "-999";
  listPaymentMethod.style.zIndex = "-999";
  main.style.backgroundColor = "#121212";
  paymentMain.style.backgroundColor = "#121212";
  // inputAll.style.zIndex = '-111'
  // liAll.style.zIndex = '-111'
});
