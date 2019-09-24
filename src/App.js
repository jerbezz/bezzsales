import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Stores from './Components/Stores/Stores'
import SandPSelector from './Components/SandPSelector/SandPSelector'
import Sale from './Components/Sale/Sale'
import Purchase from './Components/Purchase/Purchase'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/storeselector' component={Stores} />
        <Route path='/sorp' component={SandPSelector}/>
        <Route path='/sale' component={Sale}/>
        <Route path='/purchase' component={Purchase}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
