import { View, SafeAreaView, ScrollView } from "react-native";
import InputBox from "@/components/ui/form-elements/InputBox";
import { useState } from "react";

const HomeScreen = () => {
  const [name, setName] = useState("")

  return (
    <View>
      <SafeAreaView />
      <ScrollView>
        <InputBox
          value={name}
          setValue={setName}
          containerStyle={{
            paddingVertical: 10,
            backgroundColor: "blue",
          }}
          inputBoxStyle={{
            backgroundColor: "green",
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
