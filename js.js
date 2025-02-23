const gridContainer = document.querySelector(".grid");
const input = parseInt(prompt("Choose a number between 1 and 100:"));



function createGridElement(){
  const gridElement = document.createElement("div");
  gridElement.classList.add("gridElement")
  return gridElement;
}

function createGrid(){
  for (let i = 0; i < input; i++){
    const row = createGridElement();
    row.classList.add("row");
    gridContainer.appendChild(row);
    for(let j = 0; j < input; j++){
      const col = createGridElement();
      row.appendChild(col);
    }
  }
}

function getRandomColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

createGrid();

const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach(div => {
  div.addEventListener("mouseover", e => {
    let target = e.target;
    target.style.backgroundColor = "#" + getRandomColor();
    
  })
})