// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

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
      <div>Games</div>
    );
  }
}

export default connect(state => ({
  games: state.games.games
}), actions)(Games);
