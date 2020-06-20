import React, {Component} from "react";
import './app.css'
import {Route, Switch} from "react-router-dom";
import ShopHeader from "../shop-header";
import {CartPage, HomePage} from '../pages'


export default class App extends Component {

    render() {
        return (
            <main role="main" className="container">
                <ShopHeader/>
                <Switch>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </main>
        )
    }
};
