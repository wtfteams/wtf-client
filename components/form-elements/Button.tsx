import React from "react";

import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoadingDots from "./LoadingDots";

interface Props {
  text: string;
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
  strokeColor?: string;
  startIcon?: keyof typeof Ionicons.glyphMap;
  endIcon?: keyof typeof Ionicons.glyphMap;
  className?: string;
  textClassName?: string;
  loading?: boolean;
}

export default function Button({
  text,
  onPress,
  buttonColor = "bg-blue-500",
  textColor = "text-white",
  strokeColor,
  startIcon,
  endIcon,
  className = "",
  textClassName = "",
  loading = false,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`
        flex-row items-center justify-center py-6 px-4 rounded
        ${buttonColor} ${strokeColor ? `border border-${strokeColor}` : ""}
        ${className}
      `}
    >
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          {/* Start Icon */}
          {startIcon && (
            <Ionicons
              name={startIcon}
              size={20}
              className={`${textColor} mr-2`}
            />
          )}

          {/* Button Text */}
          <Text className={`text-base tracking-wider ${textColor} ${textClassName}`}>
            {text}
          </Text>

          {/* End Icon */}
          {endIcon && (
            <Ionicons
              name={endIcon}
              size={20}
              className={`${textColor} ml-2`}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
