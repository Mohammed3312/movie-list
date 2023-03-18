import React , {useContext} from 'react'
import { Globalstate } from '../../context/Globalstate'
import { Moviecard } from './moviecard/Moviecard';

export const Watchlist = () => {

  const {watchlist} = useContext(Globalstate);
  return (
   <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading"> My Watchlist</h1>
        <span className="count-pill">
      {watchlist.length} {watchlist.length == 1?'movie':'movies' }
        </span>
      </div>
      {watchlist.length > 0 ? ( <div className="movie-grid">
        {watchlist.map((movie)=>(
          <Moviecard movie={movie} type='watchlist' />
        ))}
      </div>)
       : (
        <h2 className='no-movies'> No movies in your list</h2>
       )}

    </div>
   </div>
  )
}
