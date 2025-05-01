import { View, Text, FlatList } from "react-native";
import React from "react";
import MoviePoster from "./MoviePoster";
import { Movie } from "@/infrastructure/interfaces/movie.interface";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MovieHorizontalList = ({ title, movies, className }: Props) => {
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
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
