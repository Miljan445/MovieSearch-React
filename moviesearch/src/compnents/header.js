import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Header extends Component {
    render() {
        return (
            <div className = "header">
                <h1>Movie Search App</h1>
                <Link to="/movie"><h4>Search for movies</h4></Link>                
            </div>
        )
    }
}

export default Header
