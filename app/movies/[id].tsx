import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  ScrollViewBase,
  Pressable,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getMovieByIdAction } from "@/core/actions/movies/movie/get-movie-by-id.action";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/MovieHeader";
import MovieDescription from "@/presentation/components/MovieDescription";
import MovieCast from "@/presentation/components/MovieCast";
import { Ionicons } from "@expo/vector-icons";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  // Gracias a tanStack, si ya tenemos la info de una pelicula, no volvera a lanzar la peticion http
  const { movieQuery, castQuery } = useMovie(+id);
  const movie = movieQuery.data;
  const cast = castQuery.data || [];

  if (movieQuery.isLoading || castQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Cargando</Text>
        <ActivityIndicator color={"purple"} size={30} />
      </View>
    );
  }

  if (movie) {
    return (
      <>
        <View
          style={{
            position: "absolute",
            elevation: 9,
            zIndex: 99,
            top: 10,
            left: 10,
          }}
        >
          <Pressable onPress={() => router.dismiss()}>
            <Ionicons
              name="arrow-back"
              size={30}
              color={"white"}
              className="shadow"
            />
          </Pressable>
        </View>
        <ScrollView>
          <MovieHeader
            originalTitle={movie?.originalTitle}
            poster={movie?.poster}
            title={movie?.title}
          />
          <MovieDescription movie={movie} />
          <MovieCast cast={cast} />
        </ScrollView>
      </>
    );
  }
};

export default MovieScreen;
