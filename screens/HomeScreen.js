import React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import AppHomeHeader from '../components/ui/AppHomeHeader';
import AppTransactionDetails from '../components/ui/AppTransactionDetail';
import {homeTabs} from '../data/home';
import TabsBarMenu from '../components/home/TabsBarMenu';
import styles from './styles/useHomeStyle';

export default HomeScreen = () => {

    const mockUpDate = [
        {
            date: "02-15",
            year: "2023",
            income: "150",
            expense: "80",
            transactions: [
                { activity: "Phone", cost: "-150" },
                { activity: "Part-time", cost: "200" },
            ]
        },
        {
            date: "02-16",
            year: "2023",
            income: "50",
            expense: "100",
            transactions: [
                { activity: "Food", cost: "-150" },
            ]
        },
    ]

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppHomeHeader />
                <TabsBarMenu menuItems={homeTabs} />
                <View style={styles.content}>
                    <ScrollView style={styles.topMenuItemContainer}>
                        {mockUpDate.map((item, key) => {
                            return <View key={key} style={styles.transactionContainer}>
                                <View style={styles.transactionHeaderContainer}>
                                    <View style={styles.date}>
                                        <Text style={styles.dateText}>{item.date} {item.year}</Text>
                                    </View>
                                    <View style={styles.incomeAndExpense}>
                                        <Text style={styles.incomeText}>Income: {item.income}    Expense: {item.expense}</Text>
                                    </View>
                                </View>
                                <View style={styles.horizonalLine}></View>
                                <View style={styles.transactionDetails}>
                                    {item.transactions.map((item, key) => {
                                        return <AppTransactionDetails item={item} key={key} />
                                    })}
                                </View>
                            </View>
                        })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}

