import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.actions";
import { topRatedAction } from "@/core/actions/movies/top_rated.actions";
import { upcomingAction } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  //Con todo esto se maneja automaticamente el cache y al consultar este query automaticamente
  // recibimos una respuesta

  const nowPlayingQuery = useQuery({
    //Esto es como nosotros vamos a identificar lo que sea que responda de nuestra promesa
    // o tarea asinctrona, o funcion.
    queryKey: ["movies", "nowPlaying"],
    //En este caso va a aser nuestra accion
    queryFn: nowPlayingAction,
    // Va a mantener fresca la data sin realizar una peticion HTTP durante un periado de tiempo
    // Con esta forma va a mantenerse fresca durante 24 horas. Esto hace que si se vuelve a realizar
    // una consulta, ya vamos a tener la data fresca durante 24 horas.
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useInfiniteQuery({
    // Para usar el infinityQuery, necesitamos llamar a la funcion asi y necesitamos ciertos parametros
    initialPageParam: 1, //requerido
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => topRatedAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24,
    //Tenemos que establecer la siguiente pagina
    //El pages es un array de arrays con peliculas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    upcomingQuery,
    topRatedQuery,
  };
};
