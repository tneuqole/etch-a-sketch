// event functions

function colMouseOver(e) {
  e.target.style.backgroundColor = "red";
}

// util functions
function generateGrid(rows, cols) {
  const grid = document.querySelector("#grid");
  grid.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    grid.appendChild(row);
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      col.setAttribute("id", i.toString() + j.toString());
      col.onmouseover = colMouseOver;

      row.appendChild(col);
    }
  }

  document.querySelectorAll(".col").forEach((e) => {
    e.style.height = (1000 / rows).toString() + "px";
    e.style.width = (1000 / cols).toString() + "px";
  });
}

function validateInput(x) {
  x = parseInt(x);
  if (!x) {
    return false;
  } else if (x < 1 || x > 100) {
    return false;
  }
  return true;
}

// main code
generateGrid(4, 4);

const gridButton = document.querySelector("#grid-button");
gridButton.onclick = (e) => {
  rows = prompt("Input row count", 4);
  cols = prompt("Input column count", 4);
  if (!validateInput(rows) || !validateInput(cols)) {
    alert("Invalid input! Enter numbers between 1 and 100.");
    return;
  }
  generateGrid(rows, cols);
};
