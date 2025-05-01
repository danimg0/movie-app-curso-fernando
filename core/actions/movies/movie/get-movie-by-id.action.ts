import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie/movie.interface";
import { MoviedbMovieResponseTs } from "@/infrastructure/interfaces/movie-db/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mapper";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MoviedbMovieResponseTs>(`/${id}`);

    const movies = MovieMapper.fromTheMovieDBToCompleteMovie(data);

    return movies;
  } catch (error) {
    console.log("Ha ocurrido el siguiente error", error);
    throw "No se puede cargar las peliculas del momento";
  }
};
