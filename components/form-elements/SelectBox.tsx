import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  title?: string;
  options: string[];
  error?: string;
}

export default function SelectBox({
  label,
  value,
  onChange,
  placeholder = "Select option",
  options,
  error = "",
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
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
          {value || placeholder}
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
            
            <ScrollView 
              className="bg-fourth/30 rounded-lg p-2 mb-4"
              style={{ height: modalHeight * 0.4 }}
            >
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    onChange(option);
                    setModalVisible(false);
                  }}
                  className={`
                    py-4 border-b border-fourth
                    ${value === option ? "bg-fourth/50" : ""}
                  `}
                >
                  <Text className="text-white font-poppins-medium text-base">
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
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
                onPress={() => setModalVisible(false)}
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
