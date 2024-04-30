# Game Theory

## Direction:
1. copy the repo: `https://github.com/AWU0626/Game-Theory.git`
2. open your local terminal and direct to a location on your local machine
3. create an empty folder and directed to the empty folder
4. inside the empty folder, run `git clone https://github.com/AWU0626/Game-Theory.git`
5. after cloning is done, navigate into directory: `Game-Theory/gt/`
6. inside the `gt/` directory, run `npm install`
7. after all dependencies are installed, run `npm start` to run the website

## Relevant pages:
### 1. Home
Homepage contains some of the basic informations needed and the references to all the sources used.

### 2. Simulation
Simulations page contains different types of Games involved and an explanation of how the game plays out.

## Relevant components:
### 1. NormMatrixInput:
Implements the Pure Strategy Nash Equilibrium and finds the Dominant strategy of each player.

### 2. ProbMatrixInput:
Implements the Mixed Strategy Nash Equilibrium.

### 3. IteratedEliminationMatrixInput
Implements both Iterative elimination on strongly dominated and weakly dominated strategies.

### 4. GameMatrixInput:
Specifically implemented to house the game scenario regarding credit suisse buyout game.

## Interactive:
1. For any matrix in the simulation page, you can change up the value inside the matrix. Due to computing time,
all matrices are limited to 2x2.
2. Note that each entry of the matrix comes in a tuple `(value1,value2)`. It is important that when you input your own values, DO NOT add spaces or the matrix parser will not recognize your input.
