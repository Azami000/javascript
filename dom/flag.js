const numbers = document.querySelector("#number");
const flags = document.querySelector("#flag");
const redNums = document.querySelector("#redNum");
const blueNums = document.querySelector("#blueNum");

const redFlags = document.querySelector("#redFlag");
const blueFlags = document.querySelector("#blueFlag");
const modalContainer = document.querySelector("#modalContainer");
const layer = document.querySelector("#layer");
const modal = document.querySelector("#modal");

console.log(redNums, blueNums);

redFlags.addEventListener("click", () => {
  const newValue = parseInt(redNums.innerText) + 1;
  redNums.innerText = newValue;
  blueNums.innerText = 100 - newValue;

  redFlags.style.width = `${newValue}%`;
  blueFlags.style.width = `${redFlags.innerText}%`;
});

blueFlags.addEventListener("click", () => {
  const newValue = parseInt(blueNums.innerText) + 1;
  blueNums.innerText = newValue;
  redNums.innerText = 100 - newValue;

  blueFlags.style.width = `${newValue}%`;
  redFlags.style.width = `${blueFlags.innerText}%`;
});
