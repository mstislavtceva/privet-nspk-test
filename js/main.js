const input = document.querySelector("#search");
const clearIcon = document.querySelector(".search__clear");

// Очистка инпута
clearIcon.addEventListener("click", function () {
  input.value = "";
  input.focus();
});

// Поиск банков по названию
input.addEventListener("input", function () {
  let query = this.value.toLowerCase();
  let banks = document.querySelectorAll(".banks__item");

  banks.forEach((bank) => {
    let bankName = bank.getAttribute("data-name").toLowerCase();
    if (bankName.includes(query)) {
      bank.style.display = "block";
    } else {
      bank.style.display = "none";
    }
  });
});
