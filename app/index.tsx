import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, SplashScreen } from "expo-router";
import { Button, DatePicker, Logo } from "@/components";


const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
        <Logo />
        <View className="gap-1">
          <View>
            <Text className="text-white font-black text-4xl text-center tracking-wider font-poppins-bold">
              CHANG OUT
            </Text>
            <Text className="text-white font-black text-4xl text-center tracking-wider font-poppins-bold">
              WITH THE FRIENDS
            </Text>
          </View>
          <View>
            <Text className="text-white font-semibold text-center text-lg tracking-wider font-poppins-regular">
              Link up with the friends Experience fun and connection with your
              favorite app!
            </Text>
          </View>
        </View>
      </View>
      <View>
        <DatePicker
          label="Date of birth"
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </View>
      <View className="gap-5">
        <Button
          text="Register"
          onPress={() => Alert.alert("Gender", "Please select your gender")}
          buttonColor="bg-white rounded-[38px]"
          textColor="text-black font-poppins-semibold"
          textClassName="tracking-wider text-base font-poppins-bold"
        />
        <Button
          text="Login"
          onPress={() => router.push("/(auth)/register")}
          buttonColor="bg-secondary rounded-[38px]"
          textColor="text-black font-poppins-semibold"
          textClassName="tracking-wider text-base font-poppins-bold"
        />
      </View>
    </View>
  );
};

export default Welcome;
