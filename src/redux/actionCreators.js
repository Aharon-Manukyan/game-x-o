const gameStarted = () => {
  return {
    type: "GAME_STARTED"
  }
};

const gameRestarted = () => {
  return{
    type: "GAME_RESTARTED"
  }
};

const stepTaken = (id,letter) => {
  return{
    type:"STEP_TAKEN",
    id,
    letter
  }
}

const twoPlayersSelected = () => {
  return{
    type:"TWO_PLAYERS_SELECTED"
  }
}
const onePlayerSelected = () => {
  return{
    type:"ONE_PLAYER_SELECTED"
  }
}

const changePlayerValue_X = () => {
   return{
     type:"CHANGE_VALUE_X"
   }
}
const changePlayerValue_O = () => {
  return{
    type:"CHANGE_VALUE_O"
  }
}
const nextTurn = () => {
  return{
    type:"NEXT_TURN"
  }
}

const gameIsTie = () => {
  return{
    type:"GAME_IS_TIE"
  }
};
const gameIsEnd = (win) => {
    return{
      type:"GAME_IS_END",
      payload:win
    }
}


export {
  gameStarted,
  gameRestarted,
  stepTaken,
  twoPlayersSelected,
  onePlayerSelected,
  changePlayerValue_X,
  changePlayerValue_O,
  nextTurn,
  gameIsTie,
  gameIsEnd
};