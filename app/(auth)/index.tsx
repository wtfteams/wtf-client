import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { InputBox } from '@/components'

const LoginScreen = () => {
  return (
    <View>
      <SafeAreaView />
      <Text>LoginScreen</Text>
      {/* <CustomInput
        placeholder="Enter your email"
        value={email}
        setValue={setEmail}
      /> */}
      <Button title="Register" onPress={() => router.push("/(main-tabs)")} />
    </View>
  )
}

export default LoginScreen