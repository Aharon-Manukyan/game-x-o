import React from "react";
import styles from './square.module.scss';



const Square = (props) =>{
  const {onclick,contain,idx} = props;
  let classname;
  switch (idx){
    case 0 : case 2: case 6: case 8:
      classname = `${styles.square} ${styles.noBoarder} `;
          break;
    case 1: case 7:
      classname = `${styles.square} ${styles.horizontalBoarder} `;
      break;
    case 3: case 5:
      classname = `${styles.square} ${styles.verticalBoarder} `;
      break;
    default:
      classname = styles.square;
      break;
     }
  return(
    <div onClick={onclick} className={`${styles.square} ${classname} `}>
      <div className={styles.contain}>{contain}</div>
    </div>
    )};



export default Square;