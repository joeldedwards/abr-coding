import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Library from './components/Library'
import Search from './components/Search'

const App = () => {

  const [ movies, setMovies ] = useState([])
  const [ searchVal, setSearchVal ] = useState('')

  const API_KEY = process.env.REACT_APP_OMDBAPIKEY

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=${API_KEY}`,
          resp = await fetch(url),
          resJSON = await resp.json()

		if (resJSON.Search) {
      setMovies(resJSON.Search)
		}
	}

	useEffect(() => {
		getMovieRequest(searchVal);
	})

  return (
    <div className="App">
      <Header />
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <Library movies={movies} />
      <Footer />
    </div>
  )
}

export default App