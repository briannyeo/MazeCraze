// document.addEventListener('start', generateMaze);
const replay = document.querySelector(".replay");
const complete = document.querySelector('.complete');
const instructions = document.querySelector('.instructions');
const instructionsbtn = document.querySelector('.instructionsbtn');
const overlay = document.querySelector('.overlay')

document.getElementById("easy").addEventListener("click", generateEasyMaze);
document.getElementById("normal").addEventListener("click", generateNormalMaze);
document.getElementById("hard").addEventListener("click", generateHardMaze);
document.getElementById("insane").addEventListener("click", generateInsaneMaze);
document.addEventListener("keydown", move);
document.addEventListener('keydown', timeStart);


replay.addEventListener("click", () => {
  location.reload();
});



//Overlay and Instructions
document.getElementById('instructionsbtn').addEventListener("click", addActive)

document.getElementById("close-button").addEventListener("click", removeActive)

function addActive(e) {
  e.preventDefault();
  instructions.classList.add("active");
  overlay.classList.add("active");
}

function removeActive(e) {
  e.preventDefault();
  instructions.classList.remove("active");
  overlay.classList.remove("active");
}


//generate maze based on difficulty level
function generateEasyMaze(event) {

  event.preventDefault();

  newMaze = new Maze(400, 400);
  newMaze.setup();
  newMaze.draw();
}

function generateNormalMaze(event) {
  event.preventDefault();

  newMaze = new Maze(800, 800);
  newMaze.setup();
  newMaze.draw();
}

function generateHardMaze(event) {
  event.preventDefault();

  newMaze = new Maze(1200, 800);
  newMaze.setup();
  newMaze.draw();
}

function generateInsaneMaze(event) {
  event.preventDefault();

  newMaze = new Maze(1400, 900);
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
        let next = grid[index(col, row - 1)];
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
        let next = grid[index(col + 1, row)]
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
        let next = grid[index(col, row + 1)];
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
        let next = grid[index(col - 1, row)];
        //console.log('next' + next)
        current = next;
        newMaze.draw();
        current.highlight();

        if (current.end) complete.style.display = "block";
      }
      break;
  }
}
//Timer
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

function timeStart() {
  if (!mazeCompleted) return;
  setInterval(setTime, 1000)
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  }
  else {
    return valString;
  }
}

