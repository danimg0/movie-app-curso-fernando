// Este archivo es para funciones

import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/movie-db/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/now_playing");

    //Cogemos el result de la data y los mapeamos a traves de nuestro mapper
    //Con esto tenemos nuestras movies como nosotros queremos
    const movies = data.results.map(MovieMapper.fromMovieDBtoMovie);
    // Esto de aqui abajo es lo mismo que lo de arriba
    // const movies = data.results.map(() => MovieMapper.fromMovieDBtoMovie(movie))

    // console.log(JSON.stringify(movies, null, 2))
    return movies;
  } catch (error) {
    console.log("Ha ocurrido el siguiente error", error);
    throw "No se puede cargar las peliculas del momento";
  }
};
