// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  };

  render() {
    const { game } = this.props;

    return (
      <div className="col s4">
        <div className="card hoverable hide-on-med-and-down">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={game.image} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {game.title}
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">${game.price}</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {game.title}
              <i className="material-icons right">close</i>
            </span>
            <p>{game.subtitle}</p>
          </div>
        </div>

        <div className="card small hide-on-large-only hide-on-small-only">
          <div className="card-image">
            <img src={game.image} />
            <span className="card-title hide-on-med-and-down">
              {game.title}
            </span>
          </div>
          <div className="card-content">
            <div>
              <p>{game.subtitle}</p>
            </div>
            <div className="hide-on-med-and-up">
              <p>{game.title}</p>
            </div>
          </div>
          <div className="card-action">
            <a href="#">{game.price}</a>
          </div>
        </div>

        <div className="show-on-small hide-on-med-and-up hoverable">
          <img
            src={game.image}
            style={{ width: 100 + '%', height: 100 + '%' }}
          />
        </div>
      </div>
    );
  }
}

export default GameItem;
