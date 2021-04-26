import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.scss';
import logo from './assets/img/RecipEAT.svg';
import MenuItems from './components/MenuItems';
/*import Search from './components/Search';*/
import { Button } from './components/Button';

class Header extends Component {
  constructor() {
    super();
    this.state = { clicked: false }
    this.timeOutId = null;

    this.handleClick = this.handleClick.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  handleClick = () => {
    this.setState(currentState => ({ clicked: !this.state.clicked }));
  }
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({ clicked: false });
    });
  }
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <nav>
        <div className="navBar"
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}>
          <Link className="log-url" to="/">
            <img className="logo" src={logo} />
          </Link>
          <Link className="btn-search" to="/resPage">
            <svg class="ico-search" height="16" width="16" viewBox="0 0 24 24" role="img">
              <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 
                  2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 
                  9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 
                  10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 
                  4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
              </path>
            </svg>
            Buscar Recetas
          </Link>
          <div className="menu-icon" onClick={this.handleClick} aria-haspopup="true" aria-expanded={this.state.clicked}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={this.state.clicked ? 'nav-Items active' : 'nav-Items'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>{item.title}</Link>
                </li>
              )
            })}
            <Button><Link className="btn-log" to="/login"> Login</Link></Button>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Header;
