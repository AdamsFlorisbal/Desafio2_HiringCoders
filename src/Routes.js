import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Clientes from './pages/Clientes'
import Produtos from './pages/Produtos'
import Home from './pages/Home'

export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Clientes">
                <Clientes/>
            </Route>
            <Route exact path="/Produtos">
                <Produtos/>
            </Route>
        </Switch>
    );
}