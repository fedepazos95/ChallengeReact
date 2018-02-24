// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from '../actions/games';

// Components
import GamesList from '../components/GamesList';

class Games extends Component {
  static propTypes = {
    loadGames: PropTypes.func.isRequired,
    games: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadGames();
  }

  render() {
    return (
      <div>
        <GamesList games={this.props.games} width={90}/>
      </div>
    );
  }
}

export default connect(state => ({
  games: state.games
}), actions)(Games);
