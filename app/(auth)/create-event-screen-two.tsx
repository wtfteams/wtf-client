import React, { useState } from "react";
import { router } from "expo-router";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, Text, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Button, DatePicker, Header, InputBox, SelectBox } from "@/components";
import TabBar from "@/components/form-elements/TabBar";

export default function CreateEventScreenTwo() {
  const [titleName, setTitleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const tabData = [
    { value: "Free", name: "Free" },
    { value: "Paid", name: "Paid" },
  ];
  const [tabValue, setTabValue] = useState<string>("Free");

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
              Customize your event
            </Text>
          </View>
          <View className="flex-1 mt-5 gap-10">
            {/* form */}
            <View className="flex-1 gap-4">
              <View>
                <TabBar
                  tabData={tabData}
                  setTabValue={setTabValue}
                  tabValue={tabValue}
                />
              </View>
              <SelectBox
                label="Upload Images"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Select Event category"
                options={["Travel", "Food", "movie"]}
                startIcon="image-upload"
                iconHeight={24}
                iconWidth={24}
                // iconFillColor= "#2C2F38"
                // iconStrokeColor= "#3D474E"
                error=""
              />
              <SelectBox
                label="Pick Group Size"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Select Event category"
                options={["Travel", "Food", "movie"]}
                startIcon="image-upload"
                iconHeight={24}
                iconWidth={24}
                // iconFillColor= "#2C2F38"
                // iconStrokeColor= "#3D474E"
                error=""
              />
               <SelectBox
                label="Choose a Color for Your Event"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Select Event category"
                options={["Travel", "Food", "movie"]}
                startIcon="image-upload"
                iconHeight={24}
                iconWidth={24}
                // iconFillColor= "#2C2F38"
                // iconStrokeColor= "#3D474E"
                error=""
              />
               <SelectBox
                label="Add a Rule"
                value={selectCategory}
                onChange={setSelectCategory}
                placeholder="Select Event category"
                options={["Travel", "Food", "movie"]}
                startIcon="image-upload"
                iconHeight={24}
                iconWidth={24}
                // iconFillColor= "#2C2F38"
                // iconStrokeColor= "#3D474E"
                error=""
              />
            </View>

            {/* Footer */}
            <View className=" flex-1">
              <Button
                text="Next"
                buttonColor="bg-secondary"
                textColor="text-black"
                onPress={() => router.push("/(auth)/register-screen")}
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
