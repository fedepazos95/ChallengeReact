// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import GameItem from './GameItem';

class GamesList extends Component {
  static propTypes = {
    games: PropTypes.array
  };

  render() {
    const { games, width } = this.props;
    return (
      <div className="row" style={{ width: width + '%' }}>
        {games.length > 0 && <h4>{games.length} Games</h4>}
        {games.map((game, key) => {
          return <GameItem game={game} key={key} />;
        })}
      </div>
    );
  }
}

export default GamesList;
