import React, {useEffect, useState, useRef} from 'react';
import  {Link} from "react-router-dom";

export function LeaveReview(props){

    const movieTitle = useRef();
    const movieRelease = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

    const submit = (event) => {
        event.preventDefault();

        const title = movieTitle.current.value;
        movieTitle.current.value = "";

        const release = movieRelease.current.value;
        movieRelease.current.value = "";

        const actors = movieActors.current.value;
        movieActors.current.value = "";

        const rating = movieRating.current.value;
        movieRating.current.value = "";

        props.setMovies(props.movies);

        props.movies.push({"title": title, "release": release, "actors": actors, "rating": rating});

        alert(title + " Added")

    }

    return (
        <>
        <Link to = "/">Home</Link>
        <form onSubmit={submit}>
            <label>Title:</label><br />
            <input 
            ref = {movieTitle}
            type = "text"/><br /><br />
            <label>Release Year:</label><br />
            <input 
            ref = {movieRelease}
            type = "text"/><br /><br />
            <label>Actors:</label><br />
            <input 
            ref = {movieActors}
            type = "text"/><br /><br />
            <label>Rating:</label><br />
            <input 
            ref = {movieRating}
            type = "text"/><br /><br /><br />
            <button>ADD</button>

        </form>
        </>
    )
};