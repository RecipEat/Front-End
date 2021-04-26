import React from 'react';
import { Link } from 'react-router-dom';

import RecipEAT from '../../assets/img/RecipEAT.svg';

import '../../css/styles.scss';

const RegisterForm = ({ containerRef }) => {

  return (
    <div className="app-container">
      <div className="login">
        <div className="container-login">
          <div className="base-container" ref={containerRef}>
            <div className="header">Register</div>
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
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password" />
                </div>
              </div>
            </div>
            <div className="footer-btn">
              <button type="submit" className="btn-login">
                Register
            </button>
              <div className="box-register">
                <Link className="btn-register" to='/login'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;