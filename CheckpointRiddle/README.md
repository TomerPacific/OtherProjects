# CheckpointRiddle

One of Checkpoint's Riddles

Algorithm does the following steps:

- Parse the puzzle input into puzzle piece objects
- Extract from all the puzzle pieces the edge pieces (pieces containing atleast one zero)
- Extract from all the edge pieces the corner pieces (pieces containing two zeros)
- Go over the corner pieces and find the one that fits at the top left most corner
- Go over the other puzzle pieces, and try to match one to the placed puzzle piece
  - If one exists, place it and move on
  - If not, go back and try to place another piece 
