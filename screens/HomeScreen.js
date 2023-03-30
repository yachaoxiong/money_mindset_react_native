import React,{ useEffect, useState } from 'react';
import { View, ScrollView, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import AppHomeHeader from '../components/ui/AppHomeHeader';
import AppTransactionDetails from '../components/ui/AppTransactionDetail';
import { homeTabs } from '../data/home';
import TabsBarMenu from '../components/home/TabsBarMenu';
import useBills from '../hooks/useBill';
import styles from './styles/useHomeStyle';
import Modal from "react-native-modal";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import AppInput from '../components/ui/AppInput';
import AppButton from '../components/ui/AppButton';
import { updateBill, deleteBill } from '../services/billService';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';

export default HomeScreen = (props) => {
    const { bills, updateBills } = useBills('all');
    const [isVisible, setIsVisible] = useState(false);
    const [selectedBill, setSelectedBill] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    const calculateIncome = (item) => {
        let income = 0;
        let expense = 0;
        item.billItems.forEach(item=>{
            if(item.name === "Income"){
                income+=Number(item.amount);
            }else{
                expense+=Number(item.amount);
            }
        })
        return [income,expense];
    }

    const handleUpdateBill = async () => {
        selectedBill.name = name;
        selectedBill.amount = amount;
        await updateBill(selectedBill);
        setIsVisible(false);
    }
    const handleDeleteBill = async (item) => {
        console.log(item._id)
        await deleteBill(item._id);
        updateBills();
    }


    const leftButton = (item) => {
        return <SwipeButtonsContainer style={styles.swipeButtonsContainer}>
            <TouchableHighlight style={styles.swipeButton} onPress={() => handleDeleteBill(item)}>
                <FontAwesomeIcon icon={faTrash} size={20} color="red" />
            </TouchableHighlight>
        </SwipeButtonsContainer>
    }


    useEffect(() => {
        selectedBill && setName(selectedBill.name);
        selectedBill && setAmount(selectedBill.amount);
    }, [selectedBill])
    console.log(bills)
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppHomeHeader {...props} />
                {/* <TabsBarMenu menuItems={homeTabs} /> */}
                <View style={styles.content}>
                    <ScrollView style={styles.topMenuItemContainer}>
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
                                        {item.billItems.map((item, key) => {
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
                </View>
            </SafeAreaView>
            <Modal isVisible={isVisible}>
                <View style={styles.modalContainer}>
                    <TouchableHighlight onPress={() => setIsVisible(false)} style={styles.closeButton}>
                        <FontAwesomeIcon icon={faXmark} size={20} color="white" />
                    </TouchableHighlight>
                    <AppInput value={name}  onChangeText={text=>setName(text)} />
                    <AppInput value={amount.toString()} onChangeText={text=>setAmount(text)} />
                    <AppButton title="Save"  onPress={handleUpdateBill} />
                </View>
            </Modal>
        </View>
    )
}

