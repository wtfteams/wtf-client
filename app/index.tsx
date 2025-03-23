import { View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, SplashScreen } from "expo-router";
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
    <View className="flex-1 items-center justify-center bg-[#192230] space-y-8 px-5">
      <Logo size={150} />
      <Button
        text="Continue"
        onPress={() => Alert.alert("Hello")}
        buttonColor="bg-secondary"
        textColor="text-black"
        className="w-full py-6 rounded-[38px]"
        textClassName="font-poppins-semibold"
      />
    </View>
  );
};

export default Welcome;
