const UpdateReducerState = (title)=>{
    return(dispatch)=>{
     fetch(`http://www.omdbapi.com/?s=${title}&apikey=6c2f984f`)
    .then((res)=>res.json())
    .then(movies=>{
        dispatch({
            type:"UPDATE_STATE",
            movies
        })
    })
    }
}


export default UpdateReducerState;