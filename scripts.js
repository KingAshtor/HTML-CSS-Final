//simplifies getElementById (got tired of typeing it)
function getEleId(input) {
  return document.getElementById(input);
}

//simplifies getElementsByTagName (got tired of typeing it)
function getEleTag(input) {
  return document.getElementsByTagName(input);
}

//simplifies getElementsByTagName (got tired of typeing it)
function getEleName(input) {
  return document.getElementsByName(input);
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
function formCheck() {
  let errs = [];
  let radio = getEleId("bicycle");
  let radio1 = getEleId("bicycle1");
  let fName = getEleId("fName").value;
  let lName = getEleId("lName").value;
  let email = getEleId("email").value;

  if (fName == "") {
    errs.push("Please enter your First Name")
  }

  if (lName == "") {
    errs.push("Please enter your Last Name")
  }

  if (email == "") {
    errs.push("Please enter your email")
  }

  if (checkBoxRoundUp() < 1) {
    errs.push("Please Select at least one check Box");
  }

  if (radio.checked || radio1.checked) {} else {
    errs.push("Please select wether you will rent a bike or bring your own.");
  }

  if (errs.length != 0) {
    formErr(errs);
  } else {
    document.getElementById("regiForm").submit();
  }
}

function formErr(errs) {
  let errorList = errs;
  getEleId("regiOutput").innerHTML = ""
  for (var i = 0; i < errorList.length; i++) {
    getEleId("regiOutput").innerHTML += errorList[i] + "<br>";
  }
}

function checkBoxRoundUp() {
  let usTour = getEleName("usTour[]");
  let europeTour = getEleName("europeTour[]");
  let tourCounter = 0;

  for (var i = 0; i < usTour.length; i++) {
    if (usTour[i].checked) {
      tourCounter++
    }
  }

  for (var i = 0; i < europeTour.length; i++) {
    if (europeTour[i].checked) {
      tourCounter++
    }
  }

  return tourCounter
}
