import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/movie-db/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mapper";

interface Props {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Props) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/top_rated", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromMovieDBtoMovie);

    return movies;
  } catch (error) {
    console.log("Ha ocurrido el siguiente error", error);
    throw "No se puede cargar las peliculas proximas";
  }
};
