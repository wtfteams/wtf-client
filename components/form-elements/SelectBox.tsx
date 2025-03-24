import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

interface Props {
  label: string;
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  title?: string;
  options: string[];
  error:string,
}

export default function GenderPicker({
  label = "Gender",
  value,
  onChange,
  placeholder = "Select gender",
  options,
  error,
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [tempGender, setTempGender] = useState(value || "");

  const handlePress = () => {
    setTempGender(value || "");
    setShowPicker(true);
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  const handleConfirm = () => {
    onChange(tempGender);
    setShowPicker(false);
  };

  return (
    <View className="w-full">
      <Text className="text-textWhiteShade tracking-wide text-base mb-2 font-poppins-medium">
        {label}
      </Text>

      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        className={`bg-tertiary rounded-[10px] py-4 px-4 mb-5 border-2 ${error ? "border-red-500" : ""} border-fourth`}
      >
        <Text
          className={`font-poppins-medium text-xl text-left ${
            value
              ? "text-textWhite tracking-wide"
              : "text-textWhiteShade tracking-wide"
          }`}
        >
          {value || placeholder}
        </Text>
      </TouchableOpacity>
      
      <Modal visible={showPicker} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-gray-800 rounded-[20px] p-6 w-10/12 max-w-md">
            <Text className="text-white tracking-wide font-poppins-regular text-lg text-center mb-4">
              Select Gender
            </Text>

            <View className="mb-6">
              {options.map((gender) => (
                <TouchableOpacity
                  key={gender}
                  activeOpacity={0.7}
                  onPress={() => setTempGender(gender)}
                  className={`py-3 px-4 mb-2 rounded-[10px] ${
                    tempGender === gender ? "bg-secondary" : "bg-gray-700"
                  }`}
                >
                  <Text
                    className={`font-poppins-medium text-center ${
                      tempGender === gender ? "text-black" : "text-white"
                    }`}
                  >
                    {gender}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="flex-row justify-between mt-2">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleCancel}
                className="bg-white py-3 px-6 rounded-[38px] flex-1 mr-2"
              >
                <Text className="font-poppins-medium tracking-wide text-center">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleConfirm}
                className="bg-secondary py-3 px-6 rounded-[38px] flex-1 ml-2"
              >
                <Text className="text-black tracking-wide font-poppins-medium text-center">
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
