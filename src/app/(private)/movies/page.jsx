import React from 'react'

const Movies = async ({params}) => {
  const {movieId}= await params;
  return (
    <div>Movies</div>
  )
}

export default Movies