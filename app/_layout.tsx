import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import * as React from 'react';
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main-tabs)" />
      <Stack.Screen name="(events)" />
    </Stack>
  );
}
