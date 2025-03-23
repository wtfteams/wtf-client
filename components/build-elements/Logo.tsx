import { View, Text } from "react-native";
import React from "react";

interface Props {
  size?: number;
}

const Logo = ({ size = 120 }: Props) => {
  return (
    <View
      className="items-center justify-center bg-white rounded-md"
      style={{
        width: size,
        height: size,
      }}
    >
      <Text className="text-2xl font-bold text-gray-900">Logo</Text>
    </View>
  );
};

export default Logo;
