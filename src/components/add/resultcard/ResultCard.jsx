import React , {useContext} from 'react'
import { Globalstate } from '../../../context/Globalstate'

export const ResultCard = ({movie}) => {
    const{ addMovieToWatchlist , watchlist , watched , addMovieToWatched} = useContext(Globalstate);
    let storedMovie = watchlist.find(o => o.id === movie.id);
    let storedMoviee = watched.find(o => o.id === movie.id);
    const watchlistDisabled = storedMovie || storedMoviee ? true :false ; 

    const watchedDisable = storedMoviee ? true : false;
  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}poster`} />
            ): (
                <div className="filler-poster"></div>
            )
            }
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">
                    {movie.title}
                </h3>
                <h4 className="release-date">
                {movie.release_date.substring(0,4)}
            </h4>
            </div>
            <div className="controls">
                <button className='btn' onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistDisabled}> Add to watchlist</button>
                <button className='btn' onClick={()=>addMovieToWatched(movie)} disabled={watchedDisable}> Add to watched</button>
            </div>
        </div>
    </div>
  )
}
