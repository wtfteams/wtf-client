import { View, Pressable, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, SplashScreen } from "expo-router";
import { Button, Logo } from "@/components";

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
    <View className="flex-1 items-center justify-center bg-[#192230] space-y-8 px-5">
      <Logo size={150} />
      <Button
        text="Continue"
        onPress={() => Alert.alert("Hello")}
        buttonColor="bg-secondary"
        textColor="text-black"
        className="w-full py-6 rounded-[38px]"
        textClassName="!font-semibold"
      />
    </View>
  );
};

export default Welcome;
