import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const ImageGrid = (props) => {

    const [docs,setDocs] = useState([])

    const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setDocs(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

    const handleClick = (e) => {
            props.setMovies(null);
            e.stopPropagation();
        }
    
    return (

        <div className="img-grid">
           {docs.map((movie, index) => (
               <motion.div className="img-wrap" key={movie.id}
               layout
               whileHover={{ opacity: 1}}
               onClick = {()=> props.setMovies(movie)}
               >
                <motion.img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="poster pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition = {{ delay: 1 }}
                />

                <div style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content',
                    position:'absolute',
                    color:'black',
                    right: '-20px',
                    top: '-5px',
                    overflow: 'visible'
                    }}
                    onClick={handleClick}>
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH" />}
                        label=""
                    />
                </div>
               </motion.div> 
            ) ) }
            
        </div>

    )

}

export default ImageGrid;