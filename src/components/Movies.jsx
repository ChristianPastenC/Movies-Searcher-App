import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const MovieCard = ({ movie }) => {
  return (
    <div key={movie.imdbID}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary shadow-card p-5 rounded-2xl sm:w-80 w-80'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={movie.image}
            alt='movie_poster'
            className='w-72 h-full object-cover rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-base truncate'>
            {movie.title}
          </h3>
          <p className='mt-2 text-secondary text-sm'>
            {movie.year}
          </p>
        </div>
      </Tilt>
    </div>
  );
};

const ListOfMovies = ({ movies }) => {
  return (
    <div className='mt-20 flex flex-wrap gap-7 justify-center'>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

const NoMoviesResults = () => {
  return (
    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      No se encontraron películas para esta búsqueda
    </motion.p>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
};