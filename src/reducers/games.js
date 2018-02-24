export default function gamesReducer(state = [], action) {
  switch (action.type) {
    case 'GAMES_LIST_GAMES_SUCCESS': {
      return action.payload.response;
    }

    default:
      return state;
  }
}
