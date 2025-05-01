import { movieApi } from "@/core/api/movie-api";
import {
  CreditsDBResponse,
  MovieDBCast,
} from "@/infrastructure/interfaces/movie-db/credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";
import { CastEntity } from "@/infrastructure/interfaces/movie/cast.interface";

export const getCastByMovieIdAction = async (movieId: number | string) => {
  try {
    const { data } = await movieApi.get<CreditsDBResponse>(
      `/${movieId}/credits`
    );

    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return cast;
  } catch (error) {
    console.log("Ha ocurrido el siguiente error", error);
    throw "No se puede cargar las peliculas del momento";
  }
};
