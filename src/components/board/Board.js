import React, {useEffect} from 'react';
import styles from './board.module.scss';
import Square from "./square";
import {connect} from "react-redux";
import {nextLogicTurn,gameWinner,finalLogic} from "../../functions";
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
    steps,
    scores,
    player_value,
    player_default_value,
    computer_value,
    lastStep,
    two_players,
  } = props.state;

  useEffect(() => {
    if (two_players) {
      if (gameWinner(lastStep, array)) {
        setTimeout(() => {
          gameIsEnd(lastStep);
        }, 1000)
      } else if (steps === 9) {
        setTimeout(() => {
          gameIsTie();
        }, 1000)
      }
    } else if (!player_default_value) {
      if(gameWinner(lastStep,array)){
        setTimeout(() => {
          gameIsEnd(lastStep);
        },1000)
      }else if(steps === 9){
        setTimeout(() => {
          gameIsTie();
        },1000)
      }else if(steps %2 === 0 && steps > 0){
        computerTurn();
      }
    } else if (gameWinner(lastStep, array)) {
      setTimeout(() => {
        gameIsEnd(lastStep);
      }, 1000)
    } else if (steps === 9) {
      setTimeout(() => {
        gameIsTie();
      }, 1000)
    } else if (steps % 2 === 1) {
      computerTurn();
    }
  });

  useEffect(() => {
  if(!player_default_value){
    setTimeout(() => {
      computerTurn();
    },500)
    }
  },[start])

  useEffect(() => {
    if(!player_default_value){
      setTimeout(() => {
        computerTurn();
      },500)
    }
  },[scores])


  const playerTurn = (id) => {
    if(array[id] === '' ){
      let pl_value = player_value;
      if(two_players){
         if(steps %2 === 1){
           pl_value = computer_value;
         }else{
           pl_value = player_value;
         }
      }
      stepTaken(id, pl_value);
      nextTurn();
    }
  };


  const computerTurn = () => {
    let idx = nextLogicTurn(array,computer_value);
    if(idx === -1){
      let index = nextLogicTurn(array,player_value);
      if( index !== -1){
        stepTaken(index,computer_value);
        nextTurn();
      }else {
        let id = finalLogic(array);
        if (id !== -1) {
          stepTaken(id,computer_value);
          nextTurn();
        }else{
          console.log('random')
        }
        /*let id = Math.floor(Math.random() * 9);
        while (array[id] === 'X' || array[id] ==='O'){
          id = Math.floor(Math.random() * 9);
        stepTaken(id,computer_value);
        nextTurn();*/
      }
    }else{
      stepTaken(idx,computer_value);
      nextTurn();
    }
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