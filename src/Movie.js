import React/*, { Component }*/ from 'react';
import PropTypes from "prop-types";
import  LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

/*
class Movie extends Component {
    // prop으로 넘어온 데이터들의 타입과 required를 설정해 줄 수 있음
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render() {
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}*/

/*
class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        return(
            // eslint-disable-next-line
            <img src={this.props.poster} alt="Movie Poster"/>
        );
    }
}
*/

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        // eslint-disable-next-line
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
};

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
};


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;