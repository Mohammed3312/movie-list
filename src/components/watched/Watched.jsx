import React , {useContext} from 'react'
import { Globalstate } from '../../context/Globalstate'
import { Moviecard } from '../Watchlist/moviecard/Moviecard'

export const Watched = () => {
  const {watched} = useContext(Globalstate);

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading"> Watched Movies</h1>
        <span className="count-pill">
      {watched.length} {watched.length == 1?'movie':'movies' }
        </span>
      </div>
      {watched.length > 0 ? ( <div className="movie-grid">
        {watched.map((movie)=>(
          <Moviecard movie={movie} type='watched' />
        ))}
      </div>)
       : (
        <h2 className='no-movies'> No movies in your list</h2>
       )}
    </div>
   </div>
  )
}
