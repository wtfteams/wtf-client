import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: '#fffff' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="create-account-screen" />
      <Stack.Screen name="avatar-screen" />
      <Stack.Screen name="friend-suggestion-screen" />
      <Stack.Screen name="interest-screen" />
    </Stack>
  );
};

export default AuthLayout;
