const containerElement = document.querySelector(".container");
console.log(containerElement);

for (let index = 0; index < 30; index++) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll(".color-container");
console.log(colorContainerElements);

generateColors();
function generateColors() {
  colorContainerElements.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    // console.log(newColorCode);
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerText = "#" + newColorCode;
  });
}

randomColor();
function randomColor() {
  const chars = "012345678abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.trunc(Math.random() * chars.length);
    // console.log(randomNum);

    colorCode += chars.substring(randomNum, randomNum + 1);
    // The substring() method returns the part of the string from the start index up to and excluding the end index
    // example :
    // const str = 'Mozilla';

    // console.log(str.substring(1, 3));

    // console.log(colorCode, randomNum, randomNum + 1);
  }
  return colorCode;
}
