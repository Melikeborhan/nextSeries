import React from 'react'
import Image from 'next/image';

const getMovie = async(id) =>{
    const res = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=238b5c10fd9c1b8c48d8e9d48e23c915`)
      return await res.json();
    };

const Page = async({params}) => {
    const id = params.id;

    const movieDetail =await getMovie(id) 


    console.log(movieDetail,"movieDetail");

  return (
    <div className='relative p-7 min-h-screen '>
            <Image  style={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />

            <div className='absolute'>
                <div className='text-3xl my:3 font-bold text-white'>{movieDetail?.title}</div>
                <div className='w-1/2
                 text-white'>{movieDetail?. overview}</div>

            
            </div>
    </div>
  )
}

export default Page