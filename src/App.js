import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Stores from './Components/Stores/Stores'
import SandPSelector from './Components/SandPSelector/SandPSelector'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/storeselector' component={Stores} />
        <Route path='/sorp' component={SandPSelector}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
