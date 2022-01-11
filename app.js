let maze = document.querySelector('.maze'); //!!!console is unable to read '.maze' and is returning null. 
let ctx = maze.getContext("2d");
console.log(maze);

let cols; //global variable cols 
let rows; //global variable rows

let w = 40;
let grid = []; 
 
const setup = () => {
maze.width = 400;
maze.height = 400; 
cols = floor(maze.width/w)
rows = floor(maze.height/w)
    
for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
             const cell = new Cell (x, y);
             grid.push(cell)
        }
    }
}

const draw = () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

class Cell {
    constructor (colNum, rowNum) {
        this.colNum = colNum;
        this.rowNum = rowNum;
        this.walls = [true, true, true, true];

        this.show = () => {
            let x = this.colNum*w; //x-coordinate is at the colNum scaled by width of each cell
            let y = this.rowNum*w;
            
            // ctx.beginPath();
            // ctx.rect(x, y, w, w);
            // ctx.stroke();
            if (walls[0]) {
            ctx.beginPath(); //draw top line
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.stroke();
            }

            if (walls[1]) {
            ctx.beginPath(); //draw right line
            ctx.moveTo(x + w, y);
            ctx.lineTo(x + w, y + w);
            ctx.stroke();
            };
            
            if (walls[2]) {
            ctx.beginPath(); //draw bottom line
            ctx.moveTo(x + w, y+w);
            ctx.lineTo(x, y + w);
            ctx.stroke();
            }
            
            if (walls[3]) {
            ctx.beginPath(); //draw left line
            ctx.moveTo(x, y + w);
            ctx.lineTo(x, y);
            ctx.stroke();
            }

            }
    }
    
}