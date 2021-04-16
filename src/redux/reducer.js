const initialState = {
  start: false,
  array: ['','','','','','','','',''],
  two_players:false,
  player_default_value:true,
  matchWin:false,
  scores:{
    player1:0,
    tie:0,
    player2:0
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "GAME_STARTED":
      return {
        ...state,
        start:true
      }
    case "GAME_RESTARTED":
      return {
        ...initialState
      }
    case "STEP_TAKEN":
      return {
        ...state,
        array: [
          ...state.array.slice(0,action.payload.id),
          action.payload.letter,
          ...state.array.slice(action.payload.id + 1)
        ]
      }
    case "TWO_PLAYERS_SELECTED":
      return {
        ...state,
        player_default_value: true,
        two_players:true
      }
    case "ONE_PLAYER_SELECTED":
      return {
        ...state,
        two_players:false
      }
    case "CHANGE_VALUE_X":
      return{
        ...state,
        player_default_value:true
      }
    case "CHANGE_VALUE_O":
      return{
        ...state,
        player_default_value:false
      }
    default:
      return state;
  }
};
export default reducer;