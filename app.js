let maze = document.querySelector('.maze'); 
let ctx = maze.getContext("2d");


let cols; //global variable cols 
let rows; //global variable rows

let w = 40;
let grid = [];
let current;  

const setup = () => {
    maze.width = 400;
    maze.height = 400;
    cols = Math.floor(maze.width / w)
    rows = Math.floor(maze.height / w)

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            const cell = new Cell(x, y);
            grid.push(cell)
        }
    }
    current = grid[0];
}

const draw = () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited = true; 
    current.show(); //if cell has been visited, change the color
    current.checkNeighbors();
    
} 

class Cell {
    constructor(colNum, rowNum) {
        this.colNum = colNum;
        this.rowNum = rowNum;
        this.walls = [true, true, true, true];
        this.visited = false; //this keeps track of whether cells have been visited.

       
    }
        show() {
            let x = this.colNum * w; //x-coordinate is at the colNum scaled by width of each cell
            let y = this.rowNum * w;
            console.log(x)
            // ctx.beginPath();
            // ctx.rect(x, y, w, w);
            // ctx.stroke();

            if (this.walls[0]) {
                ctx.beginPath(); //draw top line
                ctx.moveTo(x, y);
                ctx.lineTo(x + w, y);
                ctx.stroke();
            }

            if (this.walls[1]) {
                ctx.beginPath(); //draw right line
                ctx.moveTo(x + w, y);
                ctx.lineTo(x + w, y + w);
                ctx.stroke();
            };

            if (this.walls[2]) {
                ctx.beginPath(); //draw bottom line
                ctx.moveTo(x + w, y + w);
                ctx.lineTo(x, y + w);
                ctx.stroke();
            }

            if (this.walls[3]) {
                ctx.beginPath(); //draw left line
                ctx.moveTo(x, y + w);
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            if (this.visited) {
            //ctx.rect(x,y,w,w);
            ctx.fillStyle = 'red'
            ctx.fillRect(x,y,w,w);
            
            }
        }
        checkNeighbors() {
            let neighbors = [];
            
        }
    

}

setup();
draw(); 