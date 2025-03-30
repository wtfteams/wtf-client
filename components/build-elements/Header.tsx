import React from "react";
import { TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import FeatherIcons from "./FeatherIcons";
import { moderateScale } from "react-native-size-matters";

export default function Header() {
  return (
    <View className="w-full h-20 flex-row items-center justify-between">
      <TouchableOpacity onPress={router.back}>
        <FeatherIcons
          icon="back-arrow"
          iconWidth={moderateScale(24)}
          iconHeight={moderateScale(24)}
          iconStrokeColor="white"
        />
      </TouchableOpacity>
    </View>
  );
}
