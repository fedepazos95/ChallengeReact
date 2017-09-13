// API
import gamesApi from './api';

// Actions
const GAMES_LIST_GAMES = 'GAMES_LIST_GAMES';

export function loadGames() {
  return {
    type: GAMES_LIST_GAMES,
    payload: gamesApi.getAllGames()
  };
}
