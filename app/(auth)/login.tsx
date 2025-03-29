import React from "react"
import { useState } from "react"
import { View, Text } from "react-native"

import { Button, Header, InputBox } from "@/components"
import { router } from "expo-router"

const LoginScreen = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [tabValue, setTabValue] = useState<string>("phone")

    return (
        <View className='flex-1 bg-[#192230] px-5'>
            <Header />
            <View className="flex-1 gap-10">
                <View className="gap-1">
                    <Text className="font-poppins-semibold text-xl tracking-wider text-white">Welcome back !</Text>
                    <Text className="font-poppins-regular text-xs tracking-wider text-white opacity-50">we are excited to see you again</Text>
                </View>
                <View className="gap-8">
                    <InputBox
                        label="Email or Phone Number"
                        value={email}
                        onChangeText={setEmail}
                        className={`!mb-0`}
                    />
                    <View className="gap-2">
                        <InputBox
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            className={`!mb-0`}
                        />
                        <Text className="font-poppins-regular text-xs tracking-wider text-secondary">Forgot your password ?</Text>
                    </View>
                    <View className="gap-5">
                        <Button
                            text="Next"
                            buttonColor="bg-secondary"
                            textColor="text-black"
                            onPress={() => router.push("/(auth)/otp")}
                            className={`rounded-[38px]`}
                            textClassName="font-poppins-semibold text-base tracking-wider"
                        />
                        <Text className="font-poppins-regular text-xs tracking-wider text-secondary text-center">Login With Passkey</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
