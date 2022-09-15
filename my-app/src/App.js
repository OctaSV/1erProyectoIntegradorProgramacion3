import React from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


import {Route, Switch} from 'react-router-dom'
import Home from './components/screens/Home/Home'
import SeeAll from './components/screens/SeeAll/SeeAll'
import MoviesFavs from './components/MoviesFavs/MoviesFavs'
import MovieDetail from './components/MovieDetail/MovieDetail'
import NotFound from './components/screens/NotFound/NotFound'


function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/all/billboard' component={SeeAll}/>
          <Route path='/movie/detail/:id' component={MovieDetail}/>
          <Route path='/all/populars' component={SeeAll}/>
          <Route path='/favorites' component={MoviesFavs}/>
          <Route path='' component={NotFound}/>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
