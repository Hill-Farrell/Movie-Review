import React, { useRef} from 'react';

export function LeaveReview(props){

    const movieTitle = useRef();
    const movieRelease = useRef();
    const movieActors = useRef();
    const movieRating = useRef();
    const movieImage = useRef();

    return (
        <>
        <form method="post" action="/api/review" encType="multipart/form-data">
            <label>Title:</label><br />
            <input 
            name = "title"
            ref = {movieTitle}
            type = "text"/><br />
            <label>Release Year:</label><br />
            <input 
            name = "release"
            ref = {movieRelease}
            type = "text"/><br />
            <label>Actors:</label><br />
            <input 
            name = "actors"
            ref = {movieActors}
            type = "text"/><br />
            <label>Rating:</label><br />
            <input 
            name = "rating"
            ref = {movieRating}
            type = "text"/><br /><br />

            <div>
            <label>Image:</label><br />

            <input type="file" name = "movie_poster"/>

            </div><br />

            <input type="submit" value="Submit" />

        </form>
        </>
    )
};