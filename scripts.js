//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}



//code for the calorie calculator
function calCalc() {
  let weight = getEleId("weight").value;
  let time = getEleId("time").value;
  let met = metCalc(getEleId("style").value);

  let calPerMin = (met * weight * 3.5) / 200;
  let out = calPerMin * time;

  if (out == 0) {
    getEleId("calcOut").innerHTML = "Please complete required forms";
  } else {
    getEleId("calcOut").innerHTML = "You have burned " + out + " calories";
  }
}

function metCalc(input) {
  let out;

  if (getEleId("mountainBiking").checked) {
    out = 8.5;
  } else {
    if (input <= 0) {
      out = 0;
    } else if (input < 10) {
      out = 4;
    } else if (input < 12) {
      out = 6.8;
    } else if (input < 14) {
      out = 8;
    } else if (input < 16) {
      out = 10;
    } else {
      out = 12;
    }
  }
  return out;
}



//code for the form
