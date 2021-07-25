import React, { useState, useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title'

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		
    <div className="App">
      <Title/>
				<ImageGrid movies={movies} />
		</div>
	);
};

export default App;
