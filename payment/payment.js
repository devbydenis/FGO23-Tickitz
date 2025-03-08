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


const payYourOrder = document.querySelector(".pay-order-btn")
const inputPersonalInfo = document.querySelector(".personal-info div input")
const listPaymentMethod= document.querySelector(".payment-method ul li")
const main = document.querySelector(".payment-main")
payYourOrder.addEventListener('click', () => {
  inputPersonalInfo.style.zIndex = '-1'
  inputPersonalInfo.style.position = 'relative'
  listPaymentMethod.style.zIndex = '-1'

})