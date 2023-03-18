import React, { createContext , useReducer , useEffect } from "react";
import Appreducer from "./Appreducer";



// intial state

const intailState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [] ,
    watched : localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],
};


// create context
export const Globalstate = createContext(intailState);


// provider

export const Globalstateprovider = (props) => {
const [state , dispatch] = useReducer(Appreducer , intailState );

useEffect(()=>{
    localStorage.setItem('watchlist' ,JSON.stringify(state.watchlist));
    localStorage.setItem('watched' ,JSON.stringify(state.watched));
},[state])




// actions
const addMovieToWatchlist = movie=>{
    dispatch({type:'ADD_MOVIE_TO_WATCHLIST' , payload : movie})
}

const removeFromWatchlist = id =>{
    dispatch({type:'REMOVE_FROM_WATCHLIST' , payload:id})
}

const addMovieToWatched = movie =>{
    dispatch({type:'ADD_MOVIE_TO_WHATCED' , payload:movie})
}

const removeMovieFromWatched = id =>{
    dispatch({type:'REMOVE_MOVIE_FROM_WATCHED' , payload:id})
}
const removeMovieToWatchlist = movie=>{
    dispatch({type:'REMOVE_MOVIE_TO_WATCHLIST' , payload:movie})
}




const value = {watchlist: state.watchlist ,
    watched: state.watched 
   , addMovieToWatchlist , removeFromWatchlist  , addMovieToWatched , removeMovieFromWatched , removeMovieToWatchlist}

return(
<Globalstate.Provider value={value}>
    {props.children}
</Globalstate.Provider>
)
}