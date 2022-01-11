# MazeGameJS-Project-1-

The depth-first search algorithm of maze generation is frequently implemented using backtracking. This can be described with a following recursive routine:

1. Given a current cell as a parameter,
2. Mark the current cell as visited
3. While the current cell has any unvisited neighbour cells
        Choose one of the unvisited neighbours
        Remove the wall between the current cell and the chosen cell
        Invoke the routine recursively for a chosen cell
        which is invoked once for any initial cell in the area.












Future Updates:

1. Animation for a moving sprite while exploring the maze.
2. Possible other items to be found before exiting. 
3. Timer and scorecount (including how many blocks away from exit by the time the countdown ends)
