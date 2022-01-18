let maze = document.querySelector('.maze');
let ctx = maze.getContext("2d");
let mazeCompleted = false;

let cols; //global variable cols
let rows; //global variable rows

let w = 20;
let grid = [];
let stack = [];
let current;
let end;


class Maze {
    constructor(rows,columns) {
        this.rows = rows;
        this.columns = columns;
        
    }

    setup() {
        maze.width = this.rows;
        maze.height = this.columns;
        cols = Math.floor(maze.width / w)
        rows = Math.floor(maze.height / w)
    
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                const cell = new Cell(y, x);
                grid.push(cell)
            }
        }
        current = grid[0]; //decides the where the algo will start
        grid[index(cols-1, rows-1)].end = true;

    }
     draw() {
        
        maze.style.background = 'white';
        //set first cell as visited
        current.visited = true;
    
        //loop through the grid array and show each cell
        for (let i = 0; i < grid.length; i++) {
            grid[i].show();
        }
        
        const next = current.checkNeighbors();

        if (next) {
            next.visited = true; //change color to green

            stack.push(current); //pushes visited to stack
            
            current.highlight(); //blue

            current.removeWalls(current, next);

            current = next;
      
          } else if (stack.length > 0) {
            let cell = stack.pop();
            current = cell;
            current.highlight();
          } 

          if (stack.length === 0) {
            mazeCompleted = true;
            return;
          }
      
        // Recursively call the draw function. This will be called up until the stack is empty
       
        //let t = 5
        setTimeout(() => {
        this.draw()
        }, 1)
        //t+=50;

       // window.requestAnimationFrame(() => {
        //     this.draw();
        //   });


      
    
    
    }
    
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
        this.end = false;
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
            const random = Math.floor(Math.random() * neighbors.length);
            return neighbors[random];
        } else {
            return undefined;
        }
    };

    

    //draw each cell on maze
    show() {
        let x = this.colNum * w; //x-coordinate is at the colNum scaled by width of each cell
        let y = this.rowNum * w;

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
            ctx.fillStyle = '#71E680'
            ctx.fillRect(x, y, w, w)
            //ctx.fillRect(x + 1, y + 1, w - 2, w - 2);
            //ctx.fillRect(x, y, w - 3, w - 3);
            //ctx.fillRect(x + 1 , y+1 , w-1 , w-1);
            //ctx.fillRect(x + 2 , y+2 , w-1 , w-1);
        }
        if (this.end) {
            ctx.fillStyle = 'red'
            ctx.fillRect(x + 2,y + 2,w -4,w-4)
        }
    }
    highlight() {
        let x = this.colNum * w;
        let y = this.rowNum * w;
        ctx.fillStyle = '#E671D6';
        ctx.fillRect(x+1, y+1, w-4, w-4)
    }

    removeWalls(cell1, cell2) {
        //compare to see if left or right of current cell.
        let x = cell1.colNum - cell2.colNum
        if (x === 1) {
            cell1.walls[3] = false;
            cell2.walls[1] = false;
        } else if (x === -1) {
            cell1.walls[1] = false;
            cell2.walls[3] = false;
        }

        let y = cell1.rowNum - cell2.rowNum;

        if (y === 1) {
            cell1.walls[0] = false;
            cell2.walls[2] = false;
        } else if (y === -1) {
            cell1.walls[2] = false;
            cell2.walls[0] = false;
        }
    }
}

// let newMaze = new Maze(800 ,800)
// newMaze.setup();
// newMaze.draw();

