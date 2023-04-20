import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddSubcategoryBudgetForm = ({ onSubmit }) => {
  const [subcategory, setSubcategory] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSubmit = () => {
    onSubmit(subcategory, amount);
    setSubcategory('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter subcategory name"
        value={subcategory}
        onChangeText={setSubcategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter budget amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Subcategory Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DA0452',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
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

export default AddSubcategoryBudgetForm;
