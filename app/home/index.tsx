import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={"yellow"} size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* //Esto es otra forma de hacer un safeAreaView. //El safeArea coge el top
      de esa pantalla */}
      <View className="mt-2 pb-20" style={{ paddingTop: safeArea.top }}>
        {/* El px-4 de abajo quizas lo quisieramos en el view de arriba,
            pero hay elementos como el slider que vamos a querer que parezca que 
            la portada de la peli salga de la pantalla, por lo que por eso habra que poner
            el px en todos los elementos que queramos en vez dew en el general */}
        <Text className="text-2xl font-bold px-4 mb-2">HomeScreen</Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          className="mb-5"
          title="Populares"
          movies={popularQuery.data ?? []}
        />
        <MovieHorizontalList
          className="mb-5"
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
        />
        <MovieHorizontalList
          className="mb-5"
          title="Mejores valoradas"
          movies={topRatedQuery.data ?? []}
        />
        <MovieHorizontalList
          className="mb-5 "
          movies={topRatedQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
