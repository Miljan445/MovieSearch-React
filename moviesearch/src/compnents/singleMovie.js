import React, { Component } from 'react'

 class SingleMovie extends Component {
     state={
         Poster:"",
         Title:"",
         Year:"",
         Released:"",
         Runtime:"",
         Plot:""
     }
     componentDidMount(){
        fetch(`http://www.omdbapi.com/?i=${this.props.match.params.id}&plot=full&apikey=6c2f984f`)
        .then((res)=>res.json())
        .then((movie)=>
        this.setState({
            Poster:movie.Poster,
            Title:movie.Title,
            Year:movie.Year,
            Released:movie.Released,
            Runtime:movie.Runtime,
            Plot:movie.Plot
        })
        )
     }
     render(){
         console.log(this.state)
        return (
            <div className="card" key={Math.random()*10}>
                <img src={this.state.Poster} alt="poster" />
                <h1 className="card-title">{this.state.Title}</h1>
                <hr/>
        <p className="card-body">Year: {this.state.Year}</p>
        <p className="card-body">Released: {this.state.Released}</p>
        <p className="card-body">Runtime: {this.state.Runtime}</p>
        <h3>Plot</h3>
        <p className="card-body">{this.state.Plot}</p>
        <button onClick={()=>{this.props.history.push("/movie")}}className="btn waves-effect waves-light">Back</button>

            </div>
        )
     }
}

export default SingleMovie