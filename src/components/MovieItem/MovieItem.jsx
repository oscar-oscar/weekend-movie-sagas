import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem({ movie }) {

    const moviesArray = useSelector(store => store.movies);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: 'SET_DETAILS', payload: movie });
        history.push('/details');
    }

    return (

        <div onClick={handleClick}>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </div>
    )

}

export default MovieItem;