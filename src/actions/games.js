// Utils
import { apiFetch } from '../lib/utils/api';

// Actions
const GAMES_LIST_GAMES = 'GAMES_LIST_GAMES';

export function loadGames() {
  return {
    type: GAMES_LIST_GAMES,
    payload: apiFetch('games')
  };
}
