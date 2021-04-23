

const nextLogicTurn =  (array,comp_value) => {

  if ((array[1] === comp_value && array[2] === comp_value && array[0] === '') ||
      (array[3] === comp_value && array[6] === comp_value && array[0] === '') ||
      (array[4] === comp_value && array[8] === comp_value && array[0] === '')
  ){
    return 0;
  }
  if ((array[0] === comp_value && array[2] === comp_value && array[1] === '') ||
    (array[4] === comp_value && array[7] === comp_value && array[1] === '')
  ){
    return 1;
  }
  if ((array[0] === comp_value && array[1] === comp_value && array[2] === '') ||
    (array[4] === comp_value && array[6] === comp_value && array[2] === '') ||
    (array[5] === comp_value && array[8] === comp_value && array[2] === '')
  ){
    return 2;
  }
  if ((array[0] === comp_value && array[6] === comp_value && array[3] === '') ||
    (array[4] === comp_value && array[5] === comp_value && array[3] === '')
  ){
    return 3;
  }
  if (
    (array[0] === comp_value && array[8] === comp_value && array[4] === '') ||
    (array[3] === comp_value && array[5] === comp_value && array[4] === '') ||
    (array[1] === comp_value && array[7] === comp_value && array[4] === '') ||
    (array[2] === comp_value && array[6] === comp_value && array[4] === '')
  ){
    return 4;
  }
  if ((array[3] === comp_value && array[4] === comp_value && array[5] === '') ||
    (array[2] === comp_value && array[8] === comp_value && array[5] === '')
  ){
    return 5;
  }
  if ((array[2] === comp_value && array[4] === comp_value && array[6] === '') ||
    (array[7] === comp_value && array[8] === comp_value && array[6] === '') ||
    (array[0] === comp_value && array[3] === comp_value && array[6] === '')
  ){
    return 6;
  }
  if ((array[1] === comp_value && array[4] === comp_value && array[7] === '') ||
    (array[6] === comp_value && array[8] === comp_value && array[7] === '')
  ){
    return 7;
  }
  if ((array[0] === comp_value && array[4] === comp_value && array[8] === '') ||
    (array[2] === comp_value && array[5] === comp_value && array[8] === '') ||
    (array[6] === comp_value && array[7] === comp_value && array[8] === '')
  ){
    return 8;
  }

  return -1;
};

const gameWinner =  (lastStepValue,array) => {
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

const finalLogic = (array) => {
  if(array[4] === ''){
    return 4
  }
  let numPool = [0, 2, 6, 8];
  let  r = numPool[Math.floor(Math.random() * numPool.length)]
  while (array[r] === 'X' || array[r] ==='O') {
    r = numPool[Math.floor(Math.random() * numPool.length)]
  }
    return r;
}

export{
  nextLogicTurn,
  gameWinner,
  finalLogic
}