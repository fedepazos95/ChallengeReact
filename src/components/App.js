// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header title="App" />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
