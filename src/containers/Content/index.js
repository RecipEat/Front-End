import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LINKS from '../../enums/Links';
import Home from '../../pages/Home';
import AboutUs from '../../pages/AboutUs';
import DetailRecipe from '../../pages/DetailRecipe';
import LoginReg from '../../pages/Login';
//import Register from '../../components/Register';
import Recipes from '../../pages/Recipes';
import ResPage from '../../pages/ResPage';
import Result from '../../components/Result';


function Content({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key}
        timeout={{ enter: 300, exit: 300 }}>
        <Switch location={location}>
          <Route exact path={LINKS.HOME} component={Home} />
          <Route path={LINKS.ABOUT} component={AboutUs} />
          <Route path={LINKS.DETAILS} component={DetailRecipe} />
          <Route path={LINKS.LOGIN} component={LoginReg} />
          {/*<Route path={LINKS.SIGN_IN} component={Register} /> */}
          <Route path={LINKS.ADD_RECIPES} component={Recipes} />
          <Route path={LINKS.RESPAGE} component={ResPage} />
          <Route path={LINKS.SEARCH} component={Result} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Content);