import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import * as React from 'react';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold 
} from "@expo-google-fonts/poppins";

import "../global.css";
import { SafeAreaView, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 ">
      <SafeAreaView className="bg-primary"/>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main-tabs)" />
        <Stack.Screen name="(events)" />
      </Stack>
    </View>
  );
}
