document.addEventListener("DOMContentLoaded", function () {
  const allOptionsLi = document.querySelectorAll("li");
  const btnSubmit = document.querySelector(".btn")

  allOptionsLi.forEach((option) => {
    option.addEventListener("click", function () {
      allOptionsLi.forEach((opt) => opt.classList.remove("red"));
      this.classList.add("red");
    });
  });

  btnSubmit.addEventListener("click", function () {
    allOptionsLi.forEach((opt) => {
      if(opt.classList.contains('red')){
        console.log(opt)
      }
    })
  })
});


