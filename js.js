const gridContainer = document.querySelector(".grid");





function createGridElement(){
  const gridElement = document.createElement("div");
  gridElement.classList.add("gridElement")
  return gridElement;
}

function createGrid(size){
  for (let i = 0; i < size; i++){
    const row = createGridElement();
    row.classList.add("row");
    gridContainer.appendChild(row);
    for(let j = 0; j < size; j++){
      const col = createGridElement();
      row.appendChild(col);
    }
  }
}

function getRandomColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function startExecution(){
  const btn = document.querySelector(".button");
  btn.addEventListener("click", () => {
    const input = parseInt(prompt("Choose a number between 1 and 100:"));
    if(input > 0 && input <= 100){
      createGrid(input);
      const gridElements = document.querySelectorAll(".gridElement");

      gridElements.forEach(div => {
        div.addEventListener("mouseover", e => {
        let target = e.target;
        target.style.backgroundColor = "#" + getRandomColor();
    
  })
})

    }
    console.log(input);
  })
  
}

startExecution();


const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.lastChild);
  }
})