//REFACTORING
document.addEventListener("DOMContentLoaded", function () {
  const allOptionsLi = document.querySelectorAll("li");

  allOptionsLi.forEach((option) => {
    option.addEventListener("click", function () {
      allOptionsLi.forEach((opt) => opt.classList.remove("red"));
      this.classList.add("red");
    });
  });
});
