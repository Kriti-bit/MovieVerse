import React from 'react'
import { motion } from 'framer-motion';

const Modal = ({selectedMovie, setMovies }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
           setMovies(null); 
        }
    }

    return(
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={"https://image.tmdb.org/t/p/w500/"+selectedMovie.backdrop_path} alt="enlarged pic" 
                initial={{ y: "-100vh" }}
                animate={{ y:0}}
            />
            <div className="modal-content">
                 <h1>{selectedMovie.original_title}</h1>
                 🗓️<u>Released:</u> {selectedMovie.release_date}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ⭐<u>Voting:</u> {selectedMovie.vote_average} 
                 <br/><br/>
                {selectedMovie.overview}
                
            </div>
        </motion.div>
    )

}

export default Modal;