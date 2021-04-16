import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actionCreators';

import styles from "./start-box.module.scss";
const StartBox = (props) => {

  const {
    state,
    gameStarted,
    gameRestarted,
    twoPlayersSelected,
    onePlayerSelected,
    changePlayerValue_X,
    changePlayerValue_O}
    = props;
  const {
    selectPLayers,
    onePlayer,
    active,
    twoPlayers,
    x_style,
    o_style
  } = styles;
  return(
    <div>
      <h1>StartBox</h1>
      {
        state.start
          ? <button onClick={() => gameRestarted()}>Restart</button>
          : <button onClick={() => gameStarted()}>Start</button>
      }
      {
        state.start
          ?null
          :<React.Fragment>
            <div className={selectPLayers}>
              <h4>Select Players Count</h4>
              <div>
                <div
                  onClick={onePlayerSelected}
                  className={
                    state.two_players
                    ?  onePlayer
                    : `${onePlayer} ${active}`
                  }>
                  1 player
                </div>
                <div onClick={twoPlayersSelected}
                     className={
                       state.two_players
                       ?`${twoPlayers} ${active}`
                       : twoPlayers
                     }>
                  2 players
                </div>
              </div>
            </div>
            {
              state.two_players ? null :
                <div className={selectPLayers}>
                  <h4>Choose X or O</h4>
                  <div>
                    <div
                      onClick = {changePlayerValue_X}
                      className={
                        state.player_default_value
                        ? `${x_style} ${active}`
                        : x_style
                      }
                    >
                      X
                    </div>
                    <div
                      onClick={changePlayerValue_O}
                      className={
                      state.player_default_value
                          ? o_style
                          : `${o_style} ${active}`
                    }>
                      0
                    </div>
                  </div>
                </div>
            }
           </React.Fragment>
      }
    </div>
  )}

const mapStateToProps = (state) => {
  return{
    state: state
  }
};

export default connect(mapStateToProps,actions)(StartBox);