import { View, Text, Button, SafeAreaView, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useState } from 'react'
import { InputBox } from '@/components'


const LoginScreen = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // console.log(formData,"hii")

  return (
    <View>
      <SafeAreaView />
      <Text>LoginScreen</Text>

      <InputBox
        label="Display name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
        message="you can use emoji and special characters"
      />

      <InputBox
        label="Username"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        message="eg:user_007"
      />
      <Button title="Register" onPress={() => router.push("/(main-tabs)")} />
    </View>
  )
}

export default LoginScreen