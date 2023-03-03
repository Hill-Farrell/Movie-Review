import './App.css';
import {useState, useEffect} from "react";
import {LeaveReview} from './Form.js';
import Navbar from './components/Navbar.js';
import {Routes, Route} from "react-router-dom";

function MovieList(props){

  return (
    <>
    <ul className='mov'>
      {
        props.fav_movies.map(movie => 
          <div key = {movie.title}>
            <li>{movie.title}<br />
            Release: {movie.release}<br />
            Actors: {movie.actors}<br />
            <img height={200}
            src={movie.image} ></img><br />
            Rating: {movie.rating}<br />
              
            {/* <button>
              Remove
            </button><br /><br /> */}

        </li>
        </div>)
      }
    </ul>
    </>
  )
}

function App() {

  let [movies, setMovies] = useState(null);

  useEffect( () => {
    console.log("Loading Data..");
    fetch("/api/movies")
    .then(response => response.json())
    .then(setMovies)
    .catch(e => console.log(e.message)) 
  }, [])


  if(movies == null){
    return <h1>Loading....</h1>;
  }
  console.log(movies)

  return (
  <>
    <Navbar />
      <div className="container">
        <Routes>
          <Route path = "/" element = {<MovieList fav_movies = {movies} />}/>
          <Route path = "/review" element = {<LeaveReview movies = {movies} setMovies = {setMovies}/>}/>
        </Routes>
      </div>
  </>

  )
}

export default App;
