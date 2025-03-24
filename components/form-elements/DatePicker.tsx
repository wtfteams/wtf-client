import React, { useState } from "react";

import { format } from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, Modal, Platform } from "react-native";

interface Props {
  label?: string;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function DatePicker({
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(value || new Date());

  const handlePress = () => {
    setTempDate(value || new Date());
    setShowPicker(true);
  };

  const handleChange = (_: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }

    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  const handleConfirm = () => {
    onChange(tempDate);
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
        className="bg-tertiary rounded-[10px] py-4 px-4 mb-5 border-2 border-fourth"
      >
        <Text
          className={`font-poppins-medium text-xl tracking-wide text-left ${
            value ? "text-textWhite tracking-wide" : "text-textWhiteShade tracking-wide"
          }`}
        >
          {value ? format(value, "MM/dd/yyyy") : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={showPicker} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-gray-800 rounded-[20px] p-6 w-10/12 max-w-md">
            <Text className="text-white font-poppins-regular text-lg text-center mb-4">
              Select Date
            </Text>

            <View className="items-center">
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={handleChange}
                style={{ height: 150, backgroundColor: "#1f2937" }}
                themeVariant="dark"
              />
            </View>

            <View className="flex-row justify-between mt-6">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleCancel}
                className="bg-white py-3 px-6 rounded-[38px] flex-1 mr-2"
              >
                <Text className="font-poppins-medium text-center">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleConfirm}
                className="bg-secondary py-3 px-6 rounded-[38px] flex-1 ml-2"
              >
                <Text className="text-black font-poppins-medium text-center">
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
