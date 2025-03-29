import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from "react-native";
import { format, getYear, getMonth, getDate } from "date-fns";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label?: string;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  error?: string;
}

export default function DatePicker({
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
  error = "",
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(value ? getYear(value) : getYear(new Date()));
  const [selectedMonth, setSelectedMonth] = useState(value ? getMonth(value) : getMonth(new Date()));
  const [selectedDay, setSelectedDay] = useState(value ? getDate(value) : getDate(new Date()));

  const years = Array.from({ length: 100 }, (_, i) => getYear(new Date()) - i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleConfirm = () => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    onChange(newDate);
    setModalVisible(false);
  };

  const screenHeight = Dimensions.get('window').height;
  const modalHeight = screenHeight * 0.6; // 60% of screen height

  return (
    <View className="w-full mb-5">
      <Text className="text-textWhiteShade tracking-wide text-base mb-2 font-poppins-medium">
        {label}
      </Text>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
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
            ${value ? "text-textWhite" : "text-textWhiteShade"}
          `}
        >
          {value ? format(value, "MM/dd/yyyy") : placeholder}
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
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View 
            className="bg-tertiary rounded-t-[20px] p-5"
            style={{ maxHeight: modalHeight }}
          >
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white font-poppins-semibold text-lg">
                Select {label}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row mb-4">
              <View className="flex-1 mr-2">
                <Text className="text-white font-poppins-medium mb-2">Month</Text>
                <ScrollView className="bg-fourth/30 rounded-lg p-2" style={{ height: modalHeight * 0.4 }}>
                  {months.map((month, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedMonth(index)}
                      className={`
                        py-3 border-b border-fourth
                        ${selectedMonth === index ? "bg-fourth/50" : ""}
                      `}
                    >
                      <Text className="text-white font-poppins-medium text-base">
                        {month}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              
              <View className="flex-1 mr-2">
                <Text className="text-white font-poppins-medium mb-2">Day</Text>
                <ScrollView className="bg-fourth/30 rounded-lg p-2" style={{ height: modalHeight * 0.4 }}>
                  {days.map((day) => (
                    <TouchableOpacity
                      key={day}
                      onPress={() => setSelectedDay(day)}
                      className={`
                        py-3 border-b border-fourth
                        ${selectedDay === day ? "bg-fourth/50" : ""}
                      `}
                    >
                      <Text className="text-white font-poppins-medium text-base">
                        {day}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              
              <View className="flex-1">
                <Text className="text-white font-poppins-medium mb-2">Year</Text>
                <ScrollView className="bg-fourth/30 rounded-lg p-2" style={{ height: modalHeight * 0.4 }}>
                  {years.map((year) => (
                    <TouchableOpacity
                      key={year}
                      onPress={() => setSelectedYear(year)}
                      className={`
                        py-3 border-b border-fourth
                        ${selectedYear === year ? "bg-fourth/50" : ""}
                      `}
                    >
                      <Text className="text-white font-poppins-medium text-base">
                        {year}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
            
            <View className="flex-row justify-between mt-4">
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
          </View>
        </View>
      </Modal>
    </View>
  );
}
