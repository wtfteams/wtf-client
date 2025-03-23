import { StyleSheet, TextInput, TextStyle, View, ViewStyle, Text, Pressable } from "react-native";




const InputBox = ({
  value,
  onChangeText,
  containerStyle,
  inputBoxStyle,
  label,
  message
}: {
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  inputBoxStyle?: TextStyle;
  label: string;
  message?: string;
}) => {

  
  return (
    <View style={containerStyle} >
      <Text className="text-xl mb-2 text-[#8C9198]">{label}</Text>
      <View className="relative w-full">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          className={`w-full bg-[#2C2F38] border-[#3D474E] border-[2px] text-xl text-[#FFCD00] rounded-lg px-5 py-3 h-fit ${inputBoxStyle}`} />
        {value.length > 0 && (
          <Pressable
            onPress={() => onChangeText("")}
            className="absolute right-4 top-1/2 -translate-y-1/2">
            <Text className="text-white text-lg"
            >✕</Text>
          </Pressable>
        )}
      </View>
      <Text className=" mt-0 text-base  ">{message}</Text>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
});
