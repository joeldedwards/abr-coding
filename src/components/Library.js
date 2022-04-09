import React from 'react'
import '../styles/Library.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { Button } from 'react-bootstrap'

library.add(faPlay);

const Library = (props) => {

    const { movies } = props

    return (
        <main className='container'>
            <section id="library">
                <div className="lib-header">
                    <h2>My Library</h2>
                </div>
                <div className="lib-section">
                {
                    movies.map((movie, index) => (
                        <div 
                            key={index} 
                            className='movie-card'>
                                <div 
                                    className='movie-card-img'>

                                <img 
                                    src={`${movie.Poster}`} 
                                    className='img-fluid' 
                                    alt='' 
                                    />

                                <div className='movie-card-overlay'>
                                    <div className="details">
                                        <h5>{movie.Title}</h5>
                                        <p>
                                            {movie.Director}
                                        </p>
                                        <p>
                                            {movie.Genre}
                                        </p>
                                        <p>
                                            {movie.Released}
                                        </p>
                                    </div>
                                    <Button 
                                        className='play-btn'>
                                    <FontAwesomeIcon 
                                        className='active' 
                                        icon='play' />Play
                                    </Button>
                                </div>
                            </div>
                            <h4>{movie.Title}</h4>
                        </div>
                    ))
                }
                </div>
            </section>
        </main>
    )
}

export default Library