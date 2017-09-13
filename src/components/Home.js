// Dependencies
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h1 className="header center orange-text">Challenge React</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive app based on Material Design</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><img src={"images/react.svg"} style={{width: 24+'px', height: 24+'px'}}/></h2>
                  <h5 className="center">React</h5>

                  <p className="light">Developed with reusable components.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><img src={"images/redux.svg"} style={{width: 24+'px', height: 24+'px'}}/></h2>
                  <h5 className="center">Redux</h5>

                  <p className="light">Using Redux to handle an state container.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><img src={"images/materialize.svg"} style={{width: 24+'px', height: 24+'px'}}/></h2>
                  <h5 className="center">Materialize</h5>

                  <p className="light">Modern design with responsive support.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
