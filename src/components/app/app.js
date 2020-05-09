import React, {Component} from "react";
import './app.css'
import {Route, Switch} from "react-router-dom";
import ShopHeader from "../shop-header";
import {CartPage, HomePage} from '../pages'


export default class App extends Component {

    render() {
        return (
            <main role="main" className="container">
                <ShopHeader numItems={5} total={300}/>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/cart" component={CartPage}/>
                </Switch>
            </main>
        )
    }
};