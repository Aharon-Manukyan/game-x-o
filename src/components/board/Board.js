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
    let rand = Math.floor(Math.random() * 8);
    while(array[rand] === 'X' || array[rand] === 'O'){
      rand = Math.floor(Math.random() * 8);
    }
    stepTaken(rand,computer_value);
    nextTurn();
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