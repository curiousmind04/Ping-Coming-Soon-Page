const button = document.querySelector(".button");
const form = document.querySelector(".form");
const email = document.querySelector(".email-input");

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (!email.value.includes("@") || !email.value.includes(".")) {
    email.classList.add("invalid");
  } else {
    form.submit();
  }
});

email.addEventListener("click", () => {
  email.classList.remove("invalid");
});
