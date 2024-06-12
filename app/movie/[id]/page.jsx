import Image from 'next/image'
import React from 'react'
const API_KEY = process.env.API_KEY


export default async function MoviePage({params}){
    
    // params.id // the id from [id] dynamic folder name
    const movieId = params.id

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    const movie = await response.json()


  return (
    <div className='w-full mt-10'>

        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-8'>

            <Image 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                width={500}
                height={300}
                className='rounded-lg'
            />

            <div className='p-2'>
            
                <h2 className='text-lg mb-3 font-bold text-amber-500'>{movie.title || movie.name}</h2>
            
                <p className='text-lg mb-3'>{movie.overview}</p>
                
                <p className='mb-3'>
                
                    <span className='font-semibold mr-1'>Date Released : </span>
                    <span className='text-amber-500'>{movie.release_date || movie.first_air_date}</span>
                
                </p>
                
                <p className='mb-3'>

                    <span className='font-semibold mr-1'>Rate : </span>
                    <span className='text-amber-500'>{movie.vote_count}</span>
                
                </p> 
            
            </div>

        </div>

    </div>
  )
}

