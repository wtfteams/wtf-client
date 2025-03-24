import React, { useState } from "react";

import { DatePicker } from "@/components";
import { Text, View } from "react-native";
import SelectBox from "@/components/form-elements/SelectBox";

export default function CreateAccountScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-primary px-5">
      <DatePicker
        label="Date of birth"
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <SelectBox
        label="Gender"
        value={selectedGender} 
        onChange={(gender) => setSelectedGender(gender)}
        placeholder="Select gender"
        options={["Male", "Female", "Other"]}
        title="Select Gender"
        error={''}
      />
    </View>
  );
}
