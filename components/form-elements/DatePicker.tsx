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
  ScrollView,
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
}

export default function DatePicker({
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
  maxDate,
  minDate,
  error = "",
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempDate, setTempDate] = useState(value || new Date());
  const screenHeight = Dimensions.get("window").height;
  const modalHeight = screenHeight * 0.6;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

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
    }
  };

  const handleConfirm = () => {
    onChange(tempDate);
    setModalVisible(false);
  };

  const formattedDate = value ? format(value, "MMM dd, yyyy") : "";

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
                Select {label}
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
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "spinner"}
                onChange={handleChange}
                style={{ 
                  backgroundColor: 'transparent',
                  width: Platform.OS === 'ios' ? '100%' : 320,
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
                themeVariant="dark"
                maximumDate={maxDate}
                minimumDate={minDate}
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
                onPress={handleConfirm}
                className="bg-secondary py-3 px-6 rounded-[38px] flex-1 ml-2"
              >
                <Text className="text-black font-poppins-medium text-center">
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}
