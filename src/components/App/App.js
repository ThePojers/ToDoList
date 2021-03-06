import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from  '../FAQ/FAQ';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './app.scss';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

const App = () => (
  
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/search/:phrase" component={SearchResults} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path='/' component={Home} /> 
        <Route exact path='/info' component={Info} />
        <Route exact path='/Faq' component={FAQ} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
  
);

export default App;