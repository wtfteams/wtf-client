import { StyleSheet, TextInput, TextStyle, View, ViewStyle, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface SelectBoxProps {
    label: string;
    selectedValue: string;
    onValueChange: (itemValue: string) => void;
    options: { label: string; value: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ label, selectedValue, onValueChange, options }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedValue}  onValueChange={onValueChange} style={styles.picker}>
                    {options.map((option) => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default SelectBox;

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    label: { fontSize: 20, marginBottom: 8, color: "#8C9198",borderRadius:10 },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#3D474E",
        borderRadius: 10,
        backgroundColor: "#2C2F38",
        color: "#ffffff",
    },
    picker: {
        height: 50,
        width: "100%",
    },
});