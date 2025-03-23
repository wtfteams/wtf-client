import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Header, InputBox, SelectBox } from "@/components";
import { useState } from "react";

const RegisterScreen = () => {

  const [formData, setFormData] = useState({
    name: "",
    gender: "Male",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log(formData.gender)

  return (
    <View className="flex-1 px-4 gap-10 bg-[#192230]">
      <Header />
      <View className="gap-10">
        <Text className="text-white font-black text-2xl">Choose which works you best.</Text>
        <View className="gap-10">
          <View className="w-full h-10 bg-gray-400 rounded-full"></View>
          <View className="w-full h-16 bg-white rounded-full"></View>
        </View>
      </View>

      <InputBox
        label="Display name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
        message="you can use emoji and special characters"
      />

      <SelectBox
        label="Select Gender"
        selectedValue={formData.gender}
        onValueChange={(value) => handleChange("gender", value)}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />

      <View className="">
        <TouchableOpacity onPress={() => router.push("/(auth)/otp")} className="w-full py-6 bg-yellow-400 rounded-full">
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
