import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from  '../FAQ/FAQContainer';

const App = () => (
  
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} /> 
        <Route exact path='/info' component={Info} />
        <Route exact path='/Faq' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
  
);

export default App;