import React from 'react';
import styles from './board.module.scss';
import Square from "./square";
import {connect} from "react-redux";
import * as actions from '../../redux/actionCreators';


const Board = (props) => {

  const {state, stepTaken} = props;
  console.log(state);
const arr = [0,1,2,3,4,5,6,7,8].map((idx) =>{
    return(
      <Square
        key={idx}
        onclick = { state.start  ? () => stepTaken(idx,"X") : null }
        contain={state.array[idx]}
      />
    )
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