import React, { useState } from "react";
import { router } from "expo-router";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, Text, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Button, DatePicker, Header, InputBox, SelectBox } from "@/components";

export default function CreateEventScreenOne() {
  const [titleName, setTitleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-primary ">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={verticalScale(100)}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className={`flex-1 px-5`}>
          <Header />
          {/* Header */}
          <View className="gap-5">
            <Text
              className="text-white font-poppins-regular mt-2"
              style={{ fontSize: moderateScale(24) }}
            >
              Create your event
            </Text>
          </View>
          <View className="flex-1 mt-5 gap-10">
            {/* form */}
            <View className="flex-1">
              <InputBox
                label="Title of Event"
                placeholder="Enter your user name"
                value={titleName}
                onChangeText={setTitleName}
                className={`mb-4`}
                description="you can use emoji and special characters"
              />

              <InputBox
                label="Description of Event"
                placeholder="Enter your description"
                value={description}
                onChangeText={setDescription}
                className={`mb-4`}
                multiline={true}
                height={100}
              />

              <SelectBox
                label="Category"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Select Event category"
                options={["Travel", "Food", "movie"]}
                error=""
              />

              <DatePicker
                label="Date of Birth"
                value={selectedDate || new Date()}
                placeholder="select date and time"
                onChange={setSelectedDate}
                mode="datetime"
              />

              <SelectBox
                label="Location"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Choose location"
                options={["Travel", "Food", "movie"]}
                error=""
              />
            </View>

            {/* Footer */}
            <View className=" flex-1">
              <Button
                text="Next"
                buttonColor="bg-secondary"
                textColor="text-black"
                onPress={() => router.push("/(auth)/create-event-screen-two")}
                className={`rounded-[38px]`}
                textClassName="font-poppins-semibold text-base tracking-wider"
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
