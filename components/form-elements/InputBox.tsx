import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";


const InputBox = ({
  value,
  setValue,
  containerStyle,
  inputBoxStyle,
}: {
  value: string;
  setValue: (value: string) => void;
  containerStyle: ViewStyle;
  inputBoxStyle: TextStyle;
}) => {
  return (
    <View style={containerStyle}>
      <TextInput value={value} onChangeText={setValue} style={[{ backgroundColor: "red", width: "100%", height: 50 }, inputBoxStyle]} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
