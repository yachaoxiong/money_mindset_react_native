import React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import AppHomeHeader from '../components/ui/AppHomeHeader';
import AppTransactionDetails from '../components/ui/AppTransactionDetail';
import { homeTabs } from '../data/home';
import TabsBarMenu from '../components/home/TabsBarMenu';
import useBill from '../hooks/useBill';
import styles from './styles/useHomeStyle';

export default HomeScreen = () => {
    const bills = useBill();

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
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppHomeHeader />
                <TabsBarMenu menuItems={homeTabs} />
                <View style={styles.content}>
                    <ScrollView style={styles.topMenuItemContainer}>
                    {
                        bills.map((item, index) => {
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
                                    {item.billItems.map((item, key) => {
                                        return <AppTransactionDetails item={item} key={key} />
                                    })}
                                </View>
                            </View>
                        })
                    }
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

