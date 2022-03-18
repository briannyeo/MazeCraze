# MAZECRAZE

Github Link: https://briannyeo.github.io/MazeCraze/
## Description
This is a project built with HTML, CSS and JavaScript. It is a Maze Generator that uses a depth-first search algorithm and implemented using recursive backtracking ([see Wiki](https://en.wikipedia.org/wiki/Maze_generation_algorithm)). Subsequently styled with CSS.



### Steps for DFS/Recursive backtracker as follows: 
1. Given a current cell as a parameter,
2. Mark the current cell as visited
3. While the current cell has any unvisited neighbour cells
        Choose one of the unvisited neighbours
        Remove the wall between the current cell and the chosen cell
        Invoke the routine recursively for a chosen cell
        which is invoked once for any initial cell in the area.

There are 4 difficulty levels that have been preset and optimized according to the width and height of the maze canvas. Higher difficulties have more cells which the player is required to traverse through before reaching the end point. 



## How to Play: 
Using arrow keys, navigate the pink block to the end of the maze. 



## Technologies Used
1. HTML
2. Javascript
3. CSS



## Future Updates:

1. Change the current box to an animated sprite that will explore the maze
2. Other possible items / conditions to be added before exiting. 
3. Timer and scorecount (including how many blocks away from exit by the time the countdown ends)
4. Add a chaser who will slowly follow the player until player gets caught




## Notes: 

index() - to arrange cells in horizontal order
Grid:
    0 , 1 , 2
0 [ 0 , 1 , 2]
1 [ 3 , 4 , 5]
2 [ 6 , 7 , 8]
To access cell 5, [2][1]
While in a 1D array would be:
Grid = [ 0 , 1 , 2 , 3, 4 , 5 , 6 , 7 , 8]
To access cell 5, need to do grid[2 + 1 * cols ] = grid[ 2 + 1 * (3) ] = grid[ 5 ]
By adding j*col go to the index of the row in a 1D array
