import React from 'react';
import { useMovies } from '../hooks/useMovies';
import { Movies } from './Movies';
import { SectionWrapper } from '../hoc';
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import debounce from 'just-debounce-it';
import { useSearch } from '../hooks/useSearch';
import { styles } from '../styles';

import * as aux from '../mocks/with-results.json';

const MovieSearcher = () => {
    const [sort, setSort] = useState(false)

    const { search, updateSearch, error } = useSearch();
    const { movies, loading, getMovies } = useMovies({ search, sort });

    const debouncedGetMovies = useCallback(
        debounce(search => {
            console.log('search', search);
            getMovies({ search });
        }, 300)
        , [getMovies]
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies({ search });
    }

    const handleSort = () => setSort(!sort);

    const handleChange = (event) => {
        const newSearch = event.target.value;
        updateSearch(newSearch);
        debouncedGetMovies(newSearch);
    }

    return (
        <div className='page'>
            <header>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} `}>Searcher</p>
                    <h2 className={`${styles.sectionHeadText}`}>Movies Searcher</h2>
                </motion.div>

                <div className='w-full flex'>
                    <motion.p
                        variants={fadeIn('', '', 0.1, 1)}
                        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        The OMDb API is an ideal tool for practicing website development.
                        It is a public API that is easy to access and functions as a
                        RESTful web service. It provides detailed information about movies,
                        related content, as well as their images and covers.
                        It makes possible to access a wide variety of data, including
                        both old and current movies and the OMDb API is created and
                        managed by the users themselves.&nbsp;
                        <span className='underline'>
                            <a href='https://www.omdbapi.com'>OMDb</a>
                        </span>
                    </motion.p>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='relative mt-8'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                            <button type='submit' className='p-1 focus:outline-none focus:ring'>
                                <svg fill='currentColor' viewBox='0 0 512 512' className='w-4 h-4'>
                                    <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type='search'
                            className={`${styles.sectionSubText} w-80 py-2 pl-10 mr-2 text-sm rounded-md focus:outline-none`}
                            onChange={handleChange}
                            value={search}
                            name='query'
                            placeholder='Star Wars, The Matrix...'
                        />
                        <input type='checkbox' onChange={handleSort} checked={sort} />
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <div>
                {
                    loading ? <p>Cargando...</p> : <Movies movies={movies} />
                }
            </div>
        </div>
    );
}
export default SectionWrapper(MovieSearcher, 'searcher');