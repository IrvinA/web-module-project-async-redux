import React from 'react';
import { Route, Switch } from "react-router-dom";

import AppHeader from './components/appHeader'; 
import Home from './components/home';
import Anime from './components/anime';
import Manga from './components/manga';

import './styles.css'

function App() {
  return (
    <div className='container'>
      <div className='app-header'>
        <AppHeader />
      </div>
      <div className='search'>
        <Switch>
          <Route path='/manga'>
            <Manga />
          </Route>
          <Route path='/anime'>
            <Anime />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
