import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div id="header-div">
            <h1>State Your Case</h1>
          </div>
        </header>
        <div id="nav">
          <NavLink className="route-option pink-font" to="/resources" activeClass="is-active">Resources</NavLink>
          <NavLink className="route-option green-font" to="/survey" activeClass="is-active">Survey</NavLink>
          <NavLink className="route-option blue-font" to="/about" >About</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;