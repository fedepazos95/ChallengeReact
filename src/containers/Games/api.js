// Utils
import { apiFetch } from '../../lib/utils/api';

class GamesApi {
  static getAllGames() {
    return apiFetch('games/games');
  }
}

export default GamesApi;
