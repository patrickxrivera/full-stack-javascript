import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getIsAuthenticated } from '../../reducers/auth';

class Header extends Component {
  getLink = () => (this.props.isAuthenticated ? '/surveys' : '/');

  renderContent = () => {
    switch (this.props.isAuthenticated) {
      case 'null':
        return 'Loading';
      case false:
        return this.renderLoggedOut();
      default:
        return this.renderLoggedIn();
    }
  };

  renderLoggedOut = () => (
    <li>
      <a href="/auth/google">Login With Google</a>
    </li>
  );

  renderLoggedIn = () => (
    <li>
      <a href="/api/logout">Logout</a>
    </li>
  );

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.getLink()} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(Header);
