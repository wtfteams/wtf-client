import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Header } from "@/components";

const RegisterScreen = () => {
  return (
    <View className="flex-1 px-4 gap-10 bg-[#192230]">
      <Header />
      <View className="gap-10">
        <Text className="text-white font-black text-2xl">Choose which works you best.</Text>
        <View className="gap-10">
          <View className="w-full h-10 bg-gray-400 rounded-full"></View>
          <View className="w-full h-16 bg-white rounded-full"></View>
        </View>
      </View>
      <View className="">
        <TouchableOpacity onPress={() => router.push("/(auth)/register")} className="w-full py-6 bg-yellow-400 rounded-full">
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
