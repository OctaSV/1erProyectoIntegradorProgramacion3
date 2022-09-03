import React from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


import {Route, Switch} from 'react-router-dom'
import Home from './components/screens/Home/Home'
import NotFound from './components/screens/NotFound/NotFound'


function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/films' /*component={Films}*//>
          <Route path='/series' /*component={Series}*//>
          <Route path='/favorites' /*component={Favorites}*//>
          <Route path='' component={NotFound}/>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
