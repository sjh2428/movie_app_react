import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() => render() => componentDidMount()

  // Update: componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

  state = {}

  // 
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}/>
    });
    return movies;
  }

  _getMovies = async() => {
    const movies = await this._callApi(); // 성공을 기다리는 것이 아닌 끝나기를 기다림
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json()) // fetch의 결과로 하나의 Attribute만 response로 반환
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
