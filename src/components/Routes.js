import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './MainPage.js';
import ResultPage from './ResultPage.js';

export default function Routes() {
    return (
        <Switch> 
            <Route path='/' exact component={ MainPage } />
            <Route path='/result' exact component={ ResultPage } />
        </Switch>
    )
}