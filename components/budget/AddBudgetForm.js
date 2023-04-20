import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddBudgetForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [budgetDate, setBudgetDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    const monthNumber = budgetDate.getMonth() + 1; // Months are zero-based
    const yearNumber = budgetDate.getFullYear();

    onSubmit({
      amount,
      budgetType: 'yearly',
      monthNumber,
      yearNumber,
      budgetDate: budgetDate.toISOString().split('T')[0],
      isTotalBudget: true,
    });

    setAmount('');
    setBudgetDate(new Date());
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBudgetDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter budget amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
        <DateTimePicker
          value={budgetDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          onTouchCancel={() => setShowDatePicker(false)}
        />
    
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DA0452',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#DA0452',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddBudgetForm;
