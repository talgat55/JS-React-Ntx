import React from 'react';
import Main from './pages';
import { Switch, Route } from 'react-router-dom';
const  App = () => {
  return (
    <>
      <Switch>
          <Route  path="/"  component={Main}/>
          
      </Switch>
    </>
  );
};

export default App;
