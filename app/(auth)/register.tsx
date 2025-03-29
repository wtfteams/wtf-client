import React from "react"
import { useState } from "react"
import { View, Text } from "react-native"

import TabBar from "@/components/form-elements/TabBar"
import { Button, Header, InputBox } from "@/components"
import { router } from "expo-router"

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [tabValue, setTabValue] = useState<string>("phone")

  const tabData = [
    { value: "phone", name: "Phone" },
    { value: "email", name: "Email" }
  ]

  const displayInputBox = () => {
    switch (tabValue) {
      case "email":
        return (
          <InputBox
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="!mb-0"
          />
        )
      case "phone":
        return (
          <InputBox
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            className="!mb-0"
          />
        )
      default:
        return null
    }
  }

  return (
    <View className='flex-1 bg-[#192230] px-5'>
      <Header />
      <View className="flex-1 gap-10">
        <Text className="font-poppins-semibold text-xl tracking-wider text-white">Choose which works you best.</Text>
        <View className="gap-8">
          <TabBar
            tabData={tabData}
            setTabValue={setTabValue}
            tabValue={tabValue}
          />
          {displayInputBox()}
          <Button
            text="Next"
            buttonColor="bg-secondary"
            textColor="text-black"
            onPress={() => router.push("/(auth)/otp")}
            className={`rounded-[38px]`}
            textClassName="font-poppins-semibold text-base tracking-wider"
          />
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen;
