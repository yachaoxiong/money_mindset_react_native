import React, { useState,useEffect } from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { View, ScrollView, SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Modal from "react-native-modal";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../hooks/useDebounce';
import { useSearchBills } from '../hooks/useSearchBills';
import AppInput from '../components/ui/AppInput';
import AppButton from '../components/ui/AppButton';
import AppSearchHeader from '../components/ui/AppSearchHeader';
import AppTransactionDetails from '../components/ui/AppTransactionDetail';
import styles from './styles/useSearchStyle';


export default SearchScreen = (props) => {
  const [searchParams, setSearchParams] = useState('');
  const debouncedParam = useDebounce(searchParams, 200);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedBill, setSelectedBill] = useState('');
  const { bills } = useSearchBills(debouncedParam.trim());

  const calculateIncome = (item) => {
    let income = 0;
    let expense = 0;
    item.billItems.forEach(item => {
      if (item.billType === "Income") {
        income += Number(item.amount);
      } else {
        expense += Number(item.amount);
      }
    })
    return [income, expense];
  }

  const handleUpdateBill = async () => {
    selectedBill.name = name;
    selectedBill.amount = +amount;
    await updateBill(selectedBill);
    setIsVisible(false);
  }

  const handleDeleteBill = async (item) => {
    console.log(item._id)
    await deleteBill(item._id);
    updateBills();
  }

  useEffect(() => {
    selectedBill && setName(selectedBill.name);
    selectedBill && setAmount(selectedBill.amount);
  }, [selectedBill])

  const leftButton = (item) => {
    return <SwipeButtonsContainer style={styles.swipeButtonsContainer}>
      <TouchableHighlight style={styles.swipeButton} onPress={() => handleDeleteBill(item)}>
        <FontAwesomeIcon icon={faTrash} size={20} color="red" />
      </TouchableHighlight>
    </SwipeButtonsContainer>
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppSearchHeader searchParams={searchParams} setSearchParams={setSearchParams} />
        <ScrollView style={styles.content}>
          {
            bills && bills?.map((item, index) => {
              return <View key={index} style={styles.transactionContainer}>
                <View style={styles.transactionHeaderContainer}>
                  <View style={styles.date}>
                    <Text style={styles.dateText}>{item._id}</Text>
                  </View>
                  <View style={styles.incomeAndExpense}>
                    <Text style={styles.incomeText}>Income: {calculateIncome(item)[0]}    Expense: {calculateIncome(item)[1]}</Text>
                  </View>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.transactionDetails}>
                  <SwipeProvider>
                    {item.billItems.map((item, index) => {
                      return <SwipeItem
                        key={item._id}
                        style={styles.button}
                        swipeContainerStyle={styles.swipeContentContainerStyle}
                        rightButtons={leftButton(item)}
                      >
                        <AppTransactionDetails item={item} setIsVisible={setIsVisible} setSelectedBill={setSelectedBill} />
                      </SwipeItem>
                    })}
                  </SwipeProvider>
                </View>
              </View>
            })
          }
        </ScrollView>
      </SafeAreaView>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <TouchableHighlight onPress={() => setIsVisible(false)} style={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} size={20} color="white" />
          </TouchableHighlight>
          <AppInput value={name} onChangeText={text => setName(text)} />
          <AppInput value={amount.toString()} onChangeText={text => setAmount(text)} />
          <AppButton title="Save" onPress={handleUpdateBill} />
        </View>
      </Modal>
    </View>
  )
}
