import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from '../components/form-elements/DatePicker';

export default function DateTimePickerExample() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Time Picker Examples</Text>
      
      {/* Date Picker (Default) */}
      <DatePicker
        label="Date Only"
        value={date}
        onChange={setDate}
        placeholder="Select a date"
      />
      
      {/* Time Picker */}
      <DatePicker
        label="Time Only"
        value={time}
        onChange={setTime}
        mode="time"
        placeholder="Select a time"
      />
      
      {/* Date Time Picker */}
      <DatePicker
        label="Date and Time"
        value={dateTime}
        onChange={setDateTime}
        mode="datetime"
        placeholder="Select date and time"
      />
      
      {/* Custom Format Example */}
      <DatePicker
        label="Custom Format"
        value={dateTime}
        onChange={setDateTime}
        mode="datetime"
        displayFormat="yyyy-MM-dd HH:mm"
        placeholder="Select with custom format"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});
