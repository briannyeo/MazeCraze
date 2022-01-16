// document.addEventListener('start', generateMaze);
let replay = document.querySelector(".replay");
let complete=document.querySelector('.complete');
let instructions=document.querySelector('.instructionstext');

//let easy = document.getElementById('#easy');
document.getElementById("easy").addEventListener("click", generateEasyMaze);

//let normal = document.getElementById('#normal');
document.getElementById("normal").addEventListener("click", generateNormalMaze);

//let hard = document.getElementById('#hard');
document.getElementById("hard").addEventListener("click", generateHardMaze);

//let insane = document.getElementById('#insane');
document.getElementById("insane").addEventListener("click", generateInsaneMaze);

document.addEventListener("keydown", move);

replay.addEventListener("click", () => {
    location.reload();
  });

document.getElementById('instructions').addEventListener('click', instructions.style.display = 'block')

function generateEasyMaze(event) {
  
    event.preventDefault();
    
    newMaze = new Maze(400,400);
    newMaze.setup();
    newMaze.draw();
  }

  function generateNormalMaze(event) {
    event.preventDefault();
    
    newMaze = new Maze(800,800);
    newMaze.setup();
    newMaze.draw();
  }

  function generateHardMaze(event) {
    event.preventDefault();
    
    newMaze = new Maze(1200,1200);
    newMaze.setup();
    newMaze.draw();
  }

  function generateInsaneMaze(event) {
    event.preventDefault();
    
    newMaze = new Maze(1600,1600);
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
