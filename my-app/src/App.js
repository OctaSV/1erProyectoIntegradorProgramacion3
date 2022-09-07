import React from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


import {Route, Switch} from 'react-router-dom'
import Home from './components/screens/Home/Home'
import SeeAll from './components/screens/SeeAll/SeeAll'
import NotFound from './components/screens/NotFound/NotFound'


function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/allMovies' component={SeeAll}/>
          {/* <Route path='/allSeries' exact={true} component={SeeAll}/> */}
          <Route path='/favorites' /*component={Favorites}*//>
          <Route path='' component={NotFound}/>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
