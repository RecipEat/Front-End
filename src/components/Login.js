import React from "react";
import RecipEAT from '../assets/img/RecipEAT.svg';
import { Link } from "react-router-dom";
import "../css/styles.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={RecipEAT} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <button type="submit" className="btn-login">
            Login
          </button>
          <div className="box-register">
            <Link className="btn-register" to='/register'>Registrar</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;