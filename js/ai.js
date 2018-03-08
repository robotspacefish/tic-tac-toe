// ==================== AI ====================================================
// TODO
const ai = (() => {
  let emptyTiles = [];
  let tilesOccupiedByCpu = [];
  const findEmptySpaces = () => {
    emptyTiles = [];
    game.board.forEach((tile, index) => {
      if (tile === 0) {
        emptyTiles.push(index);
      }
    });
  };

  const checkLeft = (tile) => {
    //if (index === 0 || index === 3 || index === 6) {
    //  return false;
    //}
    // index is the random space generated by randomizer
    // return game.board[index - 1] === "O";
    // if (game.board[index - 1] === mark) {
    //   tilesOccupiedByCpu.push(index - 1);
    //   return true;
    // }
    return emptyTiles.includes(tile-1);
  };

  const checkRight = (index) => {
    return emptyTiles.includes(index+1);
    // return game.board[index + 1] === "O";
    // if (game.board[index + 1] === "O") {
    //   tilesOccupiedByCpu.push(index + 1);
    // }
  };

  const checkUp = (index) => {
    // return emptyTiles.includes(index-3);
    // return game.board[index - 3] === "O";
    // if (game.board[index - 3] === "O") {
    //   tilesOccupiedByCpu.push(index - 3);
    // }
  }

  const checkDown = (index) => {
    return emptyTiles.includes(index+3);
    // return game.board[index + 3] === "O";
    // if (game.board[index + 3] === "O") {
    //   tilesOccupiedByCpu.push(index + 3);
    // }
  }

  const checkUpDiagonal = (index) => {
    return emptyTiles.includes(index-4);
    // return game.board[index - 4] === "O";
    // if (game.board[index - 4] === "O") {
    //   tilesOccupiedByCpu.push(index - 4);
    // }
  }

  const checkDownDiagonal = (index) => {
    return emptyTiles.includes(index+4);
    // return game.board[index + 4] === "O";
    // if (game.board[index + 4] === "O") {
    //   tilesOccupiedByCpu.push(index + 4);
    // }
  }

  const randomizer = (multiplier) => {
    return Math.floor(Math.random() * multiplier);
  };

  const getTilesOccupiedByCpu = () => {
    if (tilesOccupiedByCpu.length !== 0) {
      // clear values
      tilesOccupiedByCpu = [];
    }

    game.board.forEach((tile, index) => {
      if (tile === "O") {
        tilesOccupiedByCpu.push(index);
      }
    });
  };

  const planNextMove = () => {
    getTilesOccupiedByCpu();
    let move = {};
    let possibleMoves = [];
    if (tilesOccupiedByCpu.length !== 0) {
      tilesOccupiedByCpu.forEach((tile) => {
        // check empty Tiles that are next to each "O"
        move.left = checkLeft();
        move.right = checkRight();
        move.up = checkUp();
        move.down = checkDown();
        move.upDiagonal = checkUpDiagonal();
        move.downDiagonal = checkDownDiagonal();

        if (move.left) {
          possibleMoves.push()
        }
      });
    }




    // tilesOccupiedByCpu.forEach((occupiedByCpu, occupiedIndex) => {
    //   if (occupiedByCpu) {
    //
    //   }
    // });
    // console.log(tilesOccupiedByCpu);
  };

  const update = () => {
    findEmptySpaces();
    let index;
    while (!emptyTiles.includes(index)) {
      index = randomizer(game.board.length);
    }
    let tile = document.getElementById(`${index}`);
    game.board[index] = game.players[1].playerMark;
    elements.setText(tile, game.players[1].playerMark);
  };

  const difficulty = () => {
    // TODO
  };

  return { update };
})();
