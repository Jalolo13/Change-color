const btn = document.querySelector(".btn");
const block = document.querySelectorAll(".block");

btn.addEventListener("click", () => {
  block.forEach((el) => {
    el.style =
      "background: " +
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  });
});
