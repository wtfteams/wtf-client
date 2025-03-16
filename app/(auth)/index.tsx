import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const LoginScreen = () => {
  return (
    <View>
      <SafeAreaView />
      <Text>LoginScreen</Text>
      <Button title="Register" onPress={() => router.push("/(main-tabs)")} />
    </View>
  )
}

export default LoginScreen