import React, { useState } from "react";
import { format } from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, Modal, Platform, Dimensions } from "react-native";

interface Props {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function DatePicker({
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
}: Props) {
  const [showPicker, setShowPicker] = useState(true);
  const [tempDate, setTempDate] = useState(value || new Date());

  const { width } = Dimensions.get("window");

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

  const formattedDate = value ? format(value, "MM/dd/yyyy") : "";

  // Calculate responsive text sizes
  const labelSize = width < 350 ? "text-lg" : "text-2xl";
  const dateTextSize = width < 350 ? "text-2xl" : "text-4xl";
  const modalWidth = width > 500 ? "w-96" : "w-10/12";

  return (
    <View className="w-full">
      <Text className={`text-textWhiteShade ${labelSize} mb-2 text-xs`}>{label}</Text>

      <TouchableOpacity
        onPress={handlePress}
        className="bg-tertiary rounded-[10px] py-4 px-4 mb-5 border-2 border-fourth"
      >
        <Text className={`text-textWhite font-poppins-medium text-base px-6 ${dateTextSize} text-left tracking-wider`}>
          {formattedDate || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={showPicker} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className={`bg-gray-800 rounded-[20px] p-6 ${modalWidth}`}>
            <Text className="text-white font-poppins-regular text-lg text-center mb-4">
              Select Date
            </Text>

            {/* Date Picker */}
            <View className="items-center">
              {Platform.OS === "ios" ? (
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="spinner"
                  onChange={handleChange}
                  style={{ height: 150, backgroundColor: "#1f2937" }}
                  themeVariant="dark"
                />
              ) : (
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="default"
                  onChange={handleChange}
                  themeVariant="dark"
                />
              )}
            </View>

            {/* Confirm and Cancel Buttons */}
            <View className="flex-row justify-between mt-6">
              <TouchableOpacity
                onPress={handleCancel}
                className="bg-white py-3 px-6 rounded-[38px] flex-1 mr-2"
              >
                <Text className=" font-poppins-medium text-center">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleConfirm}
                className="bg-secondary  py-3 px-6 rounded-[38px] flex-1 ml-2"
              >
                <Text className="text-black font-poppins-medium  text-center">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}