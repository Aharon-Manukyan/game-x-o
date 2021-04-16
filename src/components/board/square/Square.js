import React from "react";
import styles from './square.module.scss';



const Square = (props) =>{
  return(
    <div onClick={props.onclick} className={styles.square}>
      <span>
        {props.contain}
      </span>
    </div>
    )};



export default Square;