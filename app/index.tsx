import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, SplashScreen } from "expo-router";
import { Button, Logo } from "@/components";

const genderOptions = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Other', value: 'other' },
];


const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

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
        <Button text="Register" onPress={() => router.push("/(auth)/register")} />
        <Button text="Register" onPress={() => router.push("/(auth)/register")} />
      </View>
    </View>
  );
};

export default Welcome;
