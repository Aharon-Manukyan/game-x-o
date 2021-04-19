const initialState = {
  start: false,
  array: ['','','','','','','','',''],
  two_players:false,
  player_default_value:true,
  player_value:"X",
  computer_value:"O",
  steps:0,
  lastStep:null,
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
        ],
        lastStep:action.payload.letter
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
        player_default_value:true,
        player_value:"X",
        computer_value: "O",

      }
    case "CHANGE_VALUE_O":
      return{
        ...state,
        player_default_value:false,
        player_value:"O",
        computer_value: "X"
      }
    case "NEXT_TURN":
      return {
        ...state,
        steps: state.steps + 1
      }
    case "GAME_IS_TIE":
      return {
        ...state,
        scores:{...state.scores,tie: state.scores.tie + 1},
        steps: 0,
        lastStep:null,
        array: initialState.array
      }
    case "GAME_IS_END":
      if(action.payload === state.player_value){
        return {
          ...state,
          scores:{...state.scores,player1: state.scores.player1 + 1},
          steps: 0,
          lastStep:null,
          array: initialState.array
        }
      }else{

        return {
          ...state,
          scores:{...state.scores,player2: state.scores.player2 + 1},
          steps: 0,
          lastStep:null,
          array: initialState.array,
        }
      }


    default:
      return state;
  }
};
export default reducer;