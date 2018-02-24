// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    const { title, items } = this.props;

    return (
      <nav className="nav-wrapper" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">{title}</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
          </ul>

          <ul id="navMobile" className="side-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
          </ul>
          <a href="#" data-activates="navMobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}

export default Header;
