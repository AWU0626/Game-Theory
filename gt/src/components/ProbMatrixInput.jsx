import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ProbMatrixInput({ dimension = 2 }) {
  // const createInitialMatrix = (dim) =>
  //   Array.from({ length: dim }, () =>
  //     Array.from({ length: dim }, () => '(0,0)')
  //   );
  const createInitialMatrix = () => {
    return [
      ["(1,-1)", "(-1,1)"],
      ["(-1,1)", "(1,-1)"]
    ];
  };

  const [matrix, setMatrix] = useState(createInitialMatrix(dimension));

  const handleInputChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = matrix.map((row, rIdx) =>
      rIdx === rowIndex
        ? row.map((cell, cIdx) =>
            cIdx === colIndex ? value : cell
          )
        : row
    );
    setMatrix(updatedMatrix);
  };

  const parseMatrix = () => {
    const matResult = matrix.map(row =>
      row.map(cell => {
        const match = cell.match(/\((-?\d+),(-?\d+)\)/);
        return match ? { player1: parseInt(match[1], 10), player2: parseInt(match[2], 10) } : null;
      })
    );

    return matResult;
  };

  const findNashEquilibrium = () => {
    const parsedMatrix = parseMatrix();

    if (!parsedMatrix || parsedMatrix.some(row => row.some(cell => cell === null))) {
      window.alert('Error: Please make sure all matrix cells are filled correctly.');
      return;
    }

    let nashEquilibria = [];

    // Compare each strategy to find Nash equilibria
    // Player 1 will compare their payoffs in both rows for a given column
    // Player 2 will compare their payoffs in both columns for a given row
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 2; col++) {
        let currentCell = parsedMatrix[row][col];
        let otherRow = 1 - row;
        let otherCol = 1 - col;

        let isPlayer1BestResponse = currentCell.player1 >= parsedMatrix[otherRow][col].player1;
        let isPlayer2BestResponse = currentCell.player2 >= parsedMatrix[row][otherCol].player2;

        // If both players are playing their best response to the other player's strategy, it's a Nash Equilibrium
        if (isPlayer1BestResponse && isPlayer2BestResponse) {
          nashEquilibria.push(`Cell(${row + 1},${col + 1})`);
        }
      }
    }

    window.prompt('Nash Equilibria:', nashEquilibria.join(', ') || 'None');
  };

  const findDominantStrategy = () => {
    const parsedMatrix = parseMatrix();

    if (!parsedMatrix || parsedMatrix.some(row => row.some(cell => cell === null))) {
      window.alert('Error: Please make sure all matrix cells are filled correctly.');
      return;
    }

    // Initialize variables to keep track of potential dominant strategies
    let dominantStrategyPlayer1;
    let dominantStrategyPlayer2;

    // Determine dominant strategy for Player 1
    if (parsedMatrix[0][0].player1 > parsedMatrix[1][0].player1 &&
        parsedMatrix[0][1].player1 > parsedMatrix[1][1].player1) {
      dominantStrategyPlayer1 = 'Row 1';
    } else if (parsedMatrix[1][0].player1 > parsedMatrix[0][0].player1 &&
              parsedMatrix[1][1].player1 > parsedMatrix[0][1].player1) {
      dominantStrategyPlayer1 = 'Row 2';
    }

    // Determine dominant strategy for Player 2
    if (parsedMatrix[0][0].player2 > parsedMatrix[0][1].player2 &&
        parsedMatrix[1][0].player2 > parsedMatrix[1][1].player2) {
      dominantStrategyPlayer2 = 'Column 1';
    } else if (parsedMatrix[0][1].player2 > parsedMatrix[0][0].player2 &&
              parsedMatrix[1][1].player2 > parsedMatrix[1][0].player2) {
      dominantStrategyPlayer2 = 'Column 2';
    }

    // Create message
    let message = `Player 1's Dominant Strategy: ${dominantStrategyPlayer1 || 'None'}\n`;
    message += `Player 2's Dominant Strategy: ${dominantStrategyPlayer2 || 'None'}`;

    // Display the dominant strategies
    window.alert(message);
  };

  const calculateMixedStrategyNashEquilibrium = () => {
    const parsedMatrix = parseMatrix();
    
    if (!parsedMatrix || parsedMatrix.some(row => row.some(cell => cell === null))) {
      window.alert('Error: Please make sure all matrix cells are correctly filled.');
      return;
    }
  
    // Extract payoffs
    const a = parsedMatrix[0][0].player1;  // Top, Left
    const b = parsedMatrix[0][1].player1;  // Top, Right
    const c = parsedMatrix[1][0].player1;  // Bottom, Left
    const d = parsedMatrix[1][1].player1;  // Bottom, Right
  
    const A = parsedMatrix[0][0].player2;  // Top, Left
    const B = parsedMatrix[0][1].player2;  // Top, Right
    const C = parsedMatrix[1][0].player2;  // Bottom, Left
    const D = parsedMatrix[1][1].player2;  // Bottom, Right
  
    // q1 = (A-B)q + B
    // q2 = (C-D)q + D
    // q1 = q2
    //  (A-B-C+D)q =  D - B
    // Calculate mixed strategies using formulas
    const denominatorP = A - B - C + D;
    const denominatorQ = (b - d - a + c);
  
    if (denominatorP === 0 || denominatorQ === 0) {
      window.alert('No mixed strategy Nash Equilibrium exists (division by zero).');
      return;
    }
  
    const p = (D - B) / denominatorP;
    const q = (c - d) / denominatorQ;
  
    // Validate probabilities
    if (isNaN(p) || isNaN(q) || p < 0 || p > 1 || q < 0 || q > 1) {
      window.alert('No valid mixed strategy Nash Equilibrium exists (invalid probabilities).');
    } else {
      window.alert(`Mixed Strategy Nash Equilibrium found:\n` +
                   `Player 1 plays Top with probability ${p.toFixed(2)}\n` +
                   `Player 2 plays Left with probability ${q.toFixed(2)}`);
    }
  };

  const renderMatrixInputs = () =>
    matrix.map((row, rowIndex) => (
      <Grid container item spacing={2} key={rowIndex}>
        {row.map((cell, colIndex) => (
          <Grid item xs={12 / dimension} key={`${rowIndex}-${colIndex}`}>
            <TextField
              label={`Cell ${rowIndex + 1},${colIndex + 1}`}
              type="text"
              value={cell}
              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    ));

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop="30px">
        {renderMatrixInputs()}
        <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={findNashEquilibrium}>
            Pure Strategy Nash Equilibrium
        </Button>
        <Button variant="contained" color="primary" onClick={findDominantStrategy} style={{ marginTop: '10px' }}>
            Dominant Strategy
        </Button>
        <Button variant="contained" color="primary" onClick={calculateMixedStrategyNashEquilibrium} style={{ marginTop: '10px' }}>
            Mixed Strategy Nash Equilibrium
        </Button>
        </Grid>
    </Grid>
  );
};
