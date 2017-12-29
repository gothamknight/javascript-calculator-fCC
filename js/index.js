let displayStr = "",
    solution,
    hasEqualsBeenClicked = false;

window.onload = function() {
  $(".ope").on("click", opeClick);
  $(".num").on("click", numClick);
  $("#dec").on("click", decClick);
  $("#clear").on("click", clearClick);
  $("#equals").on("click", equalsClick);
}; // window.onload

function opeClick(e) {
  if (hasEqualsBeenClicked && displayStr !== "") {
    displayStr += $(e.target).text();
  } 
  else {
    if ($(e.target).text() == "-" && displayStr[displayStr.length - 1] !== "-" && displayStr[displayStr.length - 1] !== ".") {
      displayStr += $(e.target).text();
    } 
    else if (displayStr == "" ||displayStr[displayStr.length - 1].match(/[x+./-]/) !== null){
      displayStr = displayStr;
    } 
    else if ($(e.target).text() !== "-") {
      displayStr += $(e.target).text();
    }
  }//else
  hasEqualsBeenClicked = false;
  $("#input").text(displayStr.replace(/[*]/g, "x"));
}

function numClick(e) {
  hasEqualsBeenClicked ? displayStr = $(e.target).text() : (displayStr += $(e.target).text());
  hasEqualsBeenClicked = false;
  $("#input").text(displayStr.replace(/[*]/g, "x"));
}

function decClick(e) {
    let x = displayStr.substring(displayStr.lastIndexOf(".") + 1);

  if (displayStr == "" ||displayStr[displayStr.length - 1].match(/[x+/-]/) !== null || hasEqualsBeenClicked) {
    displayStr += "0.";
    hasEqualsBeenClicked = false;
  } 
  else if (displayStr[displayStr.length - 1] !== "." && x.search(/[x+/-]/) > -1 ||displayStr.indexOf(".") == -1){
    displayStr += ".";
  }
  $("#input").text(displayStr);
}

function clearClick(e) {
  $("#input, #output").text("");
  displayStr = "";
  solution = null;
}

function equalsClick(e) {
  if (displayStr.match(/[^0-9x+./-]/) == null) {
    solution = eval(displayStr.replace(/x/g, "*"));
    $("#input").text(displayStr);
    $("#output").text(solution.toString().substring(0, 17));
    displayStr = solution;
    hasEqualsBeenClicked = true;
  } //if
}