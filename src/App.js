import React from 'react';
import Main from './pages';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Main}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </>
    );
};

export default App;


