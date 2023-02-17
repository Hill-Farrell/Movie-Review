import React, {useEffect, useState, useRef} from 'react';
import  {Link} from "react-router-dom";

export function LeaveReview(props){

    const movieTitle = useRef();

    const submit = (event) => {
        event.preventDefault();

        const title = movieTitle.current.value;
        props.movies.push({"title": title});
        props.setMovies(props.movies);

        alert(title);
        movieTitle.current.value = "";

    }

    return (
        <>
        <Link to = "/">Home</Link>
        <form onSubmit={submit}>
            <input 
            ref = {movieTitle}
            type = "text"/>
            <button>ADD</button>

        </form>
        </>
    )
};