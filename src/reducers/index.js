// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import games from '../containers/Games/reducer';

const rootReducer = combineReducers({
  games
});

export default rootReducer;
