<<<<<<< HEAD
import { View, Text, TouchableOpacity } from "react-native";
=======
import { View, Pressable, Text, Alert } from "react-native";
>>>>>>> ba/button-01
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
    <View className="flex-1 px-4 bg-[#192230] justify-center gap-60">
      <View className="gap-4 items-center justify-center">
        <Logo />
        <View>
          <View>
            <Text className="text-white font-black text-4xl text-center">CHANG OUT</Text>
            <Text className="text-white font-black text-4xl text-center">WITH THE FRIENDS</Text>
          </View>
        </View>
        <Text className="text-white font-semibold text-center text-lg">
          Link up with the friends Experience fun and connection with your favorite app!
        </Text>
      </View>
      <View className="gap-4">
        <TouchableOpacity onPress={()=> router.push("/(auth)/register")} className="w-full py-6 bg-yellow-400 rounded-full">
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full py-6 bg-yellow-400 rounded-full">
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
