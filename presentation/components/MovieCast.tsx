import { View, Text, FlatList } from "react-native";
import React from "react";
import { CastEntity } from "@/infrastructure/interfaces/movie/cast.interface";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: CastEntity[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-5">
      <Text className="font-bold text-2xl px-5">Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      ></FlatList>
    </View>
  );
};

export default MovieCast;
