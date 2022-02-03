/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeToDefault = () => {
  document.querySelector("body").classList = "";
};

const changeToDesert = () => {
  document.querySelector("body").classList = "desert";
};

const changeToOcean = () => {
  document.querySelector("body").classList = "ocean";
};

const changeToHighContrast = () => {
  document.querySelector("body").classList = "high-contrast";
};

document.getElementById("default").addEventListener("click", changeToDefault);
document.getElementById("desert").addEventListener("click", changeToDesert);
document.getElementById("ocean").addEventListener("click", changeToOcean);
document
  .getElementById("high-contrast")
  .addEventListener("click", changeToHighContrast);
