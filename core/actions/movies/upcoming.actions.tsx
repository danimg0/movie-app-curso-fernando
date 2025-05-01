import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/movie-db/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mapper";

export const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/upcoming");
    const movies = data.results.map(MovieMapper.fromMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.log("Ha ocurrido el siguiente error", error);
    throw "No se puede cargar las peliculas proximas";
  }
};
