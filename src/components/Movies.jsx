import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const MovieCard = ({ movie, idx }) => {
  return (
    <motion.div
      // variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}
      key={movie.imdbID}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={movie.Poster}
            alt='movie_poster'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {movie.Title}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {movie.Year}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ListOfMovies = ({ movies }) => {
  return (
    <div className='mt-20 flex flex-wrap gap-7'>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} idx={index} />
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

const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
};

export default Movies;