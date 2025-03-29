import React from "react"
import { useState } from "react"
import { router } from "expo-router"
import { View, Text } from "react-native"
import { Header, InputBox } from "@/components"

const RegisterScreen = () => {
  return (
    <View className='flex-1 bg-[#192230] px-5'>
      <Header />
      <View className="flex-1 gap-10">
        <Text className="font-poppins-semibold text-xl tracking-wider text-white">Choose which works you best.</Text>
        <View className="gap-5">
            {/* <InputBox value="" onChangeText={() => {}} placeholder="Email" /> */}
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen;
