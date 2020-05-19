import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
function MovieHolder(props) {
    
    const movies = props.movies.map((movie)=>{
        return(
            <div className="card holder" key={Math.random()*100}>
            <img src={movie.Poster} alt = "poster"/>
            <h1 className="card-title">{movie.Title}</h1>
            <hr/>
        <p className="card-body">Year: {movie.Year}</p>
        <NavLink to={"/singleMovie/"+movie.imdbID}>
        <button className="btn waves-effect waves-light"  name="action">View more</button>
        </NavLink>
        </div>
        )
    })
    if(props.movies.length>0){
        return(
            <React.Fragment>
                {movies}
            </React.Fragment>
        )
    }
  
    else{
        return(
            <div className="card">
                <h3 className="card-title">Oops, we got no movies...</h3>
            </div>
        )
    }



/*
end of function
*/
    }



const mapStateToProps = (state)=>{
    return{
        movies:state.movies.movies
    }
  }
export default connect(mapStateToProps)(MovieHolder)