let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

  //Input Checks :

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please Enter a valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Enter a valid weight!";
  } else {
    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);
    // results.innerHTML = bmi;;

    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi}. You fall in Under Weight Category!`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi}. You fall in Normal Category!`;
    } else {
      results.innerHTML = `Your BMI is ${bmi}. You fall in Overweight Category!`;
    }
  }
});
