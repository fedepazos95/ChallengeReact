// Dependencies
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container red lighten-5">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">React Challenge</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end app based on Material Design</h5>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
