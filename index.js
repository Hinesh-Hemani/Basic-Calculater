// this function will clear the typed numbers in caculator

function forclear() {
  document.getElementById("output").innerHTML = 0;
}

// removezero this func will remove the zero from default value

function removezero() {
  var text = document.getElementById("output").innerHTML;
  if (text === "0") {
    text = "";
    document.getElementById("output").innerHTML = text;
  }
}

//  %  ===> this will calculate the percentage of added values
function perc() {
  var value = document.getElementById("output").innerHTML;
  value = value / 100;
  document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
  removezero();
  document.getElementById("output").innerHTML += value;
}

function solve() {
  removezero();
  var equation = document.getElementById("output").innerHTML;
  var solved =  (equation);
  document.getElementById("output").innerHTML = solved;
}
