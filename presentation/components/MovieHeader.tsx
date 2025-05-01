import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ originalTitle, title, poster }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      <View
        style={{
          height: screenHeight * 0.7,
        }}
        //Esto no me funciona
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image src={poster} resizeMode="stretch" className="flex-1" />
        </View>
        <View className="px-5 mt-5">
          <Text className="font-normal">{title}</Text>
          <Text className="font-semibold text-2cl">{originalTitle}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
