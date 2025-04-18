import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, SplashScreen } from "expo-router";
import { Button, DatePicker } from "@/components";
import LOGO from '@/assets/images/loogo2.png';


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
    <View className="flex-1 px-5 bg-primary justify-around">
      <View className="gap-5 items-center justify-center">
        <Image source={LOGO} className="w-36 h-36" />
        <View className="gap-1">
          <View>
            <Text className="text-white font-black text-4xl text-center font-poppins-bold">
              HANG OUT
            </Text>
            <Text className="text-white font-black text-4xl text-center font-poppins-bold">
              WITH THE FRIENDS
            </Text>
          </View>
          <View>
            <Text className="text-white font-semibold text-center text-lg font-poppins-regular">
              Link up with the friends Experience fun and connection with your
              favorite app!
            </Text>
          </View>
        </View>
      </View>
      <View></View>
      <View className="gap-5">
        <Button
          text="Register"
          onPress={() => router.push("/(auth)/register-screen")}
          buttonColor="bg-white rounded-[38px]"
          textColor="text-black font-poppins-semibold"
          textClassName="tracking-wider text-base font-poppins-semibold"
        />
        <Button
          text="Login"
          onPress={() => router.push("/(auth)/login")}
          buttonColor="bg-secondary rounded-[38px]"
          textColor="text-black font-poppins-semibold"
          textClassName="tracking-wider text-base font-poppins-semibold"
        />
      </View>
    </View>
  );
};

export default Welcome;
