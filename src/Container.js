import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import AboutUs from "./AboutUs";
import DetailRecipe from "./DetailRecipe";
import LoginReg from "./Login";
import Register from "./components/Register";
import Recipe from "./Recipe";
import ResPage from "./ResPage";
import Result from "./components/Result";


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
                    <Route path='/agregarReceta' component={Recipe} />
                    <Route path='/respage' component={ResPage} />
                    <Route path='/result/' component={Result} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(Container);
