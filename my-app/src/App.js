import React from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import {Route, Switch} from 'react-router-dom'
import Home from './components/screens/Home/Home'
import AllMovies from './components/screens/AllMovies/AllMovies'
import MoviesFavs from './components/screens/MoviesFavs/MoviesFavs';
import MovieDetail from './components/screens/MovieDetail/MovieDetail';
import NotFound from './components/screens/NotFound/NotFound'

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/all/billboard' component={AllMovies}/>
          <Route path='/movie/detail/:id' component={MovieDetail}/>
          <Route path='/all/populars' component={AllMovies}/>
          <Route path='/favorites' component={MoviesFavs}/>
          <Route path='' component={NotFound}/>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
