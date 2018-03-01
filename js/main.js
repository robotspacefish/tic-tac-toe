"use strict";

const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  const setNumberOfPlayers = (id) => {
    if (id === "1-player") {
      return 1
    } else {
      return 2;
    }
  };

  const reset = () => {
    // TODO
  };

  const start = (difficulty) => {
    // TODO
  };

  return { board, setNumberOfPlayers, reset, start };
})();

const handlers = (() => {
  const clickHandler = (e) => {
    const elementClicked = e.target;
    switch (elementClicked.id) {
      case "1-player" :
      case "2-player" :
        let players = game.setNumberOfPlayers(elementClicked.id);
        toggle.visibility("player-select");
        toggle.visibility("name-input");
        console.log(game.players);

        if (players === 2) {
          toggle.visibility("player-2-input");
        }
        break;
      case "name-input-submit-btn" :
        toggle.visibility("difficulty-select");
        toggle.visibility("name-input");
        break;
      case "normal" :
      case "hard" :
        // TODO start
        break;
    }

    if (elementClicked.classList.contains("tile")) {
      // TODO
      console.log(`tile #${elementClicked.id}`);
    }
  };
  const display = {};

  return { clickHandler, display };
})();


const toggle = (() => {
  const visibility = (id) => {
    const element = document.getElementById(`${id}`);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }

  return { visibility };
})();
