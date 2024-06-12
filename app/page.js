const API_KEY = process.env.API_KEY
import Results from '@/components/Results'
import React from 'react'


export default async function Home ({searchParams}) {

  const genre = searchParams.genre || "fetchTrending"

  const response = await fetch(`https://api.themoviedb.org/3${genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`)
  const data = await response.json()

  const results = data.results

  return (
    <div>
      <Results results={results}/>
    </div>
  )
  
}

