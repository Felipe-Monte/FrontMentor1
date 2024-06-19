//refactored
document.addEventListener("DOMContentLoaded", function () {
  const allOptionsLi = document.querySelectorAll("li");
  const secondCard = document.querySelector(".container-second-card");
  const numberVoted = document.querySelector(".result");
  const btnSubmit = document.querySelector(".btn");
  const btnBack = document.querySelector(".btn-second");

  allOptionsLi.forEach((option) => {
    option.addEventListener("click", function () {
      allOptionsLi.forEach((opt) => opt.classList.remove("clicked"));
      this.classList.add("clicked");
    });
  });

  btnSubmit.addEventListener("click", function () {
    let isVoted = false;

    allOptionsLi.forEach((opt) => {
      if (opt.classList.contains("clicked")) {
        numberVoted.textContent = opt.value;
        secondCard.style.display = "block";
        isVoted = true;
      }
    });

    if (!isVoted) {
      alert("Por favor deixe seu voto!");
    }
  });

  btnBack.addEventListener("click", function () {
    allOptionsLi.forEach((opt) => opt.classList.remove("clicked"));
    secondCard.style.display = "none";
  });
});
