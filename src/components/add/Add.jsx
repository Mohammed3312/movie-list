import React, { useEffect, useState } from 'react'
import { ResultCard } from './resultcard/ResultCard';

export const Add = () => {

    const [query , setQuery] = useState('');
    const[results , setResults]=useState([]);
    useEffect(()=>{
        Result();
    },[query])

const onChange = e=>{
    e.preventDefault();
setQuery(e.target.value)
}

const Result = async()=>{
    const response = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
    const data = await response.json();
    // console.log(data)
    if(!data.errors){
        setResults(data.results)
    }else{
        setResults([])
    }
}
// console.log(results)





  return (
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <input type="text"  placeholder='search of a movie' value={query} onChange={onChange}/>
                </div>
                    {results.length > 0 &&(
                        <ul className="results">
                            {results.map(movie=>(
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>
    </div>
  )
}
