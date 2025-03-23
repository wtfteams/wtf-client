import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import * as React from "react";
import "../global.css";
import { SafeAreaView, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View className="flex-1 bg-[#192230]">
      <SafeAreaView/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main-tabs)" />
        <Stack.Screen name="(events)" />
      </Stack>
    </View>
  );
}
