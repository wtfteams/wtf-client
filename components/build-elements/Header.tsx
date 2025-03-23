import React from "react";
import { TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View className="w-full h-20 flex-row items-center justify-between">
      <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 rounded-full bg-white"></TouchableOpacity>
    </View>
  );
}