import React, { useState } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  error?: string;
  className?: string;
  placeholderTextColor?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function InputBox({
  label,
  placeholder,
  description,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  error,
  className,
  placeholderTextColor = "#9CA3AF",
  onFocus,
  onBlur,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChangeText("");
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <View className={`mb-4 w-full ${className}`}>
      {/* Label */}
      {label !== "" && typeof label !== "undefined" && (
        <Text className="text-textWhiteShade tracking-wide text-base mb-2 font-poppins-medium">
          {label}
        </Text>
      )}

      {/* Input Container */}
      <View
        className={`flex-row bg-tertiary items-center border-2 rounded-[10px]  ${
          isFocused ? "border-2 border-fourth" : "border-fourth"
        } ${error ? "border-red-500" : ""}`}
      >
        <TextInput
          className="flex-1 py-4 px-4 text-white font-poppins-medium tracking-wide text-left placeholder:text-sm placeholder:text-textWhiteShade"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          selectionColor="#ffcd00"
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Clear Button (only visible when there's text) */}
        {value.length > 0 && (
          <TouchableOpacity
            onPress={handleClear}
            className="mr-2 rounded-full bg-fourth w-7 h-7 flex items-center justify-center"
          >
            <MaterialIcons name="clear" size={15} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      </View>

      {/* Description or Error Message */}
      {error ? (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      ) : description ? (
        <Text className="text-gray-500 text-sm mt-1">{description}</Text>
      ) : null}
    </View>
  );
}
