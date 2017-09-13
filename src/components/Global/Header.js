// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">{title}</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
