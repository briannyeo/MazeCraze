# MazeGameJS-Project-1-

This is a project built with HTML, CSS and JavaScript. It is a Maze Generator that uses a depth-first search algorithm and implemented using recursive backtracking. 

The depth-first search algorithm of maze generation is frequently implemented using backtracking. This can be described with a following recursive routine:

1. Given a current cell as a parameter,
2. Mark the current cell as visited
3. While the current cell has any unvisited neighbour cells
        Choose one of the unvisited neighbours
        Remove the wall between the current cell and the chosen cell
        Invoke the routine recursively for a chosen cell
        which is invoked once for any initial cell in the area.

There are 4 difficulty levels that have been preset and optimized according to the width and height of the maze canvas with higher difficulties having more cells. 

How to Play: 
Using arrow keys, navigate the pink block to the end of the maze. 
















Future Updates:

1. Animation for a moving sprite while exploring the maze.
2. Possible other items to be found before exiting. 
3. Timer and scorecount (including how many blocks away from exit by the time the countdown ends)
4. Add a chaser who will slowly follow the player until player gets caught




Notes: 

index() 
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
