import React, { useState,useEffect,useContext } from 'react';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import { View, ScrollView, SafeAreaView, Text, TouchableHighlight, TabBarIOSItem } from 'react-native';
import Modal from "react-native-modal";
import { StoreContext } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../hooks/useDebounce';
import useSearch from '../hooks/useSearch';
import AppInput from '../components/ui/AppInput';
import AppButton from '../components/ui/AppButton';
import AppSearchHeader from '../components/ui/AppSearchHeader';
import AppTransactionDetails from '../components/ui/AppTransactionDetail';
import {deleteBill,updateBill} from '../services/billService';
import styles from './styles/useSearchStyle';


export default SearchScreen = (props) => {
  const [searchParams, setSearchParams] = useState('');
  const debouncedParam = useDebounce(searchParams, 200);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedBill, setSelectedBill] = useState('');
  const bills = useSearch();
  const [filteredBills, setFilteredBills] = useState([]);
  const { setIsRefreshing } = useContext(StoreContext);

  const handleUpdateBill = async () => {
    selectedBill.name = name;
    selectedBill.amount = +amount;
    await updateBill(selectedBill);
    setIsVisible(false);
    setIsRefreshing(pre=>!pre);
  }
  const handleDeleteBill = async (item) => {
    console.log(item._id)
    await deleteBill(item._id);
    // updateBill();
    setIsRefreshing(pre=>!pre);
  }

  const leftButton = (item) => {
    return <SwipeButtonsContainer style={styles.swipeButtonsContainer}>
      <TouchableHighlight style={styles.swipeButton} onPress={() => handleDeleteBill(item)}>
        <FontAwesomeIcon icon={faTrash} size={20} color="red" />
      </TouchableHighlight>
    </SwipeButtonsContainer>
  }

  
  const renderBills = bills?.map((item, index) => {
      return <SwipeProvider key={item._id}>
              <SwipeItem
                style={styles.button}
                swipeContainerStyle={styles.swipeContentContainerStyle}
                rightButtons={leftButton(item)}
              >
                <AppTransactionDetails item={item} setIsVisible={setIsVisible} setSelectedBill={setSelectedBill} />
              </SwipeItem>
          </SwipeProvider>
    })
  
  const renderFilteredBills = searchParams.length > 0 ? bills?.filter(item => item.name.toLowerCase().includes(searchParams.toLowerCase()) || item.billType.toLowerCase().includes(searchParams.toLowerCase()) || item.iconName.toLowerCase().includes(searchParams.toLocaleLowerCase())).map((item, index) => {
    return <SwipeProvider key={item._id}>
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        rightButtons={leftButton(item)}
      >
        <AppTransactionDetails item={item} setIsVisible={setIsVisible} setSelectedBill={setSelectedBill} />
      </SwipeItem>
    </SwipeProvider>
  }) : <Text style={styles.noResults}>No results</Text>

  useEffect(() => {
    selectedBill && setName(selectedBill.name);
    selectedBill && setAmount(selectedBill.amount);
  }, [selectedBill])

  

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppSearchHeader searchParams={searchParams} setSearchParams={setSearchParams} />
        <ScrollView style={styles.content}>
          {renderFilteredBills}
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
