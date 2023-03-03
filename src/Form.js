import React, { useRef} from 'react';

export function LeaveReview(props){

    const movieTitle = useRef();
    const movieRelease = useRef();
    const movieActors = useRef();
    const movieRating = useRef();
    const movieImage = useRef();

    // const submit = (event) => {
    //     event.preventDefault();

    //     const title = movieTitle.current.value;
    //     movieTitle.current.value = "";

    //     const release = movieRelease.current.value;
    //     movieRelease.current.value = "";

    //     const actors = movieActors.current.value;
    //     movieActors.current.value = "";

    //     const rating = movieRating.current.value;
    //     movieRating.current.value = "";

    //     const image = movieImage.current.value;
    //     movieImage.current.value = "";

    //     props.movies.push({"title": title, "release": release, "actors": actors, "rating": rating, "image": image});
    //     props.setMovies(props.movies);

    //     alert(title + " Added")

    // }

    return (
        <>
        <form method="post" action="/api/review">
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
            <select ref = {movieImage} name = "image">

            <option value="https://www.etsy.com/img/27475238/r/il/f9eed6/3758942437/il_fullxfull.3758942437_9564.jpg">Shrek</option>
            <option value="https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg">Shrek 2</option>
            <option value="https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg">Shrek the Third</option>
            <option value="https://static.tvtropes.org/pmwiki/pub/images/shrek_the_final_chapter.png">Shrek Forver After</option>
            <option value="https://reeltoreelmovies.files.wordpress.com/2012/12/shrek-the-halls.jpg">Shrek the Halls</option>
            <option value="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg">Default</option>

            </select>
            </div><br />

            <input type="submit" value="Submit" />

        </form>
        </>
    )
};