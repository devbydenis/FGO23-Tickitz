const wrapper = document.querySelector(".payment-method ul");

wrapper.addEventListener("click", () => {
  const li = wrapper.querySelectorAll("li");
  li.forEach((element) => {
    const input = element.querySelector("input");
    // console.log(input);
    if (input.checked) {
      input.parentElement.style.border = "1px solid blue";
      return;
    }
    input.parentElement.style.border = "none";
  });
});
