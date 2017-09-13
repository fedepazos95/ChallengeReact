// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '© 2017 Federico Pazos' } = this.props;

    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Links</h5>
							<ul>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/federicopazos/" target="_blank">Linkedin</a></li>
                <li><a className="grey-text text-lighten-3" href="https://github.com/fedepazos95" target="_blank">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            {copyright}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
