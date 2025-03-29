import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, Platform, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Button, DatePicker, FeatherIcons, InputBox, SelectBox } from "@/components";

export default function CreateAccountScreen() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [displayname, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={verticalScale(100)}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className={`flex-1 px-5 ${Platform.OS === 'ios' ? 'pt-4' : 'pt-6'}`}>
          {/* Header */}
          <View className="mb-7">
            <TouchableOpacity onPress={router.back}>
              <FeatherIcons 
                icon="back-arrow" 
                iconWidth={moderateScale(24)}
                iconHeight={moderateScale(24)}
                iconStrokeColor="white"
              />
            </TouchableOpacity>
            <Text 
              className="text-white font-poppins-bold mt-2"
              style={{ fontSize: moderateScale(24) }}
            >
              Create an account
            </Text>
          </View>

          {/* Form */}
          <View className="flex-1">
            <InputBox
              label="Display Name"
              placeholder="Enter your display name"
              value={displayname}
              onChangeText={setDisplayName}
              className={`mb-4`}
            />
            
            <InputBox
              label="User Name"
              placeholder="Enter your user name"
              value={userName}
              onChangeText={setUserName}
              className={`mb-4`}
            />
            
            <InputBox
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className={`mb-4`}
            />
            
            <DatePicker
              label="Date of Birth"
              value={selectedDate}
              onChange={setSelectedDate}
            />
            
            <SelectBox
              label="Gender"
              value={selectedGender}
              onChange={setSelectedGender}
              placeholder="Select gender"
              options={["Male", "Female", "Other"]}
              error=""
            />
          </View>

          {/* Footer */}
          <View className="mb-12">
            <Button
              text="Continue"
              buttonColor="bg-secondary"
              textColor="text-black"
              onPress={() => alert("hi")}
              className={`rounded-[38px]`}
              textClassName="font-poppins-semibold text-base tracking-wider"
            />
            
            <Text 
              className="text-white text-center mt-4"
              style={{ fontSize: moderateScale(12) }}
            >
              By continuing to create an account I agree to the {' '}
              <Text className="text-secondary">Terms and Conditions and
              Privacy Policy</Text> and that I am at least 18 years of age
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
