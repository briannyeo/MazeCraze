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
document.addEventListener("keydown", startStop, {once:true});


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

  newMaze = new Maze(80, 80);
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

        if (current.end) {
          complete.style.display = "block";
          startStop();
        }
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
        if (current.end) {
          complete.style.display = "block";
          startStop();
        }
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
        if (current.end) {
          complete.style.display = "block";
          startStop();
        }
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

        if (current.end) {
          complete.style.display = "block";
          startStop();
        }
      }
      break;
  }
}
//Timer
  
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        // if(minutes / 60 === 1){
        //     minutes = 0;
        //     hours++;
        // }

    }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    // if(hours < 10){
    //     displayHours = "0" + hours.toString();
    // }
    // else{
    //     displayHours = hours;
    // }

    //Display updated time values to user
    document.getElementById("display").innerHTML =  displayMinutes + ":" + displaySeconds;

}

function startStop(){
  if (!mazeCompleted) return;
    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        status = "started";

    }
    else{

        window.clearInterval(interval);
        status = "stopped";

    }

}



