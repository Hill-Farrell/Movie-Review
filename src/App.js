import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {LeaveReview} from './Form.js';
import {Routes, Route, Link} from "react-router-dom";

function MovieList(props){
  return (
    <>
    <Link to = "/review">Review</Link>
    <ul>
      {
        props.fav_movies.map(movie => <li>{movie.title}<br />Release: {movie.release}<br />Actors: {movie.actors}<br />Rating: {movie.rating}</li>)
        
      }
    </ul>
    </>
  )
}

function App() {

  let [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("./movies.json")
    .then(response => response.json())
    .then(setMovies)
    .catch(e => console.log(e.message)) 
  }, [])


  if(movies == null){
    return <h1>Loading....</h1>;
  }
  console.log(movies)

  return (
    <Routes>
      <Route path = "/" element = {<MovieList fav_movies = {movies} />}/>
      <Route path = "/review" element = {<LeaveReview movies = {movies} setMovies = {setMovies}/>}/>
    </Routes>
  )

  


}

export default App;
