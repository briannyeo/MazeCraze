

//document.addEventListener(start, generateMaze);
document.addEventListener("keydown", move);


function move(event) {
    if (!mazeCompleted) return;
    let key = event.keyCode;
    let row = current.rowNum;
    let col = current.colNum;
  
    switch (key) {
      case "38": //up
        if (!current.walls[0]) {
          let next = newMaze.grid[index(col, row-1)];
          current = next;
          newMaze.draw();
          current.highlight();
          
          //if (current.end) complete.style.display = "block";
        }
        break;
  
      case "39": //right
        if (!current.walls[1]) {
            let next = newMaze.grid[index(col + 1, row)];
          current = next;
          newMaze.draw();
          current.highlight();
         // if (current.end) complete.style.display = "block";
        }
        break;
  
      case "40": //down
        if (!current.walls[2]) {
            let next = newMaze.grid[index(col, row+1)];
          current = next;
          newMaze.draw();
          current.highlight();
          //if (current.end) complete.style.display = "block";
        }
        break;
  
      case "37": //left
        if (!current.walls[3]) {
            let next = newMaze.grid[index(col-1, row)];
          current = next;
          newMaze.draw();
          current.highlight();
          
          //if (current.end) complete.style.display = "block";
        }
        break;
    }
  }
  

