import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  //Mucho mejor esto que las DImensions
  const width = useWindowDimensions().width;

  return (
    <View className="h-[200px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        //Cada tarjeta va a tener un ancho de 200 (150 + 50)
        width={200}
        // El alto de la tarjeta
        height={250}
        //El Carusel al ser un elemento externo no permite el className
        style={{
          width: width,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideshow;
