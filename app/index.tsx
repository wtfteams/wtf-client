import { View, Pressable, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, SplashScreen } from "expo-router";
import { Logo } from "@/components";


const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(false);
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }, 1000);
  }, []);

  if (isLoggedIn) {
    return <Redirect href={"/(main-tabs)"} />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#192230] space-y-8">
      {/* <Logo size={150} />
      <Pressable
        className="bg-white px-6 py-3 rounded-full"
        onPress={() => router.push("/(auth)")}
      >
        <Text className="text-[#192230] font-semibold text-lg">
          Get Started
        </Text>
      </Pressable> */}

      
    </View>
  );
};

export default Welcome;
