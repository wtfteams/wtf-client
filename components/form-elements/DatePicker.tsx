import React, { useState, useRef, useEffect } from "react";

import { format } from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Platform,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;
  placeholder?: string;
  maxDate?: Date;
  minDate?: Date;
  error?: string;
  mode?: "date" | "time" | "datetime";
  displayFormat?: string;
}

export default function DatePicker({
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
  maxDate,
  minDate,
  error = "",
  mode = "date",
  displayFormat,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempDate, setTempDate] = useState(value || new Date());
  const [currentMode, setCurrentMode] = useState<"date" | "time">(
    mode === "time" ? "time" : "date"
  );
  const screenHeight = Dimensions.get("window").height;
  const modalHeight = screenHeight * 0.6;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  // Reset currentMode when mode prop changes or modal opens
  useEffect(() => {
    if (mode === "datetime") {
      setCurrentMode("date");
    } else {
      setCurrentMode(mode === "time" ? "time" : "date");
    }
  }, [mode, modalVisible]);

  const openModal = () => {
    slideAnim.setValue(screenHeight);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 9,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const handleChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setTempDate(selectedDate);
      // Don't auto-close on Android anymore, keep consistent with iOS
    }
  };

  const handleDateConfirm = () => {
    if (mode === "datetime" && currentMode === "date") {
      // If in datetime mode and just confirmed date, switch to time
      setCurrentMode("time");
    } else {
      // Otherwise confirm and close
      handleConfirm();
    }
  };

  const handleConfirm = (date = tempDate) => {
    onChange(date);
    setModalVisible(false);
  };

  const getFormattedValue = () => {
    if (!value) return "";

    if (displayFormat) {
      return format(value, displayFormat);
    }

    switch (mode) {
      case "date":
        return format(value, "MMM dd, yyyy");
      case "time":
        return format(value, "h:mm a");
      case "datetime":
        return format(value, "MMM/ dd/ yyyy  -  h:mm a");
      default:
        return format(value, "MMM dd, yyyy");
    }
  };

  const formattedDate = getFormattedValue();

  // Get the appropriate title for the modal
  const getModalTitle = () => {
    if (mode === "time") return "Select Time";
    if (mode === "datetime") {
      return currentMode === "date" ? "Select Date" : "Select Time";
    }
    return `Select ${label}`;
  };

  // Get the appropriate confirm button text
  const getConfirmButtonText = () => {
    if (mode === "datetime" && currentMode === "date") {
      return "Next";
    }
    return "Confirm";
  };

  return (
    <View className="w-full mb-5">
      <Text className="text-textWhiteShade tracking-wide text-base mb-2 font-poppins-medium">
        {label}
      </Text>

      <TouchableOpacity
        onPress={openModal}
        activeOpacity={0.8}
        className={`
          bg-tertiary rounded-[10px] py-4 px-4
          border-2 ${error ? "border-red-500" : "border-fourth"}
          flex-row justify-between items-center
        `}
      >
        <Text
          className={`
            font-poppins-medium text-base tracking-wide
            ${value ? "text-white text-sm" : "text-textWhiteShade text-sm"}
          `}
        >
          {formattedDate || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#FFFFFF80" />
      </TouchableOpacity>

      {error && (
        <Text className="text-red-500 text-xs font-poppins-regular ml-1 mt-1">
          {error}
        </Text>
      )}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <Animated.View
            className="bg-tertiary rounded-t-[20px] p-5"
            style={{
              maxHeight: modalHeight,
              transform: [{ translateY: slideAnim }],
            }}
          >
            <View className="flex-row justify-between items-center mb-5">
              <Text className="text-white font-poppins-semibold text-lg">
                {getModalTitle()}
              </Text>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View
              className="rounded-lg mb-3 items-center justify-center"
              style={{ height: modalHeight * 0.4 }}
            >
              <DateTimePicker
                value={tempDate}
                mode={currentMode}
                display="spinner"
                onChange={handleChange}
                style={{
                  backgroundColor: "transparent",
                  width: Platform.OS === "ios" ? "100%" : 320,
                  height: "100%",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                themeVariant="dark"
                maximumDate={currentMode === "date" ? maxDate : undefined}
                minimumDate={currentMode === "date" ? minDate : undefined}
                textColor="white"
              />
            </View>

            <View className="flex-row justify-between my-8">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setModalVisible(false)}
                className="bg-white py-3 px-6 rounded-[38px] flex-1 mr-2"
              >
                <Text className="font-poppins-medium text-center">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleDateConfirm}
                className="bg-secondary py-3 px-6 rounded-[38px] flex-1 ml-2"
              >
                <Text className="text-black font-poppins-medium text-center">
                  {getConfirmButtonText()}
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}
