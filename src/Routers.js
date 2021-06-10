
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import {   Redirect } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

import Main2 from "./dashboard/Main2";

import Galery from "./dashboard/Galery";
import Header from "./dashboard/Header";
import history from "./history";

import ContactUs from "./dashboard/ContactUs";
import Prices from "./dashboard/Prices";

import ContactUsMobile from "./dashboard/ContactUsMobile";
import MehironDialog2 from "./dashboard/MehironDialog2";
export default class Routes extends Component {
    render() {
        return (

            <div>
                  
         <Header></Header>
            <Router history={history}>
                
            <Switch>
            <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
                <Route path="/Home" component={Main2}/>
                <Route path="/Contact" component={ContactUs} />
                <Route path="/Prices" component={Prices}/>
                <Route path="/Gallery" component={Galery}/>
                <Route path="/Prices" component={Prices}/>
                <Route path="/Contactme" component={ContactUsMobile}/>
                <Route path="/Pricess" component={MehironDialog2}/>
                
                
            </Switch>
        </Router>
        <br/>
        
        <Grid item>© Christina Tsivileva</Grid>
        </div>
        )
    }
}