import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function IteratedEliminationMatrixInput({ dimension = 2 }) {

  const createInitialMatrix = () => {
    return [
      ["(0,0)", "(0,0)"],
      ["(0,0)", "(0,0)"]
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

  const iteratedEliminationOfStronglyDominatedStrategies = () => {
    const parsedMatrix = parseMatrix();

    if (!parsedMatrix || parsedMatrix.some(row => row.some(cell => cell === null))) {
        window.alert('Error: Please make sure all matrix cells are filled correctly.');
        return;
    }

    const leftDominant = (
      parsedMatrix[0][1].player2 < parsedMatrix[0][0].player2 &&
      parsedMatrix[1][1].player2 < parsedMatrix[1][0].player2
    );

    const rightDominant = (
      parsedMatrix[0][1].player2 > parsedMatrix[0][0].player2 &&
      parsedMatrix[1][1].player2 > parsedMatrix[1][0].player2
    );

    const topDominant = (
      parsedMatrix[1][0].player1 < parsedMatrix[0][0].player1 &&
      parsedMatrix[1][1].player1 < parsedMatrix[0][1].player1
    );

    const botDominant = (
      parsedMatrix[1][0].player1 > parsedMatrix[0][0].player1 &&
      parsedMatrix[1][1].player1 > parsedMatrix[0][1].player1
    );

    let result = parsedMatrix;
    let outputResult = '\n[Top-Left, Top-Right, Bottom-Left, Bottom-Right],\n No elimination occurred';

    if (leftDominant && topDominant) {
      result = {player1: parsedMatrix[0][0].player1, player2: parsedMatrix[0][0].player2 }
      outputResult = 'Top-Left';
    } else if (leftDominant && botDominant) {
      result = {player1: parsedMatrix[1][0].player1, player2: parsedMatrix[1][0].player2 }
      outputResult = 'Bottom-Left';
    } else if (rightDominant && topDominant) {
      result = {player1: parsedMatrix[0][1].player1, player2: parsedMatrix[0][1].player2 }
      outputResult = 'Top-Right';
    } else if (rightDominant && botDominant) {
      result = {player1: parsedMatrix[1][1].player1, player2: parsedMatrix[1][1].player2 }
      outputResult = 'Bottom-Right'
    }

    window.alert('Remaining strategies after IESDS: ' + outputResult);
  };

  const iteratedEliminationOfWeaklyDominatedStrategies = () => {
    const parsedMatrix = parseMatrix();

    if (!parsedMatrix || parsedMatrix.some(row => row.some(cell => cell === null))) {
        window.alert('Error: Please make sure all matrix cells are filled correctly.');
        return;
    }

    const leftDominant = (
      parsedMatrix[0][1].player2 <= parsedMatrix[0][0].player2 &&
      parsedMatrix[1][1].player2 <= parsedMatrix[1][0].player2
    );

    const rightDominant = (
      parsedMatrix[0][1].player2 >= parsedMatrix[0][0].player2 &&
      parsedMatrix[1][1].player2 >= parsedMatrix[1][0].player2
    );

    const topDominant = (
      parsedMatrix[1][0].player1 <= parsedMatrix[0][0].player1 &&
      parsedMatrix[1][1].player1 <= parsedMatrix[0][1].player1
    );

    const botDominant = (
      parsedMatrix[1][0].player1 >= parsedMatrix[0][0].player1 &&
      parsedMatrix[1][1].player1 >= parsedMatrix[0][1].player1
    );

    let result = parsedMatrix;
    let outputResult = '\n[Top-Left, Top-Right, Bottom-Left, Bottom-Right],\n No elimination occurred';

    if (leftDominant && topDominant) {
      result = {player1: parsedMatrix[0][0].player1, player2: parsedMatrix[0][0].player2 }
      outputResult = 'Top-Left';
    } else if (leftDominant && botDominant) {
      result = {player1: parsedMatrix[1][0].player1, player2: parsedMatrix[1][0].player2 }
      outputResult = 'Bottom-Left';
    } else if (rightDominant && topDominant) {
      result = {player1: parsedMatrix[0][1].player1, player2: parsedMatrix[0][1].player2 }
      outputResult = 'Top-Right';
    } else if (rightDominant && botDominant) {
      result = {player1: parsedMatrix[1][1].player1, player2: parsedMatrix[1][1].player2 }
      outputResult = 'Bottom-Right'
    }

    window.alert('Remaining strategies after IESDS: ' + outputResult);
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
    <Grid container spacing={2} alignItems="left" justifyContent="left" marginTop="30px">
      {renderMatrixInputs()}
      <Grid item xs={12} >
        <Button variant="contained" color="primary" 
            onClick={iteratedEliminationOfStronglyDominatedStrategies} 
            style={{ marginLeft: '10px' }}>
            IESDS
        </Button>
      </Grid>
      <Grid item xs={12} >
        <Button variant="contained" color="primary" 
            onClick={iteratedEliminationOfWeaklyDominatedStrategies} 
            style={{ marginLeft: '10px' }}>
            IEDS
        </Button>
      </Grid>
    </Grid>
  );
};

