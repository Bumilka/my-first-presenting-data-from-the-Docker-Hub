import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/index'
import Stats from './pages/Stats/index';
import Header from './layout/Header/index';
import Footer from './layout/Footer/index';


export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/stats' component={Stats} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};