import React, { Component } from 'react'
import {connect} from "react-redux";
import UpdateReducerState from '../actions/updateReducerState';
class SearchForm extends Component {
    state={
        title:""
    }
    handleChange = (e)=>{
        this.setState({
            title:e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.update(this.state.title)
        document.getElementById("title").value="";
    }

    render(){
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input className="input-field validate" type="text" id="title" placeholder="Search movies by title..." onChange={this.handleChange}/>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Search<i className="material-icons">search</i></button>
                </form>
            </div>
        )
    }
}




const mapDispatchToProps =(dispatch)=>{
    return{
        update:(title)=>{
            dispatch(UpdateReducerState(title))
        }
    }
} 
export default connect(null,mapDispatchToProps)(SearchForm)