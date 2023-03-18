import React , {useContext} from 'react'
import { Globalstate } from '../../../context/Globalstate'

export const MovieControls = ({movie , type}) => {

  const {removeFromWatchlist , addMovieToWatched ,removeMovieFromWatched ,removeMovieToWatchlist} = useContext(Globalstate);



  return (
    <div className="inner-card-controls">
        {type === 'watchlist' && (
            <>
            <button className="ctrl-btn" onClick={()=>addMovieToWatched(movie)}>
                <i className="fa-fw far fa-eye"></i>
            </button>
            <button className="ctrl-btn"
            onClick={()=>removeFromWatchlist(movie.id)}>
                <i className="fa-fw fa fa-times"></i>
            </button>
            </>
        )}
        {
          type === 'watched' && (
            <>
            <button className="ctrl-btn" onClick={()=>removeMovieToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
            </button>
            <button className="ctrl-btn" onClick={() => removeMovieFromWatched(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
            </button>
            </>
          )
        }
    </div>
  )
}
