// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  games: []
};

export default function gamesReducer(state = initialState, action) {
  switch(action.type) {
    case 'GAMES_LIST_GAMES_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        games: response
      });
    }
    case 'GAMES_LIST_GAMES_ERROR': {
      const { message } = action.payload;

      if (message === 'Unauthorized'){
        return getNewState(state, {
          games: []
        })
      }
    }

    default:
      return state;
  }
}
