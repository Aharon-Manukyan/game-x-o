import React, {useEffect} from 'react';
import styles from './board.module.scss';
import Square from "./square";
import {connect} from "react-redux";
import * as actions from '../../redux/actionCreators';




const Board = (props) => {

const {
  stepTaken,
  nextTurn,
  gameIsTie,
  gameIsEnd
} = props;

  const {
    start,
    array,
    two_players,
    steps,
    player_value,
    computer_value,
    lastStep
  } = props.state;

  useEffect(() => {

        if(gameWinner(lastStep)){
          setTimeout(() => {
            gameIsEnd(lastStep);
          },1000)
        }else if(steps === 9){
          setTimeout(() => {
            gameIsTie();
          },1000)
        }else if(steps %2 === 1){
          if(!two_players){
            computerTurn();
          }
        }

  });

  const playerTurn = (id) => {
    if(array[id] === '') {
      stepTaken(id, player_value);
      nextTurn();
    }
  };

  const computerTurn = () => {

/*    let idx = '';

    if ((array[1] === array[2] && array[1] !== '')
      ||(array[3] === array[6] && array[3] !== '')
    ||(array[4] === array[8] && array[4] !== '')
    ){
      idx = 0;
    }
    if ((array[0] === array[2] && array[0] !== '')
      ||(array[4] === array[7] && array[4] !== '')
    ){
      idx = 1;
    }
    if ((array[0] === array[1] && array[1] !== '')
      ||(array[4] === array[6] && array[4] !== '')
      ||(array[5] === array[8] && array[5] !== '')
    ){
      idx = 2;
    }
    if ((array[0] === array[6] && array[0] !== '')
      ||(array[4] === array[5] && array[4] !== '')
    ){
      idx = 3;
    }
    if ((array[0] === array[8] && array[0] !== '')
      ||(array[1] === array[7] && array[1] !== '')
      ||(array[3] === array[5] && array[3] !== '')
      ||(array[2] === array[6] && array[2] !== '')
    ){
      idx = 4;
    }
    if ((array[3] === array[4] && array[3] !== '')
      ||(array[2] === array[8] && array[2] !== '')
    ){
      idx = 5;
    }
    if ((array[0] === array[3] && array[3] !== '')
      ||(array[2] === array[4] && array[2] !== '')
      ||(array[7] === array[8] && array[7] !== '')
    ){
      idx = 6;
    }
    if ((array[1] === array[4] && array[1] !== '')
      ||(array[6] === array[8] && array[6] !== '')
    ){
      idx = 7;
    }
    if ((array[0] === array[4] && array[0] !== '')
      ||(array[6] === array[7] && array[6] !== '')
      ||(array[2] === array[5] && array[2] !== '')
    ){
      idx = 8;
    }*/

    let id = nextLogicTurn(array);
    if(id === -1){
      id = Math.floor(Math.random() * 8);
      while(array[id] === 'X' || array[id] === 'O'){
        id = Math.floor(Math.random() * 8);
      }
    }
      stepTaken(id,computer_value);
      nextTurn();


  };


  const nextLogicTurn =  (array) => {


    if ((array[1] === array[2] && array[1] !== '' && array[0] === '')
      ||(array[3] === array[6] && array[3] !== '' && array[0] === '')
      ||(array[4] === array[8] && array[4] !== '' && array[0] === '')
    ){
      return 0;
    }
    if ((array[0] === array[2] && array[0] !== '' && array[1] === '')
      ||(array[4] === array[7] && array[4] !== '' && array[1] === '')
    ){
      return 1;
    }
    if ((array[0] === array[1] && array[1] !== '' && array[2] === '')
      ||(array[4] === array[6] && array[4] !== '' && array[2] === '')
      ||(array[5] === array[8] && array[5] !== '' && array[2] === '')
    ){
      return 2;
    }
    if ((array[0] === array[6] && array[0] !== '' && array[3] === '')
      ||(array[4] === array[5] && array[4] !== '' && array[3] === '')
    ){
      return 3;
    }
    if ((array[1] === array[7] && array[1] !== '' && array[4] === '')
      ||(array[3] === array[5] && array[3] !== '' && array[4] === '')
      ||(array[2] === array[6] && array[2] !== '' && array[4] === '')
      ||(array[0] === array[8] && array[0] !== '' && array[4] === '')
    ){
      return 4;
    }
    if ((array[3] === array[4] && array[3] !== '' && array[5] === '')
      ||(array[2] === array[8] && array[2] !== '' && array[5] === '')
    ){
      return 5;
    }
    if ((array[0] === array[3] && array[3] !== '' && array[6] === '')
      ||(array[2] === array[4] && array[2] !== '' && array[6] === '')
      ||(array[7] === array[8] && array[7] !== '' && array[6] === '')
    ){
      return 6;
    }
    if ((array[1] === array[4] && array[1] !== '' && array[7] === '')
      ||(array[6] === array[8] && array[6] !== '' && array[7] === '')
    ){
      return 7;
    }
    if ((array[0] === array[4] && array[0] !== '' && array[8] === '' )
      ||(array[6] === array[7] && array[6] !== '' && array[8] === '')
      ||(array[2] === array[5] && array[2] !== '' && array[8] === '')
    ){
      return 8;
    }


    return -1;
  };

  const gameWinner =  (lastStepValue) => {
      for( let i = 0; i <= 6; i+=3){
         if(array[i] === lastStepValue
           && array[i+1] === lastStepValue
           && array[i+2] === lastStepValue){
           return true;
         }
      }
      for( let i = 0; i <= 2; i++){
        if(array[i] === lastStepValue
          && array[i+3] === lastStepValue
          && array[i+6] === lastStepValue){
          return true;
        }
      }
      if(array[0] === lastStepValue
        && array[4] === lastStepValue
        && array[8] === lastStepValue){
        return true;
      }else  if(array[2] === lastStepValue
        && array[4] === lastStepValue
        && array[6] === lastStepValue){
        return true;
      }

    return false;

  };





  const arr = [0,1,2,3,4,5,6,7,8].map((idx) =>{
    return(
    <Square
      key={idx}
      onclick = {
        start
          ? () => playerTurn(idx):null}
      contain={array[idx]}
      idx = {idx}
    />)
})

  return(
    <div  className={styles.gameBoard}>
      {arr}
    </div>
  )};

const  mapStateToProps = (state) => {
  return{
    state:state
  }
};

export default connect(mapStateToProps,actions)(Board);