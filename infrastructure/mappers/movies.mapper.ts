import { Movie } from '../interfaces/movie.interface';
import { Result } from '../interfaces/moviedb-response';

//Recibe un objeto movie que proviene de la API y lo transformo en un objeto movie que yo he creado
// con mis propios atributos (nombres cambiados). Este sera el objeto que yo voy usando en mi app
export class MovieMapper {
    static fromMovieDBtoMovie = (movie: Result): Movie => {

        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }

    }
}