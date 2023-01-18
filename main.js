const button = document.querySelector(".button");
const form = document.querySelector(".form");
const email = document.querySelector(".email");

button.addEventListener("click", (event) => {
  let x = 0;
  event.preventDefault();
  if (email.value.length < 1) {
    email.classList.add("empty-email");
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    email.classList.add("invalid-email");
  } else {
    form.submit();
  }
});

email.addEventListener("click", () => {
  email.classList.remove("invalid-email");
  email.classList.remove("empty-email");
});
