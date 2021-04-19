import React from 'react';
import {connect} from "react-redux";
import styles from './scores.module.scss';
import * as actions from '../../redux/actionCreators';



const Scores = (props) => {
  const {player1,player2,tie} = props.state.scores;
  return(
    <React.Fragment>
      <div className={styles.score}>
        <h1>Scores</h1>
        <div>
          <div className={styles.row1}>
            <div> Player {props.state.player_value}</div>
            <div>Tie</div>
            <div>{props.state.two_players ?`Player 2   O`:`Computer ${props.state.computer_value}`} </div>
          </div>
          <div className={styles.row2}>
            <div>{player1}</div>
            <div>{tie}</div>
            <div>{player2}</div>
          </div>
        </div>
      </div>
      <div className={styles.changeSettings}>
        <button>Change Settings</button>
      </div>
    </React.Fragment>
  )};

const mapStateToProps = (state) => {
  return {
    state: state
  }
};


export default connect(mapStateToProps,actions)(Scores);