document.addEventListener("DOMContentLoaded", function () {
  const restDateInput = document.getElementById("restDate");
  const chooseDateInput = document.getElementById("chooseDate");

  chooseDateInput.addEventListener("change", function () {
      const restDateValue = new Date(restDateInput.value);
      const chooseDateValue = new Date(chooseDateInput.value);

      if (chooseDateValue < restDateValue) {
          alert("Неможливо виконати дію за цю дату.");
      } else {
          alert("На цю дату дія можлива.");
      }
  });
});