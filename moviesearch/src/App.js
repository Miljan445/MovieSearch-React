import React, { Component } from 'react';
import './App.css';
import Header from "./compnents/header"
import SearchForm from "./compnents/searchForm"
import {connect} from 'react-redux'
import MovieHolder from './compnents/movieHolder';
import {BrowserRouter,Route} from "react-router-dom"
import SingleMovie from './compnents/singleMovie';

class  App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
        <Route path="/movie" component={SearchForm} />
        <Route path="/movie" component={MovieHolder} />
        <Route path="/singleMovie/:id" component={SingleMovie} />
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state)=>{
  
  return{
    title:state.title
  }
}
export default connect(mapStateToProps)(App);
