import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import DetailRecipe from "./components/DetailRecipe";
import LoginReg from "./Pages/Login";
import Register from "./components/Register";
import Recipes from "./Pages/Recipes";
import ResPage from "./Pages/ResPage";
import Result from "./components/Result";
import BadgeForm from "./components/BadgeForm";


function Container({ location }) {
    return (
        <TransitionGroup>
            <CSSTransition key={location.key}
            timeout={{ enter:300, exit:300 }}>
                <Switch location={ location }>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={AboutUs} />
                    <Route path='/detail' component={DetailRecipe} />
                    <Route path='/login' component={LoginReg} />
                    <Route path="/register" component={Register} />
                    <Route path='/recipes' component={Recipes} />
                    <Route path='/respage' component={ResPage} />
                    <Route path='/result/' component={Result} />
                    <Route path='/formtest/' component={BadgeForm} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(Container);
