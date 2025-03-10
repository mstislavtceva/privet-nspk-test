let input = document.getElementById("search");
let clearIcon = document.getElementById("search-clear");

// Очистка инпута
clearIcon.addEventListener("click", function () {
  input.value = "";
  input.dispatchEvent(new Event("input"));
  input.focus();
});

// Поиск банков по названию
input.addEventListener("input", function () {
  let query = this.value.toLowerCase();
  let banks = document.querySelectorAll(".banks__item");

  banks.forEach((bank) => {
    let bankName = bank.getAttribute("data-name").toLowerCase();
    if (query === "" || bankName.includes(query)) {
      bank.style.display = "block";
    } else {
      bank.style.display = "none";
    }
  });
});
