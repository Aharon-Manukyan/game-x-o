import React from 'react';
import styles from './scores.module.scss';



const Scores = () => {
  return(
    <React.Fragment>
      <div className={styles.score}>
        <h1>Scores</h1>
        <div>
          <div className={styles.row1}>
            <div>Player 1</div>
            <div>Tie</div>
            <div>Computer</div>
          </div>
          <div className={styles.row2}>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div className={styles.changeSettings}>
        <button>Change Settings</button>
      </div>
    </React.Fragment>
  )};

export default Scores;