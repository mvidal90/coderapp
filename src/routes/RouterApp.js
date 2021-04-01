import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Cart from '../components/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/navbar/NavBar';

const RouterApp = () => {

    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route path="/category/:id">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <ItemListContainer />
                    </Route>
                </Switch>

                <Redirect to='/' />

            </div>
        </Router>
    );
};

export default RouterApp;
