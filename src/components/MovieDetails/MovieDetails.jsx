import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
    const history = useHistory();
    const movieDetails = useSelector(store => store.details);
   
// here: useEffect to fetch genres


return (
     <div>{JSON.stringify(movieDetails)}</div>
    
)
}





export default MovieDetails;