"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const Movies = ( {dt} ) => {

  const router = useRouter();

  console.log(dt,"dt")
  return (
  <>
  <div  className='mt-8' >
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[400px] relative imgContainer cursor-pointer'> 
            <Image  style={{objectFit:'cover'}} width={500} height={300}  src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 transition-opacity hover:opacity-100'>
              <div className='text-3xl text-white font-bold '>{dt?.title}</div>
              <div className='text-3xl text-white font-bold'>{dt?.release_date} - {dt?. vote_average}</div>
            </div>
    </div>
    </div>

    </>
  )
}

export default Movies