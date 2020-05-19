const initalState = {
    movies:[]
}



const TitleReducer = (state=initalState,action)=>{
    if(action.type === "UPDATE_STATE"){
        if(typeof(action.movies.Search)=="object"){
            return{
                movies:action.movies.Search
             }
        }
        else{
            return{
                movies:[]
            }
        }
       
    }
    return state
}

export default TitleReducer