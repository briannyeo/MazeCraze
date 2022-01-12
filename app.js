let maze = document.querySelector('.maze');
let ctx = maze.getContext("2d");


let cols; //global variable cols 
let rows; //global variable rows

let w = 40;
let grid = [];
let current;

function setup() {
    maze.width = 400;
    maze.height = 400;
    cols = Math.floor(maze.width / w)
    rows = Math.floor(maze.height / w)

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            const cell = new Cell(y, x);
            grid.push(cell)
        }
    }
    current = grid[5];
   
}

function draw() {
    //set first cell as visited
    current.visited = true; 
    
    //loop through the grid array and show each cell 
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    
    let next = current.checkNeighbors();

    if (next !== undefined) {
        next.visited = true;
        current = next;
           
    } //else if -> backtracker
    
    
    current.show(); //if cell has been visited, change the color

}

function index(x, y) { //arranges every single cell to go from left to right per row
    if (x < 0 || y < 0 || x > cols - 1 || y > rows - 1) {
        return -1;     //returns an invalid index in order to seperate out the edge cases. The rest will go into neighbors.
    } else {
        return x + y * cols;
    }

};

class Cell {
    constructor(colNum, rowNum) {
        this.colNum = colNum;
        this.rowNum = rowNum;
        this.walls = [true, true, true, true];
        this.visited = false; //this keeps track of whether cells have been visited.
    }

    checkNeighbors() {
        let neighbors = [];
        
        let col = this.colNum;
        let row = this.rowNum;

        let top = grid[index(col, row - 1)];
        let right = grid[index(col + 1, row)];
        let bottom = grid[index(col, row + 1)];
        let left = grid[index(col - 1, row)];

        //if wall exists and is not visited, push to neighbors array
        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        // [top, right, bottom, left].forEach(n => {
        // if (n && !n.visited) {
        //     neighbors.push(n);
        // }
        // });

        //check the neighbor for array for unvisited cells and then randomly pick one to visit
        if (neighbors.length !== 0) { 
            let random = Math.floor(Math.random() * neighbors.length);
            return neighbors[random];
        } else {
            return undefined;
        }
    };

    // removeWall (cell1, cell2) {
    //     let x = cell1.colNum - cell2.colNum
    // }

    show() {
        let x = this.colNum * w; //x-coordinate is at the colNum scaled by width of each cell
        let y = this.rowNum * w;
        
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
            ctx.fillStyle = 'green'
            ctx.fillRect(x + 1, y + 1, w - 2, w - 2);
            //ctx.fillRect(x + 1 , y+1 , w-1 , w-1);
            //ctx.fillRect(x + 2 , y+2 , w-1 , w-1);

        }
    }
    


}

setup();
draw(); 