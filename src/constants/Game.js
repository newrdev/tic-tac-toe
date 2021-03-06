export const PLAYER_X = 'X';
export const PLAYER_O = 'O';
export const EMPTY_CELL = '-';

export const INITIAL_STATE = {
  grid: '---------',
  nextPlayer: PLAYER_O
};

export const WINNING_CELLS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
