// document.addEventListener('start', generateMaze);
let replay = document.querySelector(".replay");

document.getElementById("start").addEventListener("click", generateMaze);
document.addEventListener("keydown", move);
replay.addEventListener("click", () => {
    location.reload();
  });

function generateMaze(event) {
    event.preventDefault();
    
    newMaze = new Maze(80,80);
    newMaze.setup();
    newMaze.draw();
  }

  function move(event) {
       if (!mazeCompleted) return;
        let key = event.keyCode;
        let row = current.rowNum;
        let col = current.colNum;
        //console.log(key, row, col);
      
        switch (key) {
          case 38: //up
          console.log('up')
            if (!current.walls[0]) {
              let next = grid[index(col, row-1)];
              //console.log('next' + next)
              current = next;
              
              newMaze.draw();
              current.highlight();
              
              if (current.end) complete.style.display = "block";
            }
            break;
      
          case 39: //right
          console.log('right')
          
            if (!current.walls[1]) {
                let next = grid[index(col+1, row)]
                //console.log('next' + next)
              current = next;

              newMaze.draw();
              current.highlight();
             if (current.end) complete.style.display = "block";
            }
            break;
      
          case 40: //down
          console.log('down')
            if (!current.walls[2]) {
                let next = grid[index(col, row+1)];
                //console.log('next' + next)
              current = next;
              newMaze.draw();
              current.highlight();
              if (current.end) complete.style.display = "block";
            }
            break;
      
          case 37: //left
          console.log('left')
            if (!current.walls[3]) {
                let next = grid[index(col-1, row)];
                //console.log('next' + next)
              current = next;
              newMaze.draw();
              current.highlight();
              
              if (current.end) complete.style.display = "block";
            }
            break;
        }
      }
