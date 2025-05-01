import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import React, { useEffect, useRef } from "react";
import MoviePoster from "./MoviePoster";
import { Movie } from "@/infrastructure/interfaces/movie/movie.interface";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => {};
}

const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    // Contentsize es el cotnenido que nosotrmos tenemos
    // El layoutMeasurement es lo que nosotros estamos viendo en pantalla
    // El contentOffSet es la posicion que nosotros nos encontramos actualmente en el scroll
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Con esta variable determinamos cuando estamos llegando al final.
    // Esto es para determinar si estamos cerca del final del scroll
    const isEndReached =
      // Si esto es mayor o igual al width, es que estamos cerca del final o vamos a llegar
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;
    // Si llegamos al final, ponemos esto en true para evitar que si empieza
    // a hacer scroll, no se vuelva a disparar todo el onScroll
    //Si las pelis nunca cambian esto siempre va a estar en true
    //pero si las pelis cambian, se va a disparar el efecto y esto se pondra a false
    isLoading.current = true;

    //TODO
    console.log("Cargar siguientes pelis");
    //Otra forma de hacer lo del useeffect seria aqui poner un await en el loadNextPage
    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${className}`}>
      {title ? (
        <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>
      ) : null}
      <FlatList
        horizontal
        contentContainerStyle={{ gap: 20 }}
        // ItemSeparatorComponent={() => <View style={{ width: 15 }} />} Esto esta ya desactualizado
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
