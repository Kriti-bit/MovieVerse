import React from 'react'
import { motion } from 'framer-motion'

const ImageGrid = (props) => {
    
    return (

        <div className="img-grid">
           {props.movies.map((movie, index) => (
               <motion.div className="img-wrap" key={movie.id}
               layout
               whileHover={{ opacity: 1}}
               //onClick = {()=> setMovies(movie.url)}
               >
                <motion.img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="poster pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition = {{ delay: 1 }}
                />
               </motion.div> 
            ) ) }
        </div>

    )

}

export default ImageGrid;