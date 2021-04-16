import React from 'react';
import styles from './app.module.scss';
import Board from "../board";
import Scores from "../scores";
import StartBox from "../start-box";

const App = () => {
    return(
      <div>
          <h1
            className={styles.myClass}>
            TIC TAC TOE
          </h1>
          <div className={styles.flexGroup}>
            <div
              className = {styles.startBox}>
              <StartBox/>
            </div>
            <div
              className={styles.gameBoard}>
              <Board />
            </div>
            <div
              className={styles.scoreBox}>
              <Scores/>
            </div>
          </div>
      </div>
    )};


export default App;